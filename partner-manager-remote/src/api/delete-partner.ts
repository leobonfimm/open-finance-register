import { api } from '@/lib/axios'

export async function deletePartner(id: number) {
  await api.delete(`partners/${id}`)
}
