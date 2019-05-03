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
          label: "About us",
          link: "/",
          image: "block-bw-flying.jpg",
          color: "red"
        },
        {
          label: "How we help",
          link: "/",
          image: "block-bw-looking.jpg",
          color: "green"
        },
        {
          label: "Join & contribute",
          link: "/volunteer",
          image: "handprint.png",
          color: ""
        },
        {
          label: "See our events",
          link: "/",
          image: "block-bw-dancing.jpg",
          color: "blue"
        }
      ]
    };
  }
};
</script>

<style>
</style>
