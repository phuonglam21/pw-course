// @ts-check
import { test, expect } from '@playwright/test';

test('To-Do List', async ({ page }) => {
    await page.goto('http://material.playwrightvn.com/03-xpath-todo-list.html');
for (let numBer = 1; numBer <=100; numBer++ ){
if (numBer % 3 === 0) {
  await page.locator ('//input[@id="new-task"]').fill('Todo '+ numBer);
  await page.locator ('//button[@id="add-task"]').click();
        console.log("Hello " + numBer);
    }

}

//  const newTask = page.locator('#new-task');
//   const addTask = page.locator('#add-task');

//   for (let number = 1; number <= 100; number++) {
//     await newTask.fill('Todo ' + number);
//     await addTask.click();
  // }

});
