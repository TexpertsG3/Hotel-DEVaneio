<!-- eslint-disable prettier/prettier -->
<template>
  <div class="container row j-space-between pt-3 pb-3">
    <form class="row col-5-xl gap-1 a-center">
      <legend class="font-size-large col-12-xl">Entrar</legend>

      <div class="row col-12-xl gap-1">
        <label>Usuário</label>
        <input
          v-model="username"
          type="text"
          name="username"
          id="username"
          placeholder=" Insira seu usuário"
          class="input-primary col-12-xl"
        />
      </div>

      <div class="row col-12-xl gap-1">
        <label>Senha</label>
        <input
          v-model="password"
          type="password"
          name="password"
          id="password"
          placeholder=" Insira sua senha"
          class="input-primary col-12-xl"
        />
      </div>

      <input
        type="button"
        id="btn_login"
        class="btn-primary color-white"
        value="Entrar"
        @click="handleLogin"
      />
    </form>

    <form class="row col-5-xl gap-1 a-center">
      <legend class="font-size-large col-12-xl">Registrar</legend>

      <div class="row col-12-xl gap-1">
        <label for="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="new_userEmail"
          placeholder=" Coloque seu E-mail"
          class="input-primary col-12-xl"
        />
      </div>

      <div class="row col-12-xl gap-1">
        <label for="user2">Usuário</label>
        <input
          type="text"
          name="user2"
          id="new_userUsuario"
          placeholder=" Crie o seu usuário"
          class="input-primary col-12-xl"
        />
      </div>

      <div class="row col-12-xl gap-1">
        <label for="password2">Senha</label>
        <input
          type="password"
          name="password2"
          id="new_userPassword"
          placeholder=" Crie a sua senha"
          class="input-primary col-12-xl"
        />
      </div>

      <input class="btn-primary color-white" type="button" id="btn_register" value="Registrar" />
    </form>
  </div>

  <div>{{ hospedes }}</div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import { onMounted, ref } from 'vue';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { api } from '@/services/api';
export default {
  name: 'LoginView',
  setup() {
    const admins = ref([]);
    const fetchAdmins = () => api.get('/admin').then((response) => (admins.value = response.data));
    const hospedes = ref([]);
    const fetchHospedes = () =>
      api.get('/hospede').then((response) => (hospedes.value = response.data));
    onMounted(() => {
      fetchAdmins();
      fetchHospedes();
    });
    const username = ref('');
    const password = ref('');
    const logged = ref(document.getElementById('header__logged'));
    const logIn = ref(document.getElementById('header__login'));
    const nameLogged = ref(document.getElementById('header__user-name'));
    function handleLogin() {
      let tipoDeUsuario;
      const correspondeAdmin = admins.value.find(
        (admin) => admin.email === username.value && admin.senha === password.value
      );
      const correspondeHospede = hospedes.value.find(
        (hospede) => hospede.email === username.value && hospede.senha === password.value
      );
      if (correspondeAdmin) {
        localStorage.setItem('userAdmin', correspondeAdmin.nome);
        logged.value.style.display = 'flex';
        logIn.value.style.display = 'none';
        nameLogged.value.style.display = 'flex';
        nameLogged.value.innerText = correspondeAdmin.nome;
        tipoDeUsuario = 'admin';
      } else if (correspondeHospede) {
        localStorage.setItem('userHospede', correspondeHospede.nome);
        logged.value.style.display = 'flex';
        logIn.value.style.display = 'none';
        nameLogged.value.style.display = 'flex';
        nameLogged.value.innerText = correspondeHospede.nome;
        tipoDeUsuario = 'hospede';
      } else {
        // Mostre uma mensagem de erro ao usuário
        alert('Usuário ou senha inválidos');
      }
      // eslint-disable-next-line no-unused-expressions
      tipoDeUsuario === 'admin'
        ? (window.location.href = 'http://localhost:5173/HomeAdmin')
        : (window.location.href = 'http://localhost:5173/');
    }
    return { admins, hospedes, username, password, logged, logIn, nameLogged, handleLogin };
  },
};
</script>
