<template>
  <div :v-if="apolloQuery" class="Loading">
    <!-- <div class="Loading"> -->
    <LoadingSpinner />
  </div>
</template>

<script>
import LoadingSpinner from "~/components/LoadingSpinner";

export default {
  components: { LoadingSpinner },
  data: () => ({ query: [] }),
  computed: {
    /* eslint-disable */
    apolloQuery() {
      this.query && `$apollo.queries.${query}.loading`;
    }
  }
};
</script>

<style lang="postcss" scoped>
.Loading {
  @apply flex items-center justify-center;
  height: 25vh;
  margin-bottom: 25vh;
}

</style>

