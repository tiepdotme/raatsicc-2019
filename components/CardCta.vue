<template>
  <div class="Card">
    <div class="Card-body">
      <IconBase class="text-brand-blue" height="30" width="30">
        <BaselineEmail24px v-if="icon === 'newsletter'" />
        <BaselineFeedback24px v-else-if="icon === 'share-news'" />
        <BaselineFlag24px v-else-if="icon === 'difference'" />
        <BaselinePanTool24px v-else-if="icon === 'member'" />
        <IconSocialFacebookRev v-else-if="icon === 'facebook'" />
      </IconBase>
      <div class="Metaheading text-brand-blue mt-4">
        {{ lede }}
        <br />
        <span class="font-medium" v-html="sublede" />
      </div>
    </div>
    <NewsletterForm v-if="icon === 'newsletter'" />
    <CfdLink v-else :to="to" :href="href" class="Card-link">
      {{ linkLabel }}
      <IconBase height="14" width="14">
        <BaselineArrowForward24px />
      </IconBase>
    </CfdLink>
  </div>
</template>

<script>
import IconBase from "@/components/IconBase";
import IconSocialFacebookRev from "@/components/icons/IconSocialFacebookRev";
import BaselineArrowForward24px from "~/components/icons/baseline-arrow-forward-24px";
import BaselineEmail24px from "~/components/icons/baseline-email-24px";
import BaselineFeedback24px from "~/components/icons/baseline-feedback-24px";
import BaselineFlag24px from "~/components/icons/baseline-flag-24px";
import BaselinePanTool24px from "~/components/icons/baseline-pan-tool-24px";
import CfdLink from "@/components/CfdLink";
import NewsletterForm from "@/components/NewsletterForm";

export default {
  components: {
    BaselineArrowForward24px,
    BaselineEmail24px,
    BaselineFeedback24px,
    BaselineFlag24px,
    BaselinePanTool24px,
    CfdLink,
    IconBase,
    IconSocialFacebookRev,
    NewsletterForm
  },
  props: {
    icon: String,
    lede: String,
    sublede: {
      String,
      default: "&nbsp;"
    },
    linkLabel: String,
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="postcss" scoped>
.Card {
  @apply border border-brand-blue bg-brand-dustblue;
}

.Card-body {
  @apply px-4 py-4 my-1;
}

.Card-link {
  @apply block px-4 py-3 text-white bg-brand-blue;
}

.Card-link >>> svg {
  transform: translate(0, -1px);
  transition: transform 250ms ease;
}
.Card-link:hover >>> svg {
  transform: translate(5px, -1px);
}
</style>
