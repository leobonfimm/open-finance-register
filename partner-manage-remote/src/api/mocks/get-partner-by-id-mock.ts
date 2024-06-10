import { http, HttpResponse } from 'msw'

export const getPartnerByIdMock = http.get('/partners/:id', () => {
  return HttpResponse.json({
    name: 'Rutherford Group',
    description: 'Dolore iure eos delectus magni temporibus.',
    repositoryGit: 'repositoryGit 63',
    id: '63',
  })
})
