import { api } from '@/lib/axios'

export interface Partner {
  id: number
  name: string
  description: string
  repositoryGit: string
}

export async function getPartner() {
  const response = await api.get<Partner[]>('partners')

  return response.data
}
