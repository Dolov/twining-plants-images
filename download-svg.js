const fs = require('fs')
const imgs = require('./imgs.json')


// https://www.c82.net/twining/plants/?id=1
const script = imgs.reduce((previousValue, currentValue, currentIndex) => {
  const { title, subtitle } = currentValue
  return previousValue += `
    test('${title}-${subtitle}', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=${currentIndex + 1}');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('${__dirname}/svgs/${title}-${subtitle}.svg', svgHtml)
    });
  `
}, `
  import fs from 'fs';
  import { test, expect } from '@playwright/test';
`)

fs.writeFileSync(`${__dirname}/tests/download-svg.spec.ts`, script)
