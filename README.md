# HilaliAbdelali_05_21012021
PROJET 5 ORINOCO
instructions: 
=> clôner le repository
=> demarrer Node Server


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
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![GIT](https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white)
## Resultat: 

Lien Page GitHub: 

https://hilali34.github.io/HilaliAbdelali_03_21012021/public/