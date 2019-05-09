<template>
  <p class="Meta">
    <span class="block font-bold uppercase">
      {{ location.area }}
    </span>
    <span v-if="location.name" class="block font-semibold">
      {{ location.name }}
    </span>
    <span class="block">{{ location.streetAddress }}</span>
    <span class="block">{{ location.addressRemaining }}</span>
    <a
      v-if="location.email"
      :href="`mailto:${location.email}`"
      class="block text-gray-600"
    >
      <IconBase height="12" width="12">
        <BaselineEmail24px />
      </IconBase>
      {{ location.email }}
    </a>
    <a
      v-if="location.phone"
      :href="`tel:${location.phone}`"
      class="block text-gray-600"
    >
      <IconBase height="12" width="12">
        <BaselineCall24px />
      </IconBase>
      {{ location.phone }}
    </a>
    <span v-if="location.fax" class="block text-gray-600">
      <IconBase height="12" width="12">
        <BaselineMoveToInbox24px />
      </IconBase>
      {{ location.fax }}
    </span>
    <span v-if="location.onCallContact" class="block text-gray-600">
      On call: {{ location.onCallContact }}
    </span>
  </p>
</template>

<script>
import IconBase from "~/components/IconBase";
import BaselineCall24px from "~/components/icons/baseline-call-24px";
import BaselineEmail24px from "~/components/icons/baseline-email-24px";
import BaselineMoveToInbox24px from "~/components/icons/baseline-move-to-inbox-24px.vue";

export default {
  components: {
    BaselineCall24px,
    BaselineEmail24px,
    BaselineMoveToInbox24px,
    IconBase
  },
  // props: {
  //   area: String,
  //   name: String,
  //   streetAddress: String,
  //   addressRemaining: String,
  //   email: String,
  //   phone: String,
  //   fax: String,
  //   onCallContact: String
  // }
  props: ["location"]
};
</script>

<style></style>
