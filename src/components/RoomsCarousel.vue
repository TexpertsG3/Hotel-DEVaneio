<!-- eslint-disable prettier/prettier -->
 <template>
    <header class="row j-center col-12-xl">
      <h2 class="font-size-extra-large">Nossas Acomodações</h2>
    </header>
    <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
      <SplideSlide>
        <img src="@/assets/images/accommodations/quarto-c.jpg" alt="Sample 1" />
        <div class="row col-12-xl gap-2 col-2-lg ">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nemo alias a impedit praesentium
              aliquam, ratione nisi expedita libero deserunt dolore maiores vel eveniet soluta provident porro
              accusamus ducimus voluptatum?
            </p>
            <a href="/rooms" target="_blank"
              class="btn-primary color-white">Saiba mais...</a>
          </div>
      </SplideSlide>
      <SplideSlide>
        <img
          src="@/assets/images/accommodations/quarto_c-plus-plus.jpg"
          alt="Sample 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="@/assets/images/accommodations/quarto_c-sharp.jpg"
          alt="Sample 2"
        />
      </SplideSlide>
    </Splide>


</template>
<!-- eslint-disable prettier/prettier -->
<script>

import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import "@splidejs/vue-splide/css/skyblue";
import "@splidejs/vue-splide/css/sea-green";
import "@splidejs/vue-splide/css/core";

export default {
  name: 'RoomsCarousel',
  components: {
    Splide,
    SplideSlide,
  },
};
</script>
