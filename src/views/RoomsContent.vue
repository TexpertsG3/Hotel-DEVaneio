eslint-disable prettier/prettier
<template>
  <main class="container">
    <section class="row gap-2 j-center pb-3 pt-3">
      <div class="row">
        <div class="row gap-2 a-center a-item-center">
          <header class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs j-center">
            <h2 class="font-size-extra-large">Nossas Acomodações</h2>
          </header>
          <hr/>
          <div class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs gap-2 col-2-lg j-center">
            <p class="t-justify">
              Conforto e tecnologia reunidos em um só espaço, a simplicidade encontra a tecnologia para você obter o melhor dos dois mundos!
              <br />
              Conheça as nossas acomodações e venha DEVanear com a família e os
              amigos!
            </p>
          </div>
        </div>
        <div class="row gap-2 a-center a-item-center"><RoomsCarousel /></div>
      </div>
    </section>
  </main>
</template>

<script>
import RoomsCarousel from '../components/RoomsCarousel.vue';

export default {
  name: 'RoomsContent',
  components: {
    RoomsCarousel,
  },
};
</script>
