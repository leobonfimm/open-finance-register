import { postSignIn } from '@/api/post-sing-in'
import Cookies from 'js-cookie'
import { ReactNode, createContext, useContext, useState } from 'react'

interface AuthContextProps {
  user: string
  signIn: (user: string, password: string, isRemember: boolean) => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState(() => Cookies.get('user') || '')

  function signIn(user: string, password: string, isRemember: boolean) {
    localStorage.setItem('@open-finance', JSON.stringify(user))
    postSignIn({ user, password, isRemember })
    setUser(user)
  }

  function signOut() {
    localStorage.removeItem('@open-finance')
    const userCookie = Cookies.get('user')

    if (userCookie) {
      Cookies.remove('user')
      Cookies.remove('password')
    }

    setUser('')
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
