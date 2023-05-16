// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/snipcart"],
  snipcart: {
    //public keys can be exposed - used in snipcart testing environment
    publicApiKey:
      "OTdmN2M5ZGUtMTc4OC00NGZkLWExNGEtNzVkYmQwMTY3NzY5NjM4MTk3NzkwNTgyODg4OTMx",
  },
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "/api", // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
});
