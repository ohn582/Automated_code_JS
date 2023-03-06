const { action } = require('../../../utilities/action')

const locators = {
    locationsNav: {
        locationsAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsCostCategoryGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    locationsData: {
        //Creating a data
        locationsName: `[id="adminListsLocationGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1028"]`,
        locationsPartition: `[id="adminListsLocationGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1031"]`,
        // domainsName: `//*[text()="New Domain"]`,


        locationsNameA: `[id="adminListsLocationGrid"] [data-recordindex="15"] [data-columnid="gridcolumn-1028"]`,
        locationsPartitionA: `[id="adminListsLocationGrid"] [data-recordindex="15"] [data-columnid="gridcolumn-1031"]`,

        locationsNameB: `[id="adminListsLocationGrid"] [data-recordindex="16"] [data-columnid="gridcolumn-1028"]`,
        locationsPartitionB: `[id="adminListsLocationGrid"] [data-recordindex="16"] [data-columnid="gridcolumn-1031"]`,

        locationsNameC: `[id="adminListsLocationGrid"] [data-recordindex="17"] [data-columnid="gridcolumn-1028"]`,
        locationsPartitionC: `[id="adminListsLocationGrid"] [data-recordindex="17"] [data-columnid="gridcolumn-1031"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsLocationGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsLocationGrid"] [role="toolbar"] [data-componentid="adminListsLocationGridSave"]`,
        saveOK: `[data-componentid="messagebox-1001"] [id="messagebox-1001-toolbar"] [id="button-1005"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsLocationGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class LocationsPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listLocationsWriteA = async () => {
        let page = this.page;
        let { locationsName, locationsPartition } = locators.locationsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(locationsName);
        let textInputB = await page.$(locationsPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    listLocationsWriteB = async () => {
        let page = this.page;
        let { locationsName, locationsPartition } = locators.locationsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(locationsName);
        let textInputB = await page.$(locationsPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    listLocationsWriteC = async () => {
        let page = this.page;
        let { locationsName, locationsPartition } = locators.locationsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(locationsName);
        let textInputB = await page.$(locationsPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    locationsReTypeData = async () => {
        let page = this.page;
        let { locationsNameA, locationsPartitionA } = locators.locationsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(locationsNameA);
        let textInputB = await page.$(locationsPartitionA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    locationsReTypeDataB = async () => {
        let page = this.page;
        let { locationsNameB, locationsPartitionB } = locators.locationsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(locationsNameB);
        let textInputB = await page.$(locationsPartitionB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }

    locationsReTypeDataC = async () => {
        let page = this.page;
        let { locationsNameC, locationsPartitionC } = locators.locationsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(locationsNameC);
        let textInputB = await page.$(locationsPartitionC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    listLocationsDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listLocationsSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listLocationsReload = async () => {
        let page = this.page;
        let { relBtn, reloadNavBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.LocationsPage = LocationsPage;
