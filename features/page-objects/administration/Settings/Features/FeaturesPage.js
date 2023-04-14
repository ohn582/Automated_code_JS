const { action } = require('../../../../utilities/action')

const locators = {
    adminSettings_Page: {
        //Features
        topColorBar: `[id="AdminMainContainer"] [id="adminFeatureSetting-bodyWrap"] [id="adminServerSettingMainColor"] [id="adminServerSettingMainColor-triggerWrap"]`,
        topColorR: `[id="window-1105"] [id="numberfield-1112"] [class="x-form-trigger-wrap x-form-trigger-wrap-default"]`,
        topColorG: `[id="window-1105"] [id="numberfield-1113"] [class="x-form-trigger-wrap x-form-trigger-wrap-default"]`,
        topColorB: `[id="window-1105"] [id="numberfield-1114"] [class="x-form-trigger-wrap x-form-trigger-wrap-default"]`,

        colorOkBtn: `[id="window-1105"] [id="container-1135"] [data-componentid="button-1138"]`,

        timeOutBar: `[id="AdminMainContainer"] [id="adminFeatureSetting-bodyWrap"] [id="adminServerSettingSessionTimeout"] [id="adminServerSettingSessionTimeout-triggerWrap"]`,
        featSaveBtn: `[id="R1TFeatures"] [id="container-1102"] [aria-label="Save"]`,
    },

}



class FeaturesPage {
    constructor(page) {
        this.page = page;
    }

    topBarColorEdit = async () => {
        let page = this.page;
        let { topColorBar, topColorR, topColorG, topColorB, colorOkBtn } = locators.adminSettings_Page;

        // let colorInputR = await page.$(topColorR);
        // let colorInputG = await page.$(topColorG);
        // let colorInputB = await page.$(topColorB);


        await page.click(topColorBar);

        // await colorInputR.click({ clickCount: 3 })
        await page.dblclick(topColorR);
        await page.keyboard.type('100');
        await page.waitForTimeout(1000);

        // await colorInputG.click({ clickCount: 3 })
        await page.dblclick(topColorG);
        await page.keyboard.type('24');
        await page.waitForTimeout(1000);

        // await colorInputB.click({ clickCount: 3 })
        await page.dblclick(topColorB);
        await page.keyboard.type('564');
        await page.waitForTimeout(1000);


        await page.click(colorOkBtn);

        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    sessionTimeoutEdit = async () => {
        let page = this.page;
        let { timeOutBar } = locators.adminSettings_Page;

        let textInput = await page.$(timeOutBar);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('20');
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    featureSave = async () => {
        let page = this.page;
        let { featSaveBtn } = locators.adminSettings_Page;

        
        await page.click(featSaveBtn);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

}

module.exports.FeaturesPage = FeaturesPage;
