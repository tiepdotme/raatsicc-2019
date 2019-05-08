<template>
  <section class="Section">
    <div class="flex">
      <div class="hidden sm:block sm:w-1/6 lg:w-1/4">&nbsp;</div>
      <div v-if="text" class="sm:w-5/6 lg:w-7/12">
        <slot />
      </div>
      <div v-else class="sm:w-4/6 lg:w-7/12">
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    text: Boolean
  }
};
</script>
