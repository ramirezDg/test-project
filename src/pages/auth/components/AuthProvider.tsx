import { createContext, PropsWithChildren, useContext, useState } from 'react'

import { User, UserRole } from '../../../types'

const AuthContext = createContext<User | null>(null)

type AuthProviderProps = PropsWithChildren & {
  isSignedIn?: boolean
}

export default function AuthProvider({
  children,
  isSignedIn,
}: AuthProviderProps) {
  const [user] = useState<User | null>(
    isSignedIn
      ? {
          uuid: '',
          name: '',
          lastname: '',
          email: '',
          password: '',
          role: UserRole.Admin,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      : null,
  )

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
