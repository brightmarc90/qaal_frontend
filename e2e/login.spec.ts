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

  test('TC-AUTH-002 - connexion avec un mot de passe incorrect', async ({ page }) => {
    await page.goto('/login')

    await page.getByLabel('Email').fill('marc@test.fr')
    await page.getByLabel('Mot de passe').fill('MauvaisPassword')

    await page.getByRole('button', { name: 'Se connecter' }).click()

    await expect(page).toHaveURL(/login/)

    await expect(page.getByRole('alert')).toHaveText('Identifiants incorrects')
  })

  test('TC-AUTH-003 - accès direct au dashboard interdit sans authentification', async ({
    page,
  }) => {
    await page.goto('/dashboard')

    await expect(page).toHaveURL(/login/)

    await expect(page.getByRole('heading', { name: 'Espace Assuré' })).toBeVisible()
  })
})
