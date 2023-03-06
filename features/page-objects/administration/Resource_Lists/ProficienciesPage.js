const { action } = require('../../../utilities/action')

const locators = {
    proficienciesNav: {
        proficienciesAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsCostCategoryGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    proficienciesData: {
        //Creating a data
        proficienciesName: `[id="adminListsProficiencyGrid-body"] [data-recordindex="0"] [data-columnid="gridcolumn-1029"]`,
        proficienciesPartition: `[id="adminListsProficiencyGrid-body"] [data-recordindex="0"] [data-columnid="gridcolumn-1032"]`,
        // domainsName: `//*[text()="New Domain"]`,


        proficienciesNameA: `[id="adminListsProficiencyGrid-body"] [data-recordindex="3"] [data-columnid="gridcolumn-1029"]`,
        proficienciesPartitionA: `[id="adminListsProficiencyGrid-body"] [data-recordindex="3"] [data-columnid="gridcolumn-1032"]`,

        proficienciesNameB: `[id="adminListsProficiencyGrid-body"] [data-recordindex="4"] [data-columnid="gridcolumn-1029"]`,
        proficienciesPartitionB: `[id="adminListsProficiencyGrid-body"] [data-recordindex="4"] [data-columnid="gridcolumn-1032"]`,

        proficienciesNameC: `[id="adminListsProficiencyGrid-body"] [data-recordindex="5"] [data-columnid="gridcolumn-1029"]`,
        proficienciesPartitionC: `[id="adminListsProficiencyGrid-body"] [data-recordindex="5"] [data-columnid="gridcolumn-1032"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsProficiencyGrid-bodyWrap"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsProficiencyGrid-bodyWrap"] [role="toolbar"] [data-componentid="adminListsProficiencyGridSave"]`,
        saveOK: `[data-componentid="messagebox-1001"] [id="messagebox-1001-toolbar"] [id="button-1005"]`,
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
        let { proficienciesName, proficienciesPartition } = locators.proficienciesData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(proficienciesName);
        let textInputB = await page.$(proficienciesPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    listProficienciesWriteB = async () => {
        let page = this.page;
        let { proficienciesName, proficienciesPartition } = locators.proficienciesData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(proficienciesName);
        let textInputB = await page.$(proficienciesPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    listProficienciesWriteC = async () => {
        let page = this.page;
        let { proficienciesName, proficienciesPartition } = locators.proficienciesData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(proficienciesName);
        let textInputB = await page.$(proficienciesPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    proficienciesReTypeData = async () => {
        let page = this.page;
        let { proficienciesNameA, proficienciesPartitionA } = locators.proficienciesData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(proficienciesNameA);
        let textInputB = await page.$(proficienciesPartitionA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    proficienciesReTypeDataB = async () => {
        let page = this.page;
        let { proficienciesNameB, proficienciesPartitionB } = locators.proficienciesData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(proficienciesNameB);
        let textInputB = await page.$(proficienciesPartitionB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }

    proficienciesReTypeDataC = async () => {
        let page = this.page;
        let { proficienciesNameC, proficienciesPartitionC } = locators.proficienciesData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(proficienciesNameC);
        let textInputB = await page.$(proficienciesPartitionC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Testing');
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
