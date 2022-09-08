const expect = require('chai').expect;
import HomePage from '../pages/HomePage';
import FeedbackPage from '../pages/FeedbackPage';
import LoginPage from '../pages/LoginPage';
import TopBar from '../pages/components/TopBar';

describe('End-To-End Test', () => {
  let homePage;
  let feedbackPage;
  let loginPage;
  let topBar;
  beforeAll(async function () {
    // we dont need to launch the browser or pages because jest-puppeteer does that behind scenes
    //we initialize  here our components and the other next steps we will have access to the HomePage, feedbackpage, etc files and its functions.
    homePage = new HomePage();
    feedbackPage = new FeedbackPage();
    loginPage = new LoginPage();
    topBar = new TopBar();
    /*  await page.setDefaultTimeout(0);
    await page.setDefaultNavigationTimeout(0); */
  });
  it('It should load home page', async function () {
    await homePage.visit();
    await homePage.isNavBarDisplayed();
  });
  it('should submit feedback', async function () {
    await homePage.clickFeedBackLink();
    await feedbackPage.isFeedBackFormDisplayed();
    await feedbackPage.submitFeedback(
      'Aby',
      'aby@gmail.com',
      'Position rise',
      'Thanks for the opportuniy, I will do my best'
    );
  });
  it('Should Load Login Page', async function () {
    await homePage.visit();
    await topBar.isTopBarDisplayed();
    await topBar.clickSignInButton();
    await loginPage.isLoginFormDisplayed();
  });
  it('Should not Login with incorrect credentials', async function () {
    await loginPage.login('XXXXXXXX', 'YYYYYYYYY');
    //await loginPage.isWrongCredsDisplayed();
  });
  it('Should Login to App', async function () {
    await homePage.visit();
    await topBar.isTopBarDisplayed();
    await topBar.clickSignInButton();
    await loginPage.isLoginFormDisplayed();
    await loginPage.login('username', 'password');
  });
});
