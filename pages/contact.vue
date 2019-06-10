<template>
  <div>
    <div v-if="$apollo.loading" class="Loading">
      <LoadingSpinner />
    </div>
    <ContentColumn v-else>
      <img
        src="https://www.datocms-assets.com/11614/1557801541-map-locations.jpg?w=1200&q=50&auto=format"
        alt="RAATSICC offices in Far North Queensland"
      />
      <!-- locations -->
      <div class="mt-6">
        <div class="Locations flex flex-column flex-wrap -mx-2">
          <LocationColumn
            v-for="item in contacts"
            :key="item.streetAddress"
            :location="item"
            details
            class="px-2 w-1/2 sm:w-1/3"
          />
        </div>
      </div>
    </ContentColumn>

    <hr class="Rule" />

    <ContentColumn>
      <div class="Grid">
        <div class="Grid-item w-1/2">
          <CardCta
            card-name="facebook"
            lede="Follow us on Facebook"
            sublede="Up to the minute news"
            link-label="RAATSICC on Facebook"
            href="http://www.facebook.com/raatsicc"
          />
        </div>
        <div class="Grid-item w-1/2">
          <CardCta
            card-name="news"
            lede="News to share?"
            sublede="We'll list it for you"
            link-label="goodnews@raatsicc.org.au"
            href="mailto:goodnews@raatsicc.org.au"
          />
        </div>
      </div>
    </ContentColumn>
  </div>
</template>

<script>
import CardCta from "~/components/CardCta";
import ContentColumn from "~/components/ContentColumn";
import LoadingSpinner from "~/components/LoadingSpinner.vue";
import LocationColumn from "~/components/LocationColumn";
// import locations from "~/data/locations";

export default {
  components: {
    CardCta,
    ContentColumn,
    LoadingSpinner,
    LocationColumn
  },
  // data: () => ({ locations })
  // data: () => ({ contacts: this.$store.state.contactData })
  data() {
    return {
      contacts: this.$store.state.contactData
    };
  }
};
</script>
