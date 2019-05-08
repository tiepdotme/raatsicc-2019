<template>
  <section class="Section">
    <div class="flex">
      <HeroBlock
        v-for="item in blockItems"
        :key="item.label"
        :to="item.to"
        :label="item.label"
        :image="item.image"
        :color="item.color"
        class="md:w-1/2 lg:w-1/4"
      />
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
          to: "/what-we-do/corporate-unit",
          image: "block-bw-fierce.jpg",
          color: "red"
        },
        {
          label: "PACS Unit",
          sublabel: "Program & Client Services Unit",
          to: "/what-we-do/pac-unit",
          image: "block-bw-stare.jpg",
          color: "green"
        },
        {
          label: "CARS Unit",
          sublabel: "Community Awareness, Resources & Support",
          to: "/what-we-do/cars-unit",
          image: "block-bw-troupe.jpg",
          color: "blue"
        },
        {
          label: "FLAIC Unit",
          sublabel: "Finance Logistics & Internal ?",
          to: "/what-we-do/flaic-unit",
          image: "block-bw-troupe.jpg",
          color: "orange"
        }
      ]
    };
  }
};
</script>

<style></style>
