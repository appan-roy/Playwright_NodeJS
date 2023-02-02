import { test, expect, chromium } from '@playwright/test'

test('Slow motion & video recording test demo', async () => {

    // launch browser - adding slowMo and headless flags
    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    })

    // create a new incognito browser context - adding video details
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: {
                width: 800, height: 600
            }
        }
    })

    // create a new page inside context
    const page = await context.newPage()

    // launching the application
    await page.goto('https://demo.applitools.com/index.html')

    // entering the username
    await page.getByPlaceholder("Enter your username").fill('John')

    // entering the password
    await page.getByPlaceholder("Enter your password").fill('1234')

    // clicking on login button
    await page.getByRole("link", { name: "Sign in" }).click()

})