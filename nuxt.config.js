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
    "nuxt-purgecss",
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

  purgeCSS: {
    mode: "postcss",
    extractors: [
      {
        extractor: class {
          static extract(content) {
            return content.match(/[A-Za-z0–9-_/:]*[A-Za-z0–9-_/]+/g);
          }
        },
        extensions: ["html", "vue", "js"]
      }
    ],
    whitelistPatterns: [
      /-(leave|enter|appear)(|-(to|from|active))$/,
      /^(?!cursor-move).+-move$/
    ]
  },

  /*
   ** Build configuration: extend webpack config here
   */
  build: {
    // extractCSS: true,
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
  }
};
