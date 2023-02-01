<template>
  <html>
    <body>
      <main class="container row gap-2 pt-3 pb-3">
        <section class="row">
          <div class="row j-center gap-2">
            <header class="row col-12-xl j-center">
              <h2 class="font-size-extra-large">Sobre o nosso Hotel</h2>
            </header>

            <div class="img col-6-xl">
              <img
                src="@/assets/images/home/lobby.jpg"
                alt="Fachada do Hotel"
                class="img col-12-xl"
              />
            </div>

            <article class="">
              <p>
                Aqui você usa a tecnologia ao seu favor, nossas acomodações são
                equipadas com tecnologia de ponta para você usufruir do melhor
                que a tecnologia tem a oferecer. No hotel DEVaneio a nossa
                missão é oferecer momentos de lazer e diversão para você e toda
                a família. Possuímos um espaço para as crianças desenvolverem um
                pequeno game junto de nossos instrutores ao longo da estadia,
                além de espaços completamente analógicos e desconectados para
                você se reencontrar e se conectar com as pessoas que ama.
                Espaços reservados para meditação, luderia com mais de mil jogos
                de tabuleiro para se divertir com os amigos e a família, além
                das piscinas internas e externas. Aqui, você também pode
                usufruir do nosso Spa Ruby com diversos tratamentos de beleza, e
                viver uma experiência única em nosso Coffe Lab Java com baristas
                especializados e cafés do mundo inteiro. Traga a sua família
                para viver essa experiência inesquecível, venha celebrar e
                DEVanear conosco!
              </p>
            </article>
          </div>
        </section>

        <section class="container row gap-2">
          <header class="col-12-xl">
            <h2 class="font-size-large">Mais detalhes:</h2>
          </header>

          <div class="row j-center gap-2">
            <img
              src="http://localhost:5173/Hotel-DEVaneio/src/assets/images/accommodations/computer-no-hotel.jpg"
              alt=""
              class="img col-3-xl"
            />
            <img
              src="http://localhost:5173/Hotel-DEVaneio/src/assets/images/accommodations/laptop-no-hotel.jpg"
              alt=""
              class="img col-3-xl"
            />
            <img
              src="http://localhost:5173/Hotel-DEVaneio/src/assets/images/accommodations/coffee-2565441_640.jpg"
              alt=""
              class="img col-3-xl"
            />
          </div>
        </section>
      </main>
      <!-- <script src="http://localhost:5173/Hotel-DEVaneio/src/main.js" type="module"></script> -->
    </body>
  </html>
</template>

<script>
export default {
  name: "AboutContent",
};
</script>
