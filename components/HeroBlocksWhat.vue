<template>
  <section class="Section">
    <div class="flex">
      <HeroBlock
        v-for="item in WhatPage.blocks"
        :key="item.label"
        :to="item.to"
        :label="item.label"
        :sublabel="item.sublabel"
        :image="item.image"
        :color="item.color"
        class="md:w-1/2 lg:w-1/4"
      />
    </div>
  </section>
</template>

<script>
import HeroBlock from "~/components/HeroBlock";
import WhatPage from "~/data/what-page";

export default {
  components: {
    HeroBlock
  },
  data() {
    return {
      WhatPage
    };
  }
};
</script>

<style></style>
