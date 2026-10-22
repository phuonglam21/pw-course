// @ts-check
import { test, expect } from '@playwright/test';

test('To-Do List', async ({ page }) => {
    await page.goto('http://material.playwrightvn.com/03-xpath-todo-list.html');
for (let numBer = 1; numBer <=100; numBer++ ){
  await page.locator ('//input[@id="new-task"]').fill('Todo '+ numBer);
  await page.locator ('//button[@id="add-task"]').click();
        // console.log("Hello " + numBer);
} 
});

test('Ex3', async ({ page }) => {
    await page.goto('http://material.playwrightvn.com/03-xpath-todo-list.html');
  page.on('dialog', async dialog => dialog.accept());
  for (let i = 1; i <= 100; i++) {
    await page.locator("//input[@id='new-task']").fill('Todo ' + i);
    await page.click("//button[@id='add-task']");
  }
  for (let i = 2; i <= 100; i += 2) {
    await page.click(`//li[normalize-space(span)='Todo ${i}']//button[text()='Delete']`);
  }
});