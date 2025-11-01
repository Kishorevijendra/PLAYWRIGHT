import { test, expect, Page } from '@playwright/test';

test.describe('Login Flow', () => {
    test('should successfully login with valid credentials', async ({ page }: { page: Page }) => {
        // Navigate to the login page
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        
        // Verify we're on the login page
        await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
        
        // Fill in the login form
        await page.locator('#username').fill('rahulshettyacademy');
        await page.locator('#password').fill('learning');
        
        // Select the user radio button (if needed)
        await page.locator('.radiotextsty').first().click();
        
        // Click the terms checkbox
        await page.locator('#terms').click();
        
        // Click the signin button
        await page.locator('#signInBtn').click();
        
        // Verify successful login by checking URL or presence of elements
        await expect(page).toHaveURL('https://rahulshettyacademy.com/loginpagePractise/');
        
        
    });

   
});
