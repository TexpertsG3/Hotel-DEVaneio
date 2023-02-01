<template>
  <footer class="bg-grey-lighten-4 color-secondary">
    <div class="container">
      <div class="row">
        <div class="row pt-3 pb-3 j-space-between">
          <div class="row col-2-xl gap-1">
            <!-- Logo -->
            <a
              href="http://localhost:5173/Hotel-DEVaneio/"
              class="col-12-xl"
              ><img
                src="http://localhost:5173/Hotel-DEVaneio/src/assets/images/logo/logo.svg"
                alt="Logo DEV.aneio"
                class="img"
            /></a>
            <!--ícones das redes sociais --->
            <div class="row col-12-xl gap-2 j-center">
              <a href=""
                ><i class="fa-brands fa-instagram font-size-large"></i
              ></a>
              <a href=""
                ><i class="fa-brands fa-facebook font-size-large"></i
              ></a>
              <a href=""
                ><i class="fa-brands fa-twitter font-size-large"></i
              ></a>
              <a href="">
                <i class="fa-brands fa-youtube font-size-large"></i
              ></a>
            </div>
          </div>
          <div class="row col-3-xl">
            <ul class="row gap-1 a-center">
              <NavBar class="col-12-xl" />

              <!-- <li class="col-12-xl">
                <a
                  href="http://localhost:5173/Hotel-DEVaneio/src/pages/about.html"
                  >Sobre nós</a
                >
              </li>
              <li class="col-12-xl">
                <a
                  href="http://localhost:5173/Hotel-DEVaneio/src/pages/accommodations/accommodations.html"
                  >Acomodações</a
                >
              </li>
              <li class="col-12-xl">
                <a
                  href="http://localhost:5173/Hotel-DEVaneio/src/pages/gastronomy.html"
                  >Gastronomia</a
                >
              </li>
              <li class="col-12-xl">
                <a
                  href="http://localhost:5173/Hotel-DEVaneio/src/pages/reservations.html"
                  >Reservas</a
                >
              </li> -->
            </ul>
          </div>
          <div class="row col-3-xl gap-1 a-center">
            <h3 class="col-12-xl">Nosso Endereço</h3>
            <p>
              Via Costeira, n° 34, <br />
              Parque das Dunas<br />
              Natal - RN, Brasil.
            </p>
          </div>
          <div class="row col-2-xl a-center gap-1">
            <h3 class="col-12-xl">Contato</h3>
            <a href="tel:+5584999999999" class="link-secondary col-12-xl"
              >(84) 99999-9999</a
            >
            <a href="tel:+5584999999999" class="link-secondary col-12-xl"
              >(84) 88888-8888</a
            >
          </div>
        </div>

        <span class="spacer bg-secondary"></span>

        <div class="row pt-1 pb-1 j-center col-12-xl">
          <p>&copy; Todos os direitos reservados 2022</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  name: "FooterContent",
  components: { NavBar },
};
</script>
