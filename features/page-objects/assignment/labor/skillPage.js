const { action } = require('../../../utilities/action')

const locators = {
    skillTypeNav: {
        skillTypeAddBtn: `[id="AssignmentMainContainer"] [role="toolbar"] [data-qtip="Add Assignment"]`,
    },

    skillTypeData: {
        //Creating a data
        addSkillAssignment: `//*[text()="Add Skill Assignment"]`,
        skillProject: `[id="insert_skill_assignment_form"] [id="AddSkillAssignmentDialogProjectCombo"] [id="AddSkillAssignmentDialogProjectCombo-inputWrap"]`,
        skillTextBoxObs: `[id="insert_skill_assignment_form"] [id="AddSkillAssignmentDialogResourceNode"] [id="AddSkillAssignmentDialogResourceNode-inputWrap"]`,

        //Creating Skill Data A
        skillATest: `//*[text()="ATest"]`,
        skillOBS_A: `[role="treegrid"] [data-recordindex="2"]`,

        //Creating Skill Data B
        skillJerryTest: `//*[text()="Jerry Test Project Alpha"]`,
        skillOBS_B: `[role="treegrid"] [data-recordindex="1"]`,

        skillGridselectA: `[id="AddSkillAssignmentDialogSkillGrid"] [data-recordindex="1"] [tabindex="-1"]`,
        skillGridselectB: `[id="AddSkillAssignmentDialogSkillGrid"] [data-recordindex="2"] [tabindex="-1"]`,

        addCloseButton: `//*[text()="Add & Close"]`,



        //Skill selecting check boxes: Update
        skillOrgA: `[id="r1LaborAssignmentPanel-body"] [role="grid"] [data-recordindex="0"] [class="x-grid-cell-inner "]`,
        skillOrgB: `[id="r1LaborAssignmentPanel-body"] [role="grid"] [data-recordindex="7"] [class="x-grid-cell-inner "]`,

        skillDropdownTrigger:`[id="r1LaborAssignmentPanel-body"] [role="grid"] [data-recordindex="0"] [aria-selected="true"] [role="presentation"]`,

        skillDemo: `[role="treegrid"] [data-recordindex="0"]`,
        skillNode: `[role="treegrid"] [data-recordindex="2"]`,


        //Skill selecting check boxes
        skillCheckBoxA: `[id="r1LaborAssignmentPanel-body"] [role="grid"] [data-recordindex="0"] [tabindex="-1"]`,
        skillCheckBoxB: `[id="r1LaborAssignmentPanel-body"] [role="grid"] [data-recordindex="6"] [tabindex="-1"]`,
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

    skillTypeLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }

}



class skillPage {
    constructor(page) {
        this.page = page;
    }


    //Labor: Create
    skillCreateDataA = async () => {
        let page = this.page;
        let { skillTypeAddBtn } = locators.skillTypeNav;
        let { addSkillAssignment, skillProject, skillTextBoxObs, skillGridselectA, addCloseButton, skillOBS_A, skillATest } = locators.skillTypeData;
        // await page.waitForTimeout(3000);

        await page.click(skillTypeAddBtn);

        await page.click(addSkillAssignment);
        await page.click(skillProject);
        await page.keyboard.type("ATest");
        await page.click(skillATest);

        // await page.waitForTimeout(1000)

        await page.dblclick(skillTextBoxObs);
        await page.click(skillOBS_A);

        // await page.waitForTimeout(1000)

        await page.click(skillGridselectA);

        // await page.waitForTimeout(1000)

        await page.click(addCloseButton);
        
        // await page.waitForTimeout(1000);
    }

    skillCreateDataB = async () => {
        let page = this.page;
        let { skillTypeAddBtn } = locators.skillTypeNav;
        let { addSkillAssignment, skillProject, skillTextBoxObs, skillGridselectA, addCloseButton, skillOBS_B, skillJerryTest } = locators.skillTypeData;
        // await page.waitForTimeout(3000);

        await page.click(skillTypeAddBtn);

        await page.click(addSkillAssignment);
        await page.click(skillProject);
        await page.keyboard.type("Jerry Test Project Alpha");
        // await page.click(skillJerryTest);

        // await page.waitForTimeout(1000)

        await page.dblclick(skillTextBoxObs);
        await page.click(skillOBS_B);

        // await page.waitForTimeout(1000)

        await page.click(skillGridselectA);

        // await page.waitForTimeout(1000)

        await page.click(addCloseButton);
        
        // await page.waitForTimeout(1000);
    }

    


    //Labor: Update
    skillUpdateDataA = async () => {
        let page = this.page;
        let { skillOrgA, skillDemo, skillDropdownTrigger} = locators.skillTypeData;
        // await page.waitForTimeout(3000);

        await page.dblclick(skillOrgA);
        await page.click(skillDropdownTrigger);
        await page.click(skillDemo);
        
        // await page.waitForTimeout(3000);
    }

    skillUpdateDataB = async () => {
        let page = this.page;
        let { skillOrgB,  skillNode, skillDropdownTrigger } = locators.skillTypeData;
        // await page.waitForTimeout(3000);

        await page.dblclick(skillOrgB);
        await page.click(skillDropdownTrigger);
        await page.click(skillNode);
        
        // await page.waitForTimeout(3000);
    }



    //Labor: Delete
    skillDeleteDataA = async () => {
        let page = this.page;
        let { skillCheckBoxA } = locators.skillTypeData;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);
    
        await page.click(skillCheckBoxA);
    
        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
            
        // await page.waitForTimeout(3000);
    }
    
    skillDeleteDataB = async () => {
        let page = this.page;
        let { skillCheckBoxB,  skillResNode } = locators.skillTypeData;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);
    
        await page.click(skillCheckBoxB);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
            
        // await page.waitForTimeout(3000);
    }




    //Labor: Save
    skillSave = async () => {
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

    skillReload = async () => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.skillTypeLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.skillPage = skillPage;
