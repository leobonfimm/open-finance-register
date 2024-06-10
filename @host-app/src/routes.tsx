import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { About } from './pages/app/about'
import { CompanyPage } from './pages/app/company'
import { PartnerPage } from './pages/app/partner'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,

    children: [
      {
        path: '/manage-partner',
        element: <PartnerPage />,
      },
      {
        path: '/manage-company',
        element: <CompanyPage />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/sign-in', element: <SignIn /> }],
  },
])
