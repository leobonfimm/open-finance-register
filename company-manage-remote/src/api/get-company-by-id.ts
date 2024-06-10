import { api } from '@/lib/axios'
import { Company } from './get-companies'

export async function getCompanyById(id: string) {
  const response = await api.get<Company>(`external-companies/${id}`)

  return response.data
}
