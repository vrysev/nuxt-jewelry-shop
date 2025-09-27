// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
  ],
  css: ["~/assets/style/main.css"],
  app: {
    head: {
      title: "Nuxt Shop - Your Premium Shopping Destination",
      titleTemplate: "%s | Nuxt Shop",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Discover amazing products with quality you can trust. Premium shopping experience with fast shipping and 24/7 support.",
        },
        { name: "keywords", content: "shop, ecommerce, premium products, online shopping, quality guarantee" },
        { name: "author", content: "Nuxt Shop" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Nuxt Shop - Your Premium Shopping Destination" },
        {
          property: "og:description",
          content: "Discover amazing products with quality you can trust. Premium shopping experience with fast shipping and 24/7 support.",
        },
        { property: "og:site_name", content: "Nuxt Shop" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Nuxt Shop - Your Premium Shopping Destination" },
        {
          name: "twitter:description",
          content: "Discover amazing products with quality you can trust. Premium shopping experience with fast shipping and 24/7 support.",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://your-domain.com" },
      ],
    },
  },
});
