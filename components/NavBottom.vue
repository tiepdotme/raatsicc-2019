<template>
  <footer class="Footer">
    <div class="container pt-20 pb-12">
      <hr class="Rule mt-4" />
      <nav class="Nav">
        <div class="flex">
          <div class="w-1/2 sm:w-1/6 lg:w-1/4">
            <div class="pt-4">
              <NavLogo />
            </div>
          </div>
          <!-- divide here? -->
          <div class="w-1/2 sm:w-5/6 lg:w-3/4">
            <NavList />
            <hr class="Rule mb-8" />
            <!-- locations -->
            <div class="w-10/12">
              <div class="Locations flex flex-column flex-wrap -mx-2">
                <LocationColumn
                  v-for="item in contacts"
                  :key="item.streetAddress"
                  :location="item"
                  class="px-2 w-1/3"
                />
                <!-- <LocationComplianceItem /> -->
              </div>
            </div>
            <!-- copyright -->
            <hr class="Rule mt-8 mb-4" />
            <div class="Meta-gray">
              <span>&copy; {{ new Date().getFullYear() }} RAATSICC</span>
              <span class="font-thin text-gray-500">|</span>
              <a href="https://callumflack.design/" target="_blank">
                Site by Callum Flack Design
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script>
import ContentColumn from "~/components/ContentColumn";
import LocationColumn from "~/components/LocationColumn";
import LocationComplianceItem from "~/components/LocationComplianceItem";
import NavLogo from "~/components/NavLogo";
import NavList from "~/components/NavList";
import nav from "~/data/nav";

export default {
  components: {
    ContentColumn,
    LocationColumn,
    LocationComplianceItem,
    NavList,
    NavLogo
  },
  data() {
    return {
      nav,
      contacts: this.$store.state.contactData
    };
  }
};
</script>

<style scoped>
.Footer .Section {
  @apply pt-8;
}

.Locations p:nth-of-type(1),
.Locations p:nth-of-type(3) {
  /* margin-bottom: 10vh; */
  @apply mb-3;
}
</style>
