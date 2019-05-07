<template>
  <div class="w-5/6 lg:w-4/6 mx-auto">
    <nuxt-link to="/">
      <!-- <img class="w-3/4 lg:w-1/2 mx-auto" src="~/assets/images/logo.png"> -->
      <img class="w-3/4 lg:w-1/2 mx-auto" src="/images/logo.png" />
      <div class="Nav-acronym">RAATSICC</div>
    </nuxt-link>
  </div>
</template>

<style>
.headroom--pinned .Nav-acronym {
  margin: 0;
  opacity: 0;
}

.headroom--top .Nav-acronym,
.Nav-acronym {
  @apply font-serif font-bold text-center mt-3;
  opacity: 1;
  transition: all 250ms ease;
}
</style>
