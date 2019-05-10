<template>
  <main class="container Section">
    <HeroStripe
      v-if="volunteerPage"
      :image="volunteerPage.heroImage.url"
      :alt="volunteerPage.heroTitle"
      color="green"
    >
      <div class="container bg-transparent">
        <ContentColumn class="relative">
          <div class="py-4">
            <h1 class="Title text-white">
              {{ volunteerPage.heroTitle }}
            </h1>
            <p class="Subheading italic text-white">
              {{ volunteerPage.heroSubtitle }}
            </p>
          </div>
        </ContentColumn>
      </div>
    </HeroStripe>
    <section>
      <ContentColumn v-if="volunteerPage" text>
        <h2 class="Heading italic">
          {{ volunteerPage.bodyIntro }}
        </h2>
      </ContentColumn>
      <ContentColumn v-if="volunteerPage" text>
        <div class="Markdown" v-html="$md.render(volunteerPage.body)" />
        <p class="mt-6">
          <a
            v-for="item in volunteerPage.pdfs"
            :key="item.pdfLabel"
            :href="item.pdfLink.url"
            target="_blank"
            class="Button"
          >
            {{ item.pdfLabel }}
            <IconBase height="14" width="14" class="ml-1">
              <BaselineArrowForward24px></BaselineArrowForward24px>
            </IconBase>
          </a>
        </p>
      </ContentColumn>
    </section>
  </main>
</template>

<script>
import ContentColumn from "~/components/ContentColumn.vue";
import HeroStripe from "~/components/HeroStripe.vue";
import IconBase from "~/components/IconBase.vue";
import BaselineArrowForward24px from "~/components/icons/baseline-arrow-forward-24px";
import gql from "graphql-tag";

export default {
  apollo: {
    volunteerPage: gql`
      {
        volunteerPage {
          heroImage {
            url
          }
          heroTitle
          heroSubtitle
          bodyIntro
          body
          pdfs {
            # dato modular record type
            # …which contains team_manager records
            ... on PdfButtonRecord {
              _modelApiKey
              pdfLabel
              pdfLink {
                url
              }
            }
          }
        }
      }
    `
  },
  components: {
    BaselineArrowForward24px,
    ContentColumn,
    HeroStripe,
    IconBase
  }
};
</script>
