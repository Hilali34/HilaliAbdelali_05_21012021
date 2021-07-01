/********************************************    Panier    ******************************************************/

// fonction : affichage du contenu panier

const displayBasket = () => {

    const products = getProductInLocalStorage();

    // supprission du noeud suite a la suppression d'article

    const container = document.getElementById("main-basket");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }


    for (let i = 0; i < products.length; i++) {

        console.log(products)

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

        console.log(products);
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

            displayTotalArticleAndPrice()
        })


        // gestion de la quantité avec les boutons

        buttonPlus.addEventListener('click', (e) => {
            const localProducts = getProductInLocalStorage();
            input.stepUp()
            quantity.textContent = "Quantité: " + input.value;

            localProducts[i].quantity++;
            localStorage.setItem("product", JSON.stringify(localProducts));

            displayTotalArticleAndPrice()
        });
        buttonMinus.addEventListener('click', () => {
            const localProducts = getProductInLocalStorage();

            if (localProducts[i].quantity > 1) {
                input.stepDown()
                quantity.textContent = "Quantité: " + input.value;
                localProducts[i].quantity--;
                localStorage.setItem("product", JSON.stringify(localProducts));

                displayTotalArticleAndPrice()
            }

        });

        // suppression d'un article

        removeBtn.addEventListener("click", () => {
            const localProducts = getProductInLocalStorage();
            console.log(localProducts[i].id)
            console.log(localProducts[i].selectedColor)
            const newBasket = localProducts.filter(p => p.id === localProducts[i].id && p.selectedColor !== localProducts[i].selectedColor || p.id !== localProducts[i].id);
            localStorage.setItem("product", JSON.stringify(newBasket));
            displayBasket();
        })

    }

    displayTotalArticleAndPrice()

}

// verification du contenu du panier avant de passer a la confirmation

const btnConfirmation = document.getElementById("orderConfirmation");
btnConfirmation.addEventListener("click", (e) => {

    if (getProductInLocalStorage().length === 0) {
        e.preventDefault();
        alert("votre pannier est vide merci d'ajouter un ou plusiuers articles")
    }
})


// recuperation et affichage du contenu panier apres chargement du dom

document.addEventListener('DOMContentLoaded', () => {
    getProductInLocalStorage();
    displayBasket();
})


