const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage'); 


const testData =[

  {username: 'standard_user', password: 'secret_sauce', expectedURL: 'inventory.html'},
  {username: 'problem_user', password: 'secret_sauce', expectedURL: 'inventory.html'},
  {username: 'locked_out_user', password: 'secret_sauce', expectedURL: '/'}
];
testData.forEach((data) => {
  
  test(`Login test for: ${data.username}`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(data.username, data.password);

    // Dynamic assertion based on who is logging in
    if (data.username === 'locked_out_user') {
      // If locked out, we expect to see an error, not inventory
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    } else {
      // Everyone else should go to inventory
      await expect(page).toHaveURL(new RegExp(data.expectedURL));
    }
  });
});