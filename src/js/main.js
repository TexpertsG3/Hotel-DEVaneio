var btn_login = document.getElementById("btn_login");
var hello_user = document.getElementById("hello_user");
var out_user = document.getElementById("out_user");

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

out_user.addEventListener("click", () => {
  document.querySelector("#user_loged").classList.add("d-none");
  document.querySelector("#btn_sigin").classList.remove("d-none");
});
