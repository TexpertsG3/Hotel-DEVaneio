<script>
import HeaderContent from "./components/HeaderContent.vue";
import MainContent from "./components/MainContent.vue";
import FooterContent from "./components/FooterContent.vue";

export default {
  name: "App",
  components: {
    HeaderContent,
    MainContent,
    FooterContent,
  },
};
</script>

<template>
  <HeaderContent />
  <MainContent />
  <FooterContent />
</template>
