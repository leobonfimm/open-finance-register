import { useAuth } from '@/provider/auth-provider'
import { BookOpenText, Building2, DollarSign, Home, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from './nav-link'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export function Header() {
  const navigate = useNavigate()
  const { signOut } = useAuth()

  function handleSingOut() {
    signOut()
    navigate('/sign-in', { replace: true })
  }

  return (
    <div className="border-b">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex h-16 items-center gap-6">
          <DollarSign className="h-6 w-6" />

          <Separator orientation="vertical" className="h-6" />

          <nav className="flex items-center space-x-4 lg:space-x-6">
            <NavLink to="/manage-partner">
              <Home className="h-4 w-4" />
              Gerenciamento de Parceiros
            </NavLink>

            <NavLink to="/manage-company">
              <Building2 className="h-4 w-4" />
              Gerenciamento Empresa
            </NavLink>

            <NavLink to="/about">
              <BookOpenText className="h-4 w-4" />
              Sobre
            </NavLink>
          </nav>
        </div>

        <Button variant="destructive" type="button" onClick={handleSingOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </Button>
      </div>
    </div>
  )
}
