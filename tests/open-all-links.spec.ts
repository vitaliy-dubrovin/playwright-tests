import { test } from '@playwright/test';
import { HomePage } from '../pages/home-page';

/* Scenario
- Find all links in the overview section 
- Open each time new href and return back */

test('Open all hrefs in overview section', async ({ page }) => {
    const homePage = new HomePage(page);
    await page.goto('/');
    const overviewSection = await page.waitForSelector('#overview');
  
    const hrefElements = await overviewSection.$$eval('a[href]', (elements) =>
      elements.map((element) => element.getAttribute('href'))
    );
  
    if (hrefElements.length === 0) {
      throw new Error('No href elements found in the overview section');
    }
  
    for (const hrefAttribute of hrefElements) {
      if (hrefAttribute) {
        await page.goto(hrefAttribute);
        await page.waitForLoadState('networkidle');
        await page.goBack();
        await page.waitForLoadState('networkidle');
      }
    }
    await page.close();

});