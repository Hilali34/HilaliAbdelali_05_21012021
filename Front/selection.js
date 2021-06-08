/******************************************** Page de personnalisation produit sekectionné ******************************************************/


// Récuperation de l'id a partir de l'url

const idOfSelection =  new URLSearchParams(window.location.search).get("id")



// Récupuration du produit par son id

const getTeddyById = (id) => {

        return fetch(` http://localhost:3000/api/teddies/${id}`)
            .then(response => response.json())
            .catch(function (error) {
                alert("Une erreur s'est produite: " + error)
            })

}

document.addEventListener('DOMContentLoaded', () => {
    if (idOfSelection !== null) {
        getTeddyById(idOfSelection).then(teddySelection => {
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


// Affichage de l'article selectionné

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



// Ajout des couleurs disponibles dans les options

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
        let isPresent = false;
        let i;
        if (productInLocalStorage) {
            for( i = 0; i <productInLocalStorage.length; i++){
                const productIsEqual = productInLocalStorage[i].name === productToBasket.name && productInLocalStorage[i].colors === productToBasket.colors;

                if (productIsEqual){
                    console.log(productIsEqual)
                    productInLocalStorage[i].quantity +=1;
                    localStorage.setItem("product", JSON.stringify(productInLocalStorage));
                    return isPresent = true;
                }
            }
            if(!isPresent){
                productInLocalStorage.push(productToBasket);
                localStorage.setItem("product", JSON.stringify(productInLocalStorage));
                i++
            }

        }else{
            productInLocalStorage = [];
            productInLocalStorage.push(productToBasket);
            localStorage.setItem("product", JSON.stringify(productInLocalStorage));
            console.log(productInLocalStorage);
        }

    })

}

