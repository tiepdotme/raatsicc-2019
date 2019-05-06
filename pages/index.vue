<template>
  <main class="container">
    <p v-for="(post, index) in allPosts" :key="index">
      <nuxt-link :to="`/blog/${post.slug}`">
        {{ post.title }}
      </nuxt-link>
    </p>
    <HeroBlocksHome />
    <HomePost />
  </main>
</template>

<script>
import HeroBlocksHome from "~/components/HeroBlocksHome.vue";
import HomePost from "~/components/HomePost.vue";
import gql from "graphql-tag";

export default {
  apollo: {
    allPosts: gql`{
      allPosts {
        title
        body
        slug
      }
    }`
  },
  components: {
    HeroBlocksHome,
    HomePost
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
