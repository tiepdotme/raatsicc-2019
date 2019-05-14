<template>
  <div>
    <NavHeadroom />
    <!-- enable clean page transitions -->
    <main class="container">
      <nuxt />
    </main>
    <NavBottom />
    <!-- modals -->
    <no-ssr>
      <portal-target name="modals" multiple></portal-target>
    </no-ssr>
  </div>
</template>

<script>
import NavHeadroom from "@/components/NavHeadroom";
import NavBottom from "@/components/NavBottom";

export default {
  components: {
    NavHeadroom,
    NavBottom
  },
  computed: {
    currentPageClass() {
      return this.$store.state.currentPage.replace(/\//g, "-");
    }
  },
  head() {
    return {
      bodyAttrs: {
        // Proper strategy for binding a class to <html> #1662
        // https://github.com/nuxt/nuxt.js/issues/1662
        // class: this.modalOpen ? 'm-open' : 'm-close'
        // class: `page${this.$store.state.currentPage}`
        class: `page${this.currentPageClass}`
      }
    };
  }
};
</script>

<style></style>
