/* ============================================================
   CATALOGUE PRODUITS FC — FALL COLLECTION
   👉 Pour AJOUTER un produit : copiez un bloc { ... } existant,
      changez les valeurs, et c'est en ligne.
   ------------------------------------------------------------
   Champs :
   - id          : identifiant unique (sans espaces, ex: "traitement-fc")
   - nom         : nom affiché
   - prix        : prix en FCFA (chiffres uniquement)
   - image       : chemin de l'image (dans images/produits/)
   - imageAlt    : texte si l'image ne charge pas
   - description : courte, pour la boutique et l'accueil
   - beneFices   : liste des bénéfices (fiche produit)
   - modeEmploi  : étapes d'utilisation (fiche produit)
   - phare       : true → affiché en "produit phare" sur l'accueil
   - actif       : false → masqué de la boutique (ex: rupture)
   ============================================================ */

const PRODUITS = [
  {
    id: "traitement-capillaire-fc",
    nom: "Traitement capillaire FC",
    prix: 7500,
    image: "images/produits/traitement-capillaire-fc.jpg",
    imageAlt: "Pot de traitement capillaire FC",
    description:
      "Le produit signature FC : un traitement naturel qui prend soin de vos cheveux en profondeur, du cuir chevelu jusqu'aux pointes.",
    benefices: [
      "Favorise la croissance des cheveux",
      "Nourrit en profondeur",
      "Apporte brillance et douceur",
      "100 % naturel, qualité garantie",
    ],
    modeEmploi: [
      "Appliquer sur cheveux secs ou légèrement humides.",
      "Masser le cuir chevelu 3 à 5 minutes.",
      "Laisser agir 30 minutes minimum ( idéalement sous serviette chaude ).",
      "Rincer puis faire votre shampooing habituel. À répéter 1 à 2 fois par semaine.",
    ],
    phare: true,
    actif: true,
  },
  {
    id: "huile-de-croissance",
    nom: "Huile de croissance",
    prix: 5000,
    image: "images/produits/huile-de-croissance.svg",
    imageAlt: "Bouteille d'huile de croissance FC",
    description:
      "Une huile légère à base de plantes pour stimuler les racines et fortifier les cheveux au quotidien.",
    benefices: [
      "Stimule la pousse",
      "Fortifie les longueurs",
      "Cuir chevelu apaisé",
    ],
    modeEmploi: [
      "Appliquer quelques gouttes sur le cuir chevelu.",
      "Masser doucement 2 minutes.",
      "Utiliser 3 fois par semaine, sans rinçage.",
    ],
    phare: true,
    actif: true,
  },
  {
    id: "beurre-corporel",
    nom: "Beurre corporel FC",
    prix: 4000,
    image: "images/produits/beurre-corporel.svg",
    imageAlt: "Pot de beurre corporel FC",
    description:
      "Un beurre riche au karité pour une peau nourrie, douce et délicatement parfumée.",
    benefices: [
      "Nourrit intensément",
      "Peau douce et souple",
      "Sans parabènes",
    ],
    modeEmploi: [
      "Appliquer sur peau légèrement humide après la douche.",
      "Masser jusqu'à complète absorption.",
    ],
    phare: false,
    actif: true,
  },
  {
    id: "savon-naturel",
    nom: "Savon naturel FC",
    prix: 1500,
    image: "images/produits/savon-naturel.svg",
    imageAlt: "Savon naturel FC",
    description:
      "Un savon doux à base d'ingrédients naturels, pour un soin nettoyant au quotidien.",
    benefices: ["Nettoie en douceur", "Ingrédients naturels", "Toute la famille"],
    modeEmploi: ["Mousser sur peau humide.", "Rincer abondamment."],
    phare: false,
    actif: true,
  },
];
