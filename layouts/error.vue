<template>
  <div class="__nuxt-error-page">
    <div class="Section Section-b error">
      <icon class="text-black" name="info" width="90" height="90" />

      <div v-if="statusCode === 404" class="description">
        <h1 class="Title st-h s-2xh">Page not found - 404</h1>
        <NuxtLink class="Heading error-link" to="/">
          <icon name="arrow-left" />
          Go Back Home
        </NuxtLink>
      </div>
      <div v-else>
        <div class="Title st-h s-2xh">{{ message }}</div>
        <p v-if="debug" class="description">
          {{ messages.client_error_details }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtError",
  layout: "default",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
        }
      ]
    };
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
    message() {
      return this.error.message || this.messages.client_error;
    }
  }
};
</script>

<style>
.error {
  /* max-width: 600px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
}
</style>
