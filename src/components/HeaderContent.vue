<template>
  <div class="bg-secondary">
    <header class="container header">
      <div class="row j-space-between col-12-xl a-center a-item-center">
        <a
          href="http://localhost:5173/Hotel-DEVaneio/"
          class="header__logo col-1-xl"
        >
          <img
            src="http://localhost:5173/Hotel-DEVaneio/src/assets/images/logo/logo_sem_fundo.png"
            alt="Logo"
            class="col-12-xl"
          />
        </a>
        <a
          id="header__login"
          href="http://localhost:5173/Hotel-DEVaneio/src/pages/login.html"
          class="btn-primary"
          >Login</a
        >
        <nav class="nav-menu-primary color-white">
          <NavBar />
        </nav>
        <div id="header__logged" class="row a-item-center gap-2">
          <p id="header__user-name" class="color-white"></p>
          <a id="header__logout" class="btn-primary color-white" href="#"
            >Sair</a
          >
        </div>
      </div>
      <span class="spacer bg-white"></span>
    </header>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  name: "HeaderContent",
  components: {
    NavBar,
  },
};
</script>
