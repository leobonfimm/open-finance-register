import { api } from '@/lib/axios'
import { Company } from './get-companies'

export async function updateCompany(company: Company) {
  await api.put(`external-companies/${company.id}`, company)
}
