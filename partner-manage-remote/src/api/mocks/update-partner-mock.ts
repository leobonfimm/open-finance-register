import { http, HttpResponse } from 'msw'
import { Partner } from '../get-partners'

export const updatePartnerMock = http.put<never, Partner>(
  '/partners',
  async () => {
    return HttpResponse.json(null, { status: 401 })
  },
)
