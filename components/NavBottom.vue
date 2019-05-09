<template>
  <footer class="Footer">
    <div class="container pt-24 pb-12">
      <nav class="Nav">
        <div class="flex">
          <div class="w-1/2 sm:w-1/6 lg:w-1/4">
            <NavLogo />
          </div>
          <div class="w-1/2 sm:w-5/6 lg:w-3/4">
            <NavList />
            <hr class="border-b border-gray-300 m-0" />
          </div>
        </div>
      </nav>
      <ContentColumn>
        <!-- locations -->
        <div class="Locations flex flex-column flex-wrap -mx-2">
          <LocationColumn
            v-for="item in contacts"
            :key="item.streetAddress"
            :location="item"
            class="px-2 w-1/3"
          />
        </div>
        <!-- copyright -->
        <hr class="border-b border-gray-300 my-6" />
        <div class="Meta-gray">
          <span>&copy; {{ new Date().getFullYear() }} RAATSICC</span>
          <span class="font-thin text-gray-500">|</span>
          <a href="https://callumflack.design/" target="_blank">
            Site by Callum Flack Design
          </a>
        </div>
      </ContentColumn>
    </div>
  </footer>
</template>

<script>
import ContentColumn from "~/components/ContentColumn";
import LocationColumn from "~/components/LocationColumn";
import NavLogo from "~/components/NavLogo";
import NavList from "~/components/NavList";
import nav from "~/data/nav";

export default {
  components: {
    ContentColumn,
    LocationColumn,
    NavList,
    NavLogo
  },
  data() {
    return {
      nav,
      contacts: this.$store.state.contactData
    };
  },
  computed: {
    cairns() {
      // map, reduce or filter:
      return this.$store.state.contactData.filter(
        x => x.name === "Head Office"
      );
    },
    notCairns() {
      return this.$store.state.contactData.filter(
        x => x.name !== "Head Office"
      );
    }
  }
};
</script>

<style scoped>
.Nav {
  /* @apply pt-8 border-t border-gray-300; */
}

.Footer .Section {
  @apply pt-8;
}

.Locations p:nth-of-type(1),
.Locations p:nth-of-type(3) {
  /* margin-bottom: 10vh; */
  @apply mb-2;
}
</style>
