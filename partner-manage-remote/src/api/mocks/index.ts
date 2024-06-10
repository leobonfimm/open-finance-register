import { env } from '@/env'
import { setupWorker } from 'msw/browser'
import { createPartnerMock } from './create-partner-mock'
import { deletePartnerMock } from './delete-partner-mock'
import { getPartnerByIdMock } from './get-partner-by-id-mock'
import { getPartnersMock } from './get-partners-mock'
import { updatePartnerMock } from './update-partner-mock'

const mocks = [
  createPartnerMock,
  deletePartnerMock,
  getPartnerByIdMock,
  getPartnersMock,
  updatePartnerMock,
]

export const worker = setupWorker(...mocks)

export async function enableMSW() {
  if (env.MODE !== 'test') return

  await worker.start()
}
