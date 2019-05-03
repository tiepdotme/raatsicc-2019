<template>
  <main class="container">
    <HeroBlocksWhat />

    <TextColumn>
      <h3 class="Heading italic">
        The RAATSICC philosophy is that no-one knows our children and families in our remote communities better than the families themselves.
      </h3>
    </TextColumn>
    <TextColumn>
      Yo.
    </TextColumn>
  </main>
</template>

<script>
import HeroBlocksWhat from "~/components/HeroBlocksWhat.vue";
import TextColumn from "~/components/TextColumn.vue";

export default {
  components: {
    HeroBlocksWhat,
    TextColumn
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
