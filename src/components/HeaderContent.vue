<!-- eslint-disable prettier/prettier -->
<template>
  <div class="bg-secondary">
    <header class="containerHeader container header">
      <div class="row j-space-between col-12-xl a-center a-item-center">
        <a href="/" class="header__logo col-1-xl">
          <img
            src="@/assets/images/logo/logo_sem_fundo.png"
            alt="Logo"
            class="col-12-sm"
            id="logo"
          />
        </a>
        <a id="header__login" href="/login" class="btn-primary">Login</a>
        <div id="header__logged" class="row a-item-center gap-2">
          <p id="header__username" class="color-white">Olá, {{ username }}</p>
          <a
            id="header__logout"
            class="btn-primary color-white"
            href="/login"
            @click="handleLogout"
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
<!-- 
<style>

</style> -->

<script>
import NavBar from './NavBar.vue';

export default {
  name: 'HeaderContent',
  components: {
    NavBar,
  },
  methods: {
    logout() {
      localStorage.clear();
    },
  },
};
</script>
