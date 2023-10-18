const { action } = require('../../../utilities/action')

const locators = {
    ratesNav: {
        ratesAddBtn: `[id="R1TRates"] [id="AdminRateGrid-bodyWrap"] [role="toolbar"] [data-componentid="AdminRateAdd"]`,
    },

    ratesData: {
        //Creating a data
        ratesNode: `[id="AdminRateGrid-body"] [data-recordindex="0"] [class="x-grid-cell-inner x-grid-checkcolumn-cell-inner"]`,


        ratesEnterprise: `//*[text()="Enterprise"]`,
    },

    deleteNav: {
        deleteBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminRateGrid"] [role="toolbar"] [data-componentid="AdminRateSave"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    periodsLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }

}



class RatesPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listRatesWriteA = async () => {
        let page = this.page;
        let { ratesAddBtn } = locators.ratesNav;
        let { ratesNode } = locators.ratesData;
        // await page.waitForTimeout(3000);

        await page.click(ratesAddBtn);

        await page.click(ratesNode)

        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');

        await page.keyboard.type('Enterprise');

        await page.waitForTimeout(1000);

        await page.keyboard.press('Tab');
        await page.keyboard.type('DBA');

        await page.keyboard.press('Tab');
        await page.keyboard.type('IT FTE');

        await page.keyboard.press('Tab');
        await page.keyboard.type('USA');

        await page.keyboard.press('Tab');
        await page.keyboard.type('New York');

        await page.keyboard.press('Tab');
        await page.keyboard.type('10/18/2024');

        await page.keyboard.press('Tab');
        await page.keyboard.type('01/07/2025');

        await page.keyboard.press('Tab');
        await page.keyboard.type('44');

        await page.keyboard.press('Tab');
        await page.keyboard.type('97');

        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('BU 1');
        await page.keyboard.press('Enter');

        await page.waitForTimeout(2000);
    }

    listRatesWriteB = async () => {
        let page = this.page;
        let { ratesAddBtn } = locators.ratesNav;
        let { ratesNode } = locators.ratesData;
        // await page.waitForTimeout(3000);

        await page.click(ratesAddBtn);

        await page.click(ratesNode)

        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');

        await page.keyboard.type('Acme Life Sciences');

        await page.waitForTimeout(1000);

        await page.keyboard.press('Tab');
        await page.keyboard.type('Project Manager');

        await page.keyboard.press('Tab');
        await page.keyboard.type('Writer 1');

        await page.keyboard.press('Tab');
        await page.keyboard.type('Israel');

        await page.keyboard.press('Tab');
        await page.keyboard.type('Mumbai');

        await page.keyboard.press('Tab');
        await page.keyboard.type('12/10/2024');

        await page.keyboard.press('Tab');
        await page.keyboard.type('03/03/2025');

        await page.keyboard.press('Tab');
        await page.keyboard.type('56');

        await page.keyboard.press('Tab');
        await page.keyboard.type('11');

        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('BU 2');
        await page.keyboard.press('Enter');

        await page.waitForTimeout(2000);
    }

    listRatesWriteC = async () => {
        let page = this.page;
        let { ratesAddBtn } = locators.ratesNav;
        let { ratesNode } = locators.ratesData;
        // await page.waitForTimeout(3000);

        await page.click(ratesAddBtn);

        await page.click(ratesNode)

        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');

        await page.keyboard.type('Demo');

        await page.waitForTimeout(1000);

        await page.keyboard.press('Tab');
        await page.keyboard.type('Mech Engineer');

        await page.keyboard.press('Tab');
        await page.keyboard.type('IT Contractor');

        await page.keyboard.press('Tab');
        await page.keyboard.type('Israel');

        await page.keyboard.press('Tab');
        await page.keyboard.type('Switzerland');

        await page.keyboard.press('Tab');
        await page.keyboard.type('05/12/2025');

        await page.keyboard.press('Tab');
        await page.keyboard.type('02/07/2026');

        await page.keyboard.press('Tab');
        await page.keyboard.type('87');

        await page.keyboard.press('Tab');
        await page.keyboard.type('123');

        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('Acme Life Sciences');
        await page.keyboard.press('Enter');

        await page.waitForTimeout(2000);
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
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.periodsLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.RatesPage = RatesPage;
