/********************************************    Panier    ******************************************************/

//fonction : recuperation du contenu du local storage dans le pannier

const getProductInLocalStorage = () => {
    return JSON.parse(localStorage.getItem("product"));
}

/*const foo = () => {
    const products = getProductInLocalStorage();
    const newBasket = products.filter(p => p.id != 'toto');
    localStorage.setItem("product", JSON.stringify(newBasket));
}

 */


// fonction : calcul du total des articles ajoutés au panier
/*
const calcTotalTeddies = ()=> {
    const totalQuantity = [];
    document.querySelector(".js-input-quantity").addEventListener('change', (e) => {
        //const inputQuantity = parseInt(e.target.value, 10);
            totalQuantity.push(e.target.value)
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        /*return totalQuantity.reduce((accumulator, currentValue) => {

            return document.getElementById("js-total-articles-basket").textContent = (accumulator + currentValue);

        }, 0)


        return totalQuantity.reduce(reducer);

    })
    console.log(totalQuantity)
}

*/

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

const totalPrice = ()=> {
    const CalcTotalPrice = () => {
        const prices = [];
        const input = document.querySelector(".js-input-quantity");

        for (let i = 0; i < getProductInLocalStorage().length; i++) {
            const price = (getProductInLocalStorage()[i].object.price *  input.value) /100;
            prices.push(price)
        }
        return prices.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0)

    }
   return  (new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR'}).format(CalcTotalPrice()));
}



// fonction : affichage du contenu panier

const displayBasket = () => {

    for (let i = 0; i < getProductInLocalStorage().length; i++) {

        const product = getProductInLocalStorage();

        const priceEuro = (new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'})
                          .format(((product[i].object.price) * (product[i].quantity)) / 100));
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

        // gestion de la qunatité

        input.addEventListener('change', (e) => {
            quantity.textContent = `Quantité : ${e.target.value}`;
            // mise à jour quantité dans le localstorage
            product[i].quantity = e.target.value;

            localStorage.setItem("product", JSON.stringify(product));
        })



        // gestion de la qunatité avec les boutons

        buttonPlus.addEventListener('click', (e) =>{
            input.stepUp()
            quantity.textContent = "Quantité: " + input.value;
            product[i].quantity++;
            localStorage.setItem("product", JSON.stringify(product));
        });
        buttonMinus.addEventListener('click', () => {
            input.stepDown()
            quantity.textContent = "Quantité: " + input.value;

            product[i].quantity--;
            localStorage.setItem("product", JSON.stringify(product));

        });


        price.textContent = `Prix: ${priceEuro}`;
        input.setAttribute("value", product[i].quantity);
        title.textContent = product[i].object.name;
        color.textContent = `Couleur:  ${product[i].selectedColor}`;
        quantity.textContent = "Quantité: " + product[i].quantity;
        img.setAttribute("src", product[i].object.imageUrl);


        document.getElementById("main-basket").appendChild(cloneSection);
    }

    // affichage prix total des nbr total d'articles

document.getElementById("js-total-articles-basket").textContent = calcTotalTeddies();
document.getElementById("js-total-price-basket").textContent = totalPrice();
}

// recuperation et affichage du contenu panier apres chargement du dom

document.addEventListener('DOMContentLoaded', () => {
getProductInLocalStorage();
displayBasket();
totalPrice();
})


