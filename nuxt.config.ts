// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  debug: true,
  modules: [
    ["nuxt-ssr-lit", { litElementPrefix: ["my-"] }]
  ]
})
