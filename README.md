# 🎨Arthover

Arthover est un site basé sur Angular, TypeScript et SCSS mettant en avant une collection de tableaux venant de la base de données du Metropolitan Museum of Art de New York
## 💻Features
Plusieurs manières d'apprécier Arthover sont disponibles. 

La première est sur desktop ou tablettes. Vous pourrez retrouver sur la page d'accueil un assortiment de 15 oeuvres d'art prises aléatoirement et positionnées tout aussi aléatoirement sur l'écran sous forme de tuiles de couleurs. Vouez pourrez découvrir le tableau caché par la tuile juste en passant votre souris dessus.

Sur petit écran le placement aléatoire serait problématique pour l'accessibilité et les tableaux sont sous forme de liste. Il suffit là aussi de laisser le doigt sur la tuile de couleur pour découvrir le tableau qui s'y cache.

Dans tous les cas cliquer sur le tableau vous emmène sur une fiche personnalisée et unique avec notamment un lien vers le site du Metropolitan Museum of Art pour apprécier l'oeuvre dans son contexte.
## ⚙️Fonctionnement
L'application Arthover a un fonctionnement simple pour être le plus optimisé possible malgré le nombre de tableaux conséquent qui est affiché dans sa galerie.

Basée sur Angular, Arthover profite tout d'abord du lazy-loading proposé, et donc un chargement de chaque élément uniquement quand il y en a besoin.

L'appel à l'API du Metropolitan Museum of Art est effectué grâce à un service uniquement dédié à cette fonction avec une liste d'ID sélectionnée à l'avance. Cela permet d'avoir une limitation du nombre de tableaux mais aussi d'avoir des oeuvres spécifiques.

Ce service est ensuite appelé par trois composants :

* La galerie : Elle va servir de centralisation pour les différents tableaux qui sont affichés dans leur ensemble pour que l'utilisateur puisse les voir sans fioriture
* La page d'accueil : Celle-ci va utiliser uniquement 15 tableaux et les positionner ensuite sur l'écran de manière aléatoire. Chaque tableau va être mis en position absolute et ses coordonnées calculées grâce à une randomisation des coordonnées. Pour éviter tout tableau se superposant de trop à une autre, on vérifie d'ailleurs chaque pair de coordonnées pour voir si elles n'ont pas déjà été attribuées dans une certaine marge. Bien sûr l'étape des positions est désactivée à partir d'une certaine taille d'écran pour être uniquement mis sous forme de liste
* Le composant de peinture : Ce composant concerne chaque tableau individuel par son ID pour permettre à l'utilisateur d'accéder à la fiche du tableau et d'y retrouver toutes ses informations spécifiques
## 👨🏻‍💻L'auteur

Je m'appelle Yan et je suis développeur Front-End autodidacte. Passionné par le développement web, j'essaie de trouver des projets inspirants pour progresser, dont Arthover.

Pour retrouver mon travail vous pouvez regarder mon profil Github [@Nomera67](https://github.com/Nomera67) ou aller directement sur mon portfolio : https://www.yrdev.fr
