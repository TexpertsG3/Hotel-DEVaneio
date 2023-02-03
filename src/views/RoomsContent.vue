<!-- eslint-disable prettier/prettier -->
<template>
  <main class="container">
    <section class="row gap-2 j-center pb-3 pt-3">
      <div class="row">
        <header class="row col-12-xl j-center">
          <h2 class="font-size-extra-large">Nossas Acomodações</h2>
        </header>
        <div class="row gap-2 a-center a-item-center">
          <div class="row col-12-xl gap-2 col-2-lg">
            <p class="j-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus nemo alias a impedit praesentium aliquam, ratione nisi
              expedita libero deserunt dolore maiores vel eveniet soluta
              provident porro accusamus ducimus voluptatum?
            </p>
          </div>
        </div>
        <div class="row gap-2 a-center a-item-center"><RoomsCarousel /></div>
      </div>
    </section>
  </main>
</template>

<script>
import RoomsCarousel from "../components/RoomsCarousel.vue";
export default {
  name: "RoomsContent",
  components: {
    RoomsCarousel,
  },
};
</script>
