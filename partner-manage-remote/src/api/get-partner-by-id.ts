import { api } from '@/lib/axios'
import { Partner } from './get-partners'

export async function getPartnerById(id: number) {
  const response = await api.get<Partner>(`partners/${id}`)

  return response.data
}
