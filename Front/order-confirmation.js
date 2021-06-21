


// verifie la validité  du format de l'adresse mail

const validEmail = () =>{
    let formOrder = document.querySelector("#form-order");

    formOrder.email.addEventListener("change",()=>{
        let inputEmail = formOrder.email;
        let emailRegExp = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        let testEmail = emailRegExp.test(inputEmail.value);
        let validationMsg = document.getElementById("validation-email");

        if(testEmail){
            console.log(testEmail)
            validationMsg.textContent = "valide"
            validationMsg.className = "text-success";

        }else if (!testEmail && inputEmail.value !== ""){
            console.log(testEmail)
            validationMsg.textContent = "invalide"
            validationMsg.className = "text-danger";

        }else{
            validationMsg.textContent = ""
        }
    })
}

// verifie la validité  du format de l'adresse mail

const validAddress = () =>{
    let formOrder = document.querySelector("#form-order");

    formOrder.address.addEventListener("change",()=>{
        let inputAddress = formOrder.address;
        console.log(inputAddress);
        let addressRegExp = /(\d{1,}) [a-zA-Z0-9\s]+(\.)? [a-zA-Z]+/;
        let testAddress = addressRegExp.test(inputAddress.value);
        let validationMsg = document.getElementById("validation-address");

        if(testAddress){
            console.log(testAddress)
            validationMsg.textContent = "valide"
            validationMsg.className = "text-success";

        }else if (!testAddress && inputAddress.value !== ""){
            console.log(testAddress)
            validationMsg.textContent = "invalide"
            validationMsg.className = "text-danger";

        }else{
            validationMsg.textContent = ""
        }
    })
}


document.addEventListener('DOMContentLoaded', () => {
    validEmail();
    validAddress();
})


