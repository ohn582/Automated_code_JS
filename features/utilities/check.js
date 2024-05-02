const expect = require("chai").use(require("chai-as-promised")).expect;


// /** @type {import('').Page} **/
// let page;


exports.checks = {
  /**
   * Check if the given two texts are similar ignoring case
   * @param  {String}   txt1   first text
   * @param  {String}   txt2   second text
   * @param  {String}   falseCase Check for a positive and neagative case
   */
  compareTextIgnorcase: async (txt1, txt2, failcase) => {
    if (failcase)
      return expect(txt1.toUpperCase().trim()).to.not.equal(
        txt2.toUpperCase().trim()
      );
    return expect(txt1.toUpperCase().trim()).to.equal(
      txt2.toUpperCase().trim()
    );
  },

  /**
   * Check if the given value is null
   * @param  {String}   value  value to checked
   * @param  {String}   falseCase Check for a positive and neagative case
   */
  notnullify: async (value, failcase) => {
    if (failcase) {
      return expect(value).to.be.null;
    }
    return expect(value).to.be.not.null;
  },

  contains: async (Actual, Expected, failcase) => {
    if (failcase) {
      return expect(Actual).to.not.contain(Expected);
    }
    return expect(Actual).to.contain(Expected);
  },

  visible: async (page, selector, failcase) => {
    if (failcase) {
      await page.waitForSelector(selector, { visible: false });
    } else {
      await page.waitForSelector(selector, { visible: true });
    }
  },
  isVisible: async (page, selector) => {
    return await page.isVisible(selector)
  },
  isDisabled: async (locator, failcase) => {
    return new Promise(async (resolve, reject) => {
      if (failcase) {
        await page.waitForSelector(`${locator}.disabled`);
        return resolve();
      }
      else {
        try {
          await page.waitForSelector(`${locator}.disabled`, { timeout: 1 });
        }
        catch {
          return resolve();
        }
      }
    })
  },
  ifDisabled: async (locator) => {
    return new Promise(async (resolve, reject) => {
      const Disabled = await page.$eval(locator, (button) => {
        return button.disabled;
      });
      expect(Disabled).to.be.true;
      return resolve(Disabled);
    })
  },
  checkArrayContains: async (arr, elem, failcase) => {
    if (failcase)
      expect(arr).to.not.contain(elem);
    else
      expect(arr).to.contain(elem);
  }
};
