<!-- eslint-disable prettier/prettier -->
<template>
  <main>
    <!-- About Home versão tablet/desktop -->
    <section class="aboutHomeTablet container pt-3 pb-3" id="about">
      <div class="row j-space-between">
        <!--  -->
        <div class="infoAboutHome row col-4-xl a-center gap-1">
          <header class="col-12-xl">
            <h2 class="fontHeader font-size-extra-large">
              Sobre o nosso Hotel
            </h2>
          </header>
          <article class="row gap-1">
            <p class="">
              A nossa missão é oferecer momentos de lazer e diversão para você e
              toda a família. Possuímos um espaço para as crianças desenvolverem
              um pequeno game junto de nossos instrutores ao longo da estadia,
              além de espaços completamente analógicos e desconectados para você
              se reencontrar e se conectar com as pessoas que ama, além de se
              divertir com os amigos e a família.
              <br />
              Venha viver essa experiência inesquecível, celebrar e DEVanear
              conosco!
            </p>
            <div>
              <a class="btn-primary color-white" href="/about">Saiba mais</a>
            </div>
          </article>
        </div>
        <div class="imgAboutHome row col-6-xl">
          <img
            src="@/assets/images/home/hotel-small.jpg"
            alt="Fachada do Hotel"
            class="img col-12-xl"
          />
        </div>
      </div>
    </section>
    <!-- About Home versão mobile -->
    <section class="aboutHomeMobile container pt-3 pb-3" id="aboutMobile">
      <div class="row">
        <!--  -->
        <div class="row col-12-xs a-center gap-1">
          <header class="col-12-xs">
            <h2 class="fontHeader font-size-regular">Sobre o nosso Hotel</h2>
          </header>
          <article class="row gap-1 col-12-xs j-center">
            <p class="">
              Venha se divertir e descansar com toda a sua família no Hotel
              DEVaneio. Experiências incríveis te aguardam.
            </p>
            <img
              src="@/assets/images/home/hotel-small.jpg"
              alt="Fachada do Hotel"
              class="img col-8-xs"
            />
          </article>
        </div>
        <div class="row col-12-xs mt-1 j-center">
          <a class="btn-primary color-white" href="/about">Saiba mais</a>
        </div>
      </div>
    </section>

    <!-- Acomodações Home versão tablet/desktop -->
    <div class="roomsHomeTablet container row gap-3 pt-3 pb-3">
      <section class="row">
        <article class="row a-center a-item-center j-space-between">
          <div class="col-6-xl">
            <img
              src="../assets/images/accommodations/quarto-c2.jpg"
              alt=""
              class="img col-12-xl"
            />
          </div>
          <div class="row col-4-xl gap-2 a-center a-item-center">
            <h2 class="font-size-extra-large">Nossas Acomodações</h2>

            <div class="row col-12-xl gap-2">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus nemo alias a impedit praesentium aliquam, ratione
                nisi expedita libero deserunt dolore maiores vel eveniet soluta
                provident porro accusamus ducimus voluptatum?
              </p>
              <a href="/rooms" class="btn-primary color-white">Saiba Mais</a>
            </div>
          </div>
        </article>
      </section>
    </div>
    <!-- Acomodações versão Home mobile-->
    <div class="roomsHomeMobile container row gap-3 pt-3 pb-3">
      <section class="row">
        <header class="col-12-xs">
          <h2 class="fontHeader font-size-regular">Nossas Acomodações</h2>
        </header>

        <article class="row gap-1 col-12-xs j-center">
          <p class="">
            Nossas acomodações foram planejadas para oferecer o máximo conforto
            e tecnologia para os nossos hóspedes.
          </p>
          <img
            src="../assets/images/accommodations/quarto-c2.jpg"
            alt=""
            class="img col-8-xs"
          />
        </article>
        <div class="row col-12-xs mt-1 j-center">
          <a href="/rooms" class="btn-primary color-white">Saiba Mais</a>
        </div>
      </section>
    </div>
    <!-- Gastronomia Home versão tablet/desktop -->
    <div class="gastronomyHomeTablet bg-primary-lighten-4">
      <section class="container pt-3 pb-3" id="gastronomy">
        <article class="row j-space-between">
          <div class="row col-4-xl a-item-center a-center gap-1">
            <h2 class="font-size-extra-large">Nossa Cozinha</h2>
            <p>
              Nosso objetivo é transformar o alimento em arte, nós buscamos te
              oferecer o melhor da gastronomia, com experiências sensoriais,
              descoberta de aromas e sabores que nos levam à deliciosas
              lembranças. A celebração da vida em momentos únicos e
              inesquecíveis.
            </p>
            <a
              class="btn-secondary-wbg color-secondary"
              href="@/views/GastronomyContent.vue"
            >
              Saiba mais
            </a>
          </div>

          <img
            src="@/assets/images/gastronomy/cozinha-gastronomia.jpg"
            alt=""
            class="img col-7-xl"
          />
        </article>
      </section>
    </div>
    <!-- Gastronomia Home versão mobile -->
    <div class="gastronomyHomeMobile bg-primary-lighten-4">
      <section class="container pt-3 pb-3" id="gastronomy">
        <article class="row j-space-between">
          <div class="row col-4-xl a-item-center a-center gap-1">
            <h2 class="font-size-extra-large">Nossa Cozinha</h2>
            <p>
              Nosso objetivo é transformar o alimento em arte, nós buscamos te
              oferecer o melhor da gastronomia, com experiências sensoriais,
              descoberta de aromas e sabores que nos levam à deliciosas
              lembranças. A celebração da vida em momentos únicos e
              inesquecíveis.
            </p>
            <a
              class="btn-secondary-wbg color-secondary"
              href="@/views/GastronomyContent.vue"
            >
              Saiba mais
            </a>
          </div>

          <img
            src="@/assets/images/gastronomy/cozinha-gastronomia.jpg"
            alt=""
            class="img col-7-xl"
          />
        </article>
      </section>
    </div>
  </main>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
// import RoomsCarousel from "@/components/RoomsCarousel.vue";

export default {
  name: "HomeContent",
  components: {},
};
</script>
