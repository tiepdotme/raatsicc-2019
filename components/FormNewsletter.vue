<template>
  <div>
    <div v-if="successMsg" class="mb-2">
      <strong>{{ successMsg }}</strong>
    </div>
    <div v-if="errorMsg" class="mb-2">
      <icon name="info" class="text-brand-red" />
      <strong>{{ errorMsg }}</strong>
    </div>
    <form class="Form" @submit.prevent="handleSubmit">
      <!-- <input
          v-model="formData.name"
          class="Form-input"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />-->
      <input
        v-model="formData.email"
        class="Button Button--input flex-1"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <button class="Button Button--blue rounded-none">
        Sign Up
      </button>
    </form>
  </div>
</template>

<script>
/*
  https://github.com/jamesqquick/Learn-Build-Teach-Site/blob/master/src/components/newsletter.js
*/
export default {
  data() {
    return {
      subscribed: false,
      errorMsg: null,
      successMsg: null,
      formData: {
        name: "",
        email: ""
      }
    };
  },
  methods: {
    async subscribeToNewsletter(body) {
      const response = await fetch("/.netlify/functions/subscribe", {
        method: "post",
        body: JSON.stringify(body)
      });
      const json = await response.json();

      if (response.status !== 200) {
        // Return message from server
        return new Error(json.msg);
      }

      return json;
    },
    async handleSubmit() {
      this.errorMsg = "";
      this.successMsg = "";

      try {
        const response = await this.subscribeToNewsletter({
          email: this.formData.email,
          name: this.formData.name
        });

        if (response instanceof Error) {
          this.errorMsg = response.message;
          return;
        }

        this.email = "";
        this.name = "";
        this.subscribed = true;
        this.successMsg = response.msg;
      } catch (error) {
        this.errorMsg = "An error occured signing you up";
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.Form {
  @apply flex flex-row w-full;
}

.Button {
  --button-height: 44px;
}

.Button + .Button {
  margin: 0 !important;
}
</style>
