<template>
  <p class="Section text-right">
    <nuxt-link to="/news/archive" class="Button Button--outline">
      View news archive
      <IconBase height="14" width="14" class="ml-1">
        <BaselineArrowForward24px />
      </IconBase>
    </nuxt-link>
  </p>
</template>

<script>
import BaselineArrowForward24px from "~/components/icons/baseline-arrow-forward-24px";
import IconBase from "~/components/IconBase.vue";

export default {
  components: {
    BaselineArrowForward24px,
    IconBase
  }
};
</script>

<style></style>
