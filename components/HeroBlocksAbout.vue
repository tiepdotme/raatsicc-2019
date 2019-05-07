<template>
  <section class="Section">
    <div class="flex">
      <HeroBlock
        v-for="item in blockItems"
        :key="item.label"
        :link="item.link"
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
          label: "Our Story",
          link: "/",
          image: "block-bw-team.jpg",
          color: "red"
        },
        {
          label: "Management Committee",
          link: "/",
          image: "block-bw-handprint.jpg",
          color: "green"
        },
        {
          label: "Our Constituion",
          link: "/",
          image: "block-bw-table.jpg",
          color: "blue"
        },
        {
          label: "Become a Member",
          link: "/",
          image: "block-bw-generations.jpg",
          color: "orange"
        }
      ]
    };
  }
};
</script>

<style></style>
