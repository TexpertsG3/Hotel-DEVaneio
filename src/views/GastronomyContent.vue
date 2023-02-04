<template>
  <main class="container">
    <section class="row gap-2 j-center pb-3 pt-3">
      <div class="row">
        <header class="row col-12-xl j-center">
          <h2 class="font-size-extra-large">Nosso Restaurante</h2>
        </header>
        <div></div>
        <article class="container">
          <p class="font-size-regular j-center">
            Imagine começar o dia com um café da manhã repleto de delícias!
            Frutas, cereais, iogurtes, croissant, frios, geleias, bolos, tortas
            e omeletes, além de produzirmos o nosso pão de queijo artesanal,
            pães recheados e queijos caseiros. Cada refeição é elaborada para
            você vivenciar o melhor da gastronomia brasileira e muitas outras. O
            menu é sempre elaborado com carnes nobres brancas e vermelhas,
            saladas diversas, risotos, massas, guarnições, molhos e opções light
            entre as entradas, pratos quentes, acompanhamentos e sobremesas.
          </p>
        </article>
      </div>
    </section>
    <section class="row gap-2 j-center pb-3 pt-3">
      <div class="row j-center gap-2">
        <p>
          A cada mês um festival gastronômico diferente para você se deliciar!
        </p>
      </div>
      <GastronomyCarousel />
    </section>
  </main>
</template>

<script>
import GastronomyCarousel from "../components/GatronomyCarousel.vue";
export default {
  name: "GastronomyContent",
  components: {
    GastronomyCarousel,
  },
};
</script>

<style></style>
