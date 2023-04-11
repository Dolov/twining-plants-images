
  import fs from 'fs';
  import { test, expect } from '@playwright/test';

    test('1. RANUNCULACEÆ-Crowfoot', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=1');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/1. RANUNCULACEÆ-Crowfoot.svg', svgHtml)
    });
  
    test('2. DILLENIACEÆ-Dillenia', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=2');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/2. DILLENIACEÆ-Dillenia.svg', svgHtml)
    });
  
    test('3. MAGNOLIACEÆ-Magnolia', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=3');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/3. MAGNOLIACEÆ-Magnolia.svg', svgHtml)
    });
  
    test('4. ANONACEÆ-Custard-Apple', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=4');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/4. ANONACEÆ-Custard-Apple.svg', svgHtml)
    });
  
    test('5. MENISPERMACEÆ-Moon-Seed', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=5');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/5. MENISPERMACEÆ-Moon-Seed.svg', svgHtml)
    });
  
    test('6. BERBERIDACEÆ-Berberry', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=6');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/6. BERBERIDACEÆ-Berberry.svg', svgHtml)
    });
  
    test('7. FUMARIACEÆ-Fumitory', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=7');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/7. FUMARIACEÆ-Fumitory.svg', svgHtml)
    });
  
    test('8. NYMPHEACEÆ-Water-Lily', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=8');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/8. NYMPHEACEÆ-Water-Lily.svg', svgHtml)
    });
  
    test('9. PAPAVERACEÆ-Poppy', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=9');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/9. PAPAVERACEÆ-Poppy.svg', svgHtml)
    });
  
    test('10. SARRACENIACEÆ-Side-Saddle Flower', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=10');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/10. SARRACENIACEÆ-Side-Saddle Flower.svg', svgHtml)
    });
  
    test('11. CRUCIACEÆ-Cruciform', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=11');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/11. CRUCIACEÆ-Cruciform.svg', svgHtml)
    });
  
    test('12. CAPPARIDACEÆ-Caper', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=12');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/12. CAPPARIDACEÆ-Caper.svg', svgHtml)
    });
  
    test('13. BIXACEÆ-Arnotto', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=13');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/13. BIXACEÆ-Arnotto.svg', svgHtml)
    });
  
    test('14. PASSIFLORACEÆ-Passion-Flower', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=14');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/14. PASSIFLORACEÆ-Passion-Flower.svg', svgHtml)
    });
  
    test('15. VIOLACEÆ-Violet', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=15');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/15. VIOLACEÆ-Violet.svg', svgHtml)
    });
  
    test('16. POLYGALACEÆ-Milkwort', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=16');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/16. POLYGALACEÆ-Milkwort.svg', svgHtml)
    });
  
    test('17. RESEDACEÆ-Mignonette', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=17');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/17. RESEDACEÆ-Mignonette.svg', svgHtml)
    });
  
    test('18. DROSERACEÆ-Sun-Dew', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=18');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/18. DROSERACEÆ-Sun-Dew.svg', svgHtml)
    });
  
    test('19. OXALIDACEÆ-Wood-Sorrel', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=19');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/19. OXALIDACEÆ-Wood-Sorrel.svg', svgHtml)
    });
  
    test('20. PITTOSPORACEÆ-Pittosporum', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=20');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/20. PITTOSPORACEÆ-Pittosporum.svg', svgHtml)
    });
  
    test('21. LINACEÆ-Flax', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=21');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/21. LINACEÆ-Flax.svg', svgHtml)
    });
  
    test('22. CISTACEÆ-Rock-Rose', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=22');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/22. CISTACEÆ-Rock-Rose.svg', svgHtml)
    });
  
    test('23. MALVACEÆ-Mallow', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=23');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/23. MALVACEÆ-Mallow.svg', svgHtml)
    });
  
    test('24. TROPÆOLACEÆ-Indian Cress, or Nasturtium', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=24');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/24. TROPÆOLACEÆ-Indian Cress, or Nasturtium.svg', svgHtml)
    });
  
    test('25. BYTTNERIACEÆ-Byttneria', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=25');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/25. BYTTNERIACEÆ-Byttneria.svg', svgHtml)
    });
  
    test('26. BOMBACEÆ-Silk-Cotton Tree', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=26');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/26. BOMBACEÆ-Silk-Cotton Tree.svg', svgHtml)
    });
  
    test('27. TILIACEÆ-Linden or Lime-Tree', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=27');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/27. TILIACEÆ-Linden or Lime-Tree.svg', svgHtml)
    });
  
    test('28. SAPINDACEÆ-Soap-Tree', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=28');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/28. SAPINDACEÆ-Soap-Tree.svg', svgHtml)
    });
  
    test('29. HIPPOCASTANACEÆ-Horse-Chesnut', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=29');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/29. HIPPOCASTANACEÆ-Horse-Chesnut.svg', svgHtml)
    });
  
    test('30. ACERACEÆ-Maple', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=30');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/30. ACERACEÆ-Maple.svg', svgHtml)
    });
  
    test('31. MALPIGHIACEÆ-Barbadoes Cherry', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=31');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/31. MALPIGHIACEÆ-Barbadoes Cherry.svg', svgHtml)
    });
  
    test('32. HIPPOCRATEACEÆ-Hippocratea', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=32');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/32. HIPPOCRATEACEÆ-Hippocratea.svg', svgHtml)
    });
  
    test('33. HYPERICACEÆ-St. John’s Wort', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=33');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/33. HYPERICACEÆ-St. John’s Wort.svg', svgHtml)
    });
  
    test('34. CLUSIACEÆ-Gamboge', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=34');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/34. CLUSIACEÆ-Gamboge.svg', svgHtml)
    });
  
    test('35. DIPTEROCARPACEÆ-Dipterocarpus', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=35');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/35. DIPTEROCARPACEÆ-Dipterocarpus.svg', svgHtml)
    });
  
    test('36. MARCGRAVIACEÆ-Marcgravia', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=36');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/36. MARCGRAVIACEÆ-Marcgravia.svg', svgHtml)
    });
  
    test('37. VITACEÆ-Vine', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=37');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/37. VITACEÆ-Vine.svg', svgHtml)
    });
  
    test('38. GERANIACEÆ-Geranium', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=38');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/38. GERANIACEÆ-Geranium.svg', svgHtml)
    });
  
    test('39. CEDRELACEÆ-Mahogany', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=39');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/39. CEDRELACEÆ-Mahogany.svg', svgHtml)
    });
  
    test('40. MELIACEÆ-Bead-Tree', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=40');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/40. MELIACEÆ-Bead-Tree.svg', svgHtml)
    });
  
    test('41. AURANTIACEÆ-Orange', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=41');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/41. AURANTIACEÆ-Orange.svg', svgHtml)
    });
  
    test('42. CAMELLIACEÆ-Camellia', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=42');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/42. CAMELLIACEÆ-Camellia.svg', svgHtml)
    });
  
    test('43. OLACACEÆ-Olax', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=43');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/43. OLACACEÆ-Olax.svg', svgHtml)
    });
  
    test('44. RUTACEÆ-Rue', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=44');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/44. RUTACEÆ-Rue.svg', svgHtml)
    });
  
    test('45. SIMARUBACEÆ-Quassia', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=45');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/45. SIMARUBACEÆ-Quassia.svg', svgHtml)
    });
  
    test('46. SAMYDACEÆ-Samyda', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=46');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/46. SAMYDACEÆ-Samyda.svg', svgHtml)
    });
  
    test('47. RHAMNACEÆ-Buckthorn', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=47');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/47. RHAMNACEÆ-Buckthorn.svg', svgHtml)
    });
  
    test('48. TEREBINTHACEÆ-Turpentine-Tree', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=48');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/48. TEREBINTHACEÆ-Turpentine-Tree.svg', svgHtml)
    });
  
    test('49. LEGUMINOSÆ-Pea', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=49');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/49. LEGUMINOSÆ-Pea.svg', svgHtml)
    });
  
    test('50. JUGLANDACEÆ-Walnut', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=50');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/50. JUGLANDACEÆ-Walnut.svg', svgHtml)
    });
  
    test('51. ROSACEÆ-Rose', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=51');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/51. ROSACEÆ-Rose.svg', svgHtml)
    });
  
    test('52. POMACEÆ-Apple', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=52');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/52. POMACEÆ-Apple.svg', svgHtml)
    });
  
    test('53. AMYGDALACEÆ-Almond', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=53');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/53. AMYGDALACEÆ-Almond.svg', svgHtml)
    });
  
    test('54. LYTHRACEÆ-Loosestrife', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=54');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/54. LYTHRACEÆ-Loosestrife.svg', svgHtml)
    });
  
    test('55. TAMARICACEÆ-Tamarisk', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=55');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/55. TAMARICACEÆ-Tamarisk.svg', svgHtml)
    });
  
    test('56. MELASTOMACEÆ-Melastoma', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=56');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/56. MELASTOMACEÆ-Melastoma.svg', svgHtml)
    });
  
    test('57. MYRTACEÆ-Myrtle', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=57');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/57. MYRTACEÆ-Myrtle.svg', svgHtml)
    });
  
    test('58. LECYTHIDACEÆ-Lecythis', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=58');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/58. LECYTHIDACEÆ-Lecythis.svg', svgHtml)
    });
  
    test('59. COMBRETACEÆ-Combretum', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=59');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/59. COMBRETACEÆ-Combretum.svg', svgHtml)
    });
  
    test('60. LOASACEÆ-Loasa', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=60');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/60. LOASACEÆ-Loasa.svg', svgHtml)
    });
  
    test('61. CUCURBITACEÆ-Gourd', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=61');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/61. CUCURBITACEÆ-Gourd.svg', svgHtml)
    });
  
    test('62. ONAGRACEÆ-Evening Primrose', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=62');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/62. ONAGRACEÆ-Evening Primrose.svg', svgHtml)
    });
  
    test('63. MESEMBRYACEÆ-Fig-Marigold', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=63');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/63. MESEMBRYACEÆ-Fig-Marigold.svg', svgHtml)
    });
  
    test('64. PORTULACEÆ-Purslane', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=64');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/64. PORTULACEÆ-Purslane.svg', svgHtml)
    });
  
    test('65. CACTACEÆ-Cactus', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=65');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/65. CACTACEÆ-Cactus.svg', svgHtml)
    });
  
    test('66. GROSSULARIACEÆ-Currant and Gooseberry', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=66');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/66. GROSSULARIACEÆ-Currant and Gooseberry.svg', svgHtml)
    });
  
    test('67. CRASSULACEÆ-Houseleek', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=67');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/67. CRASSULACEÆ-Houseleek.svg', svgHtml)
    });
  
    test('68. SAXIFRAGACEÆ-Saxifrage', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=68');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/68. SAXIFRAGACEÆ-Saxifrage.svg', svgHtml)
    });
  
    test('69. CARYOPHYLLACEÆ-Clove-Pink', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=69');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/69. CARYOPHYLLACEÆ-Clove-Pink.svg', svgHtml)
    });
  
    test('70. UMBELLACEÆ-Umbel-Flowered', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=70');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/70. UMBELLACEÆ-Umbel-Flowered.svg', svgHtml)
    });
  
    test('71. ARALIACEÆ-Aralia', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=71');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/71. ARALIACEÆ-Aralia.svg', svgHtml)
    });
  
    test('72. CAPRIFOLIACEÆ-Honeysuckle', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=72');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/72. CAPRIFOLIACEÆ-Honeysuckle.svg', svgHtml)
    });
  
    test('73. LORANTHACEÆ-Mistletoe', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=73');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/73. LORANTHACEÆ-Mistletoe.svg', svgHtml)
    });
  
    test('74. RUBIACEÆ-Madder', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=74');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/74. RUBIACEÆ-Madder.svg', svgHtml)
    });
  
    test('75. VALERIANACEÆ-Valerian', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=75');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/75. VALERIANACEÆ-Valerian.svg', svgHtml)
    });
  
    test('76. COMPOSITACEÆ-Composite', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=76');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/76. COMPOSITACEÆ-Composite.svg', svgHtml)
    });
  
    test('77. DIPSACEÆ-Teasel', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=77');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/77. DIPSACEÆ-Teasel.svg', svgHtml)
    });
  
    test('78. STYLIDIACEÆ-Style-Wort', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=78');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/78. STYLIDIACEÆ-Style-Wort.svg', svgHtml)
    });
  
    test('79. GOODENIACEÆ-Goodenia', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=79');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/79. GOODENIACEÆ-Goodenia.svg', svgHtml)
    });
  
    test('80. CAMPANULACEÆ-Bell-Flower', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=80');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/80. CAMPANULACEÆ-Bell-Flower.svg', svgHtml)
    });
  
    test('81. LOBELIACEÆ-Lobelia', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=81');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/81. LOBELIACEÆ-Lobelia.svg', svgHtml)
    });
  
    test('82. GESNERACEÆ-Gesnera', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=82');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/82. GESNERACEÆ-Gesnera.svg', svgHtml)
    });
  
    test('83. VACCINIACEÆ-Cranberry', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=83');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/83. VACCINIACEÆ-Cranberry.svg', svgHtml)
    });
  
    test('84. ERICACEÆ-Heath', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=84');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/84. ERICACEÆ-Heath.svg', svgHtml)
    });
  
    test('85. BELVISIACEÆ-Napoleona', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=85');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/85. BELVISIACEÆ-Napoleona.svg', svgHtml)
    });
  
    test('86. MYRSINACEÆ-Myrsine', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=86');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/86. MYRSINACEÆ-Myrsine.svg', svgHtml)
    });
  
    test('87. SAPOTACEÆ-Sappodilla', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=87');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/87. SAPOTACEÆ-Sappodilla.svg', svgHtml)
    });
  
    test('88. EBENACEÆ-Ebony', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=88');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/88. EBENACEÆ-Ebony.svg', svgHtml)
    });
  
    test('89. OLEACEÆ-Olive', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=89');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/89. OLEACEÆ-Olive.svg', svgHtml)
    });
  
    test('90. JASMINEACEÆ-Jasmine', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=90');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/90. JASMINEACEÆ-Jasmine.svg', svgHtml)
    });
  
    test('91. STRYCHNACEÆ-Strychnos', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=91');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/91. STRYCHNACEÆ-Strychnos.svg', svgHtml)
    });
  
    test('92. APOCYNACEÆ-Dog’s-Bane', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=92');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/92. APOCYNACEÆ-Dog’s-Bane.svg', svgHtml)
    });
  
    test('93. RHIZOPHORACEÆ-Mangrove', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=93');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/93. RHIZOPHORACEÆ-Mangrove.svg', svgHtml)
    });
  
    test('94. GENTIANACEÆ-Gentian', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=94');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/94. GENTIANACEÆ-Gentian.svg', svgHtml)
    });
  
    test('95. BIGNONIACEÆ-Trumpet-Flower', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=95');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/95. BIGNONIACEÆ-Trumpet-Flower.svg', svgHtml)
    });
  
    test('96. POLEMONIACEÆ-Polemonium', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=96');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/96. POLEMONIACEÆ-Polemonium.svg', svgHtml)
    });
  
    test('97. CONVOLVULACEÆ-Bind-Weed', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=97');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/97. CONVOLVULACEÆ-Bind-Weed.svg', svgHtml)
    });
  
    test('98. BORAGINACEÆ-Borage', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=98');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/98. BORAGINACEÆ-Borage.svg', svgHtml)
    });
  
    test('99. HYDROPHYLLACEÆ-Water-Leaf', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=99');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/99. HYDROPHYLLACEÆ-Water-Leaf.svg', svgHtml)
    });
  
    test('100. SOLANACEÆ-Potato', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=100');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/100. SOLANACEÆ-Potato.svg', svgHtml)
    });
  
    test('101. SCROPHULARIACEÆ-Fig-Wort', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=101');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/101. SCROPHULARIACEÆ-Fig-Wort.svg', svgHtml)
    });
  
    test('102. LAMIACEÆ-Dead-Nettle', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=102');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/102. LAMIACEÆ-Dead-Nettle.svg', svgHtml)
    });
  
    test('103. OROBANCHACEÆ-Broom-Rape', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=103');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/103. OROBANCHACEÆ-Broom-Rape.svg', svgHtml)
    });
  
    test('104. VERBENACEÆ-Vervain', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=104');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/104. VERBENACEÆ-Vervain.svg', svgHtml)
    });
  
    test('105. ACANTHACEÆ-Acanthus', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=105');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/105. ACANTHACEÆ-Acanthus.svg', svgHtml)
    });
  
    test('106. UTRICULARIACEÆ-Bladder-Wort', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=106');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/106. UTRICULARIACEÆ-Bladder-Wort.svg', svgHtml)
    });
  
    test('107. PRIMULACEÆ-Primrose', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=107');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/107. PRIMULACEÆ-Primrose.svg', svgHtml)
    });
  
    test('108. PLUMBAGINACEÆ-Lead-Wort', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=108');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/108. PLUMBAGINACEÆ-Lead-Wort.svg', svgHtml)
    });
  
    test('109. PLANTAGINACEÆ-Rib-Wort', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=109');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/109. PLANTAGINACEÆ-Rib-Wort.svg', svgHtml)
    });
  
    test('110. NYCTAGINACEÆ-Marvel of Peru', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=110');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/110. NYCTAGINACEÆ-Marvel of Peru.svg', svgHtml)
    });
  
    test('111. AMARANTACEÆ-Amaranth', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=111');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/111. AMARANTACEÆ-Amaranth.svg', svgHtml)
    });
  
    test('112. CHENOPODIACEÆ-Goose-Foot', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=112');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/112. CHENOPODIACEÆ-Goose-Foot.svg', svgHtml)
    });
  
    test('113. PHYTOLACCACEÆ-Phytolacca', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=113');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/113. PHYTOLACCACEÆ-Phytolacca.svg', svgHtml)
    });
  
    test('114. BEGONIACEÆ-Begonia', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=114');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/114. BEGONIACEÆ-Begonia.svg', svgHtml)
    });
  
    test('115. POLYGONACEÆ-Buck-Wheat', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=115');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/115. POLYGONACEÆ-Buck-Wheat.svg', svgHtml)
    });
  
    test('116. LAURACEÆ-Laurel', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=116');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/116. LAURACEÆ-Laurel.svg', svgHtml)
    });
  
    test('117. MYRISTICACEÆ-Nutmeg', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=117');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/117. MYRISTICACEÆ-Nutmeg.svg', svgHtml)
    });
  
    test('118. PROTEACEÆ-Protea', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=118');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/118. PROTEACEÆ-Protea.svg', svgHtml)
    });
  
    test('119. THYMELACEÆ-Daphne', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=119');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/119. THYMELACEÆ-Daphne.svg', svgHtml)
    });
  
    test('120. SANTALACEÆ-Sandal-Wood', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=120');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/120. SANTALACEÆ-Sandal-Wood.svg', svgHtml)
    });
  
    test('121. ELÆAGNACEÆ-Oleaster', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=121');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/121. ELÆAGNACEÆ-Oleaster.svg', svgHtml)
    });
  
    test('122. ARISTOLOCHIACEÆ-Aristolochia', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=122');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/122. ARISTOLOCHIACEÆ-Aristolochia.svg', svgHtml)
    });
  
    test('123. EUPHORBIACEÆ-Spurge', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=123');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/123. EUPHORBIACEÆ-Spurge.svg', svgHtml)
    });
  
    test('124. ARTOCARPACEÆ-Bread-Fruit', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=124');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/124. ARTOCARPACEÆ-Bread-Fruit.svg', svgHtml)
    });
  
    test('125. URTICACEÆ-Nettle', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=125');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/125. URTICACEÆ-Nettle.svg', svgHtml)
    });
  
    test('126. PIPERACEÆ-Pepper', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=126');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/126. PIPERACEÆ-Pepper.svg', svgHtml)
    });
  
    test('127. AMENTACEÆ-Oak', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=127');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/127. AMENTACEÆ-Oak.svg', svgHtml)
    });
  
    test('128. CONIFERACEÆ-Fir', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=128');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/128. CONIFERACEÆ-Fir.svg', svgHtml)
    });
  
    test('129. CYCADACEÆ-Cycas', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=129');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/129. CYCADACEÆ-Cycas.svg', svgHtml)
    });
  
    test('130. HYDROCHARIDACEÆ-Frog-Bit', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=130');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/130. HYDROCHARIDACEÆ-Frog-Bit.svg', svgHtml)
    });
  
    test('131. ALISMACEÆ-Water-Plantain', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=131');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/131. ALISMACEÆ-Water-Plantain.svg', svgHtml)
    });
  
    test('132. ORCHIDACEÆ-Orchis', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=132');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/132. ORCHIDACEÆ-Orchis.svg', svgHtml)
    });
  
    test('133. ZINGIBERACEÆ-Ginger', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=133');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/133. ZINGIBERACEÆ-Ginger.svg', svgHtml)
    });
  
    test('134. MUSACEÆ-Banana', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=134');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/134. MUSACEÆ-Banana.svg', svgHtml)
    });
  
    test('135. HÆMODORACEÆ-Blood-Root', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=135');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/135. HÆMODORACEÆ-Blood-Root.svg', svgHtml)
    });
  
    test('136. AMARYLLIDACEÆ-Amaryllis', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=136');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/136. AMARYLLIDACEÆ-Amaryllis.svg', svgHtml)
    });
  
    test('137. IRIDACEÆ-Iris', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=137');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/137. IRIDACEÆ-Iris.svg', svgHtml)
    });
  
    test('138. BROMELIACEÆ-Pine-Apple', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=138');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/138. BROMELIACEÆ-Pine-Apple.svg', svgHtml)
    });
  
    test('139. DIOSCORACEÆ-Yam', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=139');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/139. DIOSCORACEÆ-Yam.svg', svgHtml)
    });
  
    test('140. SMILACEÆ-Sarsaparilla', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=140');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/140. SMILACEÆ-Sarsaparilla.svg', svgHtml)
    });
  
    test('141. LILIACEÆ-Lily', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=141');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/141. LILIACEÆ-Lily.svg', svgHtml)
    });
  
    test('142. COLCHICACEÆ-Colchicum', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=142');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/142. COLCHICACEÆ-Colchicum.svg', svgHtml)
    });
  
    test('143. COMMELINACEÆ-Spider-Wort', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=143');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/143. COMMELINACEÆ-Spider-Wort.svg', svgHtml)
    });
  
    test('144. JUNCACEÆ-Rush', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=144');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/144. JUNCACEÆ-Rush.svg', svgHtml)
    });
  
    test('145. PALMACEÆ-Palm', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=145');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/145. PALMACEÆ-Palm.svg', svgHtml)
    });
  
    test('146. PANDANACEÆ-Screw-Pine', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=146');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/146. PANDANACEÆ-Screw-Pine.svg', svgHtml)
    });
  
    test('147. TYPHACEÆ-Bulrush', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=147');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/147. TYPHACEÆ-Bulrush.svg', svgHtml)
    });
  
    test('148. ARACEÆ-Arum', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=148');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/148. ARACEÆ-Arum.svg', svgHtml)
    });
  
    test('149. CYPERACEÆ-Sedge', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=149');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/149. CYPERACEÆ-Sedge.svg', svgHtml)
    });
  
    test('150. GRAMINACEÆ-Grass', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=150');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/150. GRAMINACEÆ-Grass.svg', svgHtml)
    });
  
    test('151. NAIADACEÆ-Water-Weed', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=151');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/151. NAIADACEÆ-Water-Weed.svg', svgHtml)
    });
  
    test('152. EQUISETACEÆ-Horse-Tail', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=152');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/152. EQUISETACEÆ-Horse-Tail.svg', svgHtml)
    });
  
    test('153. LYCOPODIACEÆ-Lycopodium', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=153');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/153. LYCOPODIACEÆ-Lycopodium.svg', svgHtml)
    });
  
    test('154. FILICACEÆ-Fern', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=154');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/154. FILICACEÆ-Fern.svg', svgHtml)
    });
  
    test('155. BRYACEÆ-Moss', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=155');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/155. BRYACEÆ-Moss.svg', svgHtml)
    });
  
    test('156. MARCHANTIACEÆ-Liverwort', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=156');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/156. MARCHANTIACEÆ-Liverwort.svg', svgHtml)
    });
  
    test('157. CHARACEÆ-Chara', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=157');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/157. CHARACEÆ-Chara.svg', svgHtml)
    });
  
    test('158. LICHENACEÆ-Lichen', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=158');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/158. LICHENACEÆ-Lichen.svg', svgHtml)
    });
  
    test('159. FUNGACEÆ-Fungus', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=159');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/159. FUNGACEÆ-Fungus.svg', svgHtml)
    });
  
    test('160. FUCACEÆ-Sea-Weed', async ({ page }) => {
      await page.goto('https://www.c82.net/twining/plants/?id=160');
      const svgHtml = await page.$eval('div.plant-illustration-masks', el => el.innerHTML);
      fs.writeFileSync('/Users/shisongyan/Documents/shiyanshi/img-twining-plants/svgs/160. FUCACEÆ-Sea-Weed.svg', svgHtml)
    });
  