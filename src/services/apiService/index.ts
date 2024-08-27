import axios, { AxiosInstance } from 'axios'
import { environment } from '../../environment/environment'
import { redirectToSignIn } from '../../lib/navigationHelper'

// Create an instance of Axios
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: environment.baseUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// Interceptor de solicitud para añadir el token de autorización de manera dinámica
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

// Interceptor de respuesta para manejar errores específicos, como la autenticación
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      redirectToSignIn()
    }
    return Promise.reject(error)
  },
)