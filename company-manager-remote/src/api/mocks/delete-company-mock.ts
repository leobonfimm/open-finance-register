import { http, HttpResponse } from 'msw'

export const deleteCompanyMock = http.delete(
  '/external-companies',
  async () => {
    return new HttpResponse(null, { status: 202 })
  },
)
