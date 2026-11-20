/* ============================================================
   FC — FALL COLLECTION | main.js
   Code commun à toutes les pages : menu, WhatsApp, produits
   ============================================================ */

/* ---------- Aides WhatsApp ---------- */

/** Construit un lien WhatsApp pré-rempli vers le numéro de CONFIG */
function lienWhatsApp(message) {
  const num = CONFIG.whatsappNumero;
  const texte = encodeURIComponent(message);
  return `https://wa.me/${num}?text=${texte}`;
}

/** Ouvre WhatsApp avec un message */
function envoyerWhatsApp(message) {
  window.open(lienWhatsApp(message), "_blank");
}

/** Formate un prix : 7500 -> "7 500 FCFA" */
function formaterPrix(prix) {
  return `${prix.toLocaleString("fr-FR")} ${CONFIG.devise}`;
}

/* ---------- Menu mobile ---------- */
function initMenu() {
  const burger = document.querySelector(".burger");
  const navMobile = document.querySelector(".nav-mobile");
  if (!burger || !navMobile) return;
  burger.addEventListener("click", () => navMobile.classList.toggle("ouvert"));
}

/* ---------- Produits phares (accueil) ---------- */
function produitsPhares() {
  const grille = document.querySelector("[data-phares]");
  if (!grille) return;
  const phares = PRODUITS.filter((p) => p.phare && p.actif);

  grille.innerHTML = phares
    .map(
      (p) => `
      <article class="carte-produit">
        <img src="${p.image}" alt="${p.imageAlt}" loading="lazy"
                 onerror="this.onerror=null;this.src='${p.image.replace(/\.jpg$/, ".svg")}'" />
        <div class="corps">
          <h3>${p.nom}</h3>
          <p class="description">${p.description}</p>
          <span class="prix">${formaterPrix(p.prix)}</span>
          <a class="btn btn-or" href="boutique.html?produit=${p.id}">Voir le produit</a>
        </div>
      </article>`
    )
    .join("");
}

/* ---------- Éléments communs (toutes les pages) ---------- */
function initLiensCommuns() {
  // Liens WhatsApp pré-remplis : <a data-wa data-wa-message="...">
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = lienWhatsApp(a.dataset.waMessage || "Bonjour FC 👋");
    a.target = "_blank";
  });

  // Numéro affiché
  document.querySelectorAll("[data-whatsapp-affichage]").forEach((el) => {
    el.textContent = CONFIG.whatsappAffichage;
  });

  // Réseaux sociaux : <div data-reseaux>
  const reseaux = document.querySelector("[data-reseaux]");
  if (reseaux) {
    reseaux.innerHTML = CONFIG.reseaux
      .map((r) => `<a href="${r.url}" target="_blank">${r.nom}</a>`)
      .join(" ");
  }

  // Année en cours dans le pied de page
  document.querySelectorAll("[data-annee]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

/* ---------- Initialisation ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initLiensCommuns();
  produitsPhares();
});
