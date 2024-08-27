import { create } from 'zustand'

interface LanguageState {
  language: string
  setLanguage: (lang: string) => void
}

// Crear la tienda con Zustand
export const useLanguageStore = create<LanguageState>(set => ({
  // Inicializar el estado con el valor de localStorage o un valor predeterminado
  language: localStorage.getItem('language') || 'en',
  // Acción para actualizar el estado y el localStorage
  setLanguage: (lang: string) => {
    localStorage.setItem('language', lang)
    set({ language: lang })
  },
}))
