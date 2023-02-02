import { test, expect } from '@playwright/test';

// this is the group
test.describe('Login and logout scenarios', () => {

    // this will run before each tests
    test.beforeEach(async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com');
    })

    test('Login test', async ({ page }) => {
        await page.getByPlaceholder('Username').click();
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Username').press('Tab');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
    })

    test('Logout test', async ({ page }) => {
        await page.getByPlaceholder('Username').click();
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Username').press('Tab');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();

        await page.getByRole('listitem').filter({ hasText: 'Paul Collings' }).locator('i').click();
        await page.getByRole('menuitem', { name: 'Logout' }).click();
    })

    // this will run after each tests
    test.afterEach(async ({ page }) => {
        await page.close();
    })

})