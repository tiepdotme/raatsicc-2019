<template>
  <div class="w-5/6 lg:w-4/6 mx-auto h-full">
    <nuxt-link to="/" class="Nav-home-link">
      <!-- <img class="Nav-logo" src="~/assets/images/logo.png"> -->
      <img class="Nav-logo" src="/images/logo-symbol.png" />
      <!-- <div class="Nav-acronym">RAATSICC</div> -->
      <IconLogotype class="Nav-logotype"></IconLogotype>
    </nuxt-link>
  </div>
</template>
<script>
import IconLogotype from "~/components/IconLogotype";

export default {
  components: {
    IconLogotype
  }
};
</script>

<style>
/* Anchor tag */
.headroom--pinned .Nav-home-link {
  @apply items-center;
}

.headroom--top .Nav-home-link,
.Nav-home-link {
  @apply flex flex-col h-full;
}

/* Logo */
.headroom--pinned .Nav-logo {
  @apply w-1/2;
}

.headroom--top .Nav-logo,
.Nav-logo {
  @apply w-3/4 mx-auto h-auto opacity-100;
  transition: all 250ms ease;
}

/* Logotype */
.headroom--pinned .Nav-logotype {
  @apply m-0 h-0 opacity-0;
}

.headroom--top .Nav-logotype,
.Nav-logotype {
  @apply mx-auto w-5/6;
  @apply mt-2 h-auto opacity-100;
  transition: all 250ms ease;
}

/* BARRIER */
.Nav-logotype svg {
  width: 100%;
}

@responsive lg {
  .headroom--pinned .Nav-logo {
    @apply w-1/3;
  }

  .headroom--top .Nav-logo,
  .Nav-logo {
    @apply w-1/2;
  }

  .Nav-logotype:not(.headroom--pinned) {
    @apply w-3/6;
  }
}
</style>
