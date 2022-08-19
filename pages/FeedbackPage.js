import BasePage from './BasePage';

export default class FeedbackPage extends BasePage {
  async visit() {
    await page.goto('http://zero.webappsecurity.com/feedback.html');
  }
  async isFeedBackFormDisplayed() {
    await page.waitForSelector('#name');
    await page.waitForSelector('#email');
    await page.waitForSelector('#subject');
    await page.waitForSelector('#comment');
  }
  async submitFeedback(name, email, subject, comment) {
    await page.keyboard.type('#name', name);
    await page.keyboard.type('#email', email);
    await page.keyboard.type('#subject', subject);
    await page.keyboard.type('#comment', comment);
    await page.click('.btn-signin.btn.btn-primary');
  }
}
