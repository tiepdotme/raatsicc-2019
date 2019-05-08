<template>
  <div :class="currentPageClass">
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
  computed: {
    currentPageClass() {
      // document.body.classlist.add
      return `page-${this.$store.state.currentPage}`;
    }
  }
  /* head() {
    return {
      bodyAttrs: {
        // class: this.modalOpen ? 'm-open' : 'm-close'
        class: `page-${this.$store.state.currentPage}`
      }
    };
  } */
};
</script>

<style></style>
