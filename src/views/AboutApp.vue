<script>

import About from "./views/about.vue";

export default {
    name: "AboutApp",
    components: {
        About
    },
};
</script>

<template>
<HeaderContent />
  <router-view />
  <FooterContent />
</template>
