// import { loginTemp } from "./users.js";
// import { validateAccess } from "./validation.js";
//
// // var btn_login = document.getElementById("btn_login");
// // var hello_user = document.getElementById("hello_user");
// var out_user = document.getElementById("out_user");
//
// function verificaUser() {
//   localStorage.getItem("usuario");
//   localStorage.getItem("senha");
//   document.querySelector(
//     "#hello_user"
//   ).innerText = `Olá, ${localStorage.getItem(`usuario`)}`;
//   document.querySelector("#user_logged").classList.remove("d-none");
//   document.querySelector("#btn_sigin").classList.add("d-none");
// }
//
// localStorage.getItem("usuario") ? verificaUser() : null;
//
// out_user.addEventListener("click", () => {
//   const usuario = localStorage.getItem("usuario");
//   document.querySelector("#user_logged").classList.add("d-none");
//   document.querySelector("#btn_sigin").classList.remove("d-none");
//
//   validateAccess(usuario, loginTemp) ? localStorage.clear() : null;
// });
