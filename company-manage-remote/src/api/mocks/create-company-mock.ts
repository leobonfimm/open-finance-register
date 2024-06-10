import { http, HttpResponse } from 'msw'
import { CreateCompanyProps } from '../create-company'

export const createCompanyMock = http.post<never, CreateCompanyProps>(
  '/external-companies',
  async () => {
    return new HttpResponse(null, { status: 201 })
  },
)
