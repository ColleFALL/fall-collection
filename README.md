# Fall Collection (FC) — Site vitrine + boutique

## Structure du projet

```
Fall-Collection/
├── index.html            → Accueil (✅ créée)
├── boutique.html         → Catalogue + commande (à venir)
├── produit.html          → Fiche produit (à venir)
├── booking.html          → Prestations / réservation (à venir)
├── apropos.html          → Histoire & valeurs (à venir)
├── contact.html          → Contact (à venir)
│
├── css/
│   └── style.css         → Thème noir & or, responsive (mobile d'abord)
│
├── js/
│   └── main.js           → Code commun : menu, WhatsApp, affichage produits
│
├── data/
│   ├── config.js         → ⚙️ CONFIGURATION (numéro WhatsApp, livraison, réseaux)
│   └── products.js       → 📦 CATALOGUE (produits, prix FCFA, bénéfices)
│
└── images/
    ├── logo/logo-fc.png             → Logo officiel (⚠️ à enregistrer vous-même)
    ├── logo/logo-fc.svg             → Logo provisoire (repli si le PNG manque)
    ├── produits/affiche-fall-collection.jpg → Affiche pots empilés (⚠️ à enregistrer)
    ├── produits/traitement-capillaire-fc.jpg → Affiche grand pot (⚠️ à enregistrer)
    └── produits/*.svg               → Placeholders pour les autres produits
```

### Images à enregistrer (depuis vos visuels)

| Visuel | Chemin exact |
|---|---|
| Logo rond FC | `images/logo/logo-fc.png` |
| Affiche pots empilés | `images/produits/affiche-fall-collection.jpg` |
| Affiche grand pot | `images/produits/traitement-capillaire-fc.jpg` |

## Comment modifier

- **Numéro WhatsApp, livraison, réseaux sociaux** → `data/config.js`
- **Produits, prix, bénéfices** → `data/products.js` (copier un bloc `{ ... }`)
- **Couleurs, polices** → `css/style.css` section `:root`
- **Logo** → remplacer `images/logo/logo-fc.png` (le nom doit rester identique)
- **Photos produits** → remplacer les fichiers dans `images/produits/`

## Commander

- Client clique « Commander » → formulaire (nom, téléphone, quartier, quantité)
- « Envoyer la commande » → message WhatsApp pré-rempli vers +221 78 951 38 48
- Paiement : Wave / Orange Money / cash à la livraison (après confirmation)

## Tester localement

Ouvrir `index.html` dans un navigateur, ou :

```
python -m http.server 8000
```

puis http://localhost:8000
