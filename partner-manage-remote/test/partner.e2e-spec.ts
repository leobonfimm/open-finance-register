import { expect, test } from '@playwright/test'

test('list partners', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(
    page.getByRole('cell', { name: 'Rutherford Group', exact: true }),
  ).toBeVisible()
})

test('paginate list partners', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Próxima página' }).click()

  await expect(
    page.getByRole('cell', { name: 'Group', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Última página' }).click()

  await expect(
    page.getByRole('cell', { name: 'John Doe Group', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Página anterior' }).click()

  await expect(
    page.getByRole('cell', { name: 'Group', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Primeira página' }).click()

  await expect(
    page.getByRole('cell', { name: 'Rutherford Group', exact: true }),
  ).toBeVisible()
})

test('create partner dialog', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Novo Parceiro' }).click()

  const dialog = page.getByRole('heading', {
    name: 'Novo Parceiro',
    exact: true,
  })

  await expect(dialog).toBeVisible()
  await expect(page.getByLabel('Nome')).toHaveValue('')
  await expect(page.getByLabel('Descrição')).toHaveValue('')
  await expect(page.getByLabel('Repositório')).toHaveValue('')
})

test('edit partner dialog', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Detalhes do parceiro' }).click()

  const dialog = page.getByRole('heading', {
    name: 'Editar Parceiro',
    exact: true,
  })

  await expect(dialog).toBeVisible()
  await expect(page.getByLabel('Nome')).toHaveValue('Rutherford Group')
  await expect(page.getByLabel('Descrição')).toHaveValue(
    'Dolore iure eos delectus magni temporibus.',
  )
  await expect(page.getByLabel('Repositório')).toHaveValue('repositoryGit 63')
})

test('delete partner alert', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Deletar parceiro' }).click()

  const alert = page.getByText(
    'Você tem certeza que deseja deletar esse parceiro?',
    { exact: true },
  )

  await expect(alert).toBeVisible()
})
