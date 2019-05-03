<template>
  <main class="container">
    <HeroBlocksHome/>
    <HomePost/>
  </main>
</template>

<script>
import HeroBlocksHome from "~/components/HeroBlocksHome.vue";
import HomePost from "~/components/HomePost.vue";

export default {
  components: {
    HeroBlocksHome,
    HomePost
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
