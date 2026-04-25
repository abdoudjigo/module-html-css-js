# 📁 Module HTML / CSS / JavaScript
> Formation Developpement Data — Orange Digital Center (ODC) Dakar  
> Apprenant : Abdoulaye DJIGO

---

## 📌 Description

Ce dossier contient tous les exercices réalisés dans le cadre du module **HTML/CSS/JavaScript** de la formation Dev Data P8 à l'ODC de Dakar.  
Chaque exercice est isolé dans son propre dossier avec ses fichiers `index.html`, `script.js` et `style.css`.

---

## 🗂️ Structure du projet

```
module-html-css-js/
│
├── index.html          ← Menu de navigation vers tous les exercices
│
├── BLOC1/
│   ├── exercice1.html
│   ├── script.js
│   └── style.css
│
├── BLOC2/
│   ├── exercice2.html
│   ├── script.js
│   └── style.css
│
├── BLOC3/
│   ├── exercice3.html
│   ├── script.js
│   └── style.css
│
├── BLOC4/
│   ├── exercice4.html
│   ├── script.js
│   └── style.css
│
├── BLOC5/
│   ├── exercice5.html
│   ├── script.js
│   └── style.css
│
├── BLOC6/
│   ├── exercice6.html
│   ├── script.js
│   └── style.css
│
├── BLOC6.1/
│   ├── exercice6.1.html
│   ├── script.js
│   └── style.css
│
└── BLOC6.2/
    ├── exercice6.2.html
    ├── script.js
    └── style.css
```

---

## 📝 Exercices

---

### Bloc 1 — Titre interactif
**Objectif :** Créer une page avec un titre et un bouton. Au clic, le texte change et la couleur aussi.

**Concepts appris :**
- `document.getElementById()`
- `addEventListener("click")`
- `textContent`
- `classList.toggle()`

---

### Bloc 2 — Carte utilisateur
**Objectif :** Créer une carte utilisateur avec nom, description et bouton. Au survol la couleur change, au clic un message s'affiche.

**Concepts appris :**
- Structure d'une carte HTML
- `addEventListener("click")` sur une div
- Hover en CSS (`:hover`)
- `alert()`

---

### Bloc 3 — Formulaire complet avec validation
**Objectif :** Formulaire avec nom, âge, sexe (radio), loisirs (checkbox), pays (select), commentaire. Au clic sur envoyer : afficher les données et vérifier que les champs ne sont pas vides.

**Concepts appris :**
- Tous les types d'inputs HTML
- `querySelector("input[name='Sexe']:checked")`
- `querySelectorAll("input[name='Loisir']:checked")`
- Validation de formulaire avec `return`
- `Array.push()` + `join()`
- Affichage formaté avec `alert()`

---

### Bloc 4 — Liste dynamique
**Objectif :** Champ input + bouton "Ajouter". Chaque clic ajoute un élément dans une liste.

**Concepts appris :**
- `document.createElement("li")`
- `.textContent`
- `.append()`
- Vider un input après ajout

---

### Bloc 5 — Dark mode
**Objectif :** Bouton qui bascule entre thème clair et thème sombre.

**Concepts appris :**
- `classList.toggle()`
- Variables CSS
- Thème dark/light en CSS pur

---

### Bloc 6 — Gestion Apprenants & Tâches (version DOM)
**Objectif :** Application avec gestion des apprenants (ajouter, modifier, archiver, supprimer) et gestion des tâches (ajouter, affecter, terminer, supprimer). Approche DOM classique avec `createElement`.

**Concepts appris :**
- `createElement()` + `appendChild()`
- Gestion des événements sur éléments dynamiques
- `localStorage.setItem()` + `JSON.stringify()`
- Archives avec section dédiée

---

### Bloc 6.1 — Version avancée DEV DATA (Apprenants & Livrables)
**Objectif :** Version améliorée adaptée au contexte ODC. Les utilisateurs deviennent des **apprenants**, les tâches deviennent des **livrables** (présentation, exposé, veille, certification). Filtres par apprenant et par type.

**Concepts appris :**
- Architecture JS avec fonctions séparées
- `innerHTML` + template literals
- Filtres combinés avec `.filter()`
- `Date.now()` pour les IDs uniques
- `users.find()` pour retrouver un objet par id
- CSS Grid responsive (`@media`)

---

### Bloc 6.2 — To-Do List finale avec Tailwind CSS ⭐
**Objectif :** Application To-Do List complète et responsive. Gestion des utilisateurs (ajouter, modifier, archiver) et des tâches (ajouter, affecter, terminer, supprimer). Design réalisé avec Tailwind CSS.

**Fonctionnalités :**
- ✅ Ajouter un utilisateur (prénom, nom, email)
- ✅ Modifier un utilisateur
- ✅ Archiver un utilisateur (il disparaît de la liste active et du select)
- ✅ Ajouter une tâche avec affectation à un utilisateur
- ✅ Marquer une tâche comme terminée (barré + opacité réduite)
- ✅ Supprimer une tâche
- ✅ Filtrer les tâches par utilisateur
- ✅ Persistance des données avec `localStorage`
- ✅ Design responsive avec Tailwind CSS

**Concepts appris :**
- Architecture JS complète avec fonctions séparées
- `localStorage` : `setItem`, `getItem`, `JSON.stringify`, `JSON.parse`
- `forEach`, `find`, `filter`, `map`
- Template literals avec classes Tailwind dynamiques
- `e.preventDefault()` sur les formulaires
- `Date.now()` pour les IDs uniques
- `Number()` pour la conversion de types
- Tailwind CSS : utilitaires, responsive, hover, transitions

---

## 🛠️ Technologies utilisées

| Technologie | Usage |
|---|---|
| HTML5 | Structure des pages |
| CSS3 | Style des exercices 1 à 6.1 |
| JavaScript (Vanilla) | Logique de toutes les applications |
| Tailwind CSS | Design de l'exercice 6.2 |
| localStorage | Persistance des données |

---

## 🚀 Comment lancer le projet

1. Cloner le repo :
```bash
git clone https://github.com/abdoudjigo/module-html-css-js.git
```

2. Ouvrir `index.html` dans le navigateur

3. Naviguer vers l'exercice souhaité via le menu

> Aucune installation requise — tout tourne en HTML/CSS/JS pur dans le navigateur.

---

## 📚 Concepts clés appris dans ce module

```
HTML      → Structure, formulaires, inputs, select, labels
CSS       → Flexbox, Grid, responsive, transitions, hover
JS DOM    → getElementById, querySelector, createElement, innerHTML
JS Events → addEventListener, submit, click, change, e.preventDefault()
JS Data   → Arrays, forEach, find, filter, push, map
JS Async  → localStorage, JSON.stringify, JSON.parse
Tailwind  → Utilitaires CSS, responsive design, composants
```

---

*Module complété dans le cadre de la formation Dev Data P8 — ODC Dakar*
