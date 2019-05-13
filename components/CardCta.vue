<template>
  <div class="Card" :class="isOrangeClass">
    <div class="Card-body">
      <IconBase class="Card-icon" height="30" width="30">
        <BaselineEmail24px v-if="icon === 'newsletter'" />
        <BaselineFeedback24px v-else-if="icon === 'share-news'" />
        <BaselineFlag24px v-else-if="icon === 'difference'" />
        <BaselinePanTool24px v-else-if="icon === 'member'" />
        <BaselineBookmark24px v-else-if="icon === 'resources'" />
        <IconSocialFacebookRev v-else-if="icon === 'facebook'" />
      </IconBase>
      <div class="Card-heading Metaheading">
        {{ lede }}
        <br />
        <span class="font-medium" v-html="sublede" />
      </div>
    </div>
    <!-- button or form -->
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
import BaselineBookmark24px from "~/components/icons/baseline-bookmark-24px";
import CfdLink from "@/components/CfdLink";
import NewsletterForm from "@/components/NewsletterForm";

export default {
  components: {
    BaselineArrowForward24px,
    BaselineBookmark24px,
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
    },
    orange: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isOrangeClass() {
      return this.orange && "is-orange";
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

.Card-heading {
  @apply mt-4;
}

.Card-icon,
.Card-heading {
  @apply text-brand-blue;
}

.Card-link {
  @apply block px-4 py-3 text-white bg-brand-blue;
}

.Card-link >>> svg {
  transform: translate(0, -1px);
  transition: transform 250ms ease;
}
.Card-link:hover >>> svg {
  transform: translate(3px, -1px);
}

/* is orange */
.Card.is-orange {
  @apply border-brand-primary bg-brand-neutral;
}

.Card.is-orange >>> .Card-icon {
  @apply text-brand-primary;
}

.Card.is-orange .Card-heading {
  @apply text-brand-primary;
}

.Card.is-orange .Card-link {
  @apply bg-brand-primary;
}
</style>
