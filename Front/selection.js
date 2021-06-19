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
        const optionColors = document.createElement("option");

        formColors.appendChild(optionColors);
        optionColors.setAttribute("value",teddySelection.colors[i]);
        optionColors.textContent = teddySelection.colors[i];
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
        const productToAddToBasket = {
            id: teddySelection._id,
            selectedColor: getColorsOption(),
            quantity: 1,
            object: teddySelection,
        }

        /*----------------------------------------local storage--------------------------------------------------*/
        let basket = JSON.parse(localStorage.getItem("product"))

        // verification s'il ya des produits dans le panier
        if (basket) {

                // verification si le produits que le client ajout est deja preesent dans le panier

                const existingEntry = basket.find(e => e.id === productToAddToBasket.id && e.selectedColor === productToAddToBasket.selectedColor);

                // ajout produit

                if (!existingEntry) {
                    basket.push(productToAddToBasket);
                    localStorage.setItem("product", JSON.stringify(basket));
                    console.log(basket)

                } else {
                    console.log(existingEntry.quantity)
                    existingEntry.quantity++;
                    console.log(basket)
                    console.log(existingEntry)
                    localStorage.setItem("product", JSON.stringify(basket));

                }

            // augmentation de la quantité

        } else {
            const initialStorageValue = [ productToAddToBasket ]
            localStorage.setItem("product", JSON.stringify(initialStorageValue));
            console.log(basket);
        }


    })

}