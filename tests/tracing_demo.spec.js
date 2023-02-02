import { test, expect } from '@playwright/test';

test('test', async ({ page, context }) => {
  // start tracing
  await context.tracing.start({ snapshots: true, screenshots: true });

  // launch application
  await page.goto('https://opensource-demo.orangehrmlive.com');

  // enter username
  await page.getByPlaceholder('Username').fill('Admin');

  // press tab
  await page.getByPlaceholder('Username').press('Tab');

  // enter password
  await page.getByPlaceholder('Password').fill('admin123');

  // click on login button
  await page.getByRole('button', { name: 'Login' }).click();

  // click on user profile link
  await page.getByRole('listitem').filter({ hasText: 'Paul Collings' }).locator('i').click();

  // click on logout link
  await page.getByRole('menuitem', { name: 'Logout' }).click();

  // end tracing
  await context.tracing.stop({ path: 'tracing-demo.zip' });
});