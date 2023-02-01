<!-- eslint-disable prettier/prettier -->
<template>
  <main class="container color-secondary font-size-regular">
    <section class="row pt-3 pb-3">
      <header class="col-12-xl">
        <h2 class="font-size-large">Minha Reserva</h2>
      </header>

      <form action="#" id="form-reservations" class="row gap-2 j-space-between">
        <div class="modal bg-white gap-3" id="modal">
          <div class="modal__close" id="modal__close">
            <i class="fa-sharp fa-solid fa-xmark font-size-large"></i>
          </div>
          <div class="col-12-xl">
            <input
              type="checkbox"
              id="service-1"
              name="service-1"
              value="Café da Manhã"
            />
            <label for="service-1">Passeio nas Dunas</label>
          </div>
          <div class="col-12-xl">
            <input
              type="checkbox"
              id="service-2"
              name="service-2"
              value="Guia Turístico"
            />
            <label for="service-2">Guia Turístico</label>
          </div>
          <div class="col-12-xl">
            <input
              type="checkbox"
              id="service-3"
              name="service-3"
              value="Tratamento no Spa"
            />
            <label for="service-3">Tratamento no Spa</label>
          </div>
          <div class="col-12-xl">
            <input
              type="checkbox"
              id="service-4"
              name="service-3"
              value="Auditório para eventos"
            />
            <label for="service-3">Auditório para eventos</label>
          </div>
          <div class="col-12-xl">
            <input
              type="checkbox"
              id="service-5"
              name="service-3"
              value="Espaço Kids"
            />
            <label for="service-3">Espaço Kids - Game developer</label>
          </div>
        </div>

        <div class="row col-8-xl gap-1">
          <legend class="col-12-xl">
            Forneça a data de entrada, saída e quantidade de pessoas.
          </legend>
          <div class="row j-space-between col-12-xl">
            <input
              type="date"
              name="check-in"
              id="check-in"
              class="col-2-xl input-primary color-secondary"
            />
            <input
              type="date"
              name="check-out"
              id="check-out"
              class="col-2-xl input-primary color-secondary"
            />
            <input
              type="number"
              name="persons"
              id="persons"
              min="1"
              value="1"
              class="col-2-xl input-primary color-secondary"
            />
          </div>
        </div>

        <label class="col-12-xl">Escolha o quarto</label>

        <div class="row gap-2 col-8-xl">
          <div
            class="row j-space-between bg-grey-lighten-5 pd-1 input-selectable-primary"
          >
            <label for="room-1" class="row j-space-between col-11-xl">
              <img
                src="http://localhost:5173/Hotel-DEVaneio/src/assets/images/accommodations/quarto-c.jpg"
                alt=""
                class="img col-3-xl"
              />

              <div class="col-8-xl">
                <h2>Acomodação C</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci, magnam architecto. Quibusdam dicta dolor enim, sint
                  repudiandae ad excepturi accusantium.
                </p>
                <p>R$ 99,00</p>
              </div>
            </label>

            <input type="radio" name="room" id="room-1" value="Acomodação C" />
          </div>

          <div class="row j-space-between bg-grey-lighten-5 pd-1">
            <label for="room-2" class="row j-space-between col-11-xl">
              <img
                src="http://localhost:5173/Hotel-DEVaneio/src/assets/images/accommodations/quarto-c.jpg"
                alt=""
                class="img col-3-xl"
              />

              <div class="col-8-xl">
                <h2>Acomodação C#</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci, magnam architecto. Quibusdam dicta dolor enim, sint
                  repudiandae ad excepturi accusantium.
                </p>
                <p>R$ 199,00</p>
              </div>
            </label>

            <input type="radio" name="room" id="room-2" value="Acomodação C#" />
          </div>

          <div class="row j-space-between bg-grey-lighten-5 pd-1">
            <label for="room-3" class="row j-space-between col-11-xl">
              <img
                src="http://localhost:5173/Hotel-DEVaneio/src/assets/images/accommodations/quarto-c.jpg"
                alt=""
                class="img col-3-xl"
              />

              <div class="col-8-xl">
                <h2>Acomodação C++</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci, magnam architecto. Quibusdam dicta dolor enim, sint
                  repudiandae ad excepturi accusantium.
                </p>
                <p>R$ 299,00</p>
              </div>
            </label>

            <input
              type="radio"
              name="room"
              id="room-3"
              value="Acomodação C++"
            />
          </div>
        </div>

        <div id="form__resume" class="row col-3-xl a-center gap-2">
          <h3 class="col-12-xl">RESUMO DA RESERVA</h3>

          <div class="row col-12-xl j-center pd-1 d-none">
            <span id="reservation-alert"></span>
          </div>

          <div class="row col-12-xl gap-col gap-1 bg-grey-lighten-4 pd-1">
            <p class="col-12-xl">Apartamento: <span id="resume-room"></span></p>
            <p class="col-12-xl">Checkin: <span id="resume-checkin"></span></p>
            <p class="col-12-xl">Chekout: <span id="resume-checkout"></span></p>
            <p class="col-12-xl">Pessoas: <span id="resume-persons"></span></p>
            <p class="col-12-xl">Preço: <span id="resume-price"></span></p>
          </div>
          <button
            class="col-12-xl link-under-primary color-secondary"
            id="services"
          >
            Adcionar mais SERVIÇOS
          </button>
          <div class="row j-center col-12-xl">
            <input
              id="reservation__submit"
              type="submit"
              value="Continuar"
              class="btn-primary color-white"
            />
          </div>
        </div>
      </form>
    </section>
  </main>
</template>
