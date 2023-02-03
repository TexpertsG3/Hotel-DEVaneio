<template>
  <main class="container row gap-2 pt-3 pb-3">
    <section class="row">
      <div class="row j-center gap-2">
        <header class="row col-12-xl j-center">
          <h2 class="font-size-extra-large">Sobre o nosso Hotel</h2>
        </header>
        <article class="row gap-1">
          <div class="img col-5-xl">
            <img
              src="@/assets/images/home/lobby.jpg"
              alt="Fachada do Hotel"
              class="img col-12-xl"
            />
          </div>
          <div></div>
          <div>
            <ul>
              <li>
                <i class="fa-solid fa-person-swimming"></i> Piscina interna e
                externa
              </li>
              <li>
                <i class="fa-brands fa-accessible-icon"></i> Quartos com
                acessibilidade
              </li>
              <li><i class="fa-solid fa-wifi"></i> Wi-fi</li>
              <li><i class="fa-solid fa-paw"></i> Pet friendly</li>
              <li>
                <i class="fa-solid fa-volleyball"></i> Quadras Poliesportivas
              </li>
              <li><i class="fa-solid fa-car"></i> Estacionamento</li>
              <li><i class="fa-solid fa-champagne-glasses"></i>Frigobar</li>
              <li><i class="fa-regular fa-snowflake"></i>Ar-condicionado</li>
              <li> <i class="fa-solid fa-children"></i> Espaço Kids com monitores</li>
              <li> <i class="fa-solid fa-mug-hot"></i> Coffe Lab Java</li>
              <li> <i class="fa-solid fa-spa"></i> Spa Ruby</li>
            </ul>
          </div>
          <p class="j-center">
            Aqui você usa a tecnologia ao seu favor, nossas acomodações são
            equipadas com tecnologia de ponta para você usufruir do melhor que a
            tecnologia tem a oferecer. No hotel DEVaneio a nossa missão é
            oferecer momentos de lazer e diversão para você e toda a família.
            Possuímos um espaço para as crianças desenvolverem um pequeno game
            junto de nossos instrutores ao longo da estadia, além de espaços
            completamente analógicos e desconectados para você se reencontrar e
            se conectar com as pessoas que ama. Espaços reservados para
            meditação, luderia com mais de mil jogos de tabuleiro para se
            divertir com os amigos e a família, além das piscinas internas e
            externas. Aqui, você também pode usufruir do nosso Spa Ruby com
            diversos tratamentos de beleza, e viver uma experiência única em
            nosso Coffe Lab Java com baristas especializados e cafés do mundo
            inteiro. Traga a sua família para viver essa experiência
            inesquecível, venha celebrar e DEVanear conosco!
          </p>
        </article>
      </div>
    </section>

    <section class="container row gap-2">
      <header class="col-12-xl">
        <h2 class="font-size-large">Conheça nossos espaços</h2>
      </header>
      <div class="row j-center gap-2">
        <img
          src="../assets/images/accommodations/pool2.jpg"
          alt=""
          class="img col-2-xl"
        />
        <img
          src="../assets/images/accommodations/relaxation-3065577_640.jpg"
          alt=""
          class="img col-2-xl"
        />
        <img
          src="../assets/images/accommodations/jogos1.jpg"
          alt=""
          class="img col-2-xl"
        />
        <img
          src="../assets/images/accommodations/cafe1.jpg"
          alt=""
          class="img col-2-xl"
        />
      </div>
    </section>
  </main>
  <!-- <script src="http://localhost:5173/Hotel-DEVaneio/src/main.js" type="module"></script> -->
</template>

<script>
export default {
  name: "AboutContent",
};
</script>
