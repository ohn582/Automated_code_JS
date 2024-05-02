const { Given, When, setDefaultTimeout } = require('@cucumber/cucumber');
const { LoginPage } = require('../LoginPage')
const { HomePage } = require('../../page-objects/HomePage');
const { timeout } = require('../../test.config').test;


setDefaultTimeout(60 * 1000);


/* Step-definition used to native to a URL passed as a parameter
* waits for a state until network state is idle
* does a page title validation 
* @param  {String}   url   pretty url for page load
*/

Given(`I visit the pdware r1test landing page {string}`, timeout, async function (url) {
  let page = this.page;
  await page.goto(url, {
      waitUntil: 'networkidle0',timeout: 0
  });
  return this.expect(page.title()).to.eventually.equal(`PDWare ResourceFirst - Login`)
});

When(`I login with the credentials : user {string} and {string}`, timeout, async function (user, password) {
    let page = this.page
    const loginPage = new LoginPage(page);
    await loginPage.enterUserName(user);
    await page.waitForTimeout(1000)
    await loginPage.enterPassword(password)
    await page.waitForTimeout(1000)
    await loginPage.submit()
    await page.waitForNavigation({
        waitUntil: 'networkidle0', timeout: 0
    })
    // await page.waitForTimeout(1000);
})

When(`I click over the {string} nav and click on {string}`, timeout, async function (icon, links) {
    let page = this.page
    const homePage = new HomePage(page);
    await homePage.click_navigation_link(icon, links)
    await page.waitForTimeout(3000)
})