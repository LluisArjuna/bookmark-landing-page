function validarEmail() {
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error");
    const iconError = document.getElementById("icon");

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRegex.test(emailInput.value)) {
        emailInput.style.border = "3px solid #FA5959";
        
        errorMessage.classList.add("inline");
        errorMessage.classList.remove("hidden");

        iconError.classList.add("inline");
        iconError.classList.remove("hidden");
    } else {
        emailInput.style.border = "0 solid #FA5959";

        errorMessage.classList.add("hidden");
        errorMessage.classList.remove("inline");

        iconError.classList.add("hidden");
        iconError.classList.remove("inline");
    }
}