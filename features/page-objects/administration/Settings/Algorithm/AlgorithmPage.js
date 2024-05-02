const { action } = require('../../../../utilities/action')

const locators = {
    adminSettings_Page: {
        //Features
        algorithmsAddBtn: `[id="adminAlgorithmSetting-bodyWrap"] [id="fieldset-1106-body"] [id="adminServerSettingAllocationAlgorithmGrid_header"] [id="tool-1122-toolEl"]`,
        algorithmsFinancialAddBtn: `[id="adminAlgorithmSetting-bodyWrap"] [id="fieldset-1048-body"] [id="adminServerSettingAllocationAlgorithmGrid_header"] [id="tool-1058-toolEl"]`,
        algorithmsSaveBtn: `[id="R1TFeatures"] [id="container-1119"] [aria-label="Save"]`,
    },

}



class AlgorithmPage {
    constructor(page) {
        this.page = page;
    }

    createAlgorithumDataA = async () => {
        let page = this.page;
        let { topColorBar, topColorR } = locators.adminSettings_Page;

        await page.click(topColorBar);
        await page.click(colorOkBtn);

        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    createAlgorithumDataB = async () => {
        let page = this.page;
        let { topColorBar, topColorR } = locators.adminSettings_Page;

        await page.click(topColorBar);
        await page.click(colorOkBtn);

        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    createAlgorithumDataC = async () => {
        let page = this.page;
        let { topColorBar, topColorR } = locators.adminSettings_Page;

        await page.click(topColorBar);
        await page.click(colorOkBtn);

        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    featureSave = async () => {
        let page = this.page;
        let { algorithmsSaveBtn } = locators.adminSettings_Page;

        
        await page.click(algorithmsSaveBtn);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

}

module.exports.AlgorithmPage = AlgorithmPage;
