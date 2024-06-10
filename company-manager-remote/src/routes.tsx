import { createBrowserRouter } from 'react-router-dom'

import { ManageCompany } from '@/pages/manage-company'

export const router = createBrowserRouter([
  {
    path: '/',
    children: [{ path: '/', element: <ManageCompany /> }],
  },
])
