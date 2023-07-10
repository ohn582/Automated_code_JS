const { action } = require('../../../utilities/action')

const locators = {
    proficienciesNav: {
        proficienciesAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    proficienciesData: {
        //Creating a data
        proficienciesName: `[id="adminListsProficiencyGrid-body"] [data-recordindex="0"] [role="presentation"]`,
        // domainsName: `//*[text()="New Domain"]`,

        proficienciesNameA: `//*[text()="tes1"]`,
        proficienciesNameB: `//*[text()="tes2"]`,
        proficienciesNameC: `//*[text()="tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsProficiencyGrid-bodyWrap"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsProficiencyGrid-bodyWrap"] [role="toolbar"] [data-componentid="adminListsProficiencyGridSave"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[id="adminListsProficiencyGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class ProficienciesPage {
    constructor(page) {
        this.page = page;
    }

    //Sponsor: Create
    listProficienciesWriteA = async () => {
        let page = this.page;
        let { proficienciesAddBtn } = locators.proficienciesNav;
        let { proficienciesName } = locators.proficienciesData;
        // await page.waitForTimeout(3000);
        await page.click(proficienciesAddBtn);

        let textInput = await page.$(proficienciesName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(3000);
    }

    listProficienciesWriteB = async () => {
        let page = this.page;
        let { proficienciesAddBtn } = locators.proficienciesNav;
        let { proficienciesName } = locators.proficienciesData;
        // await page.waitForTimeout(3000);
        await page.click(proficienciesAddBtn);

        let textInput = await page.$(proficienciesName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(3000);
    }

    listProficienciesWriteC = async () => {
        let page = this.page;
        let { proficienciesAddBtn } = locators.proficienciesNav;
        let { proficienciesName } = locators.proficienciesData;
        // await page.waitForTimeout(3000);
        await page.click(proficienciesAddBtn);

        let textInput = await page.$(proficienciesName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    proficienciesReTypeData = async () => {
        let page = this.page;
        let { proficienciesNameA } = locators.proficienciesData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(proficienciesNameA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        // await page.waitForTimeout(3000);
    }

    proficienciesReTypeDataB = async () => {
        let page = this.page;
        let { proficienciesNameB } = locators.proficienciesData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(proficienciesNameB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        // await page.waitForTimeout(3000);
    }

    proficienciesReTypeDataC = async () => {
        let page = this.page;
        let { proficienciesNameC } = locators.proficienciesData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(proficienciesNameC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    listProficienciesDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listProficienciesSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        // await page.waitForTimeout(3000);
    }

    listProficienciesReload = async () => {
        let page = this.page;
        let { relBtn, reloadNavBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.ProficienciesPage = ProficienciesPage;
