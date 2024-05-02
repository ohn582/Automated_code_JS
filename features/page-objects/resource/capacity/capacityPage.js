const { action } = require('../../../utilities/action')

const locators = {        
    resourceDataPage: {
        // Creating Skill Matrix
        resTes1: `//*[text()="Tes1"]`,
        resTes2: `//*[text()="Tes2"]`,
        resTes3: `//*[text()="Tes3"]`,
    },

    resourceSaveData: {
        saveBtn: `[id="ResourceMainContainer"] [role="toolbar"] [aria-label="Save"]`,
        // saveOK: `[role="alertdialog"] [class="x-toolbar x-docked x-toolbar-footer x-box-layout-ct"] [tabindex="0"]`,
        saveOK: `[role="alertdialog"] [class="x-toolbar x-docked x-toolbar-footer x-box-layout-ct"] [tabindex="0"]`,
    },

}

class capacityPage {
    constructor(page) {
        this.page = page;
    }

    //Rescource data
    capacityCreateDataA = async() => {
        let page=this.page;
        let { resTes1 }=locators.resourceDataPage;

        await page.click(resTes1);
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');

        await page.keyboard.type(".80");
        await page.keyboard.press('Tab');
        await page.keyboard.type("1.00");
        await page.keyboard.press('Tab');
        await page.keyboard.type(".32");
        await page.keyboard.press('Tab');
        await page.keyboard.type(".10");
        await page.keyboard.press('Tab');
        await page.keyboard.type(".22");
        await page.keyboard.press('Tab');
        await page.keyboard.type(".63");
        await page.keyboard.press('Enter');
    }

    capacityCreateDataB = async() => {
        let page=this.page;
        let { resTes2 }=locators.resourceDataPage;

        await page.click(resTes2);
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');

        await page.keyboard.type("1.00");
        await page.keyboard.press('Tab');
        await page.keyboard.type("1.00");
        await page.keyboard.press('Tab');
        await page.keyboard.type(".74");
        await page.keyboard.press('Tab');
        await page.keyboard.type(".94");
        await page.keyboard.press('Tab');
        await page.keyboard.type("1.00");
        await page.keyboard.press('Tab');
        await page.keyboard.type(".23");
        await page.keyboard.press('Enter');
    }

    capacityCreateDataC = async() => {
        let page=this.page;
        let { resTes3 }=locators.resourceDataPage;

        await page.click(resTes3);
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');

        await page.keyboard.type(".23");
        await page.keyboard.press('Tab');
        await page.keyboard.type("1.00");
        await page.keyboard.press('Tab');
        await page.keyboard.type(".74");
        await page.keyboard.press('Tab');
        await page.keyboard.type("1.00");
        await page.keyboard.press('Tab');
        await page.keyboard.type("1.00");
        await page.keyboard.press('Tab');
        await page.keyboard.type(".74");
        await page.keyboard.press('Enter');
    }








    //Save Data
    resourceSaveData = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.resourceSaveData;
        // await page.waitForTimeout(3000);

        await page.click(saveBtn);
        await page.click(saveOK);
        // await page.waitForTimeout(3000);
    }


    resourceReload = async () => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.resourceReload;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.capacityPage = capacityPage;
