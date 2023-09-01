const { action } = require('../../../utilities/action')

const locators = {
    laborTypeNav: {
        laborTypeAddBtn: `[id="AssignmentMainContainer"] [role="toolbar"] [data-qtip="Add Assignment"]`,
    },

    laborTypeData: {
        //Creating a data
        skillCheckBox: `//*[text()="Has Skill"]`,

        addResourceAssignment: `//*[text()="Add Resource Assignment"]`,
        laborProject: `[id="insert_resource_assignment_form"] [id="AddResourceAssignmentDialogProjectCombo-bodyEl"] [id="AddResourceAssignmentDialogProjectCombo-trigger-picker"]`,

        laborSkill: `[id="insert_resource_assignment_form"] [id="AddResourceAssignmentDialogSkillCombo"] [id="AddResourceAssignmentDialogSkillCombo-trigger-picker"]`,

        laborGridselectA: `[id="AddResourceAssignmentDialogResourceGrid-body"] [data-recordindex="0"]`,
        // laborGridselectB: `[id="AddResourceAssignmentDialogResourceGrid-body"] [data-recordindex="3"]`,

        addCloseButton: `//*[text()="Add & Close"]`,

        laborOrgA: `[id="r1LaborAssignmentPanel-body"] [role="grid"] [data-recordindex="0"] [class="x-grid-cell-inner "]`,
        laborOrgB: `[id="r1LaborAssignmentPanel-body"] [role="grid"] [data-recordindex="9"] [class="x-grid-cell-inner "]`,
        laborDropdownTrigger:`[data-recordindex="0"] [aria-selected="true"] [role="presentation"]`,

        //Labor selecting check boxes
        laborDemo: `//*[text()="Demo"]`,
        laborNode: `//*[text()="New Resource Node"]`,


        //Labor selecting check boxes
        laborCheckBoxA: `[id="r1LaborAssignmentPanel-body"] [role="grid"] [data-recordindex="0"] [tabindex="-1"]`,
        laborCheckBoxB: `[id="r1LaborAssignmentPanel-body"] [role="grid"] [data-recordindex="9"] [tabindex="-1"]`,
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

    laborTypeLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }

}



class resourcePage {
    constructor(page) {
        this.page = page;
    }


    //Labor: Create
    laborCreateDataA = async () => {
        let page = this.page;
        let { laborTypeAddBtn } = locators.laborTypeNav;
        let { addResourceAssignment, laborProject, laborSkill, skillCheckBox, laborGridselectA, addCloseButton } = locators.laborTypeData;
        // await page.waitForTimeout(3000);

        await page.click(laborTypeAddBtn);

        await page.click(addResourceAssignment);
        await page.click(laborProject);
        await page.keyboard.type("ATest");

        // await page.waitForTimeout(1000)

        await page.click(laborSkill);
        await page.keyboard.type("DBA 2");

        // await page.waitForTimeout(1000)

        await page.click(skillCheckBox);
        await page.click(laborGridselectA);

        // await page.waitForTimeout(1000)

        await page.click(addCloseButton);
        
        // await page.waitForTimeout(1000);
    }

    laborCreateDataB = async () => {
        let page = this.page;
        let { laborTypeAddBtn } = locators.laborTypeNav;
        let { addResourceAssignment, laborProject, laborSkill, skillCheckBox, laborGridselectB, addCloseButton } = locators.laborTypeData;
        // await page.waitForTimeout(3000);

        await page.click(laborTypeAddBtn);

        await page.click(addResourceAssignment);
        await page.click(laborProject);
        await page.keyboard.type("xxx");

        // await page.waitForTimeout(1000)

        await page.click(laborSkill);
        await page.keyboard.type("QA Analyst");

        // await page.waitForTimeout(1000)

        await page.click(skillCheckBox);
        await page.click(laborGridselectB);

        // await page.waitForTimeout(1000)

        await page.click(addCloseButton);
        
        // await page.waitForTimeout(1000);
    }

    


    //Labor: Update
    laborUpdateDataA = async () => {
        let page = this.page;
        let { laborOrgA, laborDemo } = locators.laborTypeData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(laborOrgA);

        textInput.click({ clickCount: 3 })
        await page.click(laborDemo);
        
        // await page.waitForTimeout(3000);
    }

    laborUpdateDataB = async () => {
        let page = this.page;
        let { laborOrgB,  laborNode } = locators.laborTypeData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(laborOrgB);

        textInput.click({ clickCount: 2 })
        await page.click(laborNode);
        
        // await page.waitForTimeout(3000);
    }



    //Labor: Delete
    laborDeleteDataA = async () => {
        let page = this.page;
        let { laborCheckBoxA } = locators.laborTypeData;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);
    
        await page.click(laborCheckBoxA);
    
        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
            
        // await page.waitForTimeout(3000);
    }
    
    laborDeleteDataB = async () => {
        let page = this.page;
        let { laborCheckBoxB,  laborResNode } = locators.laborTypeData;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);
    
        await page.click(laborCheckBoxB);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
            
        // await page.waitForTimeout(3000);
    }




    //Labor: Save
    laborSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        // await page.waitForTimeout(3000);

        await page.click(saveBtn);
        await page.click(saveOK);
        // await page.waitForTimeout(3000);
    }

    //Labor: Delete
    listBTDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    laborReload = async () => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.laborTypeLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.resourcePage = resourcePage;
