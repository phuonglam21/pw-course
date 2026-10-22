// @ts-check
import { test, expect } from '@playwright/test';

test('User Registration',async ({page}) =>{
const interestsUser = page.locator ("#interests")
const countrySelect = page.locator ("#country")
const dateSelect = page.locator('//input[@id="dob"]')

  await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');
  await page.locator ('//input[@id="username"]').fill("Nguyễn Phương Lâm");
  await page.locator ('//input[@id="email"]').fill("phuonglap21112000@gmail.com");
  await page.locator ('//input[@id="male"]').check();
  await page.locator ('//input[@id="reading"]').check();
    //Select by Value Interests:
  await interestsUser.selectOption("art");
    //Select by Value Country:
  await countrySelect.selectOption("canada");
    //Select by Value Date of Birth:
  await dateSelect.fill("2000-11-21");
    //Upload File
  await page.locator ("//input[@id='profile']").setInputFiles("C:/Users/Admin/Desktop/RRecovery/datademo/meo.jpg");
  //await page.locator("#profile");
    //Fill Biography
  await page.locator('//textarea[@id="bio"]').fill("Xin chao, minh ten la Phuong Lam, minh dang thuc hanh coding voi Playwright cung hoctest.com")
    //Click Register 
  await page.locator ('//button[@type="submit"]').click();
});

 