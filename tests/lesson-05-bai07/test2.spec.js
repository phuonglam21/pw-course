import { test, expect } from '@playwright/test';
test('Simple E-commerce',async ({page}) =>{
    
await page.goto('https://material.playwrightvn.com/02-xpath-product-page.html');
//   Cách 1     
//   await page.locator ('//button[@class="add-to-cart"]').first().dblclick();
//   await page.locator ('//button[@data-product-id="2"]').click({ clickCount:3 });
//   await page.locator ('//button[@data-product-id="3"]').click({ clickCount: 1});

// Cách 2
const addtoCart = page.locator ('//button[@data-product-id="1"]')
const addtoCart2 = page.locator ('//button[@data-product-id="2"]')
const addtoCart3 = page.locator ('//button[@data-product-id="3"]')

for (let i = 0; i < 2; i++) {
  await addtoCart.click();
}
for (let i = 0; i < 3; i++) {
  await addtoCart2.click();
}
for (let i = 0; i < 1; i++) {
  await addtoCart3.click();
}
})