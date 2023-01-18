var btn_login = document.getElementById("btn_login");
var username = document.querySelector("#username").value;
var password = document.querySelector("#password").value;
var hello_user = document.getElementById("hello_user");
var user, loginTemp, senhaTemp;
loginTemp = [
  "Albino",
  "Raissa",
  "Fernando",
  "Bruno",
  "Italo",
  "Jefferson",
  "Daniel",
  "Amanada",
  "Fabricio",
  "Rafael",
];
senhaTemp = "1234";

username.indexOf('"') || username.indexOf("'")
  ? (username = username.replace('"', ""))
  : username.indexOf("", 0) || username.indexOf("", username.length)
  ? (username = username.slice(indexOf("")))
  : null;

password.indexOf('"') || password.indexOf("'")
  ? (password = password.replace('"', ""))
  : password.indexOf("", 0) || password.indexOf("", password.length)
  ? (password = password.slice(indexOf("")))
  : null;

function login() {
  var username = document.querySelector("#username").value;
  var password = document.querySelector("#password").value;
  localStorage.setItem("usuario", username);
  localStorage.setItem("senha", password);
  const usuario = localStorage.getItem("usuario");
  const senha = localStorage.getItem("senha");

  for (let i = 0; i < loginTemp.length; i++) {
    if (usuario.length < 3) {
      alert("Por favor, preencha adequadamente os campos.");
      break;
    } else if (usuario === loginTemp[i] && senha === senhaTemp) {
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
