// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true, 
  target: 'static',
  router: {
    base: '/DiceStat_Voyage-By-Sea_Reverse-1999/', 
  }
})
