<template>
  <ul>
    <li v-for="(item, i) in menu" :key="item">
      <a :href="menu[i].valor">{{ menu[i].item }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      colorNavBar: ["black", "white"],
      menu: [
        {
          item: "Sobre nós",
          valor:
            "https://texpertsg3.github.io/Hotel-DEVaneio/src/pages/about.html",
        },
        {
          item: "Acomodações",
          valor:
            "https://texpertsg3.github.io/Hotel-DEVaneio/src/pages/accommodations/accommodations.html",
        },
        {
          item: "Gastronomia",
          valor:
            "https://texpertsg3.github.io/Hotel-DEVaneio/src/pages/gastronomy.html",
        },
        {
          item: "Reservas",
          valor:
            "https://texpertsg3.github.io/Hotel-DEVaneio/src/pages/reservations.html",
        },
        {
          item: "Fale Conosco",
          valor:
            "https://texpertsg3.github.io/Hotel-DEVaneio/src/pages/contact_us.html",
        },
      ],
    };
  },
};
</script>
