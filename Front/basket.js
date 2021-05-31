/********************************************    Panier    ******************************************************/


const getProductInLocalStorage = key => {
    let productInLocalStorage = JSON.parse(localStorage.getItem("product"));
    localStorage.getItem("product", JSON.stringify(productInLocalStorage));
    return productInLocalStorage
}
getProductInLocalStorage();


const displayBasket = () =>{
    for(let i=0; i<getProductInLocalStorage().length; i++){
    const priceEuro = (new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR'}).format(getProductInLocalStorage()[i].price/100));
    document.getElementById('main-basket').innerHTML +=
        `   
        <div class="card mb-3" ;">
          <div class="row g-0">
            <div class="col-md-4">
              <div class=" img-basket bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <img
                                           src="${getProductInLocalStorage()[i].imageUrl}"
                                           class="img-fluid "
                                           alt="image du produit"
                                />
                                <a href="#">
                                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                </a>
                            </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${getProductInLocalStorage()[i].name}</h5>
                <p class="card-text"><small class="text-muted">${priceEuro}</small></p>
                <p class="card-text"><small class="text-muted">${getProductInLocalStorage()[i].colors}</small></p>

              </div>
            </div>
          </div>
        </div>
        `
    }
}

displayBasket()