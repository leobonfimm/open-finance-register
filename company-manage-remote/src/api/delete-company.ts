import { api } from '@/lib/axios'

export async function deleteCompany(id: string) {
  await api.delete(`external-companies/${id}`)
}
