var username = document.querySelector("#username").value;
var password = document.querySelector("#password").value;
var hello_user = document.getElementById("hello_user");
var new_userEmail = document.querySelector("#new_userEmail").value;
var new_userUsuario = document.querySelector("#new_userUsuario").value;
var new_userPassword = document.querySelector("#new_userPassword").value;

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
  "Amanada",
  "amanda@tex.com",
  "Fabricio",
  "fabricio@tex.com",
  "Rafael",
  "rafael@tex.com",
  ,
];
var senhaTemp = ["1234"];

/* Operações do Login e autenticação. */
function login() {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;

  localStorage.setItem("usuario", username);
  localStorage.setItem("senha", password);

  const usuario = localStorage.getItem("usuario");
  const senha = localStorage.getItem("senha");

  for (let i = 0; i < loginTemp.length; i++) {
    if (usuario.length < 3) {
      alert("Por favor, preencha adequadamente os campos.");
      break;
    } else if (
      (usuario === loginTemp[i] && senha === senhaTemp) ||
      usuario === localStorage.getItem("usuario") ||
      (localStorage.getItem("mail") && localStorage.getItem("senha"))
    ) {
      alert("Login bem sucedigo, você será redirecionado.");
      location.href = "../../index.html";
      document.querySelector(
        "#hello_user"
      ).innerText = `Olá, ${localStorage.getItem(`usuario`)}`;
      document.querySelector("#user_loged").classList.remove("d-none");
      document.querySelector("#btn_sigin").classList.add("d-none");
      break;
    } else {
      alert("Por favor, verifique suas credenciais.");
      break;
    }
  }
}

/* Operações do registro */
function register() {
  let email = document
    .querySelector("#new_userEmail")
    .value.trim()
    .replace(/'/g, "")
    .replace(/"/g, "");
  let username = document
    .querySelector("#new_userUsuario")
    .value.trim()
    .replace(/'/g, "")
    .replace(/"/g, "");
  let password = document
    .querySelector("#new_userPassword")
    .value.trim()
    .replace(/'/g, "")
    .replace(/"/g, "");

  localStorage.setItem("mail", email);
  localStorage.setItem("usuario", username);
  localStorage.setItem("senha", password);

  const mail = localStorage.getItem("mail");
  const usuario = localStorage.getItem("usuario");
  const senha = localStorage.getItem("senha");

  for (let i = 0; i < loginTemp.length; i++) {
    if (mail === loginTemp[i] || usuario === loginTemp[i]) {
      alert("Desculpe, esse usuário já existe.");
      break;
    } else {
      loginTemp.push(mail);
      loginTemp.push(usuario);
      loginTemp.push(senha);
      alert("Resgistro concluído com sucesso.");
      location.href = "../../index.html";
      break;
    }
  }
}
