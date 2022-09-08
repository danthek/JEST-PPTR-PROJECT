const puppeteer = require('puppeteer');
const { default: LoginPage } = require('../pages/LoginPage');

describe('Second Test', () => {
  let loginPage;
  beforeAll(async function () {
    loginPage = new LoginPage();
  });
  //beforeAll(async function () {});

  it('Should run a second test', async function () {
    await loginPage.visit();
    await loginPage.login('XXXXXXXX', 'YYYYYYYYY');
    await loginPage.isWrongCredsDisplayed();
  });
});
