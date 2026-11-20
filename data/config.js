/* ============================================================
   CONFIGURATION FC — FALL COLLECTION
   ⚠️ C'est le SEUL fichier à modifier pour les infos globales
   (numéro WhatsApp, frais de livraison, etc.)
   ============================================================ */

const CONFIG = {
  /* --- Marque --- */
  nomMarque: "Fall Collection (FC)",
  slogan: "Révélez votre beauté naturelle avec FC",

  /* --- Contact WhatsApp : auformat international, SANS "+" ni espaces --- */
  whatsappNumero: "221789513848",
  whatsappAffichage: "78 951 38 48",
  telephoneAffichage: "+221 78 951 38 48",
  email: "contact@fallcollection.sn",

  /* --- Réseaux sociaux --- */
  reseaux: [
    { nom: "Instagram", url: "https://instagram.com/fallcollection" },
    { nom: "Facebook", url: "https://facebook.com/fallcollection" },
    { nom: "TikTok", url: "https://tiktok.com/@fallcollection" },
  ],

  /* --- Livraison --- */
  // zones : label (affiché au client) + frais en FCFA
  zonesLivraison: [
    { id: "dakar", label: "Dakar", frais: 1500 },
    { id: "banlieue", label: "Banlieue (Pikine, Guédiawaye, Keur Massar...)", frais: 2000 },
    { id: "regions", label: "Régions (transport inter-régions)", frais: 3000 },
  ],
  enlevement: { id: "enlevement", label: "Enlèvement sur place", frais: 0 },

  /* --- Devise --- */
  devise: "FCFA",
};
