<!-- eslint-disable prettier/prettier -->
<template>
  <main class="container">
    <section class="row gap-2 j-center pb-3 pt-3">
      <div class="row">
        <div class="row gap-2 a-center a-item-center">
          <header class="row col-12-xl j-center">
            <h2 class="font-size-extra-large">Nossas Acomodações</h2>
          </header>
          <hr/>
          <div class="row col-12-xl gap-2 col-2-lg j-center">
            <p>
              Conforto e tecnologia reunidos em um só espaço!!
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
