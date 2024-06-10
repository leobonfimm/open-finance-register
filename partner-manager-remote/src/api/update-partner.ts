import { api } from '@/lib/axios'
import { Partner } from './get-partners'

export async function updatePartner(partner: Partner) {
  await api.put(`partners/${partner.id}`, partner)
}
