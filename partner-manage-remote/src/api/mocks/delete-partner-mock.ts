import { http, HttpResponse } from 'msw'

export const deletePartnerMock = http.delete('/partners', async () => {
  return new HttpResponse(null, { status: 202 })
})
