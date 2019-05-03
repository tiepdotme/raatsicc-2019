<template>
  <headroom :speed="500">
    <!-- <div id="js-siteHeader" class="c-nav-sticky">
    <div id="js-siteNav" class="c-nav-firstwrapper">-->
    <div class="container">
      <nav class="Nav">
        <div class="Grid">
          <div class="Grid-item w-1/2 sm:w-1/6 lg:w-1/4">
            <NavLogo />
          </div>
          <div class="Grid-item w-1/2 sm:hidden u-flexAlignItemsCenter">
            <div
              class="c-mobileNav-trigger"
              data-modal-toggle
              data-modal-id="nav-mobile"
            >
              ☰ &nbsp;Menu
            </div>
          </div>

          <div class="Grid-item w-1/2 sm:w-5/6 lg:w-3/4">
            <!-- <h1 class="Subheading Nav-siteline">
              Cape York / Gulf Remote Area Aboriginal &amp; Torres Strait Islander Child Care
            </h1>-->
            <h2 class="Title Nav-tagline">
              Protecting Kids Our Way.
            </h2>

            <hr class="border-b border-brand-primary m-0 mt-4">

            <NavList />
          </div>
        </div>
      </nav>
    </div>
  </headroom>
</template>

<script>
import NavList from "~/components/NavList";
import NavLogo from "~/components/NavLogo";
import { headroom } from "vue-headroom";

export default {
  components: {
    headroom,
    NavList,
    NavLogo
  }
};
</script>

<style scoped>
.headroom {
}

.headroom--pinned .Nav {
  box-shadow: 0 9px 19px 0 rgba(0, 0, 0, 0.05);
}

.headroom--top .Nav {
  box-shadow: initial;
}

.Nav {
  @apply pt-8 border-b border-gray-300;
}

.Nav-siteline {
  @apply font-bold;
}

.Nav-tagline {
  @apply text-brand-primary italic;
}
</style>
