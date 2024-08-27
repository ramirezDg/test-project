import { create } from 'zustand'

interface eComerceState {
  sidebarOpen: boolean
  pageContainerStyles: Record<string, string>
  lenguage: string
  theme: string
  setPageContainerStyles: (styles: Record<string, string>) => void
}

export const useEcommerceStore = create<eComerceState>(set => ({
  sidebarOpen: true,
  pageContainerStyles: {},
  lenguage: 'en',
  theme: 'system',
  setPageContainerStyles: (styles: Record<string, string>) =>
    set({ pageContainerStyles: styles })
}))
