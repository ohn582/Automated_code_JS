const { action } = require('../../../utilities/action')

const locators = {
    curNav: {
        curAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`,
        curAddDropdownA: `//*[text()="Add Currency"]`,

        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    curData: {
        //Creating a data
        curNameNew: `//*[text()="New Currency"]`,
        curName: `[id="AdminCurrency-body"] [data-recordindex="0"] [role="presentation"]`,
        curCode: `[data-componentid="gridview-1062"] [data-recordindex="0"] [class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1053 x-unselectable"]`,
        // domainsName: `//*[text()="New Domain"]`,


        curNameA: `//*[text()="tes1"]`,
        curCodeA: `[data-componentid="gridview-1062"] [data-recordindex="0"] [class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1053 x-unselectable"]`,

        curNameB: `//*[text()="tes2"]`,
        curCodeB: `[data-componentid="gridview-1062"] [data-recordindex="0"] [class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1053 x-unselectable"]`,

        curNameC: `//*[text()="tes3"]`,
        curCodeC: `[data-componentid="gridview-1062"] [data-recordindex="0"] [class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1053 x-unselectable"]`,
    },

    deleteNav: {
        deleteBtn: `[id="AdminCurrency-locked"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminCurrency-bodyWrap"] [role="toolbar"] [data-componentid="AdminCurrencySave"]`,
        saveOK: `[data-componentid="messagebox-1009"] [id="messagebox-1009-toolbar"] [id="button-1013"]`,
    },

}



class CurrenciesPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listCurrenciesWriteA = async () => {
        let page = this.page;
        let { curNameNew, curName, curCode } = locators.curData;
        let { curAddBtn, curAddDropdownA } = locators.curNav;
        // await page.waitForTimeout(3000);

        let textInputC = await page.$(curCode);

        await page.click(curAddBtn);
        await page.click(curAddDropdownA);

        let textInputB = await page.$(curNameNew);
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('tes1');

        // await textInput.click({ clickCount: 3 })
        // await page.keyboard.type('tes1');

        // await textInputB.click({ clickCount: 1 })
        // await page.keyboard.type('Code1');
        // await page.waitForTimeout(3000);
    }

    listCurrenciesWriteB = async () => {
        let page = this.page;
        let { curNameNew, curName, curCode } = locators.curData;
        let { curAddBtn, curAddDropdownA } = locators.curNav;
        // await page.waitForTimeout(3000);

        let textInputC = await page.$(curCode);

        await page.click(curAddBtn);
        await page.click(curAddDropdownA);

        let textInputB = await page.$(curNameNew);
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('tes2');

        // await textInput.click({ clickCount: 3 })
        // await page.keyboard.type('tes2');

        // await textInputB.click({ clickCount: 1 })
        // await page.keyboard.type('Code2');
        // // await page.waitForTimeout(3000);
    }

    listCurrenciesWriteC = async () => {
        let page = this.page;
        let { curNameNew, curName, curCode } = locators.curData;
        let { curAddBtn, curAddDropdownA } = locators.curNav;
        // await page.waitForTimeout(3000);

        let textInputC = await page.$(curCode);

        await page.click(curAddBtn);
        await page.click(curAddDropdownA);

        let textInputB = await page.$(curNameNew);
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('tes3');

        // await textInput.click({ clickCount: 3 })
        // await page.keyboard.type('tes3');

        // await textInputB.click({ clickCount: 1 })
        // await page.keyboard.type('Code3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    currenciesReTypeData = async () => {
        let page = this.page;
        let { curNameA, curCodeA } = locators.curData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(curNameA);
        let textInputB = await page.$(curCodeA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        // await textInputB.click({ clickCount: 3 })
        // await page.keyboard.type('Re-Type Code 1');
        // await page.waitForTimeout(3000);
    }

    currenciesReTypeDataB = async () => {
        let page = this.page;
        let { curNameB, curCodeB } = locators.curData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(curNameB);
        let textInputB = await page.$(curCodeB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        // await textInputB.click({ clickCount: 3 })
        // await page.keyboard.type('Re-Type Code 2');
        // await page.waitForTimeout(3000);
    }

    currenciesReTypeDataC = async () => {
        let page = this.page;
        let { curNameC, curCodeC } = locators.curData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(curNameC);
        let textInputB = await page.$(curCodeC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        // await textInputB.click({ clickCount: 3 })
        // await page.keyboard.type('Re-Type Code 3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    listCurrenciesDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listCurrenciesSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listCurrenciesReload = async () => {
        let page = this.page;
        let { relBtn, reloadNavBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.CurrenciesPage = CurrenciesPage;
