<template lang="pug">
  form.Form(
    action="//raatsicc.us12.list-manage.com/subscribe/post?u=9f5db629b2194c9c6b6d11db6&amp;id=9f44bb7e9f",
    method="post",
    name="mc-embedded-subscribe-form",
    target='_blank',
    novalidate
  )
    input(
      placeholder="Add your email",
      type="email",
      name="EMAIL",
      value=""
    )
    div(style="position: absolute; left: -5000px;", aria-hidden="true")
      input(
        type="text",
        name="b_9f5db629b2194c9c6b6d11db6_9f44bb7e9f",
        tabindex="-1",
        value=""
      )
    button(
      type="submit",
      name="subscribe",
    )
      | {{ buttonText }}
      //- span.LinkSignal-target →
      IconBase.ml-1(height="14" width="14")
        BaselineArrowForward24px
</template>

<script>
import IconBase from "@/components/IconBase";
import BaselineArrowForward24px from "~/components/icons/baseline-arrow-forward-24px";

export default {
  components: {
    IconBase,
    BaselineArrowForward24px
  },
  computed: {
    buttonText() {
      // if (this.loading) {
      //   return "Loading";
      // } else if (this.formSent) {
      //   return "Sent";
      // }
      return "Subscribe";
    }
  }
};
</script>

<style lang="postcss" scoped>
.Form {
  @apply flex flex-row w-full;
}

/* .Form * + * {
  margin: 0;
  margin-top: -1px;
} */

@screen sm {
  .Form * + * {
    margin-left: -1px;
    margin-top: 0;
  }
}

.Form input,
.Form button {
  @apply block px-4 py-3;
}

.Form input {
  @apply w-full;
}

.Form input:focus {
  box-shadow: theme(colors.brand.blue) 0 0 0 2px;
  outline: none;
}

.Form button {
  @apply pl-5 text-white bg-brand-blue;
}

@variants focus {
}
</style>
