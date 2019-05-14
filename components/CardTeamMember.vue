<template>
  <div class="Card">
    <Aspect class="Card-image" ratio="1.25">
      <img v-if="image" :src="image.url" :alt="name" />
    </Aspect>
    <p class="Meta font-bold mb-0">{{ name }}</p>
    <p class="Meta mb-0">{{ title }}</p>
    <p class="Meta-gray mb-0">{{ location }}</p>
  </div>
</template>

<script>
import Aspect from "~/components/Aspect";

export default {
  components: {
    Aspect
  },
  props: ["image", "name", "title", "location"]
};
</script>

<style lang="postcss" scoped>
.Card:nth-of-type(2),
.Card:nth-of-type(4) {
  @apply mb-3;
}

/* override .Grid-item */
.Card + .Card {
  @apply mt-0;
}

.Card-image {
  @apply bg-gray-300 mt-0 mb-3 !important;
  /* padding-bottom: 125%; */
}

@screen sm {
  .Card:nth-of-type(2) {
    @apply mb-4;
  }
}
</style>
