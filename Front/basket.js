/********************************************    Panier    ******************************************************/

//fonction : recuperation du contenu du local storage dans le pannier

const getProductInLocalStorage = () => {
    return JSON.parse(localStorage.getItem("product"));
}


// fonction : calcul du total des articles ajoutés au panier

const calcTotalTeddies = ()=>{
    const totalQuantity =[];
    for(let i=0; i<getProductInLocalStorage().length; i++) {
        const productQuantity = parseInt(getProductInLocalStorage()[i].quantity,10);
        totalQuantity.push(productQuantity)

    }
    console.log(totalQuantity)
   return  totalQuantity.reduce((accumulator,currentValue)=>{
        return accumulator + currentValue;
    },0)

}


// fonction : calcul du prix total des articles ajoutés au panier

const calcTotalPrice = ()=>{
    const totalPrice =[];
    for(let i=0; i<getProductInLocalStorage().length; i++) {
        const  productPrice = ((getProductInLocalStorage()[i].object.price) * (getProductInLocalStorage()[i].quantity));
        console.log(productPrice)
        totalPrice.push(productPrice)
    }
    console.log(totalPrice)
    return  totalPrice.reduce((accumulator,currentValue)=>{
        return accumulator + currentValue;
    },0)

}


// fonction : affichage du contenu panier

const displayBasket = () => {

    const products = getProductInLocalStorage();

    for (let i = 0; i < getProductInLocalStorage().length; i++) {

        const priceEuro = (new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'})
                          .format(((products[i].object.price) * (products[i].quantity)) / 100));
        const templateBasket = document.getElementById("teddy-in-basket");
        const cloneSection = document.importNode(templateBasket.content, true);

        const input = cloneSection.querySelector(".js-input-quantity");
        const quantity = cloneSection.querySelector(".js-quantity—basket");
        const price = cloneSection.querySelector(".js-price—basket");
        const title = cloneSection.querySelector(".js-title—basket");
        const color = cloneSection.querySelector(".js-color-basket");
        const img = cloneSection.querySelector(".js-img—basket");
        const buttonPlus = cloneSection.querySelector(".js-plus");
        const buttonMinus = cloneSection.querySelector(".js-minus");
        const removeBtn = cloneSection.querySelector(".remove-btn");


        price.textContent = `Prix: ${priceEuro}`;
        input.setAttribute("value", products[i].quantity);
        title.textContent = products[i].object.name;
        color.textContent = `Couleur:  ${products[i].selectedColor}`;
        quantity.textContent = "Quantité: " + products[i].quantity;
        img.setAttribute("src", products[i].object.imageUrl);

        document.getElementById("main-basket").appendChild(cloneSection);


        // gestion de la quantité

        input.addEventListener('change', (e) => {
            const localProducts = getProductInLocalStorage();
            quantity.textContent = `Quantité : ${e.target.value}`;
            // mise à jour quantité dans le localstorage
            localProducts[i].quantity = e.target.value;

            localStorage.setItem("product", JSON.stringify(localProducts));
        })


        // gestion de la quantité avec les boutons

        buttonPlus.addEventListener('click', (e) =>{
            const localProducts = getProductInLocalStorage();
            input.stepUp()
            quantity.textContent = "Quantité: " + input.value;

            localProducts[i].quantity++;
            localStorage.setItem("product", JSON.stringify(localProducts));
        });
        buttonMinus.addEventListener('click', () => {
            const localProducts = getProductInLocalStorage();
            input.stepDown()
            quantity.textContent = "Quantité: " + input.value;

            localProducts[i].quantity--;
            localStorage.setItem("product", JSON.stringify(localProducts));

        });

        // suppression d'un article

        removeBtn.addEventListener("click", ()=> {
            const localProducts = getProductInLocalStorage();

            const newBasket = localProducts.filter(p => p.id !== localProducts[i].id && p.selectedColor !== localProducts[i].selectedColor);
            localStorage.setItem("product", JSON.stringify(newBasket));

        })

    }

// affichage prix total et nbr total d'articles

const totalPriceInEuro = (new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'})
        .format((calcTotalPrice()) / 100));

document.getElementById("js-total-articles-basket").textContent = calcTotalTeddies();
document.getElementById("js-total-price-basket").textContent = totalPriceInEuro;
}


// recuperation et affichage du contenu panier apres chargement du dom

document.addEventListener('DOMContentLoaded', () => {
getProductInLocalStorage();
displayBasket();
calcTotalTeddies();
calcTotalPrice();
})


