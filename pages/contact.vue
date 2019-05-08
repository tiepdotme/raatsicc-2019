<template>
  <main class="container">
    <ContentColumn>
      <img src="/images/map.jpg" alt="" />

      <div class="Grid pt-4">
        <div v-for="item in locations.head" :key="item.name" class="Grid-item">
          <ul>
            <li class="font-bold">
              {{ item.name }}
            </li>
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
        <div class="Grid-item">
          x
        </div>
        <div class="Grid-item">
          x
        </div>
      </div>
    </ContentColumn>

    <hr class="Section-rule" />

    <ContentColumn>
      <div class="Grid">
        <div class="Grid-item w-1/2">
          <CardCta
            icon="social-facebook"
            lede="Follow us on Facebook"
            link-label="RAATSICC on Facebook"
            link="http://www.facebook.com/raatsicc"
          />
        </div>
        <div class="Grid-item w-1/2">
          <CardCta
            icon="social-facebook"
            lede="News to share? We'll list it for you"
            link-label="goodnews@raatsicc.org.au"
            link="mailto:goodnews@raatsicc.org.au"
          />
        </div>
      </div>
    </ContentColumn>
  </main>
</template>

<script>
import CardCta from "~/components/CardCta";
import ContentColumn from "~/components/ContentColumn";
import locations from "~/data/locations";

export default {
  components: {
    CardCta,
    ContentColumn
  },
  data: () => ({ locations })
};
</script>

<style></style>
