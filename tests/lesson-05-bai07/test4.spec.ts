import {test, expect} from '@playwright/test';


test ('Personal Notes', async ({page}) => {
    await page.goto ('https://material.playwrightvn.com/04-xpath-personal-notes.html')
    const textTitle = page.locator('#note-title')
    const textContent = page.locator('#note-content')
    const buttonAdd = page.locator ('#add-note')
    const buttonSearch = page.locator ('#search')

for ( let numBer =1; numBer <= 30; numBer++){
    await textTitle.fill('Title' + numBer);
    await textContent.fill('bai ' + numBer);
    await buttonAdd.click();


    // await page.locator ('//input[@id="note-title"]').fill('Login');

    // await page.locator ('//input[@id="note-title"]').fill('Logout')
    // await page.locator ('//input[@id"note-title"]').fill('Register')
    
    // await page.locator ('//textarea[@id="note-content"]').fill('example value')
    // await page.locator ('//input[@id="note-content"]').fill('Logout 1')
    // await page.locator ('//input[@id="note-content"]').fill('Register 1')

    // await page.locator ('//button[@id="add-note"]').click();
    
    // await page.locator ('//input[@id="search"]').fill('Login');
}
//Search 1 cai 
    await buttonSearch.fill('Title 1')
//Search nhieu cai
    await buttonSearch.fill('1')

});
