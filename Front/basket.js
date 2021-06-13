/********************************************    Panier    ******************************************************/

//fonction : recuperation du contenu du local storage dans le pannier

const getProductInLocalStorage = () => {
    let basket = JSON.parse(localStorage.getItem("product"));
    localStorage.setItem("product", JSON.stringify(basket));
    return basket
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
            const price = (getProductInLocalStorage()[i].object.price * document.getElementById("input-Quantity").value) / 100;
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

const displayBasket = () => {

    for (let i = 0; i < getProductInLocalStorage().length; i++) {

        const priceEuro = (new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(((getProductInLocalStorage()[i].object.price) * (getProductInLocalStorage()[i].quantity)) / 100));
        const templateBasket = document.getElementById("teddy-in-basket");
        const cloneSection = document.importNode(templateBasket.content, true);

        cloneSection.getElementById("js-title—basket").textContent = getProductInLocalStorage()[i].object.name;
        cloneSection.getElementById("js-price—basket").textContent = "Prix: " + priceEuro;
        cloneSection.getElementById("js-color-basket").textContent = "Couleur: " + getProductInLocalStorage()[i].selectedColor;
        //cloneSection.getElementById("js-quantity—basket").textContent = "Quantitté:" + displayQuantity();
        cloneSection.querySelector(".js-img—basket").setAttribute("src", getProductInLocalStorage()[i].object.imageUrl);
        cloneSection.querySelector(".quantity").setAttribute("value", getProductInLocalStorage()[i].quantity);

        document.getElementById("main-basket").appendChild(cloneSection);

    }
        document.getElementById("js-total-articles-basket").textContent = CalcTotalTeddies();
        document.getElementById("js-total-price-basket").textContent = totalPrice();

}

// fonction pour augumenter quantité

    const addQuantity = () => {
        const buttonPlus = document.getElementById("btn-plus");
        buttonPlus.onclick = function() {
                console.log(document.querySelector('input[type=number]').value)
                document.querySelector('input[type=number]').value ++;
        }

    }

// fonction pour diminuer la quantité

    const decreaseQuantity = () => {
        const buttonMinus = document.getElementById("btn-minus");

        buttonMinus.addEventListener("click", function () {
            if (document.querySelector('input[type=number]').value > 1) {
                document.querySelector('input[type=number]').value--
            }

        })
    }

    const displayQuantity = () => {
        console.log(document.getElementById("input-Quantity").value)
        const inputValue = document.getElementById("input-Quantity");
        inputValue.addEventListener("change", function () {

        })

    }


// recuperation et affichage du contenu panier apres chargement du dom

    document.addEventListener('DOMContentLoaded', () => {
        getProductInLocalStorage();
        displayBasket();
        CalcTotalTeddies();
        totalPrice();
        addQuantity();
        decreaseQuantity();
        displayQuantity();
    })



