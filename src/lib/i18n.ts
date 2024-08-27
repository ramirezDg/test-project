// src/i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Importa tus archivos de traducción
import translationEN from '../locales/en/translation.json'
import translationES from '../locales/es/translation.json'

// Los recursos de traducción.
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
}

const initialLanguage = localStorage.getItem('language') || 'en'

i18n
  .use(initReactI18next) // Pasa la instancia de i18n a react-i18next.
  .init({
    resources,
    lng: initialLanguage, // Idioma inicial
    fallbackLng: 'en', // Cuando no se encuentra una traducción, usa el inglés.
    interpolation: {
      escapeValue: false, // No es necesario escapar el valor para react.
    },
  })

export default i18n
