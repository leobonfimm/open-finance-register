import { RouterProvider } from 'react-router-dom'

import { Toaster } from './components/ui/toaster'
import { AuthProvider } from './provider/auth-provider'
import { router } from './routes'

import './styles/global.css'

export function App() {
  return (
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
