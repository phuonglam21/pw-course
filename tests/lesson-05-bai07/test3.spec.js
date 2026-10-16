import { test, expect } from '@playwright/test';
test('To-Do List',async ({page}) =>{
  await page.goto('https://material.playwrightvn.com/03-xpath-todo-list.html');
  await page.locator ('//input[@type="text"]').fill('test1');
  await page.locator ('//button[@id="add-task"]').click();



})

