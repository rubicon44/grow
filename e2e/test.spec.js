describe('Top', () => {
  beforeAll(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  })

  test('トップページでアプリ名が表示されていること', async () => {
    const h2 = await page.$eval('h2', el => el.textContent);
    // console.log(h2);
    expect(h2).toBe('Grow');
  })
})