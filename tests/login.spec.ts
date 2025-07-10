import { test, expect } from '@playwright/test';

test('Verify that user is able to login with valid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');


    await page.locator('[data-test="username"]').fill('standard_user');

    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.getByText('Swag Labs')).toBeVisible();
});
test('Verify that user is not able to login with invalid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standarduser');

    await page.locator('[data-test="password"]').fill('secretsauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});
    
