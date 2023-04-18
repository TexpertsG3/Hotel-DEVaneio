<template>
  <ul>
    <li v-for="(item, i) in menu" :key="item">
      <router-link :to="menu[i].valor">{{ menu[i].item }}</router-link>
    </li>
  </ul>

<!-- Início de código para fazer um menu hamburguer para usar em telas menores -->
  <!-- 
   <div class="mobile-menu-icon">
      <button onclick="menuShow()">
        <img class="icon" src="assets/img/menu_white_36dp.svg" alt="" />
      </button>
    </div>
  <div class="mobile-menu">
    <ul>
      <li v-for="(item, i) in menu" :key="item">
        <router-link :to="menu[i].valor">{{ menu[i].item }}</router-link>
      </li>
    </ul>

    <div class="login-button">
      <button><a href="#">Login</a></button>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      menu: [
        {
          item: "Home",
          valor: "/",
        },
        {
          item: "Sobre",
          valor: "/about",
        },
        {
          item: "Acomodações",
          valor: "/rooms",
        },
        {
          item: "Gastronomia",
          valor: "/gastronomy",
        },
        {
          item: "Reservas",
          valor: "/reservations",
        },
        {
          item: "Contato",
          valor: "/contact-us",
        },
      ],
    };
  },
};
</script>
