import { useAuth } from '@/provider/auth-provider'
import { DollarSign } from 'lucide-react'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export function AuthLayout() {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [navigate, user])

  return (
    <div className="min-h-screen grid grid-cols-2 antialiased">
      <div className="h-full border-r p-10 flex flex-col justify-between bg-zinc-100">
        <div className="flex items-center gap-4">
          <DollarSign className="h-5 w-5" />
          <span className="font-semibold">Open Finance Portal</span>
        </div>
        <span className="text-sm">
          Painel &copy; open.finance - {new Date().getFullYear()}
        </span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
