export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "documentation",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Courier+Prime|Open+Sans:400,400i,800&display=swap"
      }
    ]
  },

  router: {
    base: process.env.BASE_URL
  },

  css: ["~assets/sass/global.sass"],

  plugins: [],

  components: true,

  buildModules: ["@nuxt/typescript-build"],

  modules: ["@nuxtjs/style-resources"],
  styleResources: {
    sass: ["./assets/sass/vars/*.sass"]
  },
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(css)$/,
            chunks: "all",
            enforce: true
          }
        }
      }
    }
  }
};
