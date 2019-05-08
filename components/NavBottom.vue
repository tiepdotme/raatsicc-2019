<template>
  <footer class>
    <div class="container pt-24">
      <nav class="Nav">
        <div class="flex">
          <div class="w-1/2 sm:w-1/6 lg:w-1/4">
            <NavLogo />
          </div>
          <div class="w-1/2 sm:w-5/6 lg:w-3/4">
            <NavList />
            <hr class="border-b border-gray-300 m-0 mb-4" />
          </div>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script>
import nav from "~/data/nav";
import NavLogo from "~/components/NavLogo";
import NavList from "~/components/NavList";

export default {
  components: {
    NavList,
    NavLogo
  },
  data() {
    return {
      nav
      // contact: this.$store.state.contactData.content
    };
  }
};
</script>

<style scoped>
.Nav {
  /* @apply pt-8 border-t border-gray-300; */
}
</style>
