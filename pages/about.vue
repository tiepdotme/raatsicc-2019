<template>
  <main class="container">
    <HeroBlocksAbout />
    <ContentColumn id="story" text>
      <div class="Markdown" v-html="$md.render(aboutPage.story)" />
    </ContentColumn>
    <ContentColumn id="team" text>
      <div class="Markdown" v-html="$md.render(aboutPage.team)" />
      <div class="Grid flex-wrap Subsection">
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
    <ContentColumn id="constitution" text>
      <div class="Markdown">
        <h2>Our Constitution</h2>
        <p>
          Our Constitution holds our organisation standards.&nbsp;
          <!-- prettier-ignore -->
          <nuxt-link to="/constitution">You can read them in full here.</nuxt-link>
        </p>
      </div>
    </ContentColumn>
    <ContentColumn id="member" text>
      <div class="Markdown" v-html="$md.render(aboutPage.membership)" />
    </ContentColumn>
  </main>
</template>

<script>
import CardTeamMember from "~/components/CardTeamMember";
import ContentColumn from "~/components/ContentColumn";
import HeroBlocksAbout from "~/components/HeroBlocksAbout";
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
    HeroBlocksAbout
  }
};
</script>
