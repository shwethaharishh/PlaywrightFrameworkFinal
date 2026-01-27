import {test,expect} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

test('valid login test', async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    console.log("Username:", process.env.USERNAMEE);
    console.log("Password:", process.env.PASSWORD);
    await loginPage.fillUsername(process.env.USERNAMEE!);
    await loginPage.fillPassword(process.env.PASSWORD!);
    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitle();
})