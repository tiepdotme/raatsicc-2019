const pkg = require("./package");
// const path = require("path");
import config from "./config";

const baseURL = config.PROD ? config.SITE_URL : "http://localhost";

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    // preload a webfont
    // eslint-disable-next-line no-dupe-keys
    link: [
      {
        rel: "preload",
        href: "/../../fonts/Malabar-LT-W01-Regular.woff",
        as: "font",
        type: "font/woff",
        crossorigin: true
      }
    ],
    htmlAttrs: {
      lang: "en"
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#FFFFFF" },

  /*
   ** Global CSS
   */
  css: ["~/assets/css/tailwind.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/vue-headroom",
    "@/plugins/vue-moment",
    "~/plugins/vue-svgicon",
    {
      src: "~/plugins/v-lazy-image",
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/dotenv",
    "@nuxtjs/apollo",
    "@nuxtjs/axios",
    "portal-vue/nuxt",
    "@nuxtjs/markdownit",
    "@nuxtjs/sitemap"
  ],

  /* env: {
    // LAMBDA_FUNCTIONS_BASE_URL: process.env.LAMBDA_FUNCTIONS_BASE_URL,
    // CONTACT_FORM_TO: process.env.CONTACT_FORM_TO,
    DATO_API_TOKEN: process.env.DATO_API_TOKEN
  }, */

  proxy: {
    "/.netlify": {
      target: `${baseURL}:9000`,
      pathRewrite: { "^/.netlify/functions": "" }
    }
  },

  router: {
    middleware: "currentPage"
  },

  apollo: {
    clientConfigs: {
      default: "~/apollo/config.js"
    }
  },

  axios: {},

  markdownit: {
    injected: true,
    html: true,
    linkify: true,
    use: ["markdown-it-attrs"]
  },

  /* https://github.com/nuxt-community/sitemap-module */
  sitemap: {
    hostname: config.SITE_URL
  },

  /*
   ** Build configuration: extend webpack config here
   */
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Disable a plugin by passing false as value
      plugins: [
        require("postcss-import"),
        require("tailwindcss")("./tailwind.config.js")
      ]
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },

  generate: {
    fallback: "404.html"
    /* async routes() {
      const res = await axiosDefaultInstance({
        url: "/",
        method: "POST",
        data: {
          query: `{
            allApartments {
              id
              slug
            }
          }`,
        },
      });

      const apartments = res.data.data.allApartments;
      const apartmentRoutes = apartments
        .map(apartment => `/apartments/${apartment.slug}`);

      const exploreRoutes = explore.segments
        .map(segment => `/explore/${segment.slug}`);

      return [...apartmentRoutes, ...exploreRoutes];
    }, */
  }
};
