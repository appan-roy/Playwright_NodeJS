import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');

test('Recording demo test', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Paul Collings1' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.close();
});