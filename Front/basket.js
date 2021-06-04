/********************************************    Panier    ******************************************************/

//fonction : recuperation du contenu du local storage dans le pannier

const getProductInLocalStorage = key => {
    let productInLocalStorage = JSON.parse(localStorage.getItem("product"));
    for(let i = 0; i <productInLocalStorage.length; i++){
        const reducer = (accumulator, currentValue) => accumulator + productInLocalStorage[i].quantity;
        productInLocalStorage.reduce(reducer)

    }
    localStorage.getItem("product", JSON.stringify(productInLocalStorage));
    return productInLocalStorage
}



// fonction : affichage conetnu panier

const displayBasket = () =>{

        for(let i=0; i<getProductInLocalStorage().length; i++){

            const priceEuro = (new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR'}).format(getProductInLocalStorage()[i].price/100));
            const templateBasket = document.getElementById("teddy-in-basket");
            const cloneSection = document.importNode(templateBasket.content, true);

            cloneSection.getElementById("js-title—basket").textContent = getProductInLocalStorage()[i].name;
            cloneSection.getElementById("js-price—basket").textContent = priceEuro;
            cloneSection.getElementById("js-color-basket").textContent = getProductInLocalStorage()[i].colors;
            cloneSection.getElementById("js-img—basket").setAttribute("src", getProductInLocalStorage()[i].imageUrl)
            document.getElementById("main-basket").appendChild(cloneSection);
        }

}

// recuperation et affichage du contenu panier apres chargement du dom

document.addEventListener('DOMContentLoaded', () => {
    getProductInLocalStorage();
    displayBasket();
})
