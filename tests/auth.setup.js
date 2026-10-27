
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const authFile = path.join(
  __dirname,
  '../playwright/.auth/user.json'
);

test('Verify authentication and save state', async ({ page }) => {
  fs.mkdirSync(path.dirname(authFile), { recursive: true });

  await page.goto('https://demoqa.com/login');

  await page.getByPlaceholder('UserName').fill('piumi');
  await page.getByPlaceholder('Password').fill('Piumi@123');

  await page.getByRole('button', { name: 'Login' }).click();

  // Verify that login succeeded before saving state
  await expect(page).toHaveURL('https://demoqa.com/profile');
  await expect(page.locator('#userName-value')).toHaveText('piumi');

  // Save cookies and local storage
  await page.context().storageState({ path: authFile });

  console.log('Authentication verified and state saved');

  console.log(
    'Cookies:',
    await page.context().cookies()
  );

  console.log(
    'Local storage:',
    await page.evaluate(() => JSON.stringify(localStorage))
  );
});
