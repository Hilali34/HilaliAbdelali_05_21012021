/******************************************** Page de personnalisation produit sekectionné ******************************************************/


// recuperation de l'id a partir de l'url

const idOfSelection =  new URLSearchParams(window.location.search).get("id")



// recupuration du produit par son id

const getTeddyById = () => {

        return fetch(` http://localhost:3000/api/teddies/${idOfSelection}`)
            .then(response => response.json())
            .catch(function (error) {
                alert("Une erreur s'est produite: " + error)
            })

}

document.addEventListener('DOMContentLoaded', () => {
    if (idOfSelection !== null) {
        getTeddyById().then(teddySelection => {

            displayTeddy(teddySelection);
            displayOption(teddySelection);
            getColorsOption();
            addBasket(teddySelection);
            document.getElementById("js-display-title-selection").hidden = true;


        })
    } else {
        alert("selectionnez un article de la page d'acceuil");

    }
})



// affichage de l'artcile selectionné

const  displayTeddy =  (teddySelection) =>{

    const priceEuro = (new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR'}).format(teddySelection.price/100));
    const templateSection = document.getElementById("teddy");
    const cloneSection = document.importNode(templateSection.content, true);

    cloneSection.getElementById("js-title—selection").textContent = teddySelection.name;
    cloneSection.getElementById("js-price—selection").textContent = priceEuro;
    cloneSection.getElementById("js-img—selection").setAttribute("src", teddySelection.imageUrl)
    cloneSection.getElementById("js-add-basket").setAttribute("href", "selection.html?id=" + teddySelection._id)

    document.getElementById("main-selection").appendChild(cloneSection);
}



// ajout des couleurs disponible dans les options

 const displayOption = (teddySelection) => {
    for (let i= 0; i <teddySelection.colors.length; i++) {

        const formColors = document.getElementById('inputGroupSelect01');
        const optionsColors = document.createElement("option");

        formColors.appendChild(optionsColors);
        optionsColors.setAttribute("value",teddySelection.colors[i]);
        optionsColors.textContent = teddySelection.colors[i];
    }
}



// recuperation de la couleur choisis par l'utilisateur

const getColorsOption = () => {

    const color =document.getElementById("inputGroupSelect01");
    return color.value
}



// Ajouter produit au panier via le local storage

const addBasket = (teddySelection) => {
    const linkAddBasket = document.getElementById("js-add-basket");
    linkAddBasket.addEventListener("click", function (event) {
        event.preventDefault()
        const productToBasket = teddySelection;
        productToBasket.quantity = 1;
        productToBasket.colors = getColorsOption();
        /*----------------------------------------local storag--------------------------------------------------*/
        let productInLocalStorage = JSON.parse(localStorage.getItem("product"))
        if (productInLocalStorage) {
            productInLocalStorage.push(productToBasket);
            localStorage.setItem("product", JSON.stringify(productInLocalStorage));

        } else {
            productInLocalStorage = [];
            productInLocalStorage.push(productToBasket);
            localStorage.setItem("product", JSON.stringify(productInLocalStorage));
            console.log(productInLocalStorage);
        }
    })
}
