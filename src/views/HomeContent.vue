<!-- eslint-disable prettier/prettier -->
<template>
  <main>
    <section class="container pt-3 pb-3" id="about">
      <div class="row j-space-between">
        <div class="row col-4-xl a-center gap-1">
          <header class="col-12-xl">
            <h2 class="font-size-extra-large">Sobre o nosso Hotel</h2>
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

        <div class="row col-7-xl">
          <img
            src="@/assets/images/home/hotel-small.jpg"
            alt="Fachada do Hotel"
            class="img col-12-xl"
          />
        </div>
      </div>
    </section>

    <section class="container" id="rooms">
      <article >
        <RoomsCarousel class="row gap-2"/>
        <!-- <nav class="nav-menu-primary">
          <ul class="">
            <li>
              <a
                href="http://localhost:5173/Hotel-DEVaneio/src/pages/accommodations/iframe/accommodation-c.html"
                target="accommodations__iframe"
                class=""
                >Acomodação C</a
              >
            </li>
            <li>
              <a
                href="http://localhost:5173/Hotel-DEVaneio/src/pages/accommodations/iframe/accommodation-c-sharp.html"
                target="accommodations__iframe"
                class=""
                >Acomodação C#</a
              >
            </li>
            <li>
              <a
                href="http://localhost:5173/Hotel-DEVaneio/src/pages/accommodations/iframe/accommodation-c-plus-plus.html"
                target="accommodations__iframe"
                class=""
                >Acomodação C++</a
              >
            </li>
          </ul>
        </nav> -->
<!--
        <iframe
          src="http://localhost:5173/Hotel-DEVaneio/src/pages/accommodations/iframe/accommodation-c.html"
          name="accommodations__iframe"
          title="Acomodações"
          class="accommodations__iframe col-12-xl"
        ></iframe> -->
      </article>
    </section>

    <div class="bg-primary-lighten-4">
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
              href="http://localhost:5173/Hotel-DEVaneio/src/pages/gastronomy.html"
            >
              Saiba mais
            </a>
          </div>

          <img
            src="http://localhost:5173/Hotel-DEVaneio/src/assets/images/gastronomy/cozinha-gastronomia.jpg"
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
import RoomsCarousel from "@/components/RoomsCarousel.vue";

export default {
  name: "HomeContent",
  components: {
    RoomsCarousel,
  },
};
</script>
