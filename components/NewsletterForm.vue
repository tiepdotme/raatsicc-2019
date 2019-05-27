<template lang="pug">
  form.Form.Text(
    action="https://raatsicc.us20.list-manage.com/subscribe/post?u=9c7d1ebc0a46a1dec40146e3e&amp;id=a7a886c2cd",
    method="post",
    name="mc-embedded-subscribe-form",
    target='_blank',
    novalidate
  )
    input.Button.Button--input(
      placeholder="Add your email",
      type="email",
      name="EMAIL",
      value=""
    )
    div(style="position: absolute; left: -5000px;", aria-hidden="true")
      input(
        type="text",
        name="b_9c7d1ebc0a46a1dec40146e3e_a7a886c2cd",
        tabindex="-1",
        value=""
      )
    button.Button.Button--blue(
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
}

@screen sm {
  .Form * + * {
    margin: 0;
  }
} */

.Button {
  --button-border-radius: 0;
  --button-height: 44px;
}

.Form input {
  @apply flex-grow;
}

@screen sm {
}
</style>
