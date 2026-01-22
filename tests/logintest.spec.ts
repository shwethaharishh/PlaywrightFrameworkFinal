import {test,expect} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

test('valid login test', async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername('playwright.user@qa.com');
    await loginPage.fillPassword('playwright007');
    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitle();
})