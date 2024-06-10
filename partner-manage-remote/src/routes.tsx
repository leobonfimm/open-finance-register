import { createBrowserRouter } from 'react-router-dom'

import { ManagePartner } from './pages/manage-partner'

export const router = createBrowserRouter([
  {
    path: '/',
    children: [{ path: '/', element: <ManagePartner /> }],
  },
])
