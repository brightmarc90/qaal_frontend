import { Page } from '@playwright/test'

export async function login(page: Page) {
  await page.goto('/login')

  await page
    .getByLabel('Email')
    .fill('marc@test.fr')

  await page
    .getByLabel('Mot de passe')
    .fill('Password123!')

  await page
    .getByRole('button', {
      name: 'Se connecter',
    })
    .click()
}
