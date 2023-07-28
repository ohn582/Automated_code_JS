const { action } = require('../../../utilities/action')

const locators = {
    currenciesNav: {
        currenciesAddBtn: `[id="AdminCurrency-bodyWrap"] [role="toolbar"] [data-qtip="Add"]`,
        currenciesAddDropdown: `//*[text()="Add Currency"]`,
    },

    currenciesData: {
        //Creating a data
        currenciesName: `[role="dialog"] [data-ref="outerCt"] [name="Name"]`,
        currenciesCode: `[role="dialog"] [data-ref="outerCt"] [name="code"]`,
        currenciesSymbol: `[role="dialog"] [data-ref="outerCt"] [name="symbol"]`,
        currenciesPartition: `[role="dialog"] [data-ref="outerCt"] [name="partitionId"]`,

        addPopUpBtn: `//*[text()="Add"]`
    },

    deleteNav: {
        deleteBtn: `[id="AdminCurrency-locked"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminCurrency-bodyWrap"] [role="toolbar"] [data-componentid="AdminCurrencySave"]`,
        saveOK: `[data-componentid="messagebox-1009"] [id="messagebox-1009-toolbar"] [id="button-1013"]`,
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
        await page.keyboard.type('765');

        await page.click(currenciesSymbol)
        await page.keyboard.type('$$$');

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


        await page.click(currenciesName)
        await page.keyboard.type('tes2');

        await page.click(currenciesCode)
        await page.keyboard.type('123');

        await page.click(currenciesSymbol)
        await page.keyboard.type('%%%');

        await page.click(currenciesPartition)
        await page.keyboard.type('BU 2');

        await page.click(addPopUpBtn);
    }

    listCurrenciesWriteC = async () => {
        let page = this.page;
        let { currenciesName, currenciesCode, currenciesSymbol, currenciesPartition, addPopUpBtn } = locators.currenciesData;
        let { currenciesAddBtn, currenciesAddDropdown } = locators.currenciesNav;
        // await page.waitForTimeout(3000);
        // let textInput = await page.$(currenciesName);

        await page.click(currenciesAddBtn);
        await page.click(currenciesAddDropdown);

        await page.click(currenciesName)
        await page.keyboard.type('tes3');

        await page.click(currenciesCode)
        await page.keyboard.type('782');

        await page.click(currenciesSymbol)
        await page.keyboard.type('!@#');

        await page.click(currenciesPartition)
        await page.keyboard.type('BU 2');

        await page.click(addPopUpBtn);
    }




    //Sponsor: Update
    currenciesrenciesReTypeData = async () => {
        let page = this.page;
        let { currenciesName, currenciesCode } = locators.currenciesData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(currenciesName);
        let textInputB = await page.$(currenciesCode);
        let textInputC = await page.$(currenciesSymbol);
        let textInputD = await page.$(currenciesPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');

        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('987');

        await textInputC.click({ clickCount: 3 })
        await page.keyboard.type('r*]');

        await textInputD.click({ clickCount: 3 })
        await page.keyboard.type('BU 2');
    }

    currenciesrenciesReTypeDataB = async () => {
        let page = this.page;
        let { currenciesNameB, currenciesCodeB } = locators.currenciesData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(currenciesName);
        let textInputB = await page.$(currenciesCode);
        let textInputC = await page.$(currenciesSymbol);
        let textInputD = await page.$(currenciesPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');

        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('987');

        await textInputC.click({ clickCount: 3 })
        await page.keyboard.type('3RR/');

        await textInputD.click({ clickCount: 3 })
        await page.keyboard.type('BU 1');
    }

    currenciesrenciesReTypeDataC = async () => {
        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');

        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('687');

        await textInputC.click({ clickCount: 3 })
        await page.keyboard.type('3@*');

        await textInputD.click({ clickCount: 3 })
        await page.keyboard.type('BU 1');
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
