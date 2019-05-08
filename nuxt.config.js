const pkg = require("./package");
const path = require("path");

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
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
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
  plugins: ["~/plugins/vue-headroom", "@/plugins/vue-moment"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // "nuxt-netlify-cms"
    "@nuxtjs/apollo",
    "@nuxtjs/markdownit"
  ],

  apollo: {
    clientConfigs: {
      default: "~/apollo/config.js"
    }
  },

  markdownit: {
    injected: true,
    // html: true
    use: ["markdown-it-attrs"]
  },

  /*
   ** Build configuration: extend webpack config here
   */
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Disable a plugin by passing false as value
      plugins: {
        // https://github.com/postcss/postcss-url
        // "postcss-url": {},
        "postcss-import": {},
        "postcss-mixins": {},
        tailwindcss: path.resolve(__dirname, "./tailwind.config.js")
      }
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
