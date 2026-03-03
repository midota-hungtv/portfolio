import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin((nuxtApp) => {
  const locale = useCookie('locale')

  const i18n = createI18n({
    legacy: false,
    inheritLocale: false,
    globalInjection: true,
    localeDir: 'locales',
    fallbackLocale: locale.value || 'id',
    locale: locale.value || 'id',
  })

  nuxtApp.vueApp.use(i18n)
})
