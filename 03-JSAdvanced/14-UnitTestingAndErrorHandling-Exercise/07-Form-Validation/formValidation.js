function validate() {

    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const checkBox = document.getElementById("company");
    const submit = document.getElementById('submit');
    const company = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const userName = document.getElementById("username");
    const companyNumber = document.getElementById("companyNumber");
    const valid = document.getElementById("valid");

    const userTest = /^[A-Za-z0-9]{3,20}$/;
    const emailTest = /^[^@.]+@[^@]*\.[^@]*$/;
    const passTest = /^[\w]{5,15}$/;

    let isValid = true;

    company.addEventListener("change", () => {
        if (company.checked) {
            companyInfo.style.display = "block";
        } else {
            companyInfo.style.display = "none";
        }
    });

    submit.addEventListener("click", (e) => {
        e.preventDefault()
        
        if (userTest.exec(userName.value) === null) {
            userName.style.borderColor = "red";
            isValid = false;
        } else {
            userName.style.borderColor = "";
        }

        if (emailTest.exec(email.value) === null) {
            email.style.borderColor = "red";
            isValid = false;
        } else {
            email.style.borderColor = "";
        }

        if (password.value === confirmPassword.value && passTest.exec(password.value) != null) {
            confirmPassword.style.borderColor = "";
            password.style.borderColor = "";
        } else {
            confirmPassword.style.borderColor = "red";
            password.style.borderColor = "red";
            isValid = false;
        }

        if (checkBox.checked) {
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = "red";
                isValid = false;
            } else {
                companyNumber.style.borderColor = "";
            }
        }

        if (isValid) {
            valid.style.display = "block";
        } else {
            valid.style.display = "none";
        }
    });
}