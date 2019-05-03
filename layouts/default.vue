<template>
  <div>
    <NavTop/>
    <nuxt/>
    <NavBottom/>
  </div>
</template>

<script>
import NavTop from "@/components/NavTop";
import NavBottom from "@/components/NavBottom";

export default {
  components: {
    NavTop,
    NavBottom
  }
};
</script>

<style>
</style>
