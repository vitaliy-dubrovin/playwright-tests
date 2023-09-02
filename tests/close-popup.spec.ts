import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';

/* Scenario
- Record primary (blue) button click and press ok in alert popup.
- Then execute your test to make sure that it can identify the button using btn-primary class. */

test('Close pop-up', async ({ page }) => {
  const homePage = new HomePage(page);
  await page.goto('/');
  await homePage.classAttributeLink.click()
  await page.locator('button.btn-primary').first().click()
  await page.keyboard.press('Escape')
  await page.close()
});