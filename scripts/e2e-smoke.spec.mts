/**
 * Browser E2E smoke — exercises shell navigation, category pages, and viewer tabs.
 * Run: npx playwright test scripts/e2e-smoke.spec.mts --config scripts/playwright.config.mts
 */
import { test, expect } from '@playwright/test'

const categories = [
  'template',
  'hero',
  'navigation',
  'cards',
  'cta',
  'forms',
  'footers',
  'buttons',
  'carousel',
  'modals',
]

test.describe('rezo Studio E2E', () => {
  test('home page loads with hero and category bento', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Home · rezo Studio/)
    await expect(page.getByRole('heading', { name: /ship polished interfaces/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /sections\. Dozens of patterns/i })).toBeVisible()
  })

  test('sidebar lists all categories', async ({ page }) => {
    await page.goto('/')
    const nav = page.getByRole('navigation', { name: 'Component categories' })
    for (const id of categories) {
      const link = nav.locator(`a[href="/category/${id}"]`)
      await expect(link).toBeVisible()
    }
  })

  for (const id of categories) {
    test(`category /category/${id} loads components`, async ({ page }) => {
      await page.goto(`/category/${id}`)
      await expect(page.getByRole('heading', { level: 2 }).first()).toBeVisible()
      await expect(page.getByText('Loading components…')).toBeHidden({ timeout: 15000 })
      await expect(page.getByText('Failed to load components.')).toBeHidden()
      const cards = page.locator('article[id]')
      await expect(cards.first()).toBeVisible({ timeout: 15000 })
      expect(await cards.count()).toBeGreaterThan(0)
    })
  }

  test('preview and code tabs switch on hero category', async ({ page }) => {
    await page.goto('/category/hero')
    await expect(page.getByText('Loading components…')).toBeHidden({ timeout: 15000 })

    const firstCard = page.locator('article[id]').first()
    await expect(firstCard).toBeVisible()

    const codeTab = firstCard.getByRole('tab', { name: 'Code' })
    const previewTab = firstCard.getByRole('tab', { name: 'Preview' })

    await codeTab.click()
    await expect(firstCard.locator('pre code')).toBeVisible({ timeout: 10000 })

    await previewTab.click()
    await expect(firstCard.locator('pre code')).toBeHidden()
  })

  test('copy code button works', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write'])
    await page.goto('/category/buttons')
    await expect(page.getByText('Loading components…')).toBeHidden({ timeout: 15000 })

    const firstCard = page.locator('article[id]').first()
    await firstCard.getByRole('button', { name: 'Copy Code' }).click()
    await expect(firstCard.getByRole('button', { name: 'Copied!' })).toBeVisible({ timeout: 5000 })
  })

  test('modal demo opens and closes', async ({ page }) => {
    await page.goto('/category/modals')
    await expect(page.getByText('Loading components…')).toBeHidden({ timeout: 15000 })

    const centerDialog = page.locator('article#modal-center-dialog')
    await centerDialog.getByRole('button', { name: 'Open dialog' }).click()
    await expect(centerDialog.getByRole('dialog')).toBeVisible()
    await centerDialog.getByRole('button', { name: 'Close', exact: true }).click()
    await expect(centerDialog.getByRole('dialog')).toBeHidden()
  })

  test('carousel prev/next controls work', async ({ page }) => {
    await page.goto('/category/carousel')
    await expect(page.getByText('Loading components…')).toBeHidden({ timeout: 15000 })

    const carousel = page.locator('article#carousel-fade-slides')
    await expect(carousel).toBeVisible()
    const nextBtn = carousel.getByRole('button', { name: 'Next slide' })
    await nextBtn.click()
    await nextBtn.click()
    await carousel.getByRole('button', { name: 'Previous slide' }).click()
    await expect(carousel).toBeVisible()
  })

  test('segmented button toggles selection', async ({ page }) => {
    await page.goto('/category/buttons')
    await expect(page.getByText('Loading components…')).toBeHidden({ timeout: 15000 })

    const segmented = page.locator('article#button-segmented')
    await segmented.getByRole('button', { name: 'Lifetime' }).click()
    await expect(segmented.getByRole('button', { name: 'Lifetime' })).toHaveAttribute('aria-pressed', 'true')
  })

  test('form intent chooser switches context', async ({ page }) => {
    await page.goto('/category/forms')
    await expect(page.getByText('Loading components…')).toBeHidden({ timeout: 15000 })

    const intentForm = page.locator('article#form-intent-chooser')
    await intentForm.getByText('Support', { exact: true }).click()
    await expect(intentForm.getByRole('heading', { name: 'Get support' })).toBeVisible()
  })

  test('invalid category shows not found', async ({ page }) => {
    await page.goto('/category/does-not-exist')
    await expect(page.getByRole('heading', { name: 'Category not found' })).toBeVisible()
    await page.getByRole('link', { name: 'Back to home' }).click()
    await expect(page).toHaveURL('/')
  })

  test('mobile nav toggle opens sidebar', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')
    await page.getByRole('button', { name: 'Open navigation' }).click()
    await expect(page.locator('#app-sidebar')).toBeVisible()
    await page.locator('#app-sidebar').getByRole('button', { name: 'Close navigation' }).click()
    await expect(page.getByRole('button', { name: 'Open navigation' })).toBeVisible()
  })

  test('search finds and navigates to a component', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto('/')
    const search = page.getByRole('combobox', { name: 'Search components' })
    await search.fill('modal center')
    await expect(page.getByRole('listbox', { name: 'Search results' })).toBeVisible()
    await page.getByRole('option').first().click()
    await expect(page).toHaveURL(/\/category\/modals/)
    await expect(page.locator('#modal-center-dialog')).toBeVisible()
  })

  test('theme switcher toggles data-theme', async ({ page }) => {
    await page.goto('/')
    const toggle = page.getByRole('button', { name: /Switch to (dark|light) theme/i })
    const before = await page.locator('html').getAttribute('data-theme')
    await toggle.click()
    const after = await page.locator('html').getAttribute('data-theme')
    expect(after).not.toBe(before)
  })

  test('breadcrumb navigates home', async ({ page }) => {
    await page.goto('/category/hero')
    await page.getByRole('navigation', { name: 'Breadcrumb' }).getByRole('link', { name: 'Home' }).click()
    await expect(page).toHaveURL('/')
  })
})
