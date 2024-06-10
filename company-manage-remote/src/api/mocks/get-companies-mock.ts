import { http, HttpResponse } from 'msw'
import { Company } from '../get-companies'

const companies = [
  {
    companyName: 'Gerhold, Gibson and Barrows',
    collaboratorsCount: 76,
    isActive: false,
    id: '43',
  },
  {
    companyName: 'Jakubowski and Sons',
    collaboratorsCount: 69,
    isActive: true,
    id: '44',
  },
  {
    companyName: 'Gibson, Okuneva and Schroeder',
    collaboratorsCount: 77,
    isActive: false,
    id: '45',
  },
]

export const getCompaniesMock = http.get<never, never, Company[]>(
  '/external-companies',
  () => {
    return HttpResponse.json(companies)
  },
)
