import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  ssr: true,

  app: {
    baseURL: '/DiceStat_Voyage-By-Sea_Reverse-1999/', // 关键：让资源路径正确
  },

  modules: ['nuxt-echarts', '@nuxtjs/i18n','shadcn-nuxt'],
  shadcn: {
    
    prefix: '',
    
    componentDir: './app/components/ui'
  },
  i18n: {
    locales: [
      // { code: 'en', iso: 'en', file: 'en.json', name: 'English' },
      { code: 'zh-hans', iso: 'zh-hans', file: 'zh-hans.json', name: '简体中文' },
    ],
    defaultLocale: 'zh-hans',
    strategy: 'prefix-and-default',
  },
})