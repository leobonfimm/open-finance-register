import { env } from '@/env'
import { setupWorker } from 'msw/browser'
import { createCompanyMock } from './create-company-mock'
import { deleteCompanyMock } from './delete-company-mock'
import { getCompaniesMock } from './get-companies-mock'
import { getCompanyByIdMock } from './get-company-by-id-mock'
import { updateCompanyMock } from './update-company-mock'

const mocks = [
  createCompanyMock,
  deleteCompanyMock,
  getCompanyByIdMock,
  getCompaniesMock,
  updateCompanyMock,
]

export const worker = setupWorker(...mocks)

export async function enableMSW() {
  if (env.MODE !== 'test') return

  await worker.start()
}
