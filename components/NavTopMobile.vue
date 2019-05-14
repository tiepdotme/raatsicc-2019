<template>
  <div class="MobileNav">
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
    <no-ssr>
      <portal to="modals">
        <Modal
          :show="mobileNavOpen"
          class="theme-Modal"
          @close="mobileNavOpen = false"
        >
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
  </div>
</template>

<script>
import MainMenuBurgerButton from "~/components/MainMenuBurgerButton";
import NavList from "~/components/NavList";
import Modal from "~/components/Modal";

export default {
  components: {
    MainMenuBurgerButton,
    Modal,
    NavList
  },
  data: () => ({ mobileNavOpen: false }),
  watch: {
    // eslint-disable-next-line
    $route(to, from) {
      if (this.mobileNavOpen) {
        this.$refs.burger.toggle();
      }
      this.mobileNavOpen = false;
    }
  },
  methods: {
    toggleMobileNav() {
      // Disable scrolling is handled by Modal
      this.mobileNavOpen = !this.mobileNavOpen;
    }
  }
};
</script>

<style lang="postcss" scoped>
.Burger {
  @apply text-gray-900 relative;
}

.Burger button {
  @apply px-6 py-8;
}

.MobileNav {
  @apply absolute top-0 right-0;
}

/* modal theme */
.theme-Modal .Modal-nav {
  /* @apply mt-24; */
  padding-top: 90px;
}

.theme-Modal >>> .Nav-link {
  @apply block ml-0;
}

.theme-Modal >>> .Nav-link:last-of-type {
  @apply pb-4;
}

/* Transition */
/* .Modal-enter-active,
.Modal-leave-active {
  transition: opacity 500ms cubic-bezier(0.19, 1, 0.22, 1);
}

.Modal-enter,
.Modal-leave-to {
  @apply opacity-0;
  transform: scale(1.05);
} */
</style>
