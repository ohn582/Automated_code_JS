const { action } = require('../../../utilities/action')

const locators = {        
    resourceDataPage: {
        // Creating Skill Matrix
        // resTes1: `[class="x-grid-item-container"] [data-recordindex="2"] [data-qtip="Tes1"]`,
        // resTes2: `[class="x-grid-item-container"] [data-recordindex="1"] [data-qtip="Tes2"]`,
        // resTes3: `[class="x-grid-item-container"] [data-recordindex="0"] [data-qtip="Tes3"]`,

        resTes1: `[id="r1SkillAssignmentGrid-body"] [class="x-grid-scroll-container "] [class="x-grid-scrollbar-clipper "] [data-recordindex="2"] [tabindex="-1"]`,
        resTes2: `[id="r1SkillAssignmentGrid-body"] [class="x-grid-scroll-container "] [class="x-grid-scrollbar-clipper "] [data-recordindex="1"] [tabindex="-1"]`,
        resTes3: `[id="r1SkillAssignmentGrid-body"] [class="x-grid-scroll-container "] [class="x-grid-scrollbar-clipper "] [data-recordindex="0"] [tabindex="-1"]`,

        resOrgA: `//*[text()="Enterprise"]`,
        resOrgB: `//*[text()="Demo"]`,
        resOrgC: `//*[text()="Acme Life Sciences"]`,
    },

    resourceSaveData: {
        saveBtn: `[id="r1SkillAssignmentGrid-bodyWrap"] [role="toolbar"] [id="skillAssignmentGridSave"]`,
        // saveOK: `[role="alertdialog"] [class="x-toolbar x-docked x-toolbar-footer x-box-layout-ct"] [tabindex="0"]`,
        saveOK: `[role="alertdialog"] [class="x-toolbar x-docked x-toolbar-footer x-box-layout-ct"] [role="button"]`,
    },
}

class skillMatrixPage {
    constructor(page) {
        this.page = page;
    }

    //Rescource data
    resourceCreateDataA = async() => {
        let page=this.page;
        let { resOrgEnterprise, resTes1 }=locators.resourceDataPage;

        await page.click(resTes1);

        //Selecting a dropdown for Cost Category
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
        await page.keyboard.press('Tab');
        await page.keyboard.type("L");
        await page.keyboard.press('Tab');
        await page.keyboard.type("L");
        await page.keyboard.press('Enter');

        // await page.click(resTes1);
        // await page.keyboard.press('Tab');
        // await page.keyboard.press('ArrowDown');
        // await page.keyboard.press('Enter');
    }

    resourceCreateDataB = async() => {
        let page=this.page;
        let { resOrgDemo, resTes2 }=locators.resourceDataPage;

        await page.click(resTes2);

        //Selecting a dropdown for Cost Category
        // await page.keyboard.press('Tab');
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
        await page.keyboard.press('Tab');
        await page.keyboard.type("L");
        await page.keyboard.press('Tab');
        await page.keyboard.type("L")
        await page.keyboard.press('Enter');

        // await page.click(resTes2);
        // await page.keyboard.press('Tab');
        // await page.keyboard.press('Tab');
        // await page.keyboard.press('Tab');
        // await page.keyboard.press('ArrowDown');
        // await page.keyboard.press('Enter');
    }

    resourceCreateDataC = async() => {
        let page=this.page;
        let { resOrgAcmeLifeSciences, resTes3 }=locators.resourceDataPage;

        await page.click(resTes3);

        //Selecting a dropdown for Cost Category
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
        await page.keyboard.press('Tab');
        await page.keyboard.type("L");
        await page.keyboard.press('Tab');
        await page.keyboard.type("L");
        await page.keyboard.press('Enter');

        // await page.click(resTes3);
        // await page.keyboard.press('Tab');
        // await page.keyboard.press('ArrowDown');
        // await page.keyboard.press('ArrowDown');
        // await page.keyboard.press('Enter');
    }








    //Save Data
    skillMatrixSaveData = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.resourceSaveData;
        // await page.waitForTimeout(3000);

        await page.click(saveBtn);
        await page.click(saveOK);
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
