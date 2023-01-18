let loginTemp = [
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
  // document.getElementById("email"),
];

let senhaTemp = "1234";

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

export default { login };
