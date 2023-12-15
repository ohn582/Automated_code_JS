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
        
        financialLifeSciences: `[role="treegrid"] [role="rowgroup"] [data-recordindex="0"]`,
        financialDemo: `[role="treegrid"] [role="rowgroup"] [data-recordindex="1"]`,
        financialEnterprise: `[role="treegrid"] [role="rowgroup"] [data-recordindex="2"]`,

        financialCheckboxExpense: `[id="AddCostItemAssignmentDialogCostItemGrid-bodyWrap"] [data-recordindex="0"]`,
        financialCheckboxLabor: `[id="AddCostItemAssignmentDialogCostItemGrid-bodyWrap"] [data-recordindex="1"]`,
        financialCheckboxHBLab1: `[id="AddCostItemAssignmentDialogCostItemGrid-bodyWrap"] [data-recordindex="2"]`,
        financialCheckboxMaterial: `[id="AddCostItemAssignmentDialogCostItemGrid-bodyWrap"] [data-recordindex="3"]`,

        addCloseButton: `//*[text()="Add & Close"]`,

        finData1: `//*[text()="8"]`,
        finData2: `//*[text()="3456"]`,
        finData3: `//*[text()="1334"]`,

    
        //Financial: Org
        financialRepDemo: `[id="r1FinancialAssignmentPanel-bodyWrap"] [data-recordindex="0"] [class="x-grid-cell-inner x-grid-checkcolumn-cell-inner"]`,

        financialRepNode: `[id="r1FinancialAssignmentPanel-bodyWrap"] [data-recordindex="3"] [class="x-grid-cell-inner x-grid-checkcolumn-cell-inner"]`,


        //Financial: selecting created checkbox
        checkBoxDataP10: `[id="r1FinancialAssignmentPanel-bodyWrap"] [data-recordindex="1"] [tabindex="-1"]`,
        checkBoxDataSource: `[id="r1FinancialAssignmentPanel-bodyWrap"] [data-recordindex="4"] [tabindex="-1"]`,
        checkBoxDataAsdasd: `[id="r1FinancialAssignmentPanel-bodyWrap"] [data-recordindex="4"] [tabindex="-1"]`,
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
        let { financialProject, financialCostCenter, financialP10, financialDemo, financialCheckboxLabor, addCloseButton, finData1 } = locators.financialTypeData;
        // await page.waitForTimeout(3000);

        await page.click(financialTypeAddBtn);

        await page.click(financialProject);
        await page.keyboard.type("P10");
        await page.keyboard.press('Enter');

        // await page.waitForTimeout(1000)

        await page.click(financialCostCenter);
        await page.click(financialDemo);


        await page.waitForTimeout(1000)

        await page.click(financialCheckboxLabor);

        await page.waitForTimeout(1000)

        await page.click(addCloseButton);
        
        await page.waitForTimeout(2000);
    }

    financialNumberDataA = async () => {
        let page = this.page;
        let { finData1 } = locators.financialTypeData;
        // await page.waitForTimeout(3000);

        //Creating multiple numbers
        await page.click(finData1);
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');

        await page.keyboard.type("10");
        await page.keyboard.press('Tab');
        await page.keyboard.type("3");
        await page.keyboard.press('Tab');
        await page.keyboard.type("1");
        await page.keyboard.press('Tab');
        await page.keyboard.type("6");
        await page.keyboard.press('Tab');
        await page.keyboard.type("22");
        await page.keyboard.press('Tab');
        await page.keyboard.type("10");
        await page.keyboard.press('Tab');
        await page.keyboard.type("5");
        await page.keyboard.press('Tab');
        await page.keyboard.type("2");
    }



    financialCreateDataB = async () => {
        let page = this.page;
        let { financialTypeAddBtn } = locators.financialTypeNav;
        let { financialProject, financialCostCenter, financialJerryTest, financialLifeSciences, financialCheckboxMaterial, addCloseButton, finData2 } = locators.financialTypeData;
        // await page.waitForTimeout(3000);

        await page.click(financialTypeAddBtn);

        await page.click(financialProject);
        await page.keyboard.type("Source");
        await page.keyboard.press('Enter');

        // await page.dblclick( financialCostCenter);
        await page.click(financialCostCenter);
        await page.click(financialLifeSciences);

        await page.waitForTimeout(1000)

        await page.click(financialCheckboxMaterial);

        await page.waitForTimeout(1000)

        await page.click(addCloseButton);
        
        await page.waitForTimeout(2000);
    }

    financialNumberDataB = async () => {
        let page = this.page;
        let { finData2 } = locators.financialTypeData;
        // await page.waitForTimeout(3000);

        //Creating multiple numbers
        await page.click(finData2);
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');

        await page.keyboard.type("7");
        await page.keyboard.press('Tab');
        await page.keyboard.type("7");
        await page.keyboard.press('Tab');
        await page.keyboard.type("3");
        await page.keyboard.press('Tab');
        await page.keyboard.type("67");
        await page.keyboard.press('Tab');
        await page.keyboard.type("11");
        await page.keyboard.press('Tab');
        await page.keyboard.type("3");
        await page.keyboard.press('Tab');
        await page.keyboard.type("2");
        await page.keyboard.press('Tab');
        await page.keyboard.type("2");
    }



    financialCreateDataC = async () => {
        let page = this.page;
        let { financialTypeAddBtn } = locators.financialTypeNav;
        let { financialProject, financialCostCenter, financialJerryTest, financialLifeSciences, financialCheckboxExpense, addCloseButton, finData3 } = locators.financialTypeData;
        // await page.waitForTimeout(3000);

        await page.click(financialTypeAddBtn);

        await page.click(financialProject);
        await page.keyboard.type("asdasd");
        await page.keyboard.press('Enter');


        // await page.dblclick( financialCostCenter);
        await page.click(financialCostCenter);
        await page.click(financialLifeSciences);

        await page.waitForTimeout(1000)

        await page.click(financialCheckboxExpense);

        await page.waitForTimeout(1000)

        await page.click(addCloseButton);
        
        await page.waitForTimeout(2000);
    }

    financialNumberDataC = async () => {
        let page = this.page;
        let { finData3 } = locators.financialTypeData;
        // await page.waitForTimeout(3000);

        //Creating multiple numbers
        await page.click(finData3);
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');

        await page.keyboard.type("31");
        await page.keyboard.press('Tab');
        await page.keyboard.type("6");
        await page.keyboard.press('Tab');
        await page.keyboard.type("4");
        await page.keyboard.press('Tab');
        await page.keyboard.type("6");
        await page.keyboard.press('Tab');
        await page.keyboard.type("21");
        await page.keyboard.press('Tab');
        await page.keyboard.type("164");
        await page.keyboard.press('Tab');
        await page.keyboard.type("9");
        await page.keyboard.press('Tab');
        await page.keyboard.type("78");
    }

    


    //Labor: Update
    financialUpdateA = async () => {
        let page = this.page;
        let { finData1 } = locators.financialTypeData;
        // await page.waitForTimeout(3000);

        //Creating multiple numbers
        await page.click(finData1);
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');

        await page.keyboard.press('Tab')
        await page.keyboard.press('Backspace');
        await page.keyboard.type("5");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("43");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("14");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("7");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("1");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("1");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("32");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("21");

        // await page.waitForTimeout(3000);
    }

    financialUpdateB = async () => {
        let page = this.page;
        let { finData2 } = locators.financialTypeData;
        // await page.waitForTimeout(3000);

        //Creating multiple numbers
        await page.click(finData2);
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');

        await page.keyboard.press('Tab')
        await page.keyboard.press('Backspace');
        await page.keyboard.type("1");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("86");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("34");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("7");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("7");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("11");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("99");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("2");

        // await page.waitForTimeout(3000);
    }

    financialUpdateC = async () => {
        let page = this.page;
        let { finData3 } = locators.financialTypeData;
        // await page.waitForTimeout(3000);

        //Creating multiple numbers
        await page.click(finData3);
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');

        await page.keyboard.press('Tab')
        await page.keyboard.press('Backspace');
        await page.keyboard.type("2");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("8");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("4");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("4");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("11");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("34");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("22");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Backspace');
        await page.keyboard.type("8");

        // await page.waitForTimeout(3000);
    }




    //Labor: Delete
    financialDeleteA = async () => {
        let page = this.page;
        let { checkBoxDataP10 } = locators.financialTypeData;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);
    
        await page.click(checkBoxDataP10);
    
        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
            
        // await page.waitForTimeout(3000);
    }
    
    financialDeleteB = async () => {
        let page = this.page;
        let { checkBoxDataSource } = locators.financialTypeData;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);
    
        await page.click(checkBoxDataSource);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
            
        // await page.waitForTimeout(3000);
    }

    financialDeleteC = async () => {
        let page = this.page;
        let { checkBoxDataAsdasd } = locators.financialTypeData;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);
    
        await page.click(checkBoxDataAsdasd);

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
