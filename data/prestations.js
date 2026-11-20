/* ============================================================
   PRESTATIONS FC — FALL COLLECTION
   👉 Pour ajouter ou modifier une prestation : changez les
      valeurs ci-dessous (tarifs et durées à confirmer !)
   ------------------------------------------------------------
   - id      : identifiant unique (sans espaces)
   - nom     : nom affiché
   - duree   : durée affichée
   - prix    : tarif en FCFA (0 = gratuit)
   - description : ce que la prestation comprend
   - actif   : false → masquée du booking
   - domicile : true → possible à domicile
   ============================================================ */

const PRESTATIONS = [
  {
    id: "consultation-capillaire",
    nom: "Consultation capillaire personnalisée",
    duree: "30 min",
    prix: 0,
    domicile: false,
    description:
      "Un moment d'échange pour comprendre vos cheveux et repartir avec une routine simple et adaptée (produits FC recommandés).",
    actif: true,
  },
  {
    id: "application-traitement-fc",
    nom: "Application du traitement capillaire FC",
    duree: "1 h",
    prix: 5000,
    domicile: true,
    description:
      "Pose complète du traitement signature FC par une spécialiste : massage du cuir chevelu, application, temps de pose guidé.",
    actif: true,
  },
  {
    id: "soin-croissance",
    nom: "Soin croissance à domicile",
    duree: "1 h 15",
    prix: 7500,
    domicile: true,
    description:
      "Protocole complet croissance : huile de FC, massage stimulant, conseils d'entretien entre les séances.",
    actif: true,
  },
  {
    id: "atelier-naturel",
    nom: "Atelier « Beauté au naturel » (groupe)",
    duree: "2 h",
    prix: 10000,
    domicile: false,
    description:
      "Atelier en petit groupe : découvrir les ingrédients naturels, réaliser son propre mélange et repartir avec ses astuces FC.",
    actif: true,
  },
];
