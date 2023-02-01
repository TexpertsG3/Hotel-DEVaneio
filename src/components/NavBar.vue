<template>
  <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">Sobre</router-link></li>
        <li><router-link to="/Rooms">Acomodações</router-link></li>
        <li><router-link to="/Gastronomy">Gastronomia</router-link></li>
        <li><router-link to="/ContactUs">Fale Conosco</router-link></li>
        <li><router-link to="/Reservations">Fale Conosco</router-link></li>

      </ul>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      menu: [
        {
          item: "Sobre nós",
          valor:"http://localhost:5173/Hotel-DEVaneio/src/views/about.vue",
          },
        {
          item: "Acomodações",
          valor:
            "http://localhost:5173/Hotel-DEVaneio/src/pages/accommodations/accommodations.html",
        },
        {
          item: "Gastronomia",
          valor:
            "http://localhost:5173/Hotel-DEVaneio/src/pages/gastronomy.html",
        },
        {
          item: "Reservas",
          valor:
            "http://localhost:5173/Hotel-DEVaneio/src/pages/reservations.html",
        },
        {
          item: "Fale Conosco",
          valor:
            "http://localhost:5173/Hotel-DEVaneio/src/pages/contact_us.html",
        },
      ],
    };
  },
};
</script>
