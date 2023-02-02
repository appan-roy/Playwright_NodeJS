import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home';
import { Loginpage } from '../pages/login';

test('POM Test', async ({ page, context }) => {

    // create the page object
    const loginPage = new Loginpage(page);
    const homePage = new HomePage(page);

    // navigate to login page
    await loginPage.gotoLoginPage();

    // login to the application
    await loginPage.enterUsername('Admin');
    await loginPage.enterPassword('admin123');
    await loginPage.clickOnLoginButton();

    // logout from the application
    await homePage.clickOnProfileLink();
    await homePage.clickOnLogoutLink();

});