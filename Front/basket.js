/********************************************    Panier    ******************************************************/

//fonction : recuperation du contenu du local storage dans le pannier

const getProductInLocalStorage = () => {
    let productInLocalStorage = JSON.parse(localStorage.getItem("product"));
    localStorage.setItem("product", JSON.stringify(productInLocalStorage));
    return productInLocalStorage
}


// fonction : calcul du total des articles ajoutés au panier

const CalcTotalTeddies = ()=>{
    const totalQuantity =[];
    for(let i=0; i<getProductInLocalStorage().length; i++) {
        totalQuantity.push(getProductInLocalStorage()[i].quantity)
    }
   return  totalQuantity.reduce((accumulator,currentValue)=>{
        return accumulator + currentValue;
    },0)

}


// fonction : calcul du prix total des articles ajoutés au panier

const totalPrice = ()=> {
    const CalcTotalPrice = () => {
        const prices = [];
        for (let i = 0; i < getProductInLocalStorage().length; i++) {
            const price = (getProductInLocalStorage()[i].price * getProductInLocalStorage()[i].quantity) / 100;
            //parseInt(price, 10);
            prices.push(price)
        }
        return prices.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0)

    }
   return  (new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR'}).format(CalcTotalPrice()));
}



// fonction : affichage du contenu panier

const displayBasket = () =>{

        for(let i=0; i<getProductInLocalStorage().length; i++){

            const priceEuro = (new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR'}).format((getProductInLocalStorage()[i].price* getProductInLocalStorage()[i].quantity)/100));
            const templateBasket = document.getElementById("teddy-in-basket");
            const cloneSection = document.importNode(templateBasket.content, true);

            cloneSection.getElementById("js-title—basket").textContent = getProductInLocalStorage()[i].name;
            cloneSection.getElementById("js-price—basket").textContent ="Prix: " + priceEuro;
            cloneSection.getElementById("js-color-basket").textContent = "Couleur: " + getProductInLocalStorage()[i].colors;
            cloneSection.getElementById("js-quantity—basket").textContent = "Quantité: " + getProductInLocalStorage()[i].quantity;
            cloneSection.querySelector(".js-img—basket").setAttribute("src", getProductInLocalStorage()[i].imageUrl);
            document.getElementById("main-basket").appendChild(cloneSection);
        }

    document.getElementById("js-total-articles-basket").textContent = CalcTotalTeddies();
    document.getElementById("js-total-price-basket").textContent = totalPrice();
}

// recuperation et affichage du contenu panier apres chargement du dom

document.addEventListener('DOMContentLoaded', () => {
    getProductInLocalStorage();
    displayBasket();
    CalcTotalTeddies();
    totalPrice();
})
