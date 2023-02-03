<!-- eslint-disable prettier/prettier -->
<template>
  <section class="container">
    <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
      <SplideSlide class="row md-2">
        <div class="row col-7-xl ml-5 pl-5">
          <img
            class="img col-10-xl"
            src="@/assets/images/gastronomy/mediterranea.jpg"
            alt="Sample 2"
          />
          <p class="row col-10-xl">
            <strong>Janeiro e Fevereiro - Festival Mediterâneo</strong>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            nemo alias a impedit praesentium aliquam, ratione nisi expedita
            libero deserunt dolore maiores vel eveniet soluta provident porro
            accusamus ducimus voluptatum?
          </p>
        </div>
      </SplideSlide>
      <SplideSlide class="row md-2">
        <div class="row col-7-xl ml-5 pl-5">
          <img
            class="img col-10-xl"
            src="@/assets/images/gastronomy/italiana.jpg"
            alt="Sample 2"
          />
          <p class="row col-10-xl">
            <strong> Março e Abril - Festival Italiano</strong>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            nemo alias a impedit praesentium aliquam, ratione nisi expedita
            libero deserunt dolore maiores vel eveniet soluta provident porro
            accusamus ducimus voluptatum?
          </p>
        </div>
      </SplideSlide>
      <SplideSlide class="row md-2">
        <div class="row col-7-xl ml-5 pl-5">
          <img
            class="img col-10-xl"
            src="@/assets/images/gastronomy/fastfood.jpg"
            alt="Sample 2"
          />
          <p class="row col-10-xl">
            <strong> Maio e Junho - Fast Food</strong>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            nemo alias a impedit praesentium aliquam, ratione nisi expedita
            libero deserunt dolore maiores vel eveniet soluta provident porro
            accusamus ducimus voluptatum?
          </p>
        </div>
      </SplideSlide>
      <SplideSlide class="row md-2">
        <div class="row col-7-xl ml-5 pl-5">
          <img
            class="img col-10-xl"
            src="@/assets/images/gastronomy/mexicana.jpg"
            alt="Sample 2"
          />
          <p class="row col-10-xl">
            <strong> Julho e Agosto - Festival Mexicano</strong>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            nemo alias a impedit praesentium aliquam, ratione nisi expedita
            libero deserunt dolore maiores vel eveniet soluta provident porro
            accusamus ducimus voluptatum?
          </p>
        </div>
      </SplideSlide>
      <SplideSlide class="row md-2">
        <div class="row col-7-xl ml-5 pl-5">
          <img
            class="img col-10-xl"
            src="@/assets/images/gastronomy/japonesa.jpg"
            alt="Sample 2"
          />
          <p class="row col-10-xl">
            <strong> Setembro e Outubro - Festival Japonês</strong>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            nemo alias a impedit praesentium aliquam, ratione nisi expedita
            libero deserunt dolore maiores vel eveniet soluta provident porro
            accusamus ducimus voluptatum?
          </p>
        </div>
      </SplideSlide>
      <SplideSlide class="row md-2">
        <div class="row col-7-xl ml-5 pl-5">
          <img
            class="img col-10-xl"
            src="@/assets/images/gastronomy/cheese-g2c4761ed0_640.jpg"
            alt="Sample 2"
          />
          <p class="row col-10-xl">
            <strong> Novembro e Dezembro - Festival Brasileiro</strong>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            nemo alias a impedit praesentium aliquam, ratione nisi expedita
            libero deserunt dolore maiores vel eveniet soluta provident porro
            accusamus ducimus voluptatum?
          </p>
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
  name: "GastronomyCarousel",
  components: {
    Splide,
    SplideSlide,
  },
};
</script>
