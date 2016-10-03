# Test de développement et d'intégration

Ce projet est un canevas de base React/Redux au sein duquel il s'agit de créer des
composants JavaScript et de réaliser leur intégration HTML.

La structure originelle est celle de ce [starter kit](https://github.com/davezuko/react-redux-starter-kit) dans le repo duquel sont présents de nombreux détails techniques utiles.


## Table des matières

1. [Objectif](#objectif)
1. [Prérequis](#prerequis)
1. [Instructions](#instructions)
1. [Aller plus loin](#aller-plus-loin)
1. [Critères de notation](#criteres-de-notation)
1. [Encouragements](#encouragements)
1. [Contact](#contact)


## Objectif

Le but est de recréer **une petite partie** de la page ci-dessous sous forme de composants React et d'intégration HTML.

Vous êtes **totalement libres quant aux éléments et blocs que vous choisissez de réaliser**. Il peut s'agir uniquement du header et du corps d'article, des blocs 'Photos' et 'Vidéos', des blocs 'Contact' et 'À lire aussi', etc.

Pour ceux qui souhaiteraient pousser plus loin les développements, et ainsi mettre en valeur leurs compétences techniques, nous vous proposons l'intégration **optionnelle** de [fonctionnalités spécifiques](#aller-plus-loin).

> **IMPORTANT** : ce projet a été créé spécifiquement dans le but de tester vos aptitudes et ne constitue en aucune manière un moyen détourné de vous faire travailler "gratuitement" pour le compte d'Archriss.
>
> Nous vous donnons l'assurance que votre travail **ne sera pas** exploité à la suite de ce test.

[![Image © Archriss](http://i.imgur.com/YFsDz6Cl.jpg)](http://i.imgur.com/YFsDz6C.jpg)


## Prérequis

* node `^4.5.0`
* npm `^3.0.0`
* (idéalement, un compte [GitHub](https://github.com/))


## Instructions

#### Récupération du code

Vous êtes invités à [télécharger le code du projet](https://github.com/archriss/archriss-test-react/archive/master.zip) que vous pourrez ensuite modifier comme bon vous semble.

Quand vous souhaiterez nous transmettre votre travail, vous pourrez alors l'envoyer sur un repo personnel et nous en partager l'URL.

Si vous ne maîtrisez pas Git, téléchargez le projet et modifiez-le en local uniquement. Vous pourrez nous transmettre une archive du projet quand nécessaire.


#### Installation et exécution du projet

Après avoir cloné votre fork en local, il vous suffira d'ouvrir un terminal, de naviguer à la racine du projet et d'exécuter les commandes suivantes :

```bash
$ npm install  # Installation automatique des dépendances du projet
$ npm start  # Compilation et exécution du projet
```

Le projet s'exécutera alors en local à l'adresse `http://localhost:3000/` et pourra être débuggué comme n'importe quel projet web classique.

Petite particularité : l'intégration du **live reload**. En somme : quand un fichier JS ou SCSS est modifié, la page est automatiquement mise à jour dans le navigateur sans avoir besoin d'être rechargée. Une fonctionnalité dont on a bien du mal à se passer une fois qu'on y a goûté :)

À noter : la structure du projet est complexe et ramifiée, mais l'unique dossier dans lequel vous serez amenés à intervenir est `/src`.


#### Contraintes de développement

Dossiers de travail :
* `src/components` // Composants React
* `src/index.html` // Modification du <head>

[Babel](https://babeljs.io/), présent dans le projet, permet d'écrire indifféremment le code en JavaScript ES5, 6 ou 7 et de compiler le tout dans une version compatible tous navigateurs.

Ce processus est automatique et ne requiert aucune action spécifique. Vous pouvez donc écrire votre code dans la version dans laquelle vous vous sentez le plus à l'aise.


#### Contraintes d'intégration

Dossiers de travail :
* `src/styles/base` // Styles globaux, librairies, mixins...
* `src/styles/components` // Styles associés à chaque composant React

L'intégration doit impérativement être **responsive** et donc pouvoir s'adapter à différentes largeur d'écran. Il n'est par contre attendu ni modifications du layout (pas de réorganisation des blocs), ni de travail au pixel près.

Dans l'idéal, vous ferez usage du modèle [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) qui est fondamental chez Archriss, notamment pour la réalisation d'applications React Native.

La librairie [Bourbon](http://bourbon.io/) est intégrée au projet. N'hésitez pas à en faire usage !

Pour les icônes, la police [ionicons](http://ionicons.com/) est présente.


## Aller plus loin

Pour ceux qui souhaiteraient ajouter de la logique au projet, voici plusieurs fonctionnalités avancées que vous êtes libres de mettre en place. **Cela permettra de mettre en valeur votre niveau technique, mais ne sera pas pénalisant si vous ne le faites pas.**

> Les développements afférent pouvant s'avérer très chronophages, nous vous déconseillons de chercher à tout réaliser. Choisissez la ou les fonctionnalités sur lesquelles vous vous sentez le plus à l'aise et poussez l'idée le plus loin possible.

1. **Récupération de données dynamiques pour alimenter l'article.** Vous trouverez dans `/src/static/` un [flux JSON type](https://github.com/archriss/archriss-test-react/blob/master/src/static/flux_type-articles.json) que vous pourrez modifier, adapter et héberger en ligne à cet effet. L'utilisation des [async/await](https://ponyfoo.com/articles/understanding-javascript-async-await) et le passage du titre de l'article dans le header sont un plus.

2. **Intégration de plusieurs articles dans un swiper.** L'idée est d'intégrer le plugin [Swiper](https://github.com/nolimits4web/Swiper) afin de pouvoir naviguer par glissé latéral d'un article à l'autre. Le plugin devra être ajouté sous la forme un composant React réutilisable facilement. Nous serons sensibles à toutes les optimisations auxquelles vous pourrez penser (pré-chargement des images à n-1/n+1, récupération différenciée de la donnée de contenu d'article, récupération du titre dans le header, etc.). Vous pouvez tout à fait travailler sur de la donnée locale statique si vous ne travaillez pas sur le point n° 1.

3. **Intégration d'un système de navigation basique.** Le point d'entrée de l'application serait dans ce cas une liste d'articles. Il s'agirait alors, au clic de l'utilisateur sur un item, d'ouvrir l'article correspondant (au sein d'un swiper si le point n° 2 est traité). La gestion des routes dans la structure proposée se fait dans:
  * `/src/main.js`
  * `/src/routes/`
  * `/src/components/AppContainer.js`


## Critères de notation

* Compréhension de la structure et de l'utilisation des composants React
* Qualité du code
* Qualité de l'intégration
* Qualité du layout responsive
* Utilisation de flexbox pour le layout
* Utilisation du JavaScript ES6/7
* Mise en place et maîtrise de fonctionnalités avancées
* Pas de recours à jQuery ou à tout autre librairie agissant sur le DOM
* Connaissance du protocole de travail avec Git
* Autonomie
* Capacité d'apprentissage
* Intégration de librairies tierces sous forme de composants React (exemples : [Photoswipe](https://github.com/dimsemenov/photoswipe), [Swiper](https://github.com/nolimits4web/Swiper)...)


## Encouragements

Tout d'abord, soyez remerciés pour avoir accepté de vous soumettre à ce test de compétence !

Nous sommes conscients que certains points peuvent vous être totalement inconnus pour l'instant. Rassurez-vous : nous répondrons à vos questions s'il y en a et nous pourrons vous aider à prendre en main le projet.

L'autonomie est un critère d'appréciation, mais la capacité à demander quand nécessaire pour être ensuite en mesure d'apprendre très rapidement aussi ;)

Bon courage !


## Contact

* [Benoît Delmaire](mailto:bdelmaire@archriss.com), responsable du pôle mobile
* [Maxime Bertonnier](mailto:maxime.bertonnier@archriss.com), *lead developer* mobile
