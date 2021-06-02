/******************************************** Page de personnalisation produit sekectionné ******************************************************/
// recuperation de l'id a partir de l'url

const idOfSelection =  new URLSearchParams(window.location.search).get("id")

// recupuration du produit par son id

const getTeddyById = () => {

      return fetch (` http://localhost:3000/api/teddies/${idOfSelection}`)
        .then(response => response.json())
        .catch(function (error) {
            alert("Une erreur s'est produite: " + error)
        })
}
const displayTitleNoSelection = ()=>{
    document.getElementById("js-title-no-selection").classList.add("displayTitle")
}
getTeddyById().then(teddySelection =>{
    if(idOfSelection !== null){
        displayTeddy(teddySelection);
        displayOption(teddySelection);
        getColorsOption();
        addBasket(teddySelection);

    }else{
        alert ("selectionnez un article de la page d'acceuil");

    }

})


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


 const displayOption = (teddySelection) => {
    for (let i= 0; i <teddySelection.colors.length; i++) {
        document.getElementById('inputGroupSelect01').innerHTML +=
            ` <option id="colors" value="${teddySelection.colors[i]}" >${teddySelection.colors[i]}</option> `
    }
}

const getColorsOption = () => {

    const color =document.getElementById("inputGroupSelect01");
    return color.value
}


// Ajouter produit au panier

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
