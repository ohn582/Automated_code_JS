const { action } = require('../utilities/action')
const locators = {
  inputUsername: '[id="r1UserName-inputEl"]',
  inputPassword: '[id="r1Password-inputEl"]',
  btnSubmit: '[id="loginBtn-btnInnerEl"]'
}


class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async enterUserName(userName) {
    await this.page.fill(locators.inputUsername, userName).catch(e => e);
  }

  async enterPassword(password) {
    await this.page.fill(locators.inputPassword, password).catch(e => e);
  }

  async submit() {
    await this.page.click(locators.btnSubmit).catch(e => e);
  }
}

module.exports.LoginPage = LoginPage;