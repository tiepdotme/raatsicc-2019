<template>
  <main class="container">
    <HeroBlocksWhat />

    <ColumnText>
      <h3 class="Heading italic">
        The RAATSICC philosophy is that no-one knows our children and families in our remote communities better than the families themselves.
      </h3>
    </ColumnText>
    <ColumnText>
      Yo.
    </ColumnText>
  </main>
</template>

<script>
import HeroBlocksWhat from "~/components/HeroBlocksWhat.vue";
import ColumnText from "~/components/ColumnText.vue";

export default {
  components: {
    HeroBlocksWhat,
    ColumnText
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
