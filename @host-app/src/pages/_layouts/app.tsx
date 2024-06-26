import { Header } from '@/components/header'
import { useAuth } from '@/provider/auth-provider'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export function AppLayout() {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/sign-in')
    }
  }, [navigate, user])

  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <div className="flex min-h-full flex-col gap-4 flex-1">
        <Outlet />
      </div>
    </div>
  )
}
