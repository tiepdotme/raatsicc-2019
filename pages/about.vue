<template>
  <div>
    <HeroBlocksAbout />
    <div v-if="$apollo.loading" class="Loading">
      <LoadingSpinner />
    </div>
    <ContentColumn v-else id="story" text>
      <div class="Markdown" v-html="$md.render(aboutPage.story)" />
    </ContentColumn>
    <ContentColumn v-if="aboutPage" id="team" text>
      <div class="Markdown" v-html="$md.render(aboutPage.team)" />
      <div class="Grid Grid--sm flex-row flex-wrap Section-md">
        <CardTeamMember
          v-for="item in aboutPage.teamGrid"
          :key="item.name"
          :title="item.title"
          :image="item.portrait"
          :name="item.name"
          :location="item.location"
          class="Grid-item w-1/2 lg:w-1/3"
        ></CardTeamMember>
      </div>
    </ContentColumn>
    <ContentColumn v-if="aboutPage" id="constitution" text>
      <div class="Markdown">
        <h2>Our Constitution</h2>
        <p>
          Our Constitution holds our organisation standards. Read them in full:
        </p>
        <p class="">
          <!-- prettier-ignore -->
          <nuxt-link to="/constitution" class="Button">Our Constitution</nuxt-link>
        </p>
      </div>
    </ContentColumn>
    <ContentColumn v-if="aboutPage" id="member" text>
      <div class="Markdown" v-html="$md.render(aboutPage.membership)" />
    </ContentColumn>
  </div>
</template>

<script>
import CardTeamMember from "~/components/CardTeamMember";
import ContentColumn from "~/components/ContentColumn";
import HeroBlocksAbout from "~/components/HeroBlocksAbout";
import LoadingSpinner from "~/components/LoadingSpinner.vue";
import gql from "graphql-tag";

export default {
  apollo: {
    aboutPage: gql`
      {
        aboutPage {
          story
          team
          membership
          teamGrid {
            # dato modular record type
            # …which contains team_manager records
            ... on TeamManagerRecord {
              _modelApiKey
              name
              title
              location
              portrait {
                url
              }
            }
          }
        }
      }
    `
  },
  components: {
    CardTeamMember,
    ContentColumn,
    HeroBlocksAbout,
    LoadingSpinner
  }
};
</script>
