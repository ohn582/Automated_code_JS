const { action } = require('../../../utilities/action')

const locators = {
    currenciesNav: {
        currenciesAddBtn: `[id="AdminCurrency-bodyWrap"] [role="toolbar"] [data-qtip="Add"]`,
        currenciesAddDropdown: `//*[text()="Add Currency"]`,
    },

    currenciesData: {
        //Creating a data
        currenciesName: `[role="dialog"] [data-ref="bodyWrap"] [data-ref="outerCt"] [name="Name"]`,
        currenciesCode: `[role="dialog"] [data-ref="bodyWrap"] [data-ref="outerCt"] [name="code"]`,
        currenciesSymbol: `[role="dialog"] [data-ref="bodyWrap"] [data-ref="outerCt"] [name="symbol"]`,
        currenciesPartition: `[role="dialog"] [data-ref="bodyWrap"] [data-ref="outerCt"] [name="partitionId"]`,

        addPopUpBtn: `//*[text()="Add"]`,

        //Update Data
        currenciesDataA: `//*[text()="tes1"]`,
        currenciesDataB: `//*[text()="tes2"]`,
        currenciesDataC: `//*[text()="tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="AdminCurrency-locked"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminCurrency-bodyWrap"] [role="toolbar"] [data-componentid="AdminCurrencySave"]`,
        saveOK: `[role="alertdialog"] [class="x-toolbar x-docked x-toolbar-footer x-box-layout-ct"] [tabindex="0"]`,
        saveProgressExit: `[data-componentid="SaveProgressDialog"] [id="SaveProgressDialog_header"] [data-qtip="Close dialog"]`
    },

    baseTypeLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }
}



class CurrenciesPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listCurrenciesWriteA = async () => {
        let page = this.page;
        let { currenciesName, currenciesCode, currenciesSymbol, currenciesPartition, addPopUpBtn } = locators.currenciesData;
        let { currenciesAddBtn, currenciesAddDropdown } = locators.currenciesNav;
        // await page.waitForTimeout(3000);
        // let textInput = await page.$(currenciesName);

        await page.click(currenciesAddBtn);
        await page.click(currenciesAddDropdown);

        await page.click(currenciesName)
        await page.keyboard.type('tes1');

        await page.click(currenciesCode)
        await page.keyboard.type('DEF');

        await page.click(currenciesSymbol)
        await page.keyboard.type('!');

        await page.click(currenciesPartition)
        await page.keyboard.type('BU 1');

        await page.click(addPopUpBtn);
    }

    listCurrenciesWriteB = async () => {
        let page = this.page;
        let { currenciesName, currenciesCode, currenciesSymbol, currenciesPartition, addPopUpBtn } = locators.currenciesData;
        let { currenciesAddBtn, currenciesAddDropdown } = locators.currenciesNav;
        // await page.waitForTimeout(3000);
        // let textInput = await page.$(currenciesName);

        await page.click(currenciesAddBtn);
        await page.click(currenciesAddDropdown);

        await page.keyboard.press('Tab');
        await page.keyboard.type('tes2');

        await page.keyboard.press('Tab');
        await page.keyboard.type('FOR');

        await page.keyboard.press('Tab');
        await page.keyboard.type('%');

        await page.keyboard.press('Tab');
        await page.keyboard.type('BU 2');

        await page.keyboard.press('Tab');
        await page.keyboard.press('Enter');
        // await page.click(addPopUpBtn);
    }

    listCurrenciesWriteC = async () => {
        let page = this.page;
        let { currenciesName, currenciesCode, currenciesSymbol, currenciesPartition, addPopUpBtn } = locators.currenciesData;
        let { currenciesAddBtn, currenciesAddDropdown } = locators.currenciesNav;
        // await page.waitForTimeout(3000);
        // let textInput = await page.$(currenciesName);

        await page.click(currenciesAddBtn);
        await page.click(currenciesAddDropdown);

        await page.keyboard.press('Tab');
        await page.keyboard.type('tes3');

        await page.keyboard.press('Tab');
        await page.keyboard.type('TBS');

        await page.keyboard.press('Tab');
        await page.keyboard.type('#');

        await page.keyboard.press('Tab');
        await page.keyboard.type('BU 1');

        await page.keyboard.press('Tab');
        await page.keyboard.press('Enter');
        // await page.click(addPopUpBtn);
    }




    //Sponsor: Update
    currenciesReTypeDataA = async () => {
        let page = this.page;
        let { currenciesDataA } = locators.currenciesData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(currenciesDataA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');

        await page.keyboard.press('Tab');
        await page.keyboard.press('Control+A');
        await page.keyboard.type('AMR');

        await page.keyboard.press('Tab');
        await page.keyboard.press('Control+A');
        await page.keyboard.type('r*]');

        await page.keyboard.press('Tab');
        await page.keyboard.press('Control+A');
        await page.keyboard.type('BU 2');

        await page.keyboard.press('Enter');
    }

    currenciesReTypeDataB = async () => {
        let page = this.page;
        let { currenciesDataB } = locators.currenciesData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(currenciesDataB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');

        await page.keyboard.press('Tab');
        await page.keyboard.press('Control+A');
        await page.keyboard.type('FBB');

        await page.keyboard.press('Tab');
        await page.keyboard.press('Control+A');
        await page.keyboard.type('3RR/');

        await page.keyboard.press('Tab');
        await page.keyboard.press('Control+A');
        await page.keyboard.type('BU 1');

        await page.keyboard.press('Enter');
    }

    currenciesReTypeDataC = async () => {
        let page = this.page;
        let { currenciesDataC } = locators.currenciesData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(currenciesDataC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');

        await page.keyboard.press('Tab');
        await page.keyboard.press('Control+A');
        await page.keyboard.type('EAS');

        await page.keyboard.press('Tab');
        await page.keyboard.press('Control+A');
        await page.keyboard.type('3@*');

        await page.keyboard.press('Tab');
        await page.keyboard.press('Control+A');
        await page.keyboard.type('BU 1');

        await page.keyboard.press('Enter');
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
        let { saveBtn, saveOK, saveProgressExit } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveProgressExit);
        // await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listCurrenciesReload = async () => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.baseTypeLogoutBtn;
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
        await page.waitForTimeout(3000);
    }
}

module.exports.CurrenciesPage = CurrenciesPage;
