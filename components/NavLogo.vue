<template>
  <div class="w-5/6 lg:w-4/6 mx-auto h-full">
    <nuxt-link to="/" class="Nav-home-link">
      <!-- <img class="Nav-logo" src="~/assets/images/logo.png"> -->
      <img class="Nav-logo" src="/images/logo.png" />
      <div class="Nav-acronym">RAATSICC</div>
    </nuxt-link>
  </div>
</template>

<style>
.headroom--pinned .Nav-home-link {
  @apply items-center;
}

.headroom--top .Nav-home-link,
.Nav-home-link {
  @apply flex flex-col h-full;
}

.headroom--pinned .Nav-acronym {
  @apply m-0 h-0 opacity-0;
}

.headroom--top .Nav-acronym,
.Nav-acronym {
  @apply font-serif font-bold text-sm tracking-wide text-center mt-2 h-auto opacity-100;
  transition: all 250ms ease;
}

.headroom--pinned .Nav-logo {
  @apply w-1/2;
}

.headroom--top .Nav-logo,
.Nav-logo {
  @apply w-3/4 mx-auto h-auto opacity-100;
  transition: all 250ms ease;
}

@responsive lg {
  .headroom--pinned .Nav-logo {
    @apply w-1/3;
  }

  .headroom--top .Nav-logo,
  .Nav-logo {
    @apply w-1/2;
  }
}
</style>
