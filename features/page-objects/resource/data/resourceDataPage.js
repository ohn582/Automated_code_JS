const { action } = require('../../../utilities/action')

const locators = {        
    resourceDataPage: {
        // Creating Data
        resAddBtn: `[id="ResourceMainContainer"] [id="ResourceListToolBar"] [data-componentid="resourceListGridAdd"]`,
        addResOrgTrigger: `[id="resourceAddPanel"] [id="r1ResourceAddNodes"] [id="r1ResourceAddNodes-trigger-picker"]`,
        addResource: `[id="resourceAddPanel"] [id="r1ResourceAddName"] [id="r1ResourceAddName-bodyEl"]`,
        addResPrimarySkill: `[id="resourceAddPanel"] [data-ref="triggerWrap"] [class="x-form-trigger x-form-trigger-default x-form-arrow-trigger x-form-arrow-trigger-default "]`,

        addResCostCategory: `[id="resourceAddPanel"] [role="toolbar"] [data-componentid="ResourceAddPanelAddCloseButton"]`,

        resAddCloseBtnWindow: `//*[text()="Add"]`,

        resOrgDemo: `[role="treegrid"] [role="rowgroup"] [data-recordindex="1"]`,
        resOrgEnterprise: `[role="treegrid"] [role="rowgroup"] [data-recordindex="2"]`,
        resOrgAcmeLifeSciences: `[role="treegrid"] [role="rowgroup"] [data-recordindex="0"]`,
    },

    resourceSaveData: {
        saveBtn: `[id="ResourceMainContainer"] [id="ResourceListToolBar"] [aria-label="Save"]`,
        // saveOK: `[role="alertdialog"] [class="x-toolbar x-docked x-toolbar-footer x-box-layout-ct"] [tabindex="0"]`,
        saveOK: `//*[text()="OK"]`,
    },

    resourceReload: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }
}

class resourceDataPage {
    constructor(page) {
        this.page = page;
    }


    //Rescource data
    resourceCreateData = async() => {
        let page=this.page;
        let { resAddBtn, addResOrgTrigger, resOrgEnterprise, addResource, addResCostCategory }=locators.resourceDataPage;

        await page.click(resAddBtn);
        // await page.waitForTimeout(2000);
        await page.click(addResOrgTrigger);
        await page.click(resOrgEnterprise);
        await page.click(addResource);
        await page.keyboard.type("Tes1");
        // await page.waitForTimeout(2000);

        //Selecting a dropdown for Cost Category
        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');

        //Selecting a dropdown for Primary Skill
        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');

        //Selecting "Add & Close"
        await page.click(addResCostCategory);
    }

    resourceCreateDataB = async() => {
        let page=this.page;
        let { resAddBtn, addResOrgTrigger, resOrgDemo, addResource, addResCostCategory }=locators.resourceDataPage;

        await page.click(resAddBtn);
        // await page.waitForTimeout(2000);
        await page.click(addResOrgTrigger);
        await page.click(resOrgDemo);
        await page.click(addResource);
        await page.keyboard.type("Tes2");
        // await page.waitForTimeout(2000);

        //Selecting a dropdown for Cost Category
        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');

        //Selecting a dropdown for Primary Skill
        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');

        //Selecting "Add & Close"
        await page.click(addResCostCategory);
    }

    resourceCreateDataC = async() => {
        let page=this.page;
        let { resAddBtn, addResOrgTrigger, resOrgAcmeLifeSciences, addResource, addResCostCategory }=locators.resourceDataPage;

        await page.click(resAddBtn);
        // await page.waitForTimeout(2000);
        await page.click(addResOrgTrigger);
        await page.click(resOrgAcmeLifeSciences);
        await page.click(addResource);
        await page.keyboard.type("Tes3");
        // await page.waitForTimeout(2000);

        //Selecting a dropdown for Cost Category
        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');

        //Selecting a dropdown for Primary Skill
        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');

        //Selecting "Add & Close"
        await page.click(addResCostCategory);
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

module.exports.resourceDataPage = resourceDataPage;
