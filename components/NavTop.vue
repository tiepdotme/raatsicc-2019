<template>
  <headroom :speed="500">
    <!-- <div id="js-siteHeader" class="c-nav-sticky">
    <div id="js-siteNav" class="c-nav-firstwrapper">-->
    <div class="container">
      <nav class="Nav Rule">
        <div class="flex">
          <div class="w-1/2 sm:w-1/6 lg:w-1/4">
            <NavLogo />
          </div>
          <div class="w-1/2 sm:hidden u-flexAlignItemsCenter">
            <div
              class="c-mobileNav-trigger"
              data-modal-toggle
              data-modal-id="nav-mobile"
            >
              ☰ Menu
            </div>
          </div>

          <div class="w-1/2 sm:w-5/6 lg:w-3/4">
            <!-- <h1 class="Subheading Nav-siteline">
              Cape York / Gulf Remote Area Aboriginal &amp; Torres Strait Islander Child Care
            </h1>-->
            <h2 class="Title Nav-tagline">Protecting Kids Our Way.</h2>

            <hr class="Nav-tagline-rule" />

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

<style lang="postcss" scoped>
.headroom {
}

.headroom--pinned .Nav {
  box-shadow: 0 9px 19px 0 rgba(0, 0, 0, 0.05);
  padding-top: 0;
}

.headroom--pinned .Nav-tagline {
  height: 0;
}

.headroom--pinned .Nav-tagline,
.headroom--pinned .Nav-tagline-rule {
  margin: 0;
  opacity: 0;
}

/* NAV UNPINNED */

.headroom--top .Nav,
.Nav {
  @apply pt-8;
  box-shadow: initial;
}

.Nav-siteline {
  @apply font-bold;
}

.headroom--top .Nav-tagline,
.Nav-tagline {
  @apply text-brand-primary italic;
  height: auto;
  opacity: 1;
  transition: all 250ms ease;
}

.headroom--top .Nav-tagline-rule,
.Nav-tagline-rule {
  @apply border-b border-brand-primary m-0 mt-4;
  opacity: 1;
  transition: all 250ms ease;
}
</style>
