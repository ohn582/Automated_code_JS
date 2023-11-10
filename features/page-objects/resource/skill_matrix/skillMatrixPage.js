const { action } = require('../../../utilities/action')

const locators = {        
    resourceDataPage: {
        // Creating Skill Matrix
        resGridCellA: `[id="r1SkillAssignmentGrid-body"] [class="x-grid-scrollbar-clipper "] [data-recordindex="6"] [role="gridcell"]`,
        resGridCellB: `[id="r1SkillAssignmentGrid-body"] [class="x-grid-scrollbar-clipper "] [data-recordindex="1"] [role="gridcell"]`,
        resGridCellC: `[id="r1SkillAssignmentGrid-body"] [class="x-grid-scrollbar-clipper "] [data-recordindex="0"] [role="gridcell"]`,
    },

    resourceSaveData: {
        saveBtn: `[id="ResourceMainContainer"] [id="ResourceListToolBar"] [aria-label="Save"]`,
        // saveOK: `[role="alertdialog"] [class="x-toolbar x-docked x-toolbar-footer x-box-layout-ct"] [tabindex="0"]`,
        saveOK: `//*[text()="OK"]`,
    },
}

class skillMatrixPage {
    constructor(page) {
        this.page = page;
    }


    //Rescource data
    resourceCreateDataA = async() => {
        let page=this.page;
        let { resGridCellA }=locators.resourceDataPage;

        await page.click(resGridCellA);
        //Selecting a dropdown for Cost Category
        await page.keyboard.press('Tab');
        await page.keyboard.type("H");
        await page.keyboard.press('Tab');
        await page.keyboard.type("L");
        await page.keyboard.press('Tab');
        await page.keyboard.type("M");
        await page.keyboard.press('Tab');
        await page.keyboard.type("M");
        await page.keyboard.press('Tab');
        await page.keyboard.type("L");
        await page.keyboard.press('Tab');
        await page.keyboard.type("H");
        await page.keyboard.press('Enter');
    }

    resourceCreateDataB = async() => {
        let page=this.page;
        let { resGridCellB }=locators.resourceDataPage;

        await page.click(resGridCellB);
        //Selecting a dropdown for Cost Category
        await page.keyboard.press('Tab');
        await page.keyboard.type("H");
        await page.keyboard.press('Tab');
        await page.keyboard.type("H");
        await page.keyboard.press('Tab');
        await page.keyboard.type("L");
        await page.keyboard.press('Tab');
        await page.keyboard.type("H");
        await page.keyboard.press('Tab');
        await page.keyboard.type("M");
        await page.keyboard.press('Tab');
        await page.keyboard.type("M");
        await page.keyboard.press('Enter');
    }

    resourceCreateDataC = async() => {
        let page=this.page;
        let { resGridCellC }=locators.resourceDataPage;

        await page.click(resGridCellC);
        //Selecting a dropdown for Cost Category
        await page.keyboard.press('Tab');
        await page.keyboard.type("M");
        await page.keyboard.press('Tab');
        await page.keyboard.type("M");
        await page.keyboard.press('Tab');
        await page.keyboard.type("H");
        await page.keyboard.press('Tab');
        await page.keyboard.type("H");
        await page.keyboard.press('Tab');
        await page.keyboard.type("L");
        await page.keyboard.press('Tab');
        await page.keyboard.type("L");
        await page.keyboard.press('Enter');
    }








    //Save Data
    resourceSaveData = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.resourceSaveData;
        // await page.waitForTimeout(3000);

        await page.click(saveBtn);
        await page.keyboard.press('Tab');
        await page.keyboard.press('Enter');
        // await page.waitForTimeout(3000);
    }

    //Financial: Delete
    listBTDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
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

module.exports.skillMatrixPage = skillMatrixPage;
