<template>
  <div>
    <hr class="Section-rule mb-4" />
    <div class="flex flex-col sm:flex-row justify-between mb-4 text-gray">
      <div class="flex">
        <span class="mr-3">Share this article:</span>
        <!-- facebook -->
        <a
          class="Post-share"
          :href="facebookUrl"
          target="_blank"
          rel="noopener"
          aria-label="Share on Facebook"
        >
          <IconBase height="30" width="30">
            <IconSocialFacebook />
          </IconBase>
        </a>
        <!-- email -->
        <a
          class="Post-share"
          :href="emailUrl"
          target="_blank"
          rel="noopener"
          aria-label="Share on Facebook"
        >
          <IconBase height="30" width="30">
            <IconShareEmail />
          </IconBase>
        </a>
      </div>
      <!-- back to news -->
      <nuxt-link to="/news" class="text-gray mt-1 sm:mt-0">
        See all news
        <IconBase height="14" width="14">
          <BaselineArrowForward24px />
        </IconBase>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import IconBase from "~/components/IconBase";
import BaselineArrowForward24px from "~/components/icons/baseline-arrow-forward-24px";
import IconSocialFacebook from "~/components/icons/IconSocialFacebook";
import IconShareEmail from "~/components/icons/IconShareEmail";

let baseUrl = "https%3A//raatsicc.org.au";
let linkText = "Check%20out%20this%20article%20from%20RAATSICC&amp;";

export default {
  components: {
    BaselineArrowForward24px,
    IconBase,
    IconSocialFacebook,
    IconShareEmail
  },
  props: ["slug"],
  computed: {
    /* see: https://sharingbuttons.io/ + http://www.sharelinkgenerator.com/ */
    facebookUrl() {
      /* prettier-ignore */
      return `https://facebook.com/sharer/sharer.php?u=${baseUrl}/${this.slug}`;
    },
    emailUrl() {
      /* prettier-ignore */
      return `mailto:?subject=${linkText}&body=${baseUrl}/${this.slug}`;
    }
  }
};
</script>

<style lang="postcss" scoped>
.Post-share {
  @apply block mr-3;
  transform: translateY(-2px);
}
</style>
