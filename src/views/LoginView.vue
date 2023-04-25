<!-- eslint-disable prettier/prettier -->
<template>
  <!-- Versão tablet/desktop -->
  <section class="loginTablet pd-2">
    <div class="container row j-space-between pt-3 pb-3">
      <form class="row col-5-xl col-5-lg col-5-md col-5-sm col-5-xs gap-1 a-center">
        <legend class="font-size-large col-12-xl col-12-lg col-12-md col-12-sm col-12-xs">
          Entrar
        </legend>

        <div class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs gap-1">
          <label>Usuário</label>
          <input
            v-model="username"
            type="text"
            name="username"
            id="username"
            placeholder=" Insira seu usuário"
            class="input-primary col-12-xl col-12-lg col-12-md col-12-sm col-12-xs"
          />
        </div>

        <div class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs gap-1">
          <label>Senha</label>
          <input
            v-model="password"
            type="password"
            name="password"
            id="password"
            placeholder=" Insira sua senha"
            class="input-primary col-12-xl col-12-lg col-12-md col-12-sm col-12-xs"
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

      <form class="row col-5-xl col-5-lg col-5-md col-5-sm col-5-xs gap-1 a-center">
        <legend class="font-size-large col-12-xl col-12-lg col-12-md col-12-sm col-12-xs">
          Registrar
        </legend>

        <div class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs gap-1">
          <label for="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="new_userEmail"
            placeholder=" Coloque seu E-mail"
            class="input-primary col-12-xl col-12-lg col-12-md col-12-sm col-12-xs"
          />
        </div>

        <div class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs gap-1">
          <label for="user2">Usuário</label>
          <input
            type="text"
            name="user2"
            id="new_userUsuario"
            placeholder=" Crie o seu usuário"
            class="input-primary col-12-xl col-12-lg col-12-md col-12-sm col-12-xs"
          />
        </div>

        <div class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs gap-1">
          <label for="password2">Senha</label>
          <input
            type="password"
            name="password2"
            id="new_userPassword"
            placeholder=" Crie a sua senha"
            class="input-primary col-12-xl col-12-lg col-12-md col-12-sm col-12-xs"
          />
        </div>

        <input
          class="btn-primary color-white"
          type="button"
          id="btn_register"
          value="Registrar"
          @click="handleRegistro"
        />
      </form>
    </div>
  </section>

  <!-- Versão mobile -->
  <section class="loginMobile container row j-space-between pt-3 pb-3 t--webkit-center">
    <div class="">
      <form class="row col-5-xl col-5-lg col-5-md col-5-sm col-5-xs gap-1 a-center">
        <legend class="font-size-large col-12-xl col-12-lg col-12-md col-12-sm col-12-xs">
          Entrar
        </legend>

        <div class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs gap-1">
          <label>Usuário</label>
          <input
            v-model="username"
            type="text"
            name="username"
            id="username"
            placeholder="Usuário"
            class="input-primary col-12-xl col-12-lg col-12-md col-12-sm col-12-xs"
          />
        </div>

        <div class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs gap-1">
          <label>Senha</label>
          <input
            v-model="password"
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            class="input-primary col-12-xl col-12-lg col-12-md col-12-sm col-12-xs"
          />
        </div>

        <div class="col-12-xs">
          <input
            type="button"
            id="btn_login"
            class="btn-primary color-white a-center"
            value="Entrar"
            @click="handleLogin"
          />
        </div>
      </form>
    </div>
    <div class="mt-4">
      <form class="row col-5-xl col-5-lg col-5-md col-5-sm col-5-xs gap-1 a-center">
        <legend class="font-size-large col-12-xl col-12-lg col-12-md col-12-sm col-12-xs">
          Registrar
        </legend>

        <div class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs gap-1">
          <label for="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="new_userEmail"
            placeholder="E-mail"
            class="input-primary col-12-xl col-12-lg col-12-md col-12-sm col-12-xs"
          />
        </div>

        <div class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs gap-1">
          <label for="user2">Usuário</label>
          <input
            type="text"
            name="user2"
            id="new_userUsuario"
            placeholder="Nome de usuário"
            class="input-primary col-12-xl col-12-lg col-12-md col-12-sm col-12-xs"
          />
        </div>

        <div class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs gap-1">
          <label for="password2">Senha</label>
          <input
            type="password"
            name="password2"
            id="new_userPassword"
            placeholder="Nova senha"
            class="input-primary col-12-xl col-12-lg col-12-md col-12-sm col-12-xs"
          />
        </div>

        <div class="col-12-xs">
          <input
            class="btn-primary color-white"
            type="button"
            id="btn_register"
            value="Registrar"
            @click="handleRegistro"
          />
        </div>
      </form>
    </div>
  </section>

  <!-- <div>{{ hospedes }}</div> -->
</template>

<!-- Script original -->

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
    const nameLogged = ref(document.getElementById('header__username'));
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

<!-- Script que eu fiz com o registrar junto e logout, não sei se está certo -->
<!-- 
<script>
import { onMounted, ref } from 'vue';
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
    const nameLogged = ref(document.getElementById('header__username'));

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
        alert('Usuário e/ou senha incorretos');
      }
    }

    function handleLogout() {
      localStorage.removeItem('userAdmin');
      localStorage.removeItem('userHospede');
      logged.value.style.display = 'none';
      logIn.value.style.display = 'flex';
      nameLogged.value.style.display = 'none';
      nameLogged.value.innerText = '';
    }

    function handleRegistro() {
      const email = document.getElementById('new_userEmail').value;
      const nome = document.getElementById('new_userUsuario').value;
      const senha = document.getElementById('new_userPassword').value;
      api
        .post('/hospede', {
          nome,
          email,
          senha,
        })
        .then((response) => {
          console.log(response);
          alert('Usuário cadastrado com sucesso');
        })
        .catch((error) => console.error(error));
    }

    return {
      username,
      password,
      handleLogin,
      handleLogout,
      handleRegistro,
    };
  },
};
</script> -->
