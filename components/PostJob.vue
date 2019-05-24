<template>
  <div class="Job">
    <h2 class="Heading font-sans font-bold tracking-normal text-brand-blue">
      {{ title }}
    </h2>
    <p v-if="date" class="font-semibold text-brand-blue">
      Applications close
      <time :date-time="date">{{ date | moment("ddd, MMMM Do YYYY") }}</time>
    </p>
    <p v-if="location" class="st-meta">
      <span class="Job-attribute Meta">Location:</span>
      {{ location }}
    </p>
    <p v-if="salary">
      <span class="Job-attribute Meta">Salary:</span>
      {{ salary }}
    </p>
    <p v-if="hours">
      <span class="Job-attribute Meta">Hours:</span>
      {{ hours }}
    </p>
    <p v-if="program">
      <span class="Job-attribute Meta">Program:</span>
      {{ program }}
    </p>
    <p v-if="note" class="text-gray st-meta">
      <!-- <span class="Job-attribute Meta-gray">Note:</span> -->
      {{ note }}
    </p>
    <p v-if="pdf" class="st-meta">
      <a :href="pdf" target="_blank" class="Button mt-2">
        Apply&nbsp;
        <IconBase height="14" width="14">
          <BaselineArrowForward24px />
        </IconBase>
      </a>
    </p>
  </div>
</template>

<script>
import IconBase from "@/components/IconBase";
import BaselineArrowForward24px from "~/components/icons/baseline-arrow-forward-24px";
import moment from "vue-moment";

export default {
  components: {
    IconBase,
    BaselineArrowForward24px,
    // eslint-disable-next-line
    moment
  },
  props: {
    title: String,
    location: String,
    salary: String,
    hours: String,
    program: String,
    pdf: String,
    date: String,
    note: String
  }
};
</script>

<style lang="postcss" scoped>
.Job {
  @apply border-l-2 border-gray-300 pl-4 mt-6;
}

@screen sm {
  .Job {
    @apply pl-5 mt-8;
  }
}

.Job > h2 {
  margin-bottom: 0;
}

.Job-attribute {
  /* @apply text-gray-600; */
  @apply font-bold uppercase;
}
</style>
