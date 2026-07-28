import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: '.',
  testMatch: 'e2e-smoke.spec.mts',
  timeout: 60000,
  retries: 0,
  use: {
    baseURL: 'http://localhost:4173',
    headless: true,
    trace: 'off',
  },
  webServer: {
    command: 'npm run preview -- --port 4173',
    url: 'http://localhost:4173',
    reuseExistingServer: true,
    timeout: 120000,
  },
})
