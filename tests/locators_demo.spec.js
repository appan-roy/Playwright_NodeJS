import {test, expect} from '@playwright/test'

test('Locators demo test', async({page}) => {
    await page.goto('https://www.saucedemo.com/')
    
    // this step will pause the thread and open the playwright inspector, its similar to breakpoint
    await page.pause()

    // using id
    await page.locator('id=user-name').fill('Aisha')
    await page.locator('[id=user-name]').fill('Lisa')
    await page.locator('[id="user-name"]').fill('Ayesha')

    // using xpath
    await page.locator('//input[@id="user-name"]').fill('John')
    await page.locator('xpath=//input[@id="user-name"]').fill('Jack')

    // using css selector
    await page.locator('#login-button').click()

    // using text
    await page.locator('input:has-text("LOGIN")').click()

})