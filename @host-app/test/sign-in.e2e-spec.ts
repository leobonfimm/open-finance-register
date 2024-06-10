import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Usuário').fill('johndoe@example.com')
  await page.getByLabel('Senha').fill('123456')
  await page.getByLabel('Lembrar-me').click()

  await page.getByRole('button', { name: 'Entrar' }).click()
  await page.waitForURL('**/manage-partner')

  await expect(page.getByRole('button', { name: 'Sair' })).toBeVisible()
})
