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
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  data() {
    return {
      login: [
        'Albino',
        'albino@tex.com',
        'Raissa',
        'raissa@tex.com',
        'Fernando',
        'fernando@tex.com',
        'Bruno',
        'bruno@tex.com',
        'Italo',
        'italo@tex.com',
        'Jefferson',
        'jefferson@tex.com',
        'Daniel',
        'daniel@tex.com',
        'Amanda',
        'amanda@tex.com',
        'Fabricio',
        'fabricio@tex.com',
        'Rafael',
        'rafael@tex.com',
      ],
      senha: '1234',
      username: '',
      password: '',
      logged: document.getElementById('header__logged'),
      logIn: document.getElementById('header__login'),
      nameLogged: document.getElementById('header__user-name'),
    };
  },
  methods: {
    validateAccess(input, validStrings) {
      return validStrings.includes(input);
    },
    validateEmail(email) {
      return /^\S+@\S+\.\S+$/.test(email);
    },
    validateCase(email) {
      return /[A-Z]/.test(email);
    },
    handleLogin() {
      console.log(this.login);
      if (
        this.validateAccess(this.username, this.login) &&
        this.validateAccess(this.password, this.senha)
      ) {
        // Armazene o usuário logado no localStorage
        localStorage.setItem('user', this.username);
        this.logged.style.display = 'flex';
        this.logIn.style.display = 'none';
        this.nameLogged.style.display = 'flex';
        this.nameLogged.innerText = this.username;

        // Redirecione o usuário para a página inicial
        this.$router.push({ path: '/' });
      } else {
        // Mostre uma mensagem de erro ao usuário
        alert('Usuário ou senha inválidos');
      }
    },
  },
};
</script>
