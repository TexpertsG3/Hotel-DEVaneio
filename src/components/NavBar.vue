<template>
  <ul>
    <li v-for="(item, i) in menu" :key="item">
      <router-link :to="menu[i].valor">{{ menu[i].item }}</router-link>
    </li>
  </ul>
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
