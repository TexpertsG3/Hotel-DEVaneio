<!-- eslint-disable prettier/prettier -->
<template>
  <section class="container">
    <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
      <SplideSlide>
        <section class="row container j-space-evenly">
          <div class="col-6-xl">
            <img src="@/assets/images/gastronomy/mediterranea.jpg" alt="" class="img col-12-xl" />
          </div>
          <div class="row gap-2 a-center col-4-xl a-item-center">
            <header class="row col-12-xl">
              <h2 class="row font-size-large">Festival de comida mediterrânea</h2>
            </header>
            <article class="row a-center a-item-center j-space-between">
              <div class="row col-12-xl gap-2">
                <p>
                  Nos meses de Janeiro e Fevereiro venha apreciar o nosso festival mediterrâneo, com
                  ingredientes sempre frescos e selecionados!
                </p>
              </div>
            </article>
          </div>
        </section>
      </SplideSlide>
      <SplideSlide>
        <section class="row container j-space-evenly">
          <div class="col-6-xl">
            <img src="@/assets/images/gastronomy/italiana.jpg" alt="" class="img col-12-xl" />
          </div>
          <div class="row gap-2 col-4-xl a-center a-item-center">
            <header class="row col-12-xl">
              <h2 class="row font-size-large">Festival de comida Italiana</h2>
            </header>
            <article class="row a-center a-item-center j-space-between">
              <div class="row col-12-xl gap-2">
                <p>
                  Nos meses de Março e Abril, a "Nonna" invade a nossa cozinha, e você não pode
                  deixar de apreciar as massas frescas acompanhadas dos mais diversos molhos!! E,
                  ainda, teremos um espaço reservado para ensinar você que quer "colocar a mão
                  massa"!!
                </p>
              </div>
            </article>
          </div>
        </section>
      </SplideSlide>
      <SplideSlide>
        <section class="row container j-space-evenly">
          <div class="col-6-xl">
            <img src="@/assets/images/gastronomy/fastfood.jpg" alt="" class="img col-12-xl" />
          </div>
          <div class="row gap-2 col-4-xl a-center a-item-center">
            <header class="row col-12-xl">
              <h2 class="row font-size-large">Festival de Fast Food</h2>
            </header>
            <article class="row a-center a-item-center j-space-between">
              <div class="row col-12-xl gap-2">
                <p>
                  Nos meses de Maio e Junho aproveite os mais diversos lanches de todos os lugares
                  do mundo! Que tal montar o seu personalizado com ingredientes repletos de sabor!!
                </p>
              </div>
            </article>
          </div>
        </section>
      </SplideSlide>
      <SplideSlide>
        <section class="row container j-space-evenly">
          <div class="col-6-xl">
            <img src="@/assets/images/gastronomy/mexicana.jpg" alt="" class="img col-12-xl" />
          </div>
          <div class="row gap-2 col-4-xl a-center a-item-center">
            <header class="row col-12-xl">
              <h2 class="row font-size-large">Festival de comida Mexicana</h2>
            </header>
            <article class="row a-center a-item-center j-space-between">
              <div class="row col-12-xl gap-2">
                <p>
                  Nos meses de Julho e Agosto você vai ser transportado ao México através dessa
                  culinária tão espetacular! Venha aproveitar o melhor que a cozinha mexicana tem a
                  oferecer!
                </p>
              </div>
            </article>
          </div>
        </section>
      </SplideSlide>
      <SplideSlide>
        <section class="row container j-space-evenly">
          <div class="col-6-xl">
            <img src="@/assets/images/gastronomy/japonesa.jpg" alt="" class="img col-12-xl" />
          </div>
          <div class="row gap-2 col-4-xl a-center a-item-center">
            <header class="row col-12-xl">
              <h2 class="row font-size-large">Festival de comida Japonesa</h2>
            </header>
            <article class="row a-center a-item-center j-space-between">
              <div class="row col-12-xl gap-2">
                <p>
                  Irasshaimase! Nos meses de Setembro e Outubro a nossa cozinha viaja ao outro lado
                  do mundo, e te presenteia com a culinária japonesa repleta de sabor e qualidade!
                </p>
              </div>
            </article>
          </div>
        </section>
      </SplideSlide>
      <SplideSlide>
        <section class="row container j-space-evenly">
          <div class="col-6-xl">
            <img
              src="@/assets/images/gastronomy/cheese-g2c4761ed0_640.jpg"
              alt=""
              class="img col-12-xl"
            />
          </div>
          <div class="row gap-2 col-4-xl a-center a-item-center">
            <header class="row col-12-xl">
              <h2 class="row font-size-large">Festival de comida Brasileira</h2>
            </header>
            <article class="row a-center a-item-center j-space-between">
              <div class="row col-12-xl gap-2">
                <p>
                  Dizem que tudo termina em pizza, mas aqui termina em Feijoada, Muqueca e toda a
                  diversidade da nossa culinária brasileira. Nos meses de Novembro e Dezembro, você
                  conheçaa culinária do nosso país, venha viajar nessa explosão de sabores.
                </p>
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
  name: 'GastronomyCarousel',
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
