import { test, expect } from '@playwright/test'

test('Login demo test', async ({ page }) => {
    // launching the application
    await page.goto('https://demo.applitools.com/index.html')

    // entering the username
    await page.getByPlaceholder("Enter your username").fill('John')

    // entering the password
    await page.getByPlaceholder("Enter your password").fill('1234')

    // clicking on login button
    await page.getByRole("link", { name: "Sign in" }).click()
})