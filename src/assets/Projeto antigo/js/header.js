/* eslint-disable prettier/prettier */
import { getLoggedUser } from "./ls.js";

export function headerLoggedAction() {
  let logged = document.getElementById("header__logged");
  let login = document.getElementById("header__login");

  if (getLoggedUser()) {
    logged.style.display = "flex";
    let name = document.getElementById("header__user-name");
    if (name) {
      name.innerHTML = getLoggedUser().name;
    }

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

  logout.addEventListener("click", () => {
    localStorage.removeItem("loggedUser");

    window.location.href =
      "http://localhost:5173/Hotel-DEVaneio/src/pages/login.html";
  });
}
