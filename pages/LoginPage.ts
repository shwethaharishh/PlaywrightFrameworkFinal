import {Page,expect} from '@playwright/test';
import HomePage from './HomePage';

export default class LoginPage {
    private readonly usernameInputSelector = "//input[@id='username']";
    private readonly passwordInputSelector = "//input[@id='password']";
    private readonly loginButtonSelector = "//button[@id='submit']";
    
    constructor(private page: Page) {
        
    }
    async navigateToLoginPage() {
        await this.page.goto('/practice-test-login/');
    }

    async fillUsername(username: string) {
        await this.page.locator(this.usernameInputSelector).fill(username);
    }

    async fillPassword(password: string) {
        await this.page.locator(this.passwordInputSelector).fill(password);
    }

    async clickLoginButton(): Promise<HomePage> {
        await this.page.locator(this.loginButtonSelector).click().catch((error)=>{
            console.error('Error clicking login button:', error);
            throw error;
        });

        

        const getHomePage = new HomePage(this.page);
        return getHomePage;

         // This line will cause a TypeScript error
    }

    
    
    
}