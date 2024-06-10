import { http, HttpResponse } from 'msw'
import { Partner } from '../get-partners'

const partners = [
  {
    name: 'Rutherford Group',
    description:
      'Illum possimus error. Dolore iure eos delectus magni temporibus. Fugiat vel a aut perspiciatis aut enim.\nOfficiis minima ipsam laudantium architecto dolor mollitia est fugit error. Corporis ipsam molestiae omnis soluta explicabo tenetur. Deleniti minus ducimus ratione vero.\nUt debitis maiores. Eos sint rerum nisi asperiores neque voluptatem molestias. Dolore atque itaque magni tempore.',
    repositoryGit: 'repositoryGit 63',
    id: 61,
  },
  {
    name: 'Group',
    description:
      'Dolore iure eos delectus magni temporibus. Fugiat vel a aut perspiciatis aut enim.',
    repositoryGit: 'repositoryGit 63',
    id: 62,
  },
  {
    name: 'John Doe Group',
    description: 'Illum possimus error.',
    repositoryGit: 'repositoryGit 63',
    id: 63,
  },
]

export const getPartnersMock = http.get<never, never, Partner[]>(
  '/partners',
  () => {
    return HttpResponse.json(partners)
  },
)
