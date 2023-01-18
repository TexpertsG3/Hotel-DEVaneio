var btn_login = document.getElementById("btn_login");
var hello_user = document.getElementById("hello_user");

function verificaUser() {
  const usuario = localStorage.getItem("usuario");
  const senha = localStorage.getItem("senha");
  document.querySelector(
    "#hello_user"
  ).innerText = `Olá, ${localStorage.getItem(`usuario`)}`;
  document.querySelector("#user_loged").classList.remove("d-none");
  document.querySelector("#btn_sigin").classList.add("d-none");
}

localStorage.getItem("usuario") ? verificaUser() : null;
