//fonction : recuperation du contenu du local storage dans le pannier

const getProductInLocalStorage = () => {
    return JSON.parse(localStorage.getItem("product"));
}
// fonction : calcul du total des articles ajoutés au panier

const calcTotalTeddies = ()=>{
    const localProducts = getProductInLocalStorage();
    const totalQuantity =[];
    for(let i=0; i<localProducts.length; i++) {
        const productQuantity = parseInt(localProducts[i].quantity,10);
        totalQuantity.push(productQuantity)

    }
    console.log(totalQuantity)
    return  totalQuantity.reduce((accumulator,currentValue)=>{
        return accumulator + currentValue;
    },0)

}


// fonction : calcul du prix total des articles ajoutés au panier

const calcTotalPrice = ()=>{
    const localProducts = getProductInLocalStorage();
    const totalPrice =[];
    for(let i=0; i<localProducts.length; i++) {
        const  productPrice = ((localProducts[i].object.price) * (localProducts[i].quantity));
        console.log(productPrice)
        totalPrice.push(productPrice)
    }
    console.log(totalPrice)
    return  totalPrice.reduce((accumulator,currentValue)=>{
        return accumulator + currentValue;
    },0)

}

// fonction : affichage le nombre total d'articles et le prix total

const displayTotalArticleAndPrice = () => {

    const totalPriceInEuro = (new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'})
        .format((calcTotalPrice()) / 100));

    document.getElementById("js-total-articles-basket").textContent = calcTotalTeddies();
    document.getElementById("js-total-price-basket").textContent = totalPriceInEuro;
}





document.addEventListener('DOMContentLoaded', () => {
    displayTotalArticleAndPrice()
    calcTotalTeddies();
    calcTotalPrice();
})
