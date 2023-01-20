// import * as users from "./users.js"; -- forma de importação que

const btn_login = document.querySelector("#btn_login");
const btn_register = document.querySelector("#btn_register");

var user;
var loginTemp = [
  "Albino",
  "albino@tex.com",
  "Raissa",
  "raissa@tex.com",
  "Fernando",
  "fernando@tex.com",
  "Bruno",
  "bruno@tex.com",
  "Italo",
  "italo@tex.com",
  "Jefferson",
  "jefferson@tex.com",
  "Daniel",
  "daniel@tex.com",
  "Amanda",
  "amanda@tex.com",
  "Fabricio",
  "fabricio@tex.com",
  "Rafael",
  "rafael@tex.com",
  ,
];
var senhaTemp = ["1234"];

function validateAccess(input, validStrings) {
  return validStrings.includes(input);
}

function validateEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}


/* Operações do Login e autenticação. */
btn_login.addEventListener("click", () => {
  let email = document.querySelector("#username").value;
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  localStorage.setItem("mail", email);
  localStorage.setItem("usuario", username);
  localStorage.setItem("senha", password);

  const mail = localStorage.getItem("mail");
  const usuario = localStorage.getItem("usuario");
  const senha = localStorage.getItem("senha");

  if (usuario.length < 3) {
    alert("Por favor, preencha adequadamente os campos.");
  } else if (validateAccess(usuario, loginTemp) && senha == senhaTemp) {
    alert("Login bem sucedigo, você será redirecionado.");
    location.href = "../../index.html";
    document.querySelector(
      "#hello_user"
    ).innerText = `Olá, ${localStorage.getItem(`usuario`)}`;
    document.querySelector("#user_loged").classList.remove("d-none");
    document.querySelector("#btn_sigin").classList.add("d-none");
  } else {
    alert("Por favor, verifique suas credenciais.");
  }
});

/* Operações do registro */
btn_register.addEventListener("click", () => {
  let email = document.querySelector("#new_userEmail").value.trim().replace(/'/g, "").replace(/"/g, "");
  let username = document.querySelector("#new_userUsuario").value.trim().replace(/'/g, "").replace(/"/g, "");
  let password = document.querySelector("#new_userPassword").value.trim().replace(/'/g, "").replace(/"/g, "");

  localStorage.setItem("mail", email);
  localStorage.setItem("usuario", username);
  localStorage.setItem("senha", password);

  const mail = localStorage.getItem("mail");
  const usuario = localStorage.getItem("usuario");
  const senha = localStorage.getItem("senha");

  if (usuario.length < 3 || validateEmail(mail) == false) {
    alert("Por favor, preencha adequadamente os campos solicitados.");
  } else if (validateAccess(usuario, loginTemp) || validateAccess(mail, loginTemp)) {
    alert("Desculpe, esse usuário já exite. Por favor, escolha outro, ou escolha logar ao lado.")
  } else {
    loginTemp.push(mail);
    loginTemp.push(usuario);
    loginTemp.push(senha);
    alert("Resgistro concluído com sucesso.");
    location.href = "../../index.html";
  }
});
