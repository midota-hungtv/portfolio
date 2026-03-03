import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import idID from '../locales/id_ID.json'

export default defineNuxtPlugin((nuxtApp) => {
  const locale = useCookie('locale')
  const currentLocale = locale.value || 'en'

  const i18n = createI18n({
    legacy: false,
    locale: currentLocale,
    fallbackLocale: 'en',
    messages: {
      en,
      id_ID: idID
    }
  })

  nuxtApp.vueApp.use(i18n)
})
