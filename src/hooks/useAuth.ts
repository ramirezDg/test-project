import { useState, useCallback } from 'react'
import { loginUser } from '../services/authService'

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

export function useLogin() {
  const [login, setResponseAuth] = useState<PropsResponseLogin>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const getUserAuth = useCallback(async ({ email, pass }: Props) => {
    /* console.log(email, pass) */
    try {
      setLoading(true)
      setError(null)
      const userResponse = await loginUser({ email, pass })
      setResponseAuth(userResponse)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An unknown error occurred')
    } finally {
      setLoading(false)
    }
  }, [])

  return { login, getUserAuth, loading, error }
}
