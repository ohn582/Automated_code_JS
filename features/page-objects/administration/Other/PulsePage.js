const { action } = require('../../../utilities/action')

const locators = {
    pulseTypeNav: {
        pulseTypeAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [tabindex="0"]`,
    },

    pulseTypeData: {
        //Creating a data
        pulseTypeName: `[id="AdminSettingPulseSettingAddPulseWindow"] [id="NewPulseName-bodyEl"]`,
        pulseTypeDescription: `[id="AdminSettingPulseSettingAddPulseWindow"] [id="NewPulseDescription-bodyEl"]`,

        pulseWindowAddBtn: `[id="AdminSettingPulseSettingAddPulseWindow"] [role="toolbar"] [tabindex="0"]`,

        pulseTypeNameA: `//*[text()="tes1"]`,
        pulseTypeNameB: `//*[text()="tes2"]`,
        pulseTypeNameC: `//*[text()="tes3"]`,

        //Update Pulse Details
        pulseDetailsName: `[id="AdminPulseGridForm-bodyWrap"] [class="x-field x-form-item x-form-item-default x-form-type-text x-field-default x-anchor-form-item not-empty"] [role="textbox"]`,
        pulseDetailsNameB: `[id="AdminPulseGridForm-bodyWrap"] [class="x-field x-form-item x-form-item-default x-form-type-text x-field-default x-anchor-form-item not-empty x-form-dirty"] [role="textbox"]`,
        pulseDetailsNameC: `[id="AdminPulseGridForm-bodyWrap"] [class="x-field x-form-item x-form-item-default x-form-type-text x-field-default x-anchor-form-item not-empty x-form-dirty"] [role="textbox"]`,

        pulseDetailsDescriptionA: `[id="AdminPulseGridForm-bodyWrap"] [aria-label="Pulse Details field set"] [role="presentation"]`,
        pulseDetailsPreMessageA: `[id="AdminPulseGridForm-bodyWrap"] [aria-label="Pulse Details field set"]`,

    },

    deleteNav: {
        deleteBtn: `[id="AdminMainContainer"] [role="toolbar"] [aria-label="Delete"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="r1AdminMain"] [id="adminPulseContainer"] [role="toolbar"] [aria-label="Save"]`,
        saveOKBtn: `[role="alertdialog"] [class="x-toolbar x-docked x-toolbar-footer x-box-layout-ct"] [tabindex="0"]`,

        // saveOKBtn: `//*[text()="OK"]`
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsBaselineTypeGridReload-btnWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },

    pulseTypeLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }

}



class PulsePage {
    constructor(page) {
        this.page = page;
    }


    //Pulse Type: Create
    pulseWriteDataA = async () => {
        let page = this.page;
        let { pulseTypeAddBtn } = locators.pulseTypeNav;
        let { pulseTypeName, pulseTypeDescription, pulseWindowAddBtn } = locators.pulseTypeData;
        let { saveBtn } = locators.saveNav;
        let { saveOKBtn } = locators.saveNav;
        // await page.waitForTimeout(3000);
        
        await page.click(pulseTypeAddBtn);
        
        await page.click(pulseTypeName);
        await page.keyboard.type('tes1');
        
        await page.click(pulseTypeDescription);
        await page.keyboard.type('Creating Random Worlds!!!');
        
        await page.click(pulseWindowAddBtn);
        
        await page.click(saveBtn);
        
        await page.click(saveOKBtn);

        // await page.waitForTimeout(3000);
    }

    // pulseWriteDataB = async () => {
    //     let page = this.page;
    //     let { pulseTypeAddBtn } = locators.pulseTypeNav;
    //     let { pulseTypeName, pulseTypeDescription, pulseWindowAddBtn } = locators.pulseTypeData;
    //     // await page.waitForTimeout(3000);
        
    //     await page.click(pulseTypeAddBtn);
        
    //     await page.click(pulseTypeName);
    //     await page.keyboard.type('tes2');
        
