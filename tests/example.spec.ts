import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://baidu.com');
  const html = await page.$eval('body', el => el.innerHTML);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/百度一下/);
});

