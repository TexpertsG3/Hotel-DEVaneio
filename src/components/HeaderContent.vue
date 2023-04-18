<!-- eslint-disable prettier/prettier -->
<template>
  <div class="bg-secondary">
    <header class="container header">
      <div class="row j-space-between col-12-xl a-center a-item-center">
        <a href="/" class="header__logo col-1-xl">
          <img src="@/assets/images/logo/logo_sem_fundo.png" alt="Logo" class="col-12-xl" />
        </a>
        <a id="header__login" href="/login" class="btn-primary">Login</a>
        <div id="header__logged" class="row a-item-center gap-2">
          <p id="header__user-name" class="color-white"></p>
          <a id="header__logout" class="btn-primary color-white" href="/login" @click="logout"
            >Sair</a
          >
        </div>
        <nav class="nav-menu-primary color-white">
          <NavBar />
        </nav>
      </div>
      <span class="spacer bg-white"></span>
    </header>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import { ref } from 'vue';
import NavBar from './NavBar.vue';

export default {
  name: 'HeaderContent',
  components: {
    NavBar,
  },
  data(){
    return {
      logged : document.getElementById('header__logged'),
      logIn : document.getElementById('header__login'),
      nameLogged : document.getElementById('header__user-name')
    };
  },
  methods: {
    verify(){
      if(localStorage.getItem('userName')){
        this.logged.value.style.display = 'flex';
        this.logIn.value.style.display = 'none';
        this.nameLogged.value.style.display = 'flex';
        this.nameLogged.value.innerText = localStorage.getItem('userName');
      }
    },
  },
};
</script>
