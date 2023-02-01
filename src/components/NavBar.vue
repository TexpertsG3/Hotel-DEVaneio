<template>
  <ul>
        <li v-for="(item, i) in menu" :key="item"><router-link :to="menu[i].valor">{{ menu[i].item }}</router-link></li>
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
          valor:"/",
          },  
      {
          item: "Sobre nós",
          valor:"/about",
          },
        {
          item: "Acomodações",
          valor:
            "/Rooms",
        },
        {
          item: "Gastronomia",
          valor:
            "/Gastronomy",
        },
        {
          item: "Reservas",
          valor:
            "/Reservations",
        },
        {
          item: "Fale Conosco",
          valor:
            "/ContactUs",
        },
      ],
    };
  },
};
</script>
