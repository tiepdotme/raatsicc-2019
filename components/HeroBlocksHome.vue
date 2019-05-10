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
        :cta="item.cta"
        :cta-reposition="item.ctaReposition"
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
          color: "red",
          cta: "On location since 1990"
        },
        {
          label: "What we do",
          to: "/what-we-do",
          image: "block-bw-looking.jpg",
          color: "green",
          cta: "Our four core services"
        },
        {
          label: "Join & contribute",
          to: "/volunteer",
          image: "handprint.png",
          color: "",
          cta: "Volunteer with us",
          ctaReposition: true
        },
        {
          label: "See our events",
          to: "/news/events",
          image: "block-bw-dancing.jpg",
          color: "blue",
          cta: "Come join us"
        }
      ]
    };
  }
};
</script>

<style></style>
