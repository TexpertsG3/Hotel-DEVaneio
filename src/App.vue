<script>
import HeaderContent from "./components/HeaderContent.vue";
import FooterContent from "./components/FooterContent.vue";

export default {
  name: "App",
  components: {
    HeaderContent,
    FooterContent
  },
};
</script>

<template>
  <HeaderContent />
  <router-view />
  <FooterContent />
</template>
