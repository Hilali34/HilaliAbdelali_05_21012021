[![Openclassrooms](https://camo.githubusercontent.com/e47c349811ac404b8147bd362c598e61c7d20225df17499c6373b44f6ee08a3d/68747470733a2f2f31746f3170726f67726573732e66722f77702d636f6e74656e742f75706c6f6164732f323031392f30352f6f70656e636c617373726f6f6d732d65313535373736313233363135382e706e67)](https://openclassrooms.com/)

# Parcours Développeur Web 
# Projet 3 : Orinoco

<br/>

![page1image1308483312](https://user.oc-static.com/upload/2019/09/04/15675819263013_image1.png)

<br/>

## Intitulé du Projet : Construisez un site e-commerce.

## Senario : 

Félicitations ! Vous avez été recruté en tant que développeur front-end par Orinoco, une entreprise de commerce en ligne.
Son credo ? Se démarquer des grands site e-commerce comme Amazon en créant des applications thématiques ne vendant qu’un seul groupe de produits. Il y a par exemple Oribook pour les livres ou Oritextil pour les vêtements.
Vos compétences en développement web et votre personnalité ont plu à Paul, le fondateur de l’entreprise.
Dans un premier temps, Paul souhaite créer un premier MVP pour démontrer le fonctionnement de ses applications à ses investisseurs.
L’équipe est constituée de Jeanne, développeuse back-end travaillant sur les API et vous, pour la partie front-end.

## Architecture générale

L’application web sera composée de 4 pages :

-    une page de vue sous forme de liste, montrant tous les articles disponibles à la vente ;
    
-    une page “produit”, qui affiche de manière dynamique l'élément sélectionné par l'utilisateur et lui permet de personnaliser le produit et de l'ajouter à son panier ;
    
-    une page “panier” contenant un résumé des produits dans le panier, le prix total et un formulaire permettant de passer une commande. Les données du formulaire doivent être correctes et bien formatées avant d'être renvoyées au back-end. Par exemple, pas de texte dans les champs date ;
    
-    une page de confirmation de commande, remerciant l'utilisateur pour sa commande, et indiquant le prix total et l'identifiant de commande envoyé par le serveur.

##  Planification de tests unitaires
    
   Planifiez une suite de tests unitaires pour couvrir au minimum 80 % de la base de code pour le front-end. Vous devrez formaliser un plan pour atteindre ce résultat, sans obligation d’écrire ces tests Expliquez quelles lignes seront testées, et quels “test cases” seront envisagés.
    
## Informations complémentaires
    
   Pour le MVP, la personnalisation du produit ne sera pas fonctionnelle : la page contenant un seul article aura un menu déroulant permettant à l'utilisateur de
    

choisir une option de personnalisation, mais celle-ci ne sera ni envoyée au serveur ni reflétée dans la réponse du serveur.

Le code source devra être indenté et utiliser des commentaires. Il devra également utiliser des fonctions globales.

Concernant l’API, des promesses devront être utilisées pour éviter les rappels. Les inputs des utilisateurs doivent être validés avant l’envoi à l’API.


## Types de données
<br/>

Tous les produits possèdent les attributs suivants :

<br/>

   
| CHAMP       | TYPE     |
|-------------|----------|
| id          | ObjectID |
| name        | string   |
| price       | number   |
| description | string   |
| imageUrl    | string   |

<br/>

Chaque type de produit comporte un tableau contenant les strings correspondant aux options de personnalisation :

<br/>

| Type de produit  | Tableau de personnalisation |
|------------------|-----------------------------|
| Caméras          | lentilles                   |
| Ours en peluche  | couleurs                    |
| Meubles en chêne | vernis                      |

## Technologies a utilisées
HTML, CSS, JavaScript.


## URL des API
- Ours en peluche faits à la main : http://localhost:3000/api/teddies
- Caméras vintage : http://localhost:3000/api/cameras
- Meubles en chêne : http://localhost:3000/api/furniture

## Paramètres des API
<br/>

Chaque API contient 3 paramètres :

<br/>

| verb | Paramètre | Corps de la demande prévue                                           | Réponse                                                            |
|------|-----------|----------------------------------------------------------------------|--------------------------------------------------------------------|
| GET  | /         | -                                                                    | Retourne un tableau de tous les éléments                           |
| GET  | /:_id     | -                                                                    | Renvoie l'élément correspondant à identifiant given_id             |
| POST | /order    | Requête JSON contenant un objet de contact et un tableau de produits | Retourne l'objet contact, le tableau produits et  orderId (string) |

## Technoligies utilisées : 

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JAVASCRIPT](https://img.shields.io/badge/Javascript-F4D03F?style=for-the-badge&logo=javascript&logoColor=white)
![GIT](https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white)

## Validation des données

Pour les routes POST, l’objet contact envoyé au serveur doit contenir les champs firstName, lastName, address, city et email. Le tableau des produits envoyé au backend doit être un array de strings products. Les types de ces champs et leur présence doivent être validés avant l’envoi des données au serveur.




## Installation : 

## Cloner le repo de l'API

```
git clone https://github.com/OpenClassrooms-Student-Center/JWDP5.git

```

Lancer 

```
nmp install

```

Demarrez le serveur

```
node server.js

```

## Cloner ce repo 

```
git clone https://github.com/Hilali34/HilaliAbdelali_05_21012021

```

Lancer le live server.


DEMO:

https://orinoco-hilali.netlify.app




