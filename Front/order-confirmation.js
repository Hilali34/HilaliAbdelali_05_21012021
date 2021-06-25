

// test Regex
const isInfoValid = (myRegExp,value) => {
    return myRegExp.test(value);
}


// verifie la validité  des informations saisie par l'utilisateur

const checkValidityInfoForm = (input,outputMsgValidity,regExpValidity) =>{


    console.log(regExpValidity)

    input.addEventListener("change",()=>{

        if(regExpValidity){

            outputMsgValidity.textContent = "valide"
            outputMsgValidity.className = "text-success";

        }else if ((!regExpValidity) && input.value !== ""){
            console.log(regExpValidity)
            outputMsgValidity.textContent = "invalide"
            outputMsgValidity.className = "text-danger";

        }else{
            outputMsgValidity.textContent = ""
        }
    })
}

// recuperation des données a envoyer au serveur

const getOrderInfo = ()=>{
    const btnSubmit = document.getElementById("order-submit");
    btnSubmit.addEventListener("click",()=>{

    })
}

document.addEventListener('DOMContentLoaded', () => {


    // regExp nom, prénom et ville
    const infoRegExp = new RegExp(/^([a-z]+[,.]?[ ]?|[a-z]+['-]?)+$/);
    const emailRegExp = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const addressRegExp = new RegExp (/(^\d{1,}) [a-zA-Z0-9\s]+(\.)? [a-zA-Z]+$/);
    // les input a tester
    const firstNameInput = document.querySelector("#form-order").firstName;
    const lastNameInput = document.querySelector("#form-order").lastName;
    const cityInput = document.querySelector("#form-order").city;
    const emailInput = document.querySelector("#form-order").email;
    const addressInput = document.querySelector("#form-order").address;

    // les Output pour afficher le message de validité
    const outputMsgFirstName = document.getElementById("validation-firstName");
    const outputMsgLastName = document.getElementById("validation-lastName");
    const outputMsgCity = document.getElementById("validation-city");
    const outputMsgEmail = document.getElementById("validation-email");
    const outputMsgAddress = document.getElementById("validation-address");

    document.querySelector('form').addEventListener('submit', () => isFormValid())


    checkValidityInfoForm(firstNameInput,outputMsgFirstName,isInfoValid(infoRegExp,firstNameInput.value))
    checkValidityInfoForm(lastNameInput,outputMsgLastName,isInfoValid(infoRegExp,lastNameInput.value))
    checkValidityInfoForm(cityInput,outputMsgCity,isInfoValid(infoRegExp,cityInput.value))
    checkValidityInfoForm(emailInput,outputMsgEmail,isInfoValid(emailRegExp,emailInput.value))
    checkValidityInfoForm(addressInput,outputMsgAddress,isInfoValid(addressRegExp,addressInput.value))



    const isFormValid = () => {
        let formOrder = document.querySelector("#form-order");
        return isInfoValid(infoRegExp,firstNameInput.value)
                && isInfoValid(infoRegExp,lastNameInput.value)
                && isInfoValid(infoRegExp,cityInput.value)
                && isInfoValid(emailRegExp,emailInput.value)
                && isInfoValid(addressRegExp,addressInput.value)
    }

})


