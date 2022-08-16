import BasePage from './BasePage';

export default class HomePage extends BasePage {
  // the extends fnuction help us to call all the functions inside BasePage
  async visit() {
    await page.goto('http://zero.webappsecurity.com/');
    await page.waitForSelector('#nav');
  }
  async isNavBarDisplayed() {
    await page.waitForSelector('#pages-nav');
    await page.waitForSelector('#homeMenu');
    await page.waitForSelector('#onlineBankingMenu');
    await page.waitForSelector('#nfeedback');
  }
}
