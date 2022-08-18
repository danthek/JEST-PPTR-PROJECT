import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import TopBar from '../pages/components/TopBar';

describe('Example Test', () => {
  let homePage;
  let loginPage;
  let topBar;
  beforeAll(async function () {
    //we initialize it here and the other next steps we will have access to the HomePage file and its functions.
    // we dont need to launch the browser or pages because jest-puppeteer does that behind scenes
    homePage = new HomePage();
    topBar = new TopBar();
    loginPage = new LoginPage();
    await page.setDefaultTimeout(0);
    await page.setDefaultNavigationTimeout(0);
  });
  it('validate the HomePage works', async function () {
    await homePage.visit();
  });
  it('Should display the Navbar', async function () {
    await homePage.isNavBarDisplayed();
    await topBar.isTopBarDisplayed();
  });
  it('Try to Login', async function () {
    await loginPage.visit();
    await loginPage.isLoginFormDisplayed();
    await loginPage.login('username', 'password');

    await loginPage.wait(5000); // we inherit this function from BasePage.js "wait" async function
  });
});
