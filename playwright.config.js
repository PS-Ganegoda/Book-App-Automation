
 // @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Maximum time for one test
  timeout: 30_000,

  // Maximum time for web-first assertions
  expect: {
    timeout: 5_000,
  },

  reporter: 'html',

  use: {
    // Maximum time for actions such as click and fill
    actionTimeout: 10_000,

    // Maximum time for page navigation
    navigationTimeout: 30_000,

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
  },

  projects: [
   {
    name:'setup',
    testMatch: /.*\.setup\.js/
   },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
     storageState:'./playwright/.auth/user.json'
      },
      dependencies:['setup']
    },
  ],

  // Maximum duration for the entire test run
  globalTimeout: 300_000,
});
