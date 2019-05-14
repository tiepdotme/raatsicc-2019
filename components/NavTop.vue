<template>
  <div class="container">
    <nav class="Nav Rule container-inner">
      <div class="flex">
        <!-- logo -->
        <div class="w-1/6 sm:w-1/4">
          <NavLogo />
        </div>
        <!-- mobile page location & list -->
        <div class="Nav-pagename flex sm:hidden w-full">
          <nuxt-link :to="pageLink">
            <h1 class="sm:w-5/6 lg:w-3/4">{{ pageName }}</h1>
          </nuxt-link>
        </div>
        <!-- acronymn & list -->
        <div class="hidden sm:block sm:w-5/6 lg:w-3/4">
          <h1 class="Nav-acronym text-brand-primary sm:w-5/6 lg:w-3/4">
            Cape York / Gulf Remote Area Aboriginal &amp; Torres Strait Islander
            Child Care
            <span class="font-bold text-gray-900">
              &nbsp;/ Protecting Kids Our Way.
            </span>
          </h1>
          <!-- <h2 class="Title Nav-tagline">Protecting Kids Our Way.</h2> -->
          <hr class="Nav-tagline-rule" />
          <NavList />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import NavList from "~/components/NavList";
import NavLogo from "~/components/NavLogo";

export default {
  components: {
    NavList,
    NavLogo
  },
  computed: {
    pageLink() {
      if (this.$route.name === "what-we-do") {
        return "/what-we-do";
      } else if (this.$route.name === "what-we-do-page") {
        return "/what-we-do";
      }
      return this.$route.path;
    },
    pageName() {
      if (this.$route.name === "index") {
        return "Home";
      } else if (this.$route.name === "what-we-do") {
        return "What we do";
      } else if (this.$route.name === "what-we-do-page") {
        return "What we do";
      } else if (this.$route.name === "news-jobs") {
        return "Jobs";
      } else if (this.$route.name === "news-archive") {
        return "News archive";
      }
      return this.$route.name;
    }
  }
};
</script>

<style lang="postcss" scoped>
/* NAV */
.headroom--pinned:not(.headroom--top) .Nav {
  box-shadow: 0 9px 19px 0 rgba(0, 0, 0, 0.05);
}

.Nav {
  /* @apply pt-1; */
}

/* OLD LARGE TAGLINE + RULE */
/* .headroom--pinned .Nav-tagline {
  height: 0;
} */

/* .headroom--pinned .Nav-tagline,
.headroom--pinned .Nav-tagline-rule {
  @apply m-0 opacity-0;
} */

/* .headroom--top .Nav-tagline,
.Nav-tagline {
  @apply text-brand-primary italic;
  height: auto;
  opacity: 1;
  transition: all 250ms ease;
} */

/* .headroom--top .Nav-tagline-rule, */
.Nav-tagline-rule {
  @apply border-b border-brand-primary m-0 mt-4 opacity-100;
  transition: all 250ms ease;
}

/* ACRONYM */
/* .headroom--pinned .Nav-acronym {
  @apply m-0 h-0 opacity-0;
} */

/* .headroom--top .Nav-acronym, */
.Nav-acronym {
  @apply font-serif font-extrabold uppercase text-xs tracking-wide;
  @apply mt-8 h-auto opacity-100;
  transition: all 250ms ease;
}

.Nav-pagename {
  @apply ml-6 pl-6 border-l border-gray-300 items-center;
}

.Nav-pagename h1 {
  /* Nav-link */
  @apply text-sm font-semibold uppercase;
}

@screen sm {
  .Nav {
    @apply pt-0;
  }

  .Nav-acronym {
    @apply text-sm;
  }
}
</style>
