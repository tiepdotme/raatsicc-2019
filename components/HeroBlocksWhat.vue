<template>
  <section class="Section">
    <div class="flex">
      <HeroBlock
        class="md:w-1/2 lg:w-1/4"
        v-for="item in blockItems"
        :key="item.label"
        :link="item.link"
        :label="item.label"
        :image="item.image"
        :color="item.color"
      ></HeroBlock>
    </div>
  </section>
</template>

<script>
import HeroBlock from "~/components/HeroBlock.vue";

export default {
  components: {
    HeroBlock
  },
  data() {
    return {
      blockItems: [
        {
          label: "Corporate Unit",
          link: "/",
          image: "block-bw-fierce.jpg",
          color: "red"
        },
        {
          label: "PACS Unit",
          sublabel: "Program & Client Services Unit",
          link: "/",
          image: "block-bw-stare.jpg",
          color: "green"
        },
        {
          label: "CARS Unit",
          sublabel: "COmmunity Awareness, Resources & Support",
          link: "/",
          image: "block-bw-troupe.jpg",
          color: "blue"
        }
      ]
    };
  }
};
</script>

<style>
</style>
