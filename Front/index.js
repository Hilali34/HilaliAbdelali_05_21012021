/******************************************** Page d'acceuil ******************************************************/


// this function get a teddies List

const getTeddiesList = () => {
      return fetch(" http://localhost:3000/api/teddies")
        .then(response => response.json())

        .catch(function (error) {
            alert("Une erreur s'est produite: " + error)
        })
}
// ya t-il un autre moyen que de declarer un variable a l'exterieur pour recuperer la liste des produit?
// diffrence avec ou sans un  addvent onload de la page?



// loop for teddies
getTeddiesList().then(result => {
        result.forEach(teddy => {   // quelle différnce si je rajoute un return? c'est quoi le différence entre forEach et le for OF
            displayTeddies(teddy);
        })
    })


// function display teddies list (inject HTML)

const displayTeddies = (teddy) => {
    const priceEuro = (new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(teddy.price / 100));
    const templateSection = document.getElementById("teddies");
    const cloneSection = document.importNode(templateSection.content, true);

    cloneSection.getElementById("js-title").textContent = teddy.name;
    cloneSection.getElementById("js-price").textContent = priceEuro;
    cloneSection.getElementById("js-img").setAttribute("src", teddy.imageUrl)
    cloneSection.getElementById('js-product-select').setAttribute("href", "selection.html?id=" + teddy._id)

    document.getElementById("main").appendChild(cloneSection);
}


