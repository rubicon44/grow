// import { TaskIndex } from './tasks';
// import { render } from '../../../../utils/test-utils';
// import { screen } from '@testing-library/react';
// import "@testing-library/jest-dom";

// describe('TaskIndex', () => {
//   test('renders TaskIndex component', () => {
//     render(<TaskIndex />);

//     screen.debug();
//   });
// });

// import "@testing-library/jest-dom";
// import puppeteer from "puppeteer";

// describe("タスク一覧", () => {
//   let browser;
//   let page;

//   beforeAll(async () => {
//     browser = await puppeteer.launch({
//       headless: "true",
//       args: ["--no-sandbox"],
//     });
//     page = await browser.newPage();
//     await page.goto("http://localhost:3000/signIn");
//   });

//   it('should login and navigate to "/tasks" page', async () => {
//     const pageContent = await page.evaluate(() => {
//       return document.querySelector("body").innerText;
//     });
//     console.log("Page Content:", pageContent);

//     await page.waitForSelector('input[name="email"]');
//     await page.$eval('input[name="email"]', (input) => (input.value = ""));
//     console.log("111");
//     await page.type('input[name="email"]', "5555@5555.com");
//     console.log("222");

//     await page.waitForSelector('input[name="password"]');
//     await page.$eval('input[name="password"]', (input) => (input.value = ""));
//     console.log("333");
//     await page.type('input[name="password"]', "123456");
//     console.log("444");

//     const value1 = await page.$eval(
//       'input[name="email"]',
//       (input) => input.value
//     );
//     console.log(value1);
//     const value2 = await page.$eval(
//       'input[name="password"]',
//       (input) => input.value
//     );
//     console.log(value2);

//     await page.click('button[type="submit"]');
//     console.log("555");

//     // const pageContent = await page.evaluate(() => {
//     //   return document.querySelector('body').innerText;
//     // });
//     // console.log('Page Content:', pageContent);

//     page.on("dialog", async (dialog) => {
//       const message = dialog.message();
//       console.error("Dialog Box:", message); // エラーメッセージをコンソールに出力する
//       await dialog.dismiss(); // ダイアログボックスを閉じる
//     });
//     // console.log('Page Content:', pageContent);

//     const value3 = await page.$eval(
//       'input[name="email"]',
//       (input) => input.value
//     );
//     console.log(value3);

//     const value4 = await page.$eval(
//       'input[name="password"]',
//       (input) => input.value
//     );
//     console.log(value4);

//     // // await page.waitForNavigation();
//     // await page.goto('http://localhost:3000/tasks');
//     // console.log('666');

//     // expect(page.url()).toBe('http://localhost:3000/tasks');
//     // console.log('777');
//     // await expect(page.title()).resolves.toMatch('タスク一覧');
//     // console.log('888');
//   }, 30000);

//   afterAll(async () => {
//     await browser.close();
//   });
// });
