<template>
  <ul>
    <li v-for="(item, i) in menu" :key="item">
      <router-link :to="menu[i].valor">{{ menu[i].item }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavBarAdmin',
  data() {
    return {
      menu: [
        {
          item: 'HomeAdmin',
          valor: '/',
        },
        {
          item: 'Funcionários',
          valor: '/employees',
        },
        {
          item: 'Hóspedes',
          valor: '/guests',
        },
        {
          item: 'Reservas',
          valor: '/reservationsAdmin',
        },
      ],
    };
  },
};
</script>
