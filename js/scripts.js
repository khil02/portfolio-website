(function(){
let form = document.querySelector("#contact-form");
let emailInput = document.querySelector("#contact-email");
let messageInput = document.querySelector("#contact-message");

function showErrorMessage(input, message){
    let container = input.parentElement;

    let error = container.querySelector(".error-message");
    if (error){
        container.removeChild(error);
    }

    if (message){
        let error = document.createElement('div');
        error.classList.add("error-message");
        error.innerText = message;
        container.appendChild(error);
    }
}

function validateEmail(){
    let value = emailInput.value;

    if (!value){
        showErrorMessage(emailInput, "Email is a required.");
        return false;
    }
    if (value.indexOf("@")===-1){
        showErrorMessage(emailInput, "Must use a valid email address.");
        return false;
    }
    if (value.indexOf(".")===-1){
        showErrorMessage(emailInput, "Must use a valid email address.");
        return false;
    }
    showErrorMessage(emailInput, null);
    return true;
}

function validateMessage(){
    let value = messageInput.value;

    if (!value){
        showErrorMessage(messageInput, "Please include a short message");
        return false
    }
    if (value.length >280){
        showErrorMessage(messageInput, "Message is too long");
        return false;
    }
    showErrorMessage(messageInput, null);
    return true;
}

function validateMessageForm(){
    let isValidEmail = validateEmail;
    let isValidMessage = validateMessage;
    return isValidEmail && isValidMessage;

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateMessageForm()){
        alert('Success!');
    }
})

emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

})();