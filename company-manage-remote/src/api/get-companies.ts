import { api } from '@/lib/axios'

export interface Company {
  id: string
  companyName: string
  collaboratorsCount: number
  isActive: boolean
}

export async function getCompanies() {
  const response = await api.get<Company[]>('external-companies')

  return response.data
}
