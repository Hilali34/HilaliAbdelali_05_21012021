/******************************************** Page de confirmation et formulaire ******************************************************/


// test Regex prénom
const isFirstNameValid = () => {
    const infoRegExp = new RegExp(/^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/);
    const firstNameInput = document.querySelector("#form-order").firstName;
    console.log(firstNameInput)
    return infoRegExp.test(firstNameInput.value);
}

// test Regex nom
const isLastNameValid = () => {
    const infoRegExp = new RegExp(/^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/);
    const lastNameInput = document.querySelector("#form-order").lastName;
    console.log(lastNameInput)
    return infoRegExp.test(lastNameInput.value);
}

// test Regex ville
const isCityValid = () => {
    const infoRegExp = new RegExp(/^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/);
    const cityInput = document.querySelector("#form-order").city;
    console.log(cityInput)
    return infoRegExp.test(cityInput.value);
}

// test Regex adresse
const isAddressValid = () => {
    const addressRegExp = new RegExp(/(^.{3,}$)/);
    const addressInput = document.querySelector("#form-order").address;
    console.log(addressInput)
    return addressRegExp.test(addressInput.value);
}

// test Regex email
const isEmailValid = () => {
    const emailRegExp = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const emailInput = document.querySelector("#form-order").email;
    console.log(emailInput)
    return emailRegExp.test(emailInput.value);
}


// verifie la validité  du prénom

const checkValidityFirstName = () => {

    const firstNameInput = document.querySelector("#form-order").firstName;
    const outputMsgFirstName = document.getElementById("validation-firstName");

    firstNameInput.addEventListener("change", () => {

        if (isFirstNameValid()) {

            console.log(firstNameInput.value)
            outputMsgFirstName.textContent = "valide"
            outputMsgFirstName.className = "text-success";

        } else if (!isFirstNameValid() && firstNameInput.value !== "") {

            outputMsgFirstName.textContent = "invalide"
            outputMsgFirstName.className = "text-danger";

        } else {
            outputMsgFirstName.textContent = ""
        }
    })
}


// verifie la validité  du nom

const checkValidityLastName = () => {

    const lastNameInput = document.querySelector("#form-order").lastName;
    const outputMsgLastName = document.getElementById("validation-lastName");

    lastNameInput.addEventListener("change", () => {

        if (isLastNameValid()) {

            console.log(lastNameInput.value)
            outputMsgLastName.textContent = "valide"
            outputMsgLastName.className = "text-success";

        } else if (!isLastNameValid() && lastNameInput.value !== "") {

            outputMsgLastName.textContent = "invalide"
            outputMsgLastName.className = "text-danger"

        } else {
            outputMsgLastName.textContent = ""
        }
    })
}

// verifie la validité  de la ville

const checkValidityCity = () => {

    const cityInput = document.querySelector("#form-order").city;
    const outputMsgCity = document.getElementById("validation-city");

    cityInput.addEventListener("change", () => {

        if (isCityValid()) {

            console.log(cityInput.value)
            outputMsgCity.textContent = "valide"
            outputMsgCity.className = "text-success";

        } else if (!isCityValid() && cityInput.value !== "") {

            outputMsgCity.textContent = "invalide"
            outputMsgCity.className = "text-danger";

        } else {
            outputMsgCity.textContent = ""
        }
    })
}


// verifie la validité  de l'adresse

const checkValidityAddress = () => {

    const addressInput = document.querySelector("#form-order").address;
    const outputMsgAddress = document.getElementById("validation-address");

    addressInput.addEventListener("change", () => {

        if (isAddressValid()) {
            console.log(addressInput.value)
            outputMsgAddress.textContent = "valide"
            outputMsgAddress.className = "text-success";

        } else if (!isAddressValid() && addressInput.value !== "") {

            outputMsgAddress.textContent = "invalide"
            outputMsgAddress.className = "text-danger";

        } else {
            outputMsgAddress.textContent = ""
        }
    })
}


// verifie la validité  de l'email

const checkValidityEmail = () => {

    const emailInput = document.querySelector("#form-order").email;
    const outputMsgEmail = document.getElementById("validation-email");

    emailInput.addEventListener("change", () => {

        if (isEmailValid()) {
            console.log(emailInput.value)
            outputMsgEmail.textContent = "valide"
            outputMsgEmail.className = "text-success";

        } else if (!isEmailValid() && emailInput.value !== "") {

            outputMsgEmail.textContent = "invalide"
            outputMsgEmail.className = "text-danger"
        } else {
            outputMsgEmail.textContent = ""
        }
    })
}


// verifier la validité de l'ensemble du formulaire avant de le soumettre
const isFormValid = () => {
    return isFirstNameValid()
        && isLastNameValid()
        && isCityValid()
        && isEmailValid()
        && isAddressValid()
}


// envoi des données  au serveur via une requette fetch post

const postOrderInfo = () => {
    const formSubmit = document.getElementById("form-order");
    const firstNameInput = document.querySelector("#form-order").firstName;
    const lastNameInput = document.querySelector("#form-order").lastName;
    const emailInput = document.querySelector("#form-order").email;
    const addressInput = document.querySelector("#form-order").address;
    const cityInput = document.querySelector("#form-order").city;


    formSubmit.addEventListener("submit", (e) => {
        e.preventDefault();

        if (isFormValid()) {

            document.getElementById("form-order").submit();
        }


        // creation objet a envoyer au serveur via fetch post
        const idOfProductsInLocalStorage = getProductInLocalStorage().map(p => p.id);
        console.log(idOfProductsInLocalStorage);
        const localProducts = getProductInLocalStorage();
        console.log(localProducts)
        const order = {
            contact: {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                address: addressInput.value,
                city: cityInput.value,
                email: emailInput.value,
            },
            products: idOfProductsInLocalStorage
        }
        console.log(order)
        console.log(idOfProductsInLocalStorage);

        fetch("http://localhost:3000/api/teddies/order", {
            method: "POST",
            body: JSON.stringify(order),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(response => response.json())
            .then((json) => {
                console.log(json)
                localStorage.setItem("checkOut", JSON.stringify(json));
            })
            .catch(error => console.log(error));

    })
}


document.addEventListener('DOMContentLoaded', () => {
    checkValidityFirstName();
    checkValidityLastName();
    checkValidityCity();
    checkValidityAddress();
    checkValidityEmail();
    postOrderInfo();
})

