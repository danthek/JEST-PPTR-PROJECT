import BasePage from './BasePage';

const expect = require('chai').expect;
export default class LoginPage extends BasePage {
  async visit() {
    await page.goto('http://zero.webappsecurity.com/login.html');
  }
  async isLoginFormDisplayed() {
    await page.waitForSelector('#login_form');
    await page.waitForSelector('#user_login');
    await page.waitForSelector('#user_password');
  }
  async login(user, password) {
    await page.waitForSelector('#login_form');
    await page.keyboard.type('#user_login', user);
    await page.keyboard.type('#user_password', password);
    await page.click('.btn-primary');
  }
  async isWrongCredsDisplayed() {
    const url = await page.url();
    expect(url).to.include('error');
    await page.waitForSelector('.alert.alert-error');
    await page.waitForFunction(() => !document.querySelector('#pages-nav'));
  }
}
