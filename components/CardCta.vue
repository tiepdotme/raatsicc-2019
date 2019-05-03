<template>
  <div class="Card">
    <div class="Card-body">
      <IconBase class="text-brand-blue">
        <IconSocialFacebook />
      </IconBase>
      <div class="Metaheading text-brand-blue mt-4">
        {{ lede }}
      </div>
    </div>
    <a href="link" class="Card-link">
      {{ linkLabel }}
    </a>
  </div>
</template>

<script>
import IconBase from "@/components/IconBase";
import IconSocialFacebook from "@/components/icons/IconSocialFacebook";

export default {
  components: {
    IconBase,
    IconSocialFacebook
  },
  props: {
    icon: String,
    lede: String,
    link: String,
    linkLabel: String,
  }
}
</script>

<style scoped>
.Card {
  @apply border border-brand-blue bg-brand-dustblue;
}

.Card-body {
  @apply px-4 py-4 my-1;
}

.Card-link {
  @apply block px-4 py-3 text-white bg-brand-blue;
}

</style>
