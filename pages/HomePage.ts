import {Page,expect} from '@playwright/test';
export default class HomePage {
    private readonly serviceTitleLocator= "Service";
    

    constructor(private page: Page) {   


    }
    async expectServiceTitle() {
        await expect(this.page.getByRole('heading', {name: "Logged In Successfully"})).toBeVisible({timeout:15000});
    }

}