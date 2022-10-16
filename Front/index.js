/******************************************** Page d'acceuil ******************************************************/


// cette fonction recupère la liste des produits grace avec fetch GET

const getTeddiesList = () => {
    return fetch(`${apiURL}/api/teddies`)
        .then(response => response.json())

        .catch(function (error) {
            alert("Une erreur s'est produite: " + error)
        })
}

// affichage de la liste des produits apres chargement du dom

document.addEventListener('DOMContentLoaded', () => {
    getTeddiesList().then(result => {
        //console.log(result)
        result.forEach(teddy => {
            displayTeddies(teddy);
        })
    })
});


// cette fonction affiches la liste des produits

const displayTeddies = (teddy) => {
    const priceEuro = (new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(teddy.price / 100));
    const templateSection = document.getElementById("teddies");
    const cloneSection = document.importNode(templateSection.content, true);

    cloneSection.getElementById("js-title").textContent = teddy.name;
    cloneSection.getElementById("js-price").textContent = priceEuro;
    cloneSection.getElementById("js-img").setAttribute("src", teddy.imageUrl)
    cloneSection.getElementById('js-product-select').setAttribute("href", "selection.html?id=" + teddy._id)

    document.getElementById("main").appendChild(cloneSection);
}


