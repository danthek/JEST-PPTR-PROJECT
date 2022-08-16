import HomePage from '../pages/HomePage';

describe('Example Test', () => {
  let homePage;
  beforeAll(async function () {
    homePage = new HomePage(); //we initialize it here and the other next steps we will have access to the HomePage file and its functions.
  });
  it('validate the HomePage works', async function () {
    await homePage.visit();
  });
  it('Should display the Navbar', async function () {
    await homePage.isNavBarDisplayed();
  });
});
