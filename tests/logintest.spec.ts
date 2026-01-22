import {test,expect} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

test('valid login test', async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername('student');
    await loginPage.fillPassword('Password123');
    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitle();
})