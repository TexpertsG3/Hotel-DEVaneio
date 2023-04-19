<!-- eslint-disable prettier/prettier -->
<template>
  <!-- Footer versão tablet/desktop -->
  <footer class="footerTablet bg-grey-lighten-4 color-secondary">
    <div class="container">
      <div class="row">
        <div class="row pt-3 pb-3 j-space-between">
          <div class="row col-2-xl gap-1">
            <!-- Logo -->
            <a href="/" class="col-12-xl"
              ><img
                src="@/assets/images/logo/logo.png"
                alt="Logo DEV.aneio"
                class="img col-12-xl"
            /></a>
          </div>
          <div class="row col-3-xl">
            <ul class="row gap-1 a-center">
              <NavBar class="col-12-xl" />
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
          <p>&copy; Todos os direitos reservados 2023</p>
        </div>
        <!--ícones das redes sociais --->
        <div class="row col-12-xl gap-2 j-center">
          <a href="https://www.instagram.com/" target="blank"
            ><i class="fa-brands fa-instagram font-size-large"></i
          ></a>
          <a href="https://pt-br.facebook.com/" target="blank"
            ><i class="fa-brands fa-facebook font-size-large"></i
          ></a>
          <a href="https://twitter.com/home" target="blank"
            ><i class="fa-brands fa-twitter font-size-large"></i
          ></a>
          <!-- <a href="">
                <i class="fa-brands fa-youtube font-size-large"></i></a> -->
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer versão mobile -->
  <footer class="footerMobile bg-grey-lighten-4 color-secondary">
    <div class="container">
      <div class="row j-center a-center">
        <div class="row">
          <div class="row col-12-xs gap-1">
            <!-- Logo -->
            <div class="row pt-3 pb-3 j-space-evenly">
              <!-- <a href="/" class="col-2-xs"
                > -->
              <div class="row col-2-xs gap-1 a-center">
                <a href="/" class="col-12-xs">
                  <img
                    src="@/assets/images/logo/logo.png"
                    alt="Logo DEV.aneio"
                    class="img col-12-xs"
                  />
                </a>
              </div>
              <!-- Menu de navegação -->
              <!-- <div class="col-12-xs"> -->
              <!-- <ul class="row gap-1 a-center"> -->
              <div class="row col-9-xs gap-1 a-center">
                <ul class="col-12-xs">
                  <NavBar class="navBarFooter col-12-xs" />
                </ul>
                <!-- </div> -->
              </div>
            </div>
          </div>
          <div class="row col-12-xs gap-1">
            <div class="row col-12-xs pt-3 pb-3 j-space-evenly">
              <!-- Endereço -->
              <div class="row col-5xs gap-1 j-center">
                <h3 class="col-12-xs">Endereço</h3>
                <p class="col-12-xs">
                  Via Costeira, n° 34, <br />
                  Parque das Dunas<br />
                  Natal - RN, Brasil.
                </p>
              </div>
              <!-- Contato -->
              <div class="row col-5-xs gap-1 j-center">
                <h3 class="col-12-xs">Contato</h3>
                <a href="tel:+5584999999999" class="link-secondary col-12-xs"
                  >(84) 99999-9999</a
                >
                <a
                  href="tel:+5584999999999"
                  class="link-secondary col-12-xs t-center"
                  >(84) 88888-8888</a
                >
              </div>
            </div>
          </div>
        </div>

        <span class="spacer bg-secondary"></span>

        <div class="row pt-1 pb-1 j-center col-12-xs">
          <p>&copy; Todos os direitos reservados 2023</p>
        </div>
        <!--ícones das redes sociais --->
        <div class="row col-12-xs gap-2 j-center">
          <a href="https://www.instagram.com/" target="blank"
            ><i class="fa-brands fa-instagram font-size-regular"></i
          ></a>
          <a href="https://pt-br.facebook.com/" target="blank"
            ><i class="fa-brands fa-facebook font-size-regular"></i
          ></a>
          <a href="https://twitter.com/home" target="blank"
            ><i class="fa-brands fa-twitter font-size-regular"></i
          ></a>
          <!-- <a href="">
                <i class="fa-brands fa-youtube font-size-large"></i></a> -->
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
