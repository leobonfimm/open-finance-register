import { api } from '@/lib/axios'

export interface CreateCompanyProps {
  companyName: string
  collaboratorsCount: number
  isActive: boolean
}

export async function createCompany(companyToCreate: CreateCompanyProps) {
  await api.post('external-companies', companyToCreate)
}
