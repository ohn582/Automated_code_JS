const { action } = require('../../../utilities/action')

const locators = {
    financialTypeNav: {
        financialTypeAddBtn: `[id="AssignmentMainContainer"] [role="toolbar"] [data-qtip="Add Assignment"]`,
    },

    financialTypeData: {
        //Creating a data 1
        financialProject: `[id="insert_costItem_assignment_form-bodyWrap"] [id="AddCostItemAssignmentDialogProjectCombo"] [id="AddCostItemAssignmentDialogProjectCombo-inputWrap"]`,

        financialP10: `//*[text()="P10"]`,
        financialJerryTest: `//*[text()="Jerry Test Project Alpha"]`,

        financialCostCenter: `[id="insert_costItem_assignment_form"] [id="insert_costItem_assignment_form-bodyWrap"] [id="AddCostItemAssignmentDialogCostCenterNode"] [id="AddCostItemAssignmentDialogCostCenterNode-trigger-picker"]`,
        financialEnterprise: `[role="treegrid"] [role="rowgroup"] [data-recordindex="1"]`,
        financialNewResourceNode: `[role="treegrid"] [role="rowgroup"] [data-recordindex="2"]`,

        financialCheckboxA: `[id="AddCostItemAssignmentDialogCostItemGrid-bodyWrap"] [data-recordindex="1"]`,
        financialCheckboxB: `[id="AddCostItemAssignmentDialogCostItemGrid-bodyWrap"] [data-recordindex="3"]`,

        addCloseButton: `//*[text()="Add & Close"]`,

    
        //Financial: Org
        financialRepDemo: `[id="r1FinancialAssignmentPanel-bodyWrap"] [data-recordindex="0"] [class="x-grid-cell-inner x-grid-checkcolumn-cell-inner"]`,

        financialRepNode: `[id="r1FinancialAssignmentPanel-bodyWrap"] [data-recordindex="3"] [class="x-grid-cell-inner x-grid-checkcolumn-cell-inner"]`,


        //Financial: selecting created checkbox
        checkBoxDataA: `[id="r1FinancialAssignmentPanel-bodyWrap"] [data-recordindex="0"] [tabindex="-1"]`,
        checkBoxDataB: `[id="r1FinancialAssignmentPanel-bodyWrap"] [data-recordindex="2"] [tabindex="-1"]`,
    },

    deleteNav: {
        deleteBtn: `[id="AssignmentMainContainer"] [role="toolbar"] [data-qtip="Remove Assignment"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="AssignmentMainContainer"] [role="toolbar"] [aria-label="Save"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsBaselineTypeGridReload-btnWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },

    financialTypeLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }

}



class financialPage {
    constructor(page) {
        this.page = page;
    }


    //Labor: Create
    financialCreateDataA = async () => {
        let page = this.page;
        let { financialTypeAddBtn } = locators.financialTypeNav;
        let { financialProject, financialCostCenter, financialP10, financialEnterprise, financialCheckboxA, addCloseButton } = locators.financialTypeData;
        // await page.waitForTimeout(3000);

        await page.click(financialTypeAddBtn);

        await page.click(financialProject);
        await page.keyboard.type("P10");
        await page.keyboard.press('Enter');

        // await page.waitForTimeout(1000)

        await page.click(financialCostCenter);
        await page.click(financialEnterprise);


        await page.waitForTimeout(1000)

        await page.click(financialCheckboxA);

        await page.waitForTimeout(1000)

        await page.click(addCloseButton);
        
        await page.waitForTimeout(2000);
    }

    financialCreateDataB = async () => {
        let page = this.page;
        let { financialTypeAddBtn } = locators.financialTypeNav;
        let { financialProject, financialCostCenter, financialJerryTest, financialNewResourceNode, financialCheckboxB, addCloseButton } = locators.financialTypeData;
        // await page.waitForTimeout(3000);

        await page.click(financialTypeAddBtn);

        await page.click(financialProject);
        await page.keyboard.type("Jerry Test Project Alpha");
        await page.keyboard.press('Enter');

        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowDown');
        // await page.waitForTimeout(1000)

        // await page.dblclick( financialCostCenter);
        await page.click(financialNewResourceNode);

        await page.waitForTimeout(1000)

        await page.click(financialCheckboxB);

        await page.waitForTimeout(1000)

        await page.click(addCloseButton);
        
        await page.waitForTimeout(1000);
    }

    financialCreateDataB = async () => {
        let page = this.page;
        let { financialTypeAddBtn } = locators.financialTypeNav;
        let { financialProject, financialCostCenter, financialJerryTest, financialNewResourceNode, financialCheckboxB, addCloseButton } = locators.financialTypeData;
        // await page.waitForTimeout(3000);

        await page.click(financialTypeAddBtn);

        await page.click(financialProject);
        await page.keyboard.type("Jerry Test Project Alpha");
        await page.keyboard.press('Enter');

        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowDown');
        // await page.waitForTimeout(1000)

        // await page.dblclick( financialCostCenter);
        await page.click(financialNewResourceNode);

        await page.waitForTimeout(1000)

        await page.click(financialCheckboxB);

        await page.waitForTimeout(1000)

        await page.click(addCloseButton);
        
        await page.waitForTimeout(1000);
    }

    


    //Labor: Update
    financialUpdateA = async () => {
        let page = this.page;
        let { financialRepDemo } = locators.financialTypeData;
        // await page.waitForTimeout(3000);

        await page.click(financialRepDemo)

        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');

        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');

        // await page.waitForTimeout(3000);
    }

    financialUpdateB = async () => {
        let page = this.page;
        let { financialRepNode } = locators.financialTypeData;
        // await page.waitForTimeout(3000);

        await page.click(financialRepNode)

        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');

        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');

        // await page.waitForTimeout(3000);
    }



    //Labor: Delete
    financialDeleteA = async () => {
        let page = this.page;
        let { checkBoxDataA } = locators.financialTypeData;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);
    
        await page.click(checkBoxDataA);
    
        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
            
        // await page.waitForTimeout(3000);
    }
    
    financialDeleteB = async () => {
        let page = this.page;
        let { checkBoxDataB } = locators.financialTypeData;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);
    
        await page.click(checkBoxDataB);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
            
        // await page.waitForTimeout(3000);
    }




    //Financial: Save
    financialSaveData = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
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

    financialReload = async () => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.financialTypeLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.financialPage = financialPage;
