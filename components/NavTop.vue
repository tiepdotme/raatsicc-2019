<template>
  <headroom :speed="500" :z-index="99">
    <div class="container">
      <nav class="Nav Rule container-inner">
        <div class="flex">
          <div class="w-1/2 sm:w-1/6 lg:w-1/4">
            <NavLogo />
          </div>
          <div class="w-1/2 sm:hidden flex items-center justify-end">
            <div class="Burger">
              <main-menu-burger-button
                ref="burger"
                type="3dy"
                size="s"
                color="#151515"
                active-color="#151515"
                @toggle="toggleMobileNav()"
              />
            </div>
          </div>

          <div class="hidden sm:block w-1/2 sm:w-5/6 lg:w-3/4">
            <h1 class="Nav-acronym mb-2 w-1/2 sm:w-5/6 lg:w-3/4">
              Cape York / Gulf Remote Area Aboriginal &amp; Torres Strait
              Islander Child Care
            </h1>
            <h2 class="Title Nav-tagline">Protecting Kids Our Way.</h2>

            <hr class="Nav-tagline-rule" />

            <NavList />
          </div>
        </div>
      </nav>
    </div>
    <!-- mobile nav -->
    <no-ssr>
      <portal to="modals">
        <Modal :show="mobileNavOpen" class="" @close="mobileNavOpen = false">
          <div class="container h-ful">
            <div class="container-inner">
              <NavList
                class="Modal-nav"
                :class="mobileNavOpen && 'is-active'"
              />
            </div>
          </div>
        </Modal>
      </portal>
    </no-ssr>
  </headroom>
</template>

<script>
import MainMenuBurgerButton from "~/components/MainMenuBurgerButton";
import NavList from "~/components/NavList";
import NavLogo from "~/components/NavLogo";
import Modal from "~/components/Modal";
import { headroom } from "vue-headroom";

export default {
  components: {
    headroom,
    MainMenuBurgerButton,
    Modal,
    NavList,
    NavLogo
  },
  data: () => ({ mobileNavOpen: false }),
  watch: {
    // eslint-disable-next-line
    $route(to, from) {
      if (this.mobileNavOpen) {
        this.$refs.burger.toggle();
      }
      this.mobileNavOpen = false;
      // Enable scrolling
      // document.body.classList.remove("body-lock");
    }
  },
  methods: {
    toggleMobileNav() {
      // Disable scrolling while mobile nav is open
      // …but no need cause Modal does this already
      // document.body.classList.toggle("body-lock");
      this.mobileNavOpen = !this.mobileNavOpen;
      // this.$parent.$emit("mobileNavIsToggled");
    }
  }
};
</script>

<style lang="postcss" scoped>
/* BURGER */
.Burger {
  @apply text-gray-900 relative;
  z-index: 1000;
}

/* HEADROOM */
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

/* HEADROOM UNPINNED */
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

/* NAV ACRONYM */
.headroom--pinned .Nav-acronym,
.headroom--pinned .Nav-logotype {
  @apply m-0 h-0 opacity-0;
}

.headroom--top .Nav-acronym,
.Nav-acronym {
  @apply font-serif font-bold uppercase text-xs tracking-wide;
  /* @apply tracking-wide text-center mt-2 h-auto opacity-100; */
  transition: all 250ms ease;
}
</style>
