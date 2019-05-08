<template>
  <main class="container">
    <HeroBlocksWhat />

    <ContentColumn text>
      <h3 class="Heading italic">
        The RAATSICC philosophy is that no-one knows our children and families
        in our remote communities better than the families themselves.
      </h3>
    </ContentColumn>
    <ContentColumn>
      <div class="Markdown">
        <p>We have four pages here…</p>
        <ul v-if="allWhatPages">
          <li v-for="item in allWhatPages" :key="item.title">
            <nuxt-link :to="`/what-we-do/${item.slug}`">
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </ContentColumn>
  </main>
</template>

<script>
import HeroBlocksWhat from "~/components/HeroBlocksWhat.vue";
import ContentColumn from "~/components/ContentColumn.vue";
import gql from "graphql-tag";

export default {
  components: {
    HeroBlocksWhat,
    ContentColumn
  },
  apollo: {
    allWhatPages: gql`
      {
        allWhatPages(orderBy: [order_ASC]) {
          slug
          title
          order
        }
      }
    `
  }
};
</script>

<style></style>
