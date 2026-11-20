/* ============================================================
   FC — FALL COLLECTION | panier.js
   Panier stocké dans le navigateur (localStorage).
   Aucune donnée ne part sur internet : seule la commande
   finale part sur WhatsApp quand le client clique.
   ============================================================ */

const PANIER_CLE = "fc-panier";

/* ---------- Lecture / écriture ---------- */
function panierLire() {
  try {
    return JSON.parse(localStorage.getItem(PANIER_CLE)) || {};
  } catch {
    return {};
  }
}

function panierEcrire(panier) {
  try {
    localStorage.setItem(PANIER_CLE, JSON.stringify(panier));
  } catch {
    /* localStorage indisponible : le panier restera valable pour la session */
  }
  panierMettreAJourBadges();
}

/* ---------- Actions ---------- */
function panierAjouter(id, qte = 1) {
  const panier = panierLire();
  panier[id] = (panier[id] || 0) + qte;
  panierEcrire(panier);
}

function panierDefinir(id, qte) {
  const panier = panierLire();
  if (qte <= 0) delete panier[id];
  else panier[id] = qte;
  panierEcrire(panier);
}

function panierSupprimer(id) {
  const panier = panierLire();
  delete panier[id];
  panierEcrire(panier);
}

function panierVider() {
  panierEcrire({});
}

/* ---------- Consultation ---------- */

/** Liste [{produit, qte}] triée comme dans data/products.js */
function panierArticles() {
  const panier = panierLire();
  return PRODUITS.filter((p) => panier[p.id]).map((p) => ({
    produit: p,
    qte: panier[p.id],
  }));
}

function panierSousTotal() {
  return panierArticles().reduce((t, a) => t + a.produit.prix * a.qte, 0);
}

function panierCompte() {
  return panierArticles().reduce((t, a) => t + a.qte, 0);
}

/** Message de commande pré-rempli pour WhatsApp */
function messageCommande(client) {
  const lignes = panierArticles().map(
    (a, i) =>
      `${i + 1}. ${a.produit.nom} — ${formaterPrix(a.produit.prix)} × ${a.qte} = ${formaterPrix(
        a.produit.prix * a.qte
      )}`
  );
  const zone = CONFIG.zonesLivraison.find((z) => z.id === client.zone);
  const frais = zone ? zone.frais : 0;
  const total = panierSousTotal() + frais;

  return [
    "🛍️ *NOUVELLE COMMANDE* — Fall Collection",
    "",
    `👩 *Nom* : ${client.nom}`,
    `📞 *Téléphone* : ${client.telephone}`,
    `📍 *Adresse / quartier* : ${client.adresse}`,
    `🚚 *Livraison* : ${zone ? zone.label : client.zone} (${formaterPrix(frais)})`,
    "",
    "*Produits :*",
    ...lignes,
    "",
    `💵 Sous-total : ${formaterPrix(panierSousTotal())}`,
    `🚚 Frais de livraison : ${formaterPrix(frais)}`,
    `💰 *TOTAL : ${formaterPrix(total)}*`,
    "",
    `🛒 Paiement souhaité : ${client.paiement}`,
    "",
    "Merci de confirmer ma commande 😊",
  ].join("\n");
}

/* ---------- Badges "🛒 (n)" partout ---------- */
function panierMettreAJourBadges() {
  const n = panierCompte();
  document.querySelectorAll("[data-panier-compte]").forEach((el) => {
    el.textContent = n > 0 ? String(n) : "";
    el.style.display = n > 0 ? "inline-flex" : "none";
  });
}

document.addEventListener("DOMContentLoaded", panierMettreAJourBadges);
