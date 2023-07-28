const { action } = require('../../../utilities/action')

const locators = {
    ratesNav: {
        ratesAddBtn: `[id="AdminRateGrid-bodyWrap"] [role="toolbar"] [data-qtip="Add"]`,
    },

    ratesData: {
        //Creating a data
        ratesSkill: `[id="AdminRateGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1039"]`,
        ratesCostCategory: `[id="AdminRateGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1040"]`,
        // domainsName: `//*[text()="New Domain"]`,

        ratesSkillA: `[id="AdminRateGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1039"]`,
        ratesCostCategoryA: `[id="AdminRateGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1040"]`,

        ratesSkillB: `[id="AdminRateGrid"] [data-recordindex="1"] [data-columnid="gridcolumn-1039"]`,
        ratesCostCategoryB: `[id="AdminRateGrid"] [data-recordindex="1"] [data-columnid="gridcolumn-1040"]`,

        ratesSkillC: `[id="AdminRateGrid"] [data-recordindex="2"] [data-columnid="gridcolumn-1039"]`,
        ratesCostCategoryC: `[id="AdminRateGrid"] [data-recordindex="2"] [data-columnid="gridcolumn-1040"]`,
    },

    deleteNav: {
        deleteBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminRateGrid"] [role="toolbar"] [data-componentid="AdminRateSave"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[id="r1AdminMain"] [id="AdminRateGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadLoadRates: `[data-componentid="menu-1053"] [id="menu-1053-bodyWrap"] [aria-label="Load Rates"]`,
    }

}



class RatesPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listRatesWriteA = async () => {
        let page = this.page;
        let { ratesSkill, ratesCostCategory } = locators.ratesData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ratesSkill);
        // let textInputB = await page.$(ratesCostCategory);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('CAD');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('EE 1');
        // await page.waitForTimeout(3000);
    }

    listRatesWriteB = async () => {
        let page = this.page;
        let { ratesSkill, ratesCostCategory } = locators.ratesData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ratesSkill);
        let textInputB = await page.$(ratesCostCategory);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Java');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('QA 1');
        // await page.waitForTimeout(3000);
    }

    listRatesWriteC = async () => {
        let page = this.page;
        let { ratesSkill, ratesCostCategory } = locators.ratesData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ratesSkill);
        let textInputB = await page.$(ratesCostCategory);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('DBA');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('MB 1');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    ratesReTypeData = async () => {
        let page = this.page;
        let { ratesSkillA, ratesCostCategoryA } = locators.ratesData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ratesSkillA);
        let textInputB = await page.$(ratesCostCategoryA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('MB 1');
        // await page.waitForTimeout(3000);
    }

    ratesReTypeDataB = async () => {
        let page = this.page;
        let { ratesSkillB, ratesCostCategoryB } = locators.ratesData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ratesSkillB);
        let textInputB = await page.$(ratesCostCategoryB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('EE 1');
        // await page.waitForTimeout(3000);
    }

    ratesReTypeDataC = async () => {
        let page = this.page;
        let { ratesSkillC, ratesCostCategoryC } = locators.ratesData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ratesSkillC);
        let textInputB = await page.$(ratesCostCategoryC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Dev 2');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    listRatesDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listRatesSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listRatesReload = async () => {
        let page = this.page;
        let { relBtn, reloadLoadRates } = locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadLoadRates);
        await page.waitForTimeout(3000);
    }
}

module.exports.RatesPage = RatesPage;
