import { PropsWithChildren, ReactNode, useEffect } from 'react'
import { useAuth } from '../pages/auth/components/AuthProvider'
import { useNavigate } from 'react-router-dom'

type ProtectedRouteProps = PropsWithChildren & {
  children: ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user === null) {
      navigate('/sign-in', { replace: true })
    }
  }, [user])

  return <>{children}</>
}
