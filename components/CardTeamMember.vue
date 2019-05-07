<template>
  <div class="Card">
    <figure v-if="image" class="Card-image mt-0">
      <img :src="image.url" :alt="name" />
    </figure>
    <p class="text-sm font-bold mb-0">{{ name }}</p>
    <p class="text-sm mb-0">{{ title }}</p>
    <p class="text-sm text-gray-600 mb-0">{{ location }}</p>
  </div>
</template>

<script>
export default {
  props: ["image", "name", "title", "location"]
};
</script>

<style scoped>
.Card-image {
  margin-bottom: var(--s-figure) !important;
}
</style>
