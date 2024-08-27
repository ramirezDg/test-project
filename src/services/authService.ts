import axios from 'axios'
import { environment } from '../environment/environment'

interface Props {
  email: string
  pass: string
}

interface PropsResponseLogin {
  message: string
  error?: string
  statusCode: number
  token?: string
  data?: undefined
  user?: {
    uuid: string
    name: string
    lastname: string
    email: string
    role: string
  }
}

const userLogin: PropsResponseLogin = {
  token: '',
  message: '',
  statusCode: 0,
  error: '',
  data: undefined,
  user: {
    uuid: '',
    name: '',
    lastname: '',
    email: '',
    role: '',
  },
}

export const loginUser = async ({
  email,
  pass,
}: Props): Promise<PropsResponseLogin> => {
  if (email === '' || pass === '') {
    return userLogin
  }

  try {
    const res = await axios
      .post(`${environment.baseUrl}auth/login`, { email, password: pass })
      .then(response => {
        return response.data
      })
      .catch(error => {
        return error.response.data
      })

    return res
  } catch (error) {
    return userLogin
  }
}

export const registerUser = async ({
  email,
  pass,
}: Props): Promise<PropsResponseLogin> => {
  if (!email || !pass) {
    return {
      message: 'Email or password is empty',
      statusCode: 400,
    }
  }

  try {
    const response = await axios.post(`${environment.baseUrl}auth/register`, {
      email,
      password: pass,
    })

    // Asumiendo que la respuesta es exitosa y contiene los datos esperados.
    return {
      message: 'Registration successful',
      statusCode: 200,
      data: response.data,
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Manejo específico de errores de Axios.
      return {
        message:
          error.response.data.message ||
          'An error occurred during registration',
        error: error.response.data.error || 'Unknown error',
        statusCode: error.response.status,
      }
    }
    // Manejo de errores no específicos de Axios.
    return {
      message: 'An unknown error occurred',
      statusCode: 500,
    }
  }
}
