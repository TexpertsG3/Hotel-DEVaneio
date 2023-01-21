import { loginTemp, senhaTemp, loginAdmin } from './modules/users.js';
import { validateAccess, validateEmail, validateCase } from './modules/validation.js'

const btn_login = document.querySelector("#btn_login");
const btn_register = document.querySelector("#btn_register");

/* Operações do Login e autenticação. */
btn_login.addEventListener("click", () => {
  let email = document.querySelector("#username").value;
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;

  username.includes('@') && username.includes('.com') ? localStorage.setItem("mail", email) : localStorage.setItem("usuario", username);
  localStorage.setItem("senha", password);

  const usuario = localStorage.getItem("usuario");
  const senha = localStorage.getItem("senha");



  if (usuario.length < 3) {
    alert("Por favor, preencha adequadamente os campos.");
    localStorage.clear();
  } else if (validateAccess(usuario, loginAdmin) && senha == senhaTemp) {
    alert("Login de adimnistrador bem sucedido, você será redirecionado.");
    location.href = "../pages/admin/home_admin.html";
  } else if (validateAccess(usuario, loginTemp) && senha == senhaTemp || validateAccess(usuario, localStorage.getItem('usuario')) && senha == senhaTemp) {
    alert("Login bem sucedido, você será redirecionado.");
    location.href = "../../index.html";
  } else {
    alert("Por favor, verifique suas credenciais.");
    localStorage.clear();
  }
});

/* Operações do registro */
btn_register.addEventListener("click", () => {
  let email = document.querySelector("#new_userEmail").value.trim().replace(/'/g, "").replace(/"/g, "").replace(" ", "");
  let username = document.querySelector("#new_userUsuario").value.trim().replace(/'/g, "").replace(/"/g, "").replace(" ", "");
  let password = document.querySelector("#new_userPassword").value.trim().replace(/'/g, "").replace(/"/g, "").replace(" ", "");

  localStorage.setItem("mail", email);
  localStorage.setItem("usuario", username);
  localStorage.setItem("senha", password);

  const mail = localStorage.getItem("mail");
  const usuario = localStorage.getItem("usuario");
  const senha = localStorage.getItem("senha");

  if (usuario.length < 3 || validateEmail(mail) == false || validateCase(mail)) {
    alert("Por favor, preencha adequadamente os campos solicitados.(Sem aspas e letras maiúsculas.)");
    localStorage.clear()
  } else if (validateAccess(usuario, loginTemp) || validateAccess(mail, loginTemp)) {
    alert("Desculpe, esse usuário já existe. Por favor, escolha outro, ou escolha logar ao lado.")
    localStorage.clear()
  } else {
    loginTemp.push(mail);
    loginTemp.push(usuario);
    loginTemp.push(senha);
    alert("Resgistro concluído com sucesso.");
    location.href = "../../index.html";
  }
});


