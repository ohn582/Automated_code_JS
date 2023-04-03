const { action } = require('../../../../utilities/action')

const locators = {
    adminSettings_Page: {
        topColorBar: `[id="AdminMainContainer"] [id="adminFeatureSetting-bodyWrap"] [id="adminServerSettingMainColor"] [id="adminServerSettingMainColor-triggerWrap"]`,
        colorOkBtn: `[id="AdminMainContainer"] [id="adminFeatureSetting-bodyWrap"] [id="adminServerSettingMainColor"] [id="adminServerSettingMainColor-triggerWrap"]`,

        timeOutBar: `[id="AdminMainContainer"] [id="adminFeatureSetting-bodyWrap"] [id="adminServerSettingSessionTimeout"] [id="adminServerSettingSessionTimeout-triggerWrap"]`,
    },

}



class FeaturesPage {
    constructor(page) {
        this.page = page;
    }

    topBarColorEdit = async () => {
        let page = this.page;
        let { topColorBar, colorOkBtn } = locators.adminSettings_Page;

        await page.click(topColorBar);
        await page.click(colorOkBtn);

        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    sessionTimeoutEdit = async () => {
        let page = this.page;
        let { timeOutBar } = locators.adminSettings_Page;

        await page.click(timeOutBar);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

}

module.exports.FeaturesPage = FeaturesPage;
