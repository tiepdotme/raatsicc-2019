<template>
  <main class="container">
    <ContentColumn>
      <img
        src="/images/map-locations.jpg"
        alt="RAATSICC offices in Far North Queesnaldn"
      />

      <!-- <div class="Grid pt-4">
        <div v-for="item in locations.head" :key="item.name" class="Grid-item">
          <ul>
            <li class="font-bold">{{ item.name }}</li>
            <li>{{ item.address1 }}</li>
            <li>{{ item.address2 }}</li>
            <li>
              <a :href="`tel:${item.phone}`">{{ item.phone }}</a>
            </li>
            <li>
              <a :href="`mailto:${item.email}`">{{ item.email }}</a>
            </li>
          </ul>
        </div>
        <div class="Grid-item">x</div>
        <div class="Grid-item">x</div>
      </div> -->
      <!-- locations -->
      <div class="mt-6">
        <div class="Locations flex flex-column flex-wrap -mx-2">
          <LocationColumn
            v-for="item in contacts"
            :key="item.streetAddress"
            :location="item"
            details
            class="px-2 w-1/3"
          />
        </div>
      </div>
    </ContentColumn>

    <hr class="Section-rule" />

    <ContentColumn>
      <div class="Grid">
        <div class="Grid-item w-1/2">
          <CardCta
            icon="facebook"
            lede="Follow us on Facebook"
            sublede="Up to the minute news"
            link-label="RAATSICC on Facebook"
            href="http://www.facebook.com/raatsicc"
          />
        </div>
        <div class="Grid-item w-1/2">
          <CardCta
            icon="share-news"
            lede="News to share?"
            sublede="We'll list it for you"
            link-label="goodnews@raatsicc.org.au"
            href="mailto:goodnews@raatsicc.org.au"
          />
        </div>
      </div>
    </ContentColumn>
  </main>
</template>

<script>
import CardCta from "~/components/CardCta";
import ContentColumn from "~/components/ContentColumn";
import LocationColumn from "~/components/LocationColumn";
// import locations from "~/data/locations";

export default {
  components: {
    CardCta,
    ContentColumn,
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
