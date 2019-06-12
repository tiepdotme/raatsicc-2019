<template>
  <p :class="textSizeClass">
    <!-- heading -->
    <span class="block font-semibold uppercase">
      {{ location.area }}
    </span>
    <span
      v-if="location.name"
      class="block font-semibold"
      :class="{ 'mb-1': details }"
    >
      {{ location.name }}
    </span>

    <!-- address -->
    <a
      v-if="location.googleMapLink"
      :href="location.googleMapLink"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class="block">{{ location.streetAddress }}</span>
      <span class="block">{{ location.addressRemaining }}</span>
    </a>
    <span v-else>
      <span class="block">{{ location.streetAddress }}</span>
      <span class="block">{{ location.addressRemaining }}</span>
    </span>

    <!-- contacts -->
    <a
      v-if="location.email"
      :href="`mailto:${location.email}`"
      class="block text-gray-600"
    >
      <icon name="mail-outline" height="12" width="12" />
      {{ location.email }}
    </a>
    <a
      v-if="location.phone"
      :href="`tel:${location.phone}`"
      class="block text-gray-600"
    >
      <icon name="call" height="12" width="12" />
      {{ location.phone }}
    </a>

    <!-- extra details -->
    <span v-if="details">
      <span v-if="location.fax" class="block text-gray-600">
        <icon name="move-to-inbox" height="12" width="12" />
        {{ location.fax }}
      </span>
      <!-- <span
        v-if="location.onCallContact"
        class="block text-sm text-gray-600"
        :class="{ 'mt-1': details }"
      >
        On call: {{ location.onCallContact }}
      </span> -->
    </span>
  </p>
</template>

<script>
export default {
  // props: ["location"],
  props: {
    location: {
      area: String,
      name: String,
      streetAddress: String,
      addressRemaining: String,
      email: String,
      phone: String,
      fax: String,
      onCallContact: String,
      googleMapLink: String
    },
    details: {
      type: Boolean
    }
  },
  computed: {
    textSizeClass() {
      return this.details ? "Text mb-4" : "Meta";
    }
  }
};
</script>

<style></style>
