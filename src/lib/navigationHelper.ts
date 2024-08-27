// navigationHelper.ts
import { useNavigate } from 'react-router-dom'

let navigate: ReturnType<typeof useNavigate> | null = null

export const setNavigate = (nav: ReturnType<typeof useNavigate>) => {
  navigate = nav
}

export const redirectToSignIn = () => {
  if (navigate) {
    localStorage.clear() // Limpia el almacenamiento local
    navigate('/sign-in', { replace: true }) // Redirige a la página de inicio de sesión
  }
}