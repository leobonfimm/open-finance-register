import { expect, test } from '@playwright/test'

test('list companies', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(
    page.getByRole('cell', {
      name: 'Gerhold, Gibson and Barrows',
      exact: true,
    }),
  ).toBeVisible()
})

test('paginate list companies', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Próxima página' }).click()

  await expect(
    page.getByRole('cell', { name: 'Jakubowski and Sons', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Última página' }).click()

  await expect(
    page.getByRole('cell', {
      name: 'Gibson, Okuneva and Schroeder',
      exact: true,
    }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Página anterior' }).click()

  await expect(
    page.getByRole('cell', { name: 'Jakubowski and Sons', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Primeira página' }).click()

  await expect(
    page.getByRole('cell', {
      name: 'Gerhold, Gibson and Barrows',
      exact: true,
    }),
  ).toBeVisible()
})

test('create company dialog', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Nova Empresa' }).click()

  const dialog = page.getByRole('heading', {
    name: 'Nova Empresa',
    exact: true,
  })

  await expect(dialog).toBeVisible()
  await expect(page.getByLabel('Nome')).toHaveValue('')
  await expect(page.getByLabel('Número de colaboradores')).toHaveValue('')
  await expect(page.getByLabel('Ativa?')).not.toBeChecked()
})

test('edit company dialog', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Detalhes da Empresa' }).click()

  const dialog = page.getByText('Editar Empresa', { exact: true })

  await expect(dialog).toBeVisible()
  await expect(page.getByLabel('Nome')).toHaveValue(
    'Gerhold, Gibson and Barrows',
  )
  await expect(page.getByLabel('Número de colaboradores')).toHaveValue('76')
  await expect(page.getByLabel('Ativa?')).toBeChecked()
})

test('delete company alert', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Deletar Empresa' }).click()

  const alert = page.getByText(
    'Você tem certeza que deseja deletar essa empresa?',
    { exact: true },
  )

  await expect(alert).toBeVisible()
})
