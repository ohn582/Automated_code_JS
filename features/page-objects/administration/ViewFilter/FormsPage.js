const { action } = require('../../../utilities/action')

const locators = {
    formNav: {
        formAddBtn: `[id="AdminFormDesginer-bodyWrap"] [role="toolbar"] [data-qtip="Add"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    formData: {
        //Creating a data
        alertAddBtn: `//*[text()="Add"]`,

        formName: `[role="alertdialog"] [id="ProjectNewView"]`,

        formNameA: `//*[text()="tes1"]`,
        formNameB: `//*[text()="tes2"]`,
        formNameC: `//*[text()="tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="R1Main"] [id="AdminFormDesginer"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `[role="alertdialog"] [tabindex="0"]`,
    },

    saveNav: {
        saveBtnNav: `[id="R1Main"] [id="AdminFormDesginer"] [role="toolbar"] [data-qtip="Save"]`,
        saveBtnAlertQuit: `[id="SaveProgressDialog-bodyWrap"] [id="SaveProgressDialog_header"] [id="SaveProgressDialog_header-targetEl"] [data-qtip="Close dialog"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsCostItemGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class formsPage {
    constructor(page) {
        this.page = page;
    }

    
    //Forms: Create
    formDataA = async () => {
        let page = this.page;
        let { formAddBtn } = locators.formNav;
        let { formName, alertAddBtn } = locators.formData;
        // await page.waitForTimeout(3000);        
        
        await page.click(formAddBtn);
        
        let textInput = await page.$(formName);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');

        await page.click(alertAddBtn);
        // await page.waitForTimeout(3000);
    }

    formDataB = async () => {
        let page = this.page;
        let { formAddBtn } = locators.formNav;
        let { formName, alertAddBtn } = locators.formData;
        // await page.waitForTimeout(3000);        
        
        await page.click(formAddBtn);
        
        let textInput = await page.$(formName);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');

        await page.click(alertAddBtn);
        // await page.waitForTimeout(3000);
    }

    formDataC = async () => {
        let page = this.page;
        let { formAddBtn } = locators.formNav;
        let { formName, alertAddBtn } = locators.formData;
        // await page.waitForTimeout(3000);        
        
        await page.click(formAddBtn);
        
        let textInput = await page.$(formName);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');

        await page.click(alertAddBtn);
        // await page.waitForTimeout(3000);
    }




    //Forms: Update
    formReTypeData = async () => {
        let page = this.page;
        let { formNameA } = locators.formData;
        // await page.waitForTimeout(3000);

        await page.dblclick(formNameA);
        await page.keyboard.type(' Re-Type 1');
        // await page.waitForTimeout(3000);
    }

    formReTypeDataB = async () => {
        let page = this.page;
        let { formNameB } = locators.formData;
        // await page.waitForTimeout(3000);

        await page.dblclick(formNameB);
        await page.keyboard.type(' Re-Type 2');
        // await page.waitForTimeout(3000);
    }

    formReTypeDataC = async () => {
        let page = this.page;
        let { formNameC } = locators.formData;
        // await page.waitForTimeout(3000);

        await page.dblclick(formNameC);
        await page.keyboard.type(' Re-Type 3');
        // await page.waitForTimeout(3000);
    }

    formDeleteDataA = async() => {
        let page=this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        let { formNameA }=locators.formData;

        await page.click(formNameA);
        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);

        await page.waitForTimeout(3000);
    }


    formDeleteDataB = async() => {
        let page=this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        let { formNameB }=locators.formData;

        await page.click(formNameB);
        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);

        await page.waitForTimeout(3000);
    }

    formDeleteDataC = async() => {
        let page=this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        let { formNameC }=locators.formData;

        await page.click(formNameC);
        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        await page.waitForTimeout(3000);
    }


    formSave = async () => {
        let page = this.page;
        let { saveBtnNav, saveOK } = locators.saveNav;
        await page.click(saveBtnNav);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    formSaveUpdate = async () => {
        let page = this.page;
        let { saveBtnNav, saveBtnAlertQuit, saveOK } = locators.saveNav;
        await page.click(saveBtnNav);
        // await page.click(saveBtnAlertQuit);
        // await page.waitForTimeout(10000);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    formReload = async () => {
        let page = this.page;
        let { relBtn, reloadNavBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.formsPage = formsPage;
