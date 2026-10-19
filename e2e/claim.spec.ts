import { test, expect } from '@playwright/test'
import { login } from './helpers/auth.js'

test.describe('Déclaration de sinistre', () => {
  test.beforeEach(async ({ page }) => {
    await login(page)

    await page
      .getByRole('button', {
        name: 'Déclarer un sinistre',
      })
      .click()

    await expect(page)
      .toHaveURL(/claims\/new/)
  })

  test(
    'TC-CLAIM-001 - déclaration valide',
    async ({ page }) => {
      await page
        .getByLabel('Type de sinistre')
        .selectOption('water')

      await page
        .getByLabel('Date du sinistre')
        .fill('2026-10-01')

      await page
        .getByLabel('Description')
        .fill('Fuite d’eau dans la cuisine')

      await page
        .getByLabel('Montant estimé')
        .fill('450')

      await page
        .getByRole('button', {
          name: 'Déclarer le sinistre',
        })
        .click()

      await expect(
        page.getByRole('status'),
      ).toHaveText(
        'Votre sinistre a bien été déclaré',
      )
    },
  )

  test(
    'TC-CLAIM-002 - type obligatoire',
    async ({ page }) => {
      await page
        .getByLabel('Date du sinistre')
        .fill('2026-10-01')

      await page
        .getByLabel('Description')
        .fill('Fuite d’eau dans la cuisine')

      await page
        .getByLabel('Montant estimé')
        .fill('450')

      await page
        .getByRole('button', {
          name: 'Déclarer le sinistre',
        })
        .click()

      await expect(
        page.getByRole('alert'),
      ).toHaveText(
        'Le type de sinistre est obligatoire',
      )
    },
  )

  test(
    'TC-CLAIM-005 - montant négatif',
    async ({ page }) => {
      await page
        .getByLabel('Type de sinistre')
        .selectOption('water')

      await page
        .getByLabel('Date du sinistre')
        .fill('2026-10-01')

      await page
        .getByLabel('Description')
        .fill('Fuite d’eau dans la cuisine')

      await page
        .getByLabel('Montant estimé')
        .fill('-100')

      await page
        .getByRole('button', {
          name: 'Déclarer le sinistre',
        })
        .click()

      await expect(
        page.getByRole('alert'),
      ).toHaveText(
        'Le montant estimé doit être supérieur ou égal à 0',
      )
    },
  )
})
