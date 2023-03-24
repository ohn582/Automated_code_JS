const { action } = require('../../../utilities/action')

const locators = {
    scenarStatNav: {
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    scenarStatData: {
        //Creating a data
        scenarStatName: `[id="AdminScenarioStatusGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1036"]`,
        scenarStatPartition: `[id="AdminScenarioStatusGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1041"]`,
        // domainsName: `//*[text()="New Domain"]`,


        scenarStatNameA: `[id="AdminScenarioStatusGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1036"]`,
        scenarStatPartitionA: `[id="AdminScenarioStatusGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1041"]`,

        scenarStatNameB: `[id="AdminScenarioStatusGrid"] [data-recordindex="1"] [data-columnid="gridcolumn-1036"]`,
        scenarStatPartitionB: `[id="AdminScenarioStatusGrid"] [data-recordindex="1"] [data-columnid="gridcolumn-1041"]`,

        scenarStatNameC: `[id="AdminScenarioStatusGrid"] [data-recordindex="2"] [data-columnid="gridcolumn-1036"]`,
        scenarStatPartitionC: `[id="AdminScenarioStatusGrid"] [data-recordindex="2"] [data-columnid="gridcolumn-1041"]`,
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
    }

}



class ScenarioStatusPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listSS_WriteA = async () => {
        let page = this.page;
        let { scenarStatName, scenarStatPartition } = locators.scenarStatData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(scenarStatName);
        let textInputB = await page.$(scenarStatPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    listSS_WriteB = async () => {
        let page = this.page;
        let { scenarStatName, scenarStatPartition } = locators.scenarStatData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(scenarStatName);
        let textInputB = await page.$(scenarStatPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    listSS_WriteC = async () => {
        let page = this.page;
        let { scenarStatName, scenarStatPartition } = locators.scenarStatData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(scenarStatName);
        let textInputB = await page.$(scenarStatPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    ss_ReTypeData = async () => {
        let page = this.page;
        let { scenarStatNameA, scenarStatPartitionA } = locators.scenarStatData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(scenarStatNameA);
        let textInputB = await page.$(scenarStatPartitionA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    ss_ReTypeDataB = async () => {
        let page = this.page;
        let { scenarStatNameB, scenarStatPartitionB } = locators.scenarStatData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(scenarStatNameB);
        let textInputB = await page.$(scenarStatPartitionB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }

    ss_ReTypeDataC = async () => {
        let page = this.page;
        let { scenarStatNameC, scenarStatPartitionC } = locators.scenarStatData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(scenarStatNameC);
        let textInputB = await page.$(scenarStatPartitionC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Testing');
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
        let { relBtn, reloadNavBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.ScenarioStatusPage = ScenarioStatusPage;
