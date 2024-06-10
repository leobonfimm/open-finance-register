import { http, HttpResponse } from 'msw'

export const getCompanyByIdMock = http.get('/external-companies/:id', () => {
  return HttpResponse.json({
    companyName: 'Gerhold, Gibson and Barrows',
    collaboratorsCount: 76,
    isActive: true,
    id: '43',
  })
})
