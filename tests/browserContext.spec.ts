import{test,expect, chromium} from '@playwright/test';

test('browser context test',async({})=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
    const page1=await context.newPage();
    await page1.goto('https://google.com');
    await page.goto('https://example.com');
    const title=await page.title();
    expect(title).toBe('Example Domain');
    await page1.waitForTimeout(10000);
    await browser.close();
    await context.close();

})

test('amazonwebtest', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  //await page.getByRole('button', { name: 'Continue shopping' }).click();
 // await page.getByRole('link', { name: 'Home Storage' }).click();
  //await page.getByRole('link', { name: 'Budding Joy 90L Under Bed' }).click();
  //await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();
  //await page.getByRole('link', { name: 'Create a free business account' }).click();
  //await page.getByText('Account creation').click();
  //await page.locator('div').filter({ hasText: 'Let’s create your free Amazon' }).nth(2).click();
  //await expect(page.getByRole('list')).toContainText('Account creation');
 // await page.getByRole('link', { name: 'business customer service' }).click();
  //const page2Promise = page.waitForEvent('popup');
  //await page.getByRole('link', { name: 'About Amazon Business accounts' }).click();
  //const page2 = await page2Promise;
 // const page3Promise = page2.waitForEvent('popup');
  //await page2.getByRole('link', { name: 'How Prime works with business' }).click();
  //const page3 = await page3Promise;
  //await page3.getByRole('button', { name: 'Submit' }).first().click();
});