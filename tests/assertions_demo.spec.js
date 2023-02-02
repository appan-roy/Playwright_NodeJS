import { test, expect } from '@playwright/test'

test('Login demo test', async ({ page }) => {
    
    // launching the application
    await page.goto('https://kitchen.applitools.com/')

    // check page url
    await expect(page).toHaveURL('https://kitchen.applitools.com/')

    // check page title
    await expect(page).toHaveTitle('The Kitchen')

    // check element present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)

    // if element present then click
    if (await page.$('text=The Kitchen')) {
        await page.locator('text=The Kitchen').click()
    }

    // check element is visible or hidden
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    await expect(page.locator('text=The Kitchen')).not.toBeHidden()     // negative assertion

    // check element is enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    await expect(page.locator('text=The Kitchen')).not.toBeDisabled()      // negative assertion

    // check text
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    await expect(page.locator('text=The Kitchen')).not.toHaveText('The Chimney')    // negative assertion

    // check attribute value
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)

    // soft assertion
    await expect.soft(page.locator('text=The Kitchen')).toBeHidden()
    await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()

    // visual validation with screenshot, but it will work on 2nd run onwards
    await expect(page).toHaveScreenshot()

})