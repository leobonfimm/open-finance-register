import { http, HttpResponse } from 'msw'
import { Company } from '../get-companies'

export const updateCompanyMock = http.put<never, Company>(
  '/external-companies',
  async () => {
    return HttpResponse.json(null, { status: 401 })
  },
)
