import { test, expect } from '@playwright/test'

test.describe('Authentification', () => {
  test('TC-AUTH-001 - connexion avec des identifiants valides', async ({ page }) => {
    await page.goto('/login')

    await page.getByLabel('Email').fill('marc@test.fr')

    await page.getByLabel('Mot de passe').fill('Password123!')

    await page
      .getByRole('button', {
        name: 'Se connecter',
      })
      .click()

    await expect(page).toHaveURL(/dashboard/)

    await expect(
      page.getByRole('heading', {
        name: 'Bonjour Marc',
      }),
    ).toBeVisible()
  })
})
