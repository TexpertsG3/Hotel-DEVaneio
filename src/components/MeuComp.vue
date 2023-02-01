<template>
  <h1>Bora codar com {{ vue }} Js!</h1>
  <button @click="count++">{{ count }}</button>
</template>

<script>
export default {
  name: "MeuComp",
  data() {
    return {
      vue: "Vue 4",
      count: 0,
    };
  },
};
</script>
