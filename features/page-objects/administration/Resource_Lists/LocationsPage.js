const { action } = require('../../../utilities/action')

const locators = {
    locationsNav: {
        locationsAddBtn: `[id="R1TLocations"] [role="toolbar"] [data-qtip="Add"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    locationsData: {
        //Creating a data
        // locationsName: `//*[text()="New Location"]`,
        locationsName: `[id="adminListsLocationGrid-body"] [data-recordindex="0"] [role="presentation"]`,
        // domainsName: `//*[text()="New Domain"]`,

        locationsNameA: `//*[text()="New tes1"]`,
        locationsNameB: `//*[text()="New tes2"]`,
        locationsNameC: `//*[text()="New tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsLocationGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsLocationGrid"] [role="toolbar"] [data-componentid="adminListsLocationGridSave"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
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
        let { locationsAddBtn } = locators.locationsNav;
        let { locationsName } = locators.locationsData;
        // await page.waitForTimeout(3000);

        await page.click(locationsAddBtn)

        await page.dblclick(locationsName)
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(3000);
    }

    listLocationsWriteB = async () => {
        let page = this.page;
        let { locationsAddBtn } = locators.locationsNav;
        let { locationsName } = locators.locationsData;
        // await page.waitForTimeout(3000);

        await page.click(locationsAddBtn)

        await page.dblclick(locationsName)
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(3000);
    }

    listLocationsWriteC = async () => {
        let page = this.page;
        let { locationsAddBtn } = locators.locationsNav;
        let { locationsName } = locators.locationsData;
        // await page.waitForTimeout(3000);

        await page.click(locationsAddBtn)

        await page.dblclick(locationsName)
        await page.keyboard.type('tes3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    locationsReTypeData = async () => {
        let page = this.page;
        let { locationsNameA } = locators.locationsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(locationsNameA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        // await page.waitForTimeout(3000);
    }

    locationsReTypeDataB = async () => {
        let page = this.page;
        let { locationsNameB } = locators.locationsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(locationsNameB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        // await page.waitForTimeout(3000);
    }

    locationsReTypeDataC = async () => {
        let page = this.page;
        let { locationsNameC } = locators.locationsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(locationsNameC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
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
