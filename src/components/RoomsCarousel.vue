<!-- eslint-disable prettier/prettier -->
<template>
  <section class="container">
    <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
      <SplideSlide>
        <img
          src="@/assets/images/accommodations/quarto-c.jpg"
          alt="Sample 1"
          class="img"
        />
        <div class="row col-12-xl gap-2 col-2-lg md-2">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            nemo alias a impedit praesentium aliquam, ratione nisi expedita
            libero deserunt dolore maiores vel eveniet soluta provident porro
            accusamus ducimus voluptatum?
          </p>
          <a
            href="/reservations"
            target="_blank"
            class="btn-primary color-white"
            >Faça sua Reserva</a
          >
        </div>
      </SplideSlide>
      <SplideSlide class="container row md-2">
        <img
          class="img"
          src="@/assets/images/accommodations/quarto_c-plus-plus.jpg"
          alt="Sample 2"
        />
        <div class="row col-12-xl gap-2 col-2-lg md-2">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            nemo alias a impedit praesentium aliquam, ratione nisi expedita
            libero deserunt dolore maiores vel eveniet soluta provident porro
            accusamus ducimus voluptatum?
          </p>
          <a
            href="/reservations"
            target="_blank"
            class="btn-primary color-white"
            >Faça sua Reserva</a
          >
        </div>
      </SplideSlide>
      <SplideSlide class="row md-2">
        <img
          class="img"
          src="@/assets/images/accommodations/quarto_c-sharp.jpg"
          alt="Sample 2"
        />
        <div class="row col-12-xl gap-2 col-2-lg md-2">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            nemo alias a impedit praesentium aliquam, ratione nisi expedita
            libero deserunt dolore maiores vel eveniet soluta provident porro
            accusamus ducimus voluptatum?
          </p>
          <a
            href="/reservations"
            target="_blank"
            class="btn-primary color-white"
            >Faça sua Reserva</a
          >
        </div>
      </SplideSlide>
    </Splide>
  </section>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import "@splidejs/vue-splide/css/skyblue";
import "@splidejs/vue-splide/css/sea-green";
import "@splidejs/vue-splide/css/core";

export default {
  name: "RoomsCarousel",
  components: {
    Splide,
    SplideSlide,
  },
};
</script>
