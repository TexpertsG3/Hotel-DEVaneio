<!-- eslint-disable prettier/prettier -->

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
<!-- eslint-disable prettier/prettier -->
<template>
  <HeaderContent />
  <router-view />
  <FooterContent />
</template>
<!-- eslint-disable prettier/prettier -->

<style>
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css");
  @import url("http://localhost:5173/Hotel-DEVaneio/src/css/style.css");
  @import url(@/assets/css/style.css);
</style>