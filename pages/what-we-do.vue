<template>
  <main class="container">
    <HeroBlocksWhat />

    <ContentColumn>
      <h3 class="Heading italic">
        The RAATSICC philosophy is that no-one knows our children and families
        in our remote communities better than the families themselves.
      </h3>
    </ContentColumn>
    <ContentColumn>
      Yo.
    </ContentColumn>
  </main>
</template>

<script>
import HeroBlocksWhat from "~/components/HeroBlocksWhat.vue";
import ContentColumn from "~/components/ContentColumn.vue";

export default {
  components: {
    HeroBlocksWhat,
    ContentColumn
  },
  data() {
    return {};
  }
};
</script>

<style></style>
