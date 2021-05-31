/******************************************** Page de personnalisation produit sekectionné ******************************************************/


// get id for URL

//const idOfSelection = window.location.search.slice(4);

const idOfSelection =  new URLSearchParams(window.location.search).get("id")

// get a teedie by id in URL

const getTeddyById = () => {
      return fetch (` http://localhost:3000/api/teddies/${idOfSelection}`)
        .then(response => response.json())
        .catch(function (error) {
            alert("Une erreur s'est produite: " + error)
        })
}

getTeddyById().then(teddySelection =>{
    if(idOfSelection !== ""){
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
   document.getElementById('main-selection').innerHTML =
        `  <h1 class="h3 mb-4 mt-4">Personnalisez votre sélection</h1>
                <div class="col-12 col-lg-6 mx-auto">
                        <div class="card  mb-3 ">
                            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <img
                                           src="${teddySelection.imageUrl}"
                                           class="img-fluid "
                                           alt="image du produit"
                                />
                                <a href="#">
                                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                </a>
                            </div>
                            <div class="card-body">
                                   <h5 class="card-title">${teddySelection.name}</h5>
                                   <p class="card-text">
                                   <small class="text-muted">${priceEuro}</small>
                                   </p>
                                <form class="input-group mb-3">
                                  <label class="input-group-text" for="inputGroupSelect01">Couleurs</label>
                                  <select class="form-select"  id="inputGroupSelect01" required>
                                    <option selected>Veuillez choisir votre couleur</option>                          
                                  </select>
                                </form>   
                                <div class="d-grid col-4 mx-auto">
                                    <a href="basket.html" id="add-basket" type="button" class="btn mybg-secondary">Ajouter au pannier</a>
                               </div>     
                            </div>
                        </div>
                    </div>`
    document.getElementById('link-product-page').setAttribute("href", `selection.html?id=${teddySelection._id}`)
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
    const linkAddBasket = document.getElementById("add-basket");
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