    //     await page.click(pulseTypeDescription);
    //     await page.keyboard.type('Just Testing!!!');
        
    //     await page.click(pulseWindowAddBtn);
        
    //     let { saveBtn } = locators.saveNav;
    //     await page.click(saveBtn);
        
    //     let { saveOKBtn } = locators.saveNav;
    //     await page.click(saveOKBtn);

    //     // await page.click(saveOKBtn);
    //     // await page.waitForTimeout(3000);
    // }

    // pulseWriteDataC = async () => {
    //     let page = this.page;
    //     let { pulseTypeAddBtn } = locators.pulseTypeNav;
    //     let { pulseTypeName, pulseTypeDescription, pulseWindowAddBtn } = locators.pulseTypeData;
    //     let { saveBtn, saveOKBtn } = locators.saveNav;
    //     // await page.waitForTimeout(3000);

    //     await page.click(pulseTypeAddBtn);

    //     await page.click(pulseTypeName);
    //     await page.keyboard.type('tes3');

    //     await page.click(pulseTypeDescription);
    //     await page.keyboard.type('Ain\'t Nothin!!!');

    //     await page.click(pulseWindowAddBtn);

    //     await page.click(saveBtn);
    //     await page.click(saveOKBtn);
        
    //     // await page.waitForTimeout(3000);
    // }





    //Pulse: Update
    pulseReWriteDataA = async () => {
        let page = this.page;
        let { pulseTypeNameA, pulseDetailsName } = locators.pulseTypeData;
        let { pulseDetailsDescription } = locators.pulseTypeData;
        let { saveBtn } = locators.saveNav;
        let { saveOKBtn } = locators.saveNav;
        // await page.waitForTimeout(3000);
        
        // var elms = document.querySelectorAll("#duplicateID");
        await page.click(pulseTypeNameA)
        
        await page.dblclick(pulseDetailsName)
        await page.keyboard.type('Re-Type 1');

        // let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOKBtn);
        
        // await page.waitForTimeout(3000);
    }

    // pulseReWriteDataB = async () => {
    //     let page = this.page;
    //     let { pulseTypeNameB, pulseDetailsNameB } = locators.pulseTypeData;
    //     let { pulseDetailsDescriptionB } = locators.pulseTypeData;
    //     // await page.waitForTimeout(3000);
        
    //     // var elms = document.querySelectorAll("#duplicateID");
    //     await page.click(pulseTypeNameB)
        
    //     await page.dblclick(pulseDetailsNameB)
    //     await page.keyboard.type('Re-Type 2');

    //     // let { saveBtn, saveOK } = locators.saveNav;
    //     // await page.click(saveBtn);
    //     // await page.click(saveOK);
    //     // await page.waitForTimeout(3000);
    // }

    // pulseReWriteDataC = async () => {
    //     let page = this.page;
    //     let { pulseTypeNameC, pulseDetailsNameC } = locators.pulseTypeData;
    //     let { pulseDetailsDescriptionC } = locators.pulseTypeData;
    //     // await page.waitForTimeout(3000);
        
    //     // var elms = document.querySelectorAll("#duplicateID");
    //     await page.click(pulseTypeNameC)
        
    //     await page.dblclick(pulseDetailsNameC)
    //     await page.keyboard.type('Re-Type 3');

    //     // let { saveBtn, saveOK } = locators.saveNav;
    //     // await page.click(saveBtn);
    //     // await page.click(saveOK);
    //     // await page.waitForTimeout(3000);
    // }



    //Pulse: Delete
    pulseDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        let { saveBtn } = locators.saveNav;
        let { saveOKBtn } = locators.saveNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);

        await page.click(saveBtn);
        await page.click(saveOKBtn);
        // await page.waitForTimeout(3000);
    }

    //Pulse: Save
    pulseSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    pulseReload = async () => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.pulseTypeLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.PulsePage = PulsePage;
