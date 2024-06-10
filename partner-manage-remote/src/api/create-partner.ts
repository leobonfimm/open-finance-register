import { api } from '@/lib/axios'

export interface CreatePartnerProps {
  name: string
  description: string
  repositoryGit: string
}

export async function createPartner(partnerToCreate: CreatePartnerProps) {
  await api.post('partners', partnerToCreate)
}
