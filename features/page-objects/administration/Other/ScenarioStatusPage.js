const { action } = require('../../../utilities/action')

const locators = {
    scenarStatNav: {
        scenarStatAddBtn: `[id="AdminScenarioStatusGrid-bodyWrap"] [role="toolbar"] [data-qtip="Add"]`,
    },

    scenarStatData: {
        //Creating a data
        scenarStatName: `[id="AdminScenarioStatusGrid-bodyWrap"] [data-recordindex="0"] [role="presentation"]`,
        // domainsName: `//*[text()="New Domain"]`,

        scenarStatNameA: `//*[text()="tes1"]`,
        scenarStatNameB: `//*[text()="tes2"]`,
        scenarStatNameC: `//*[text()="tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="AdminScenarioStatusGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminScenarioStatusGrid"] [role="toolbar"] [data-componentid="AdminScenarioStatusSave"]`,
        saveOK: `[data-componentid="messagebox-1009"] [id="messagebox-1009-toolbar"] [id="button-1013"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [data-componentid="AdminScenarioStatusReload"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },

    scenarStatLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }
}



class ScenarioStatusPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listSS_WriteA = async () => {
        let page = this.page;
        let { scenarStatAddBtn } = locators.scenarStatNav;
        let { scenarStatName } = locators.scenarStatData;
        // await page.waitForTimeout(3000);
        await page.click(scenarStatAddBtn);

        let textInput = await page.$(scenarStatName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(3000);
    }

    listSS_WriteB = async () => {
        let page = this.page;
        let { scenarStatAddBtn } = locators.scenarStatNav;
        let { scenarStatName } = locators.scenarStatData;
        // await page.waitForTimeout(3000);
        await page.click(scenarStatAddBtn);

        let textInput = await page.$(scenarStatName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(3000);
    }

    listSS_WriteC = async () => {
        let page = this.page;
        let { scenarStatAddBtn } = locators.scenarStatNav;
        let { scenarStatName } = locators.scenarStatData;
        // await page.waitForTimeout(3000);
        await page.click(scenarStatAddBtn);

        let textInput = await page.$(scenarStatName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    ss_ReTypeData = async () => {
        let page = this.page;
        let { scenarStatNameA } = locators.scenarStatData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(scenarStatNameA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        // await page.waitForTimeout(3000);
    }

    ss_ReTypeDataB = async () => {
        let page = this.page;
        let { scenarStatNameB } = locators.scenarStatData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(scenarStatNameB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        // await page.waitForTimeout(3000);
    }

    ss_ReTypeDataC = async () => {
        let page = this.page;
        let { scenarStatNameC } = locators.scenarStatData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(scenarStatNameC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    listSS_Delete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listSS_Save = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listSS_Reload = async () => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.scenarStatLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.ScenarioStatusPage = ScenarioStatusPage;
