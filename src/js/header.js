import {getLogedUser} from "./ls.js";

export function headerLoggedAction() {
    let logged = document.getElementById("header__logged");
    let login = document.getElementById("header__login");

    if (getLogedUser()) {
        logged.style.display = "flex";
        login.style.display = "none";
    } else {
        logged.style.display = "none";
        login.style.display = "flex";
    }

    logoutAction();
}

function logoutAction() {
    let logout = document.getElementById("header__logout");

    if (!logout) {
        return;
    }

    logout.addEventListener("click", ev => {
        localStorage.removeItem("loggedUser");

        window.location.href = "http://localhost:63342/Hotel-DEVaneio/src/pages/login.html";

    });
}