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
          label: "About us",
          to: "/about",
          image: "block-bw-flying.jpg",
          color: "red"
        },
        {
          label: "What we do",
          to: "/what-we-do",
          image: "block-bw-looking.jpg",
          color: "green"
        },
        {
          label: "Join & contribute",
          to: "/volunteer",
          image: "handprint.png",
          color: ""
        },
        {
          label: "See our events",
          to: "/",
          image: "block-bw-dancing.jpg",
          color: "blue"
        }
      ]
    };
  }
};
</script>

<style></style>
