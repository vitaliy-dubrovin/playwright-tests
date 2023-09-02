import { test,expect } from '@playwright/test';
import { HomePage } from "../pages/home-page";

/* Scenario to test
- Record the following steps. Press the button below and wait for data to appear (15 seconds), click on text of the loaded label.
- Then execute your test to make sure it waits for label text to appear. */

  test("Content section loaded after click on AJAX button", async ({ page }) => {
    const homePage = new HomePage(page);
    await page.goto('/');

    await homePage.ajaxDataLink.click();
    await page.locator('[id="ajaxButton"]').click();

    try {
      const contentElement = await page.waitForSelector('[id="content"]', { timeout: 15500 });
      expect(contentElement).toBeTruthy(); // Check if the element exists
      await page.locator('text="Data loaded with AJAX get request."').click();
    } catch (error) {
      throw new Error('Content element not found: ' + error.message);
    }
    await page.close()
  });

