<!-- eslint-disable prettier/prettier -->
<template>
  <section class="container">
    <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
      <SplideSlide>
        <section class="row container j-space-evenly">
          <div class="col-6-xl col-6-lg col-6-md col-6-sm col-6-xs">
            <img
              src="../assets/images/accommodations/quarto-c.jpg"
              alt=""
              class="img col-12-xl col-12-lg col-12-md col-12-sm col-12-xs"
            />
          </div>
          <div
            class="row gap-2 col-4-xl col-4-lg col-4-md col-4-sm col-4-xs a-center a-item-center"
          >
            <header class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs">
              <h2 class="row font-size-large">Acomodação C</h2>
            </header>
            <article class="row a-center a-item-center j-space-between">
              <div class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs gap-2">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nemo alias a
                  impedit praesentium aliquam, ratione nisi expedita libero deserunt dolore maiores
                  vel eveniet soluta provident porro accusamus ducimus voluptatum?
                </p>
                <a href="/reservations" target="_blank" class="btn-primary color-white"
                  >Faça sua Reserva</a
                >
              </div>
            </article>
          </div>
        </section>
      </SplideSlide>
      <SplideSlide>
        <section class="row container j-space-evenly">
          <div class="col-6-xl col-6-lg col-6-md col-6-sm col-6-xs">
            <img
              src="../assets/images/accommodations/quarto-c2.jpg"
              alt=""
              class="img col-12-xl col-12-lg col-12-md col-12-sm col-12-xs"
            />
          </div>
          <div
            class="row gap-2 col-4-xl col-4-lg col-4-md col-4-sm col-4-xs a-center a-item-center"
          >
            <header class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs">
              <h2 class="row font-size-large">Acomodação C++</h2>
            </header>
            <article class="row a-center a-item-center j-space-between">
              <div class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs gap-2">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nemo alias a
                  impedit praesentium aliquam, ratione nisi expedita libero deserunt dolore maiores
                  vel eveniet soluta provident porro accusamus ducimus voluptatum?
                </p>
                <a href="/reservations" target="_blank" class="btn-primary color-white"
                  >Faça sua Reserva</a
                >
              </div>
            </article>
          </div>
        </section>
      </SplideSlide>
      <SplideSlide>
        <section class="row container j-space-evenly">
          <div class="col-6-xl col-6-lg col-6-md col-6-sm col-6-xs">
            <img
              src="../assets/images/accommodations/quarto_c-sharp.jpg"
              alt=""
              class="img col-12-xl col-12-lg col-12-md col-12-sm col-12-xs"
            />
          </div>
          <div
            class="row gap-2 col-4-xl col-4-lg col-4-md col-4-sm col-4-xs a-center a-item-center"
          >
            <header class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs">
              <h2 class="row font-size-large">Acomodação C#</h2>
            </header>
            <article class="row a-center a-item-center j-space-between">
              <div class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs gap-2">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nemo alias a
                  impedit praesentium aliquam, ratione nisi expedita libero deserunt dolore maiores
                  vel eveniet soluta provident porro accusamus ducimus voluptatum?
                </p>
                <a href="/reservations" target="_blank" class="btn-primary color-white"
                  >Faça sua Reserva</a
                >
              </div>
            </article>
          </div>
        </section>
      </SplideSlide>
    </Splide>
  </section>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';
import '@splidejs/vue-splide/css/core';

export default {
  name: 'RoomsCarousel',
  components: {
    Splide,
    SplideSlide,
  },
};
</script>

<style>
.splide__arrow svg {
  fill: black !important;
}
.splide__pagination__page:hover {
  background: black;
}
.splide__pagination__page.is-active {
  background: black;
}
</style>
