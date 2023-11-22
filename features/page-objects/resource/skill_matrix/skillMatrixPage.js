const { action } = require('../../../utilities/action')

const locators = {        
    resourceDataPage: {
        // Creating Skill Matrix
        resOrgDemo: `[class="x-grid-scrollbar-clipper x-grid-scrollbar-clipper-locked "] [class="x-grid-item-container"] [style="text-align:left;"] [data-recordindex="1"]`,
        resOrgEnterprise: `[class="x-grid-scrollbar-clipper x-grid-scrollbar-clipper-locked "] [class="x-grid-item-container"] [style="text-align:left;"] [data-recordindex="2"]`,
        resOrgAcmeLifeSciences: `[class="x-grid-scrollbar-clipper x-grid-scrollbar-clipper-locked "] [class="x-grid-item-container"] [style="text-align:left;"] [data-recordindex="0"]`,

        tes1: `//*[text()="Tes1"]`,
        tes2: `//*[text()="Tes2"]`,
        tes3: `//*[text()="Tes3"]`,

        // tes1: `[id="r1SkillAssignmentGrid-body"] [class="x-grid-scroll-container "] [data-recordindex="2"] [class=" x-grid-row"] [tabindex="-1"]`,
        // tes2: `[id="r1SkillAssignmentGrid-body"] [class="x-grid-scroll-container "] [data-recordindex="1"] [class=" x-grid-row"] [tabindex="-1"]`,
        // tes3: `[id="r1SkillAssignmentGrid-body"] [class="x-grid-scroll-container "] [data-recordindex="0"] [class=" x-grid-row"] [tabindex="-1"]`,

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
        let { resOrgEnterprise, tes1 }=locators.resourceDataPage;

        await page.click(tes1);
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');

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

        await page.click(tes1);
        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');
    }

    resourceCreateDataB = async() => {
        let page=this.page;
        let { resOrgDemo, tes2 }=locators.resourceDataPage;

        await page.click(tes2);
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');

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

        // await page.click(resOrg);
        // await page.keyboard.press('Tab');
        // await page.keyboard.press('Tab');
        // await page.keyboard.press('Tab');
        // await page.keyboard.press('ArrowDown');
        // await page.keyboard.press('Enter');
    }

    resourceCreateDataC = async() => {
        let page=this.page;
        let { resOrgAcmeLifeSciences, tes3 }=locators.resourceDataPage;

        await page.click(tes3);
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');

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
        await page.keyboard.press('Tab');
        await page.keyboard.type("L");
        await page.keyboard.press('Tab');
        await page.keyboard.type("L");
        await page.keyboard.press('Enter');

        await page.click(tes3);
        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');
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
