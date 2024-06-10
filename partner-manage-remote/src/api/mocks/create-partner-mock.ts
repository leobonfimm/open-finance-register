import { http, HttpResponse } from 'msw'
import { CreatePartnerProps } from '../create-partner'

export const createPartnerMock = http.post<CreatePartnerProps>(
  '/partners',
  async () => {
    return new HttpResponse(null, { status: 201 })
  },
)
