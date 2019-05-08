<template>
  <section class="Section">
    <div class="flex">
      <HeroBlock
        v-for="item in blockItems"
        :key="item.label"
        :href="item.href"
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
          href: "#story",
          image: "block-bw-team.jpg",
          color: "red"
        },
        {
          label: "Management Committee",
          href: "#team",
          image: "block-bw-handprint.jpg",
          color: "green"
        },
        {
          label: "Our Constitution",
          href: "#constitution",
          image: "block-bw-table.jpg",
          color: "blue"
        },
        {
          label: "Become a Member",
          href: "#member",
          image: "block-bw-generations.jpg",
          color: "orange"
        }
      ]
    };
  }
};
</script>

<style></style>
