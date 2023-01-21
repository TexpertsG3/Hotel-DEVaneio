import {addUser} from "./users.js";
import {getUsers} from "./ls.js";

export function addRegisterAction() {
    let btnRegitration = document.getElementById("btn__registeration");

    if (!btnRegitration) {
        return;
    }

    btnRegitration.addEventListener("click", event => {
        event.preventDefault();
        let registrationForm = new FormData(document.getElementById("form-registration"));

        let name = registrationForm.get("name");
        let email = registrationForm.get("email");
        let password = registrationForm.get("password");

        if(validationRegistration(name, email, password)){
            addUser(name, email, password);

            setAlert("Usuário Cadastrado", "register-alert", "success");
        }
    })
}

export function addLoginAction() {
    let btnLogin = document.getElementById("btn__login");

    if (!btnLogin) {
        return;
    }

    btnLogin.addEventListener("click", event => {
        event.preventDefault();

        let loginForm = new FormData(document.getElementById("form-login"));
        setLoggedUser(loginForm.get("email"), loginForm.get("password"))
    })
}

function validationLogin(email, password) {
    if (email === "") {
        setAlert("Campo E-mail não pode ser vazio", "login-alert", "error");
        return false;
    }

    if (email.match(/^([\w]+[\w$-/:-?{-~!"^_`\[\]]*)@([\w]+)\.(\w+)$/) === null) {
        setAlert("E-mail inválido", "login-alert", "error");
        return false;
    }

    if (password === "") {
        setAlert("Campo Senha não pode ser vazio", "login-alert", "error");
        return false;
    }

    let user = getUsers()[email];

    if (!user) {
        setAlert("Usuário não encontrado", "login-alert", "error");
        return false;
    }

    if (user.password !== password) {
        setAlert("Senha incorreta", "login-alert", "error");
        return false;
    }


    return user;
}

function validationRegistration(name, email, password) {
    if (email === "") {
        setAlert("Campo E-mail não pode ser vazio", "register-alert", "error");
        return false;
    }

    if (email.match(/^([\w]+[\w$-/:-?{-~!"^_`\[\]]*)@([\w]+)\.(\w+)$/) === null) {
        setAlert("E-mail inválido", "register-alert", "error");
        return false;
    }

    if (getUsers()[email]) {
        setAlert("E-mail já cadastrado", "register-alert", "error");
        return false;
    }

    if (name === "") {
        setAlert("Campo Nome não pode ser vazio", "register-alert", "error");
        return false;
    }

    if (password === "") {
        setAlert("Campo Senha não pode ser vazio", "register-alert", "error");
        return false;
    }


    return true;
}

export function setLoggedUser(email, password) {
    let user = validationLogin(email, password)
    if (user) {
        localStorage.setItem("loggedUser", JSON.stringify(user));


        if (user.roles === "ROLE_ADMIN") {
            window.location.href = "http://localhost:63342/Hotel-DEVaneio/src/pages/admin/home_admin.html";
            return;
        }

        window.location.href = "http://localhost:63342/Hotel-DEVaneio/";

    }
}

export function setAlert(message, element, code) {
    let alert = document.getElementById(element);

    if (!alert) {
        return;
    }

    if (code === "error") {
        alert.parentElement.classList.add("bg-red-lighten-6");
        alert.parentElement.classList.add("color-red-darken-6");
        alert.parentElement.classList.remove("bg-green-lighten-6");
        alert.parentElement.classList.remove("color-green-darken-6");
    }
    else if (code === "success") {
        alert.parentElement.classList.remove("bg-red-lighten-6");
        alert.parentElement.classList.remove("color-red-darken-6");
        alert.parentElement.classList.add("bg-green-lighten-6");
        alert.parentElement.classList.add("color-green-darken-6");
    }

    alert.innerHTML = message;
    alert.parentElement.classList.remove("d-none");
}