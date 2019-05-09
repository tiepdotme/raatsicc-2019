<template>
  <div>
    <NavTop />
    <nuxt />
    <NavBottom />
  </div>
</template>

<script>
import NavTop from "@/components/NavTop";
import NavBottom from "@/components/NavBottom";

export default {
  components: {
    NavTop,
    NavBottom
  },
  data() {
    return {
      page: this.$store.state.currentPage
    };
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
        class: `page${this.$store.state.currentPage}`
        // class: `page${this.currentPage}`
      }
    };
  }
};
</script>

<style></style>
