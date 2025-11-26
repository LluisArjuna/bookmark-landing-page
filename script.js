function validarEmail() {
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error");
    const iconError = document.getElementById("icon");

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRegex.test(emailInput.value)) {
        emailInput.style.border = "3px solid #FA5959";
        emailInput.style.borderRadius = "6px 6px 0 0";
        errorMessage.style.display = "block";
        iconError.style.display = "block";
    } else {
        emailInput.classList.remove("error");
        errorMessage.style.display = "none";
        alert("Email válido!");
    }
}