const { action } = require('../../../utilities/action')

const locators = {
    laborTypeNav: {
        // laborTypeAddBtn: `[id="r1LaborAssignmentPanel-bodyWrap"] [role="toolbar"] [data-qtip="Add Assignment"]`,
        laborTypeAddBtn: `[id="r1LaborAssignmentPanel-bodyWrap"] [role="toolbar"] [role="presentation"]`,
    },

    laborTypeData: {
        //Creating a data
        skillCheckBox: `//*[text()="Has Skill"]`,

        addResourceAssignment: `//*[text()="Add Resource Assignment"]`,

        laborEnterprise: `[class="x-panel x-grid-header-hidden x-layer x-panel-default x-tree-panel x-tree-lines x-grid x-border-box"] [data-recordindex="2"]`,
        laborDemo: `[class="x-panel x-grid-header-hidden x-layer x-panel-default x-tree-panel x-tree-lines x-grid x-border-box"] [data-recordindex="1"]`,
        laborAcmeLifeSciences: `[class="x-panel x-grid-header-hidden x-layer x-panel-default x-tree-panel x-tree-lines x-grid x-border-box"] [data-recordindex="0"]`,

        laborProject: `[id="insert_resource_assignment_form"] [id="AddResourceAssignmentDialogProjectCombo-bodyEl"] [id="AddResourceAssignmentDialogProjectCombo-trigger-picker"]`,
        laborOrg: `[id="insert_resource_assignment_form"] [id="AddResourceAssignmentDialogResourceNode-bodyEl"] [id="AddResourceAssignmentDialogResourceNode-trigger-picker"]`,
        laborSkill: `[id="insert_resource_assignment_form"] [id="AddResourceAssignmentDialogSkillCombo-inputEl"] [id="AddResourceAssignmentDialogSkillCombo-trigger-picker"]`,
        laborActive: `[id="insert_resource_assignment_form"] [id="PdwInsertResourceAssignmentrActive-inputEl"] [id="PdwInsertResourceAssignmentrActive-trigger-picker"]`,

        laborGridselectA: `[id="AddResourceAssignmentDialogResourceGrid-body"] [data-recordindex="0"]`,
        laborGridselectB: `[id="AddResourceAssignmentDialogResourceGrid-body"] [data-recordindex="3"]`,
        laborGridselectC: `[id="AddResourceAssignmentDialogResourceGrid-body"] [data-recordindex="2"]`,

        addCloseButton: `//*[text()="Add & Close"]`,

        laborGridBoxA: `//*[text()="3456"]`,
        laborGridBoxB: `//*[text()="3456"]`,
        laborGridBoxC: `//*[text()="3456"]`,

        laborIDGridBoxA: `//*[text()="13"]`,
        laborIDGridBoxB: `//*[text()="14"]`,
        laborIDGridBoxC: `//*[text()="15"]`,


        // For updating labor data
        laborOrgA: `//*[text()="Cary"]`,
        laborOrgB: `//*[text()="Biosciences"]`,
        laborOrgC: `//*[text()="Biosciences"]`,

        //Labor selecting Assignment: Update
        laborUpdateA: `//*[text()="Acme Life Sciences"]`,
        laborUpdateB: `//*[text()="Demo"]`,
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
        logOutYes: `//*[text()="Yes"]`,
        logoutHereLink: `//*[text()=" here"]`,
    },

}





class resourcePage {
    constructor(page) {
        this.page = page;
    }

    laborCreateDataA = async () => {
        let page = this.page;
        let { laborTypeAddBtn } = locators.laborTypeNav;
        let { addResourceAssignment, laborOrg, laborProject, skillCheckBox, laborGridselectB, addCloseButton, laborDemo, laborGridBoxB} = locators.laborTypeData;
        // await page.waitForTimeout(3000);

        await page.click(laborTypeAddBtn);
        await page.keyboard.press('Tab');
        await page.keyboard.press('Enter');
        
        await page.click(addResourceAssignment);

        await page.click(laborProject);
        await page.keyboard.type("Source");

        await page.click(laborOrg);
        await page.click(laborDemo);
        await page.keyboard.press('Tab');

        // await page.waitForTimeout(1000)

        await page.keyboard.type("DBA");
        await page.keyboard.press('Enter');

        // await page.waitForTimeout(1000)

        await page.click(skillCheckBox);
        await page.click(laborGridselectB);

        await page.waitForTimeout(1000)

        await page.click(addCloseButton);
        
        // await page.waitForTimeout(2000);

        await page.click(laborGridBoxB);
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');

        await page.keyboard.press('Enter');
        await page.keyboard.type("3.4");
        // await page.waitForTimeout(2000)
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type("5");
        // await page.waitForTimeout(2000)
        await page.keyboard.press('Tab');
        await page.keyboard.type("1");
        // await page.waitForTimeout(2000)
        await page.keyboard.press('Tab');
        await page.keyboard.type("2");
        // await page.waitForTimeout(2000)
        await page.keyboard.press('Tab');
        await page.keyboard.type("2");

        await page.waitForTimeout(1000);
    }

    laborCreateDataB = async () => {
        let page = this.page;
        let { laborTypeAddBtn } = locators.laborTypeNav;
        let { laborOrg, laborProject, laborSkill, skillCheckBox, laborGridselectC, addCloseButton, laborEnterprise, laborGridBoxB } = locators.laborTypeData;
        // await page.waitForTimeout(3000);

        await page.click(laborTypeAddBtn);
        await page.keyboard.press('Tab');
        await page.keyboard.press('Enter');
        await page.keyboard.press('Enter');
        
        await page.click(laborProject);
        await page.keyboard.type("Source");

        await page.click(laborOrg);
        await page.click(laborEnterprise);

        // await page.waitForTimeout(1000)

        await page.keyboard.press('Tab');
        await page.keyboard.type("QA Analyst");
        await page.keyboard.press('Enter');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');

        // await page.waitForTimeout(1000)

        await page.click(skillCheckBox);
        await page.click(laborGridselectC);

        await page.waitForTimeout(1000)

        await page.click(addCloseButton);
        
        // await page.waitForTimeout(2000);

        await page.click(laborGridBoxB);
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');

        await page.keyboard.press('Enter');
        await page.keyboard.type("1");
        // await page.waitForTimeout(2000)
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type("3");
        // await page.waitForTimeout(2000)
        await page.keyboard.press('Tab');
        await page.keyboard.type("2");
        // await page.waitForTimeout(2000)
        await page.keyboard.press('Tab');
        await page.keyboard.type("1");
        // await page.waitForTimeout(2000)
        await page.keyboard.press('Tab');
        await page.keyboard.type("2");

        await page.waitForTimeout(1000);
    }


    laborCreateDataC = async () => {
        let page = this.page;
        let { laborTypeAddBtn } = locators.laborTypeNav;
        let { laborOrg, laborProject, laborSkill, skillCheckBox, laborGridselectC, addCloseButton, laborDemo, laborGridBoxC } = locators.laborTypeData;
        // await page.waitForTimeout(3000);

        await page.click(laborTypeAddBtn);
        await page.keyboard.press('Tab');
        await page.keyboard.press('Enter');
        await page.keyboard.press('Enter');
        
        await page.click(laborProject);
        await page.keyboard.type("X0");

        await page.click(laborOrg);
        await page.click(laborDemo);

        // await page.waitForTimeout(1000)

        await page.keyboard.press('Tab');
        await page.keyboard.type("DBA");
        await page.keyboard.press('Enter');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');

        // await page.waitForTimeout(1000)

        await page.click(skillCheckBox);
        await page.click(laborGridselectC);

        await page.waitForTimeout(1000)

        await page.click(addCloseButton);
        
        // await page.waitForTimeout(2000);

        await page.click(laborGridBoxC);
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');

        await page.keyboard.press('Enter');
        await page.keyboard.type("5");
        // await page.waitForTimeout(2000)
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type("5");
        // await page.waitForTimeout(2000)
        await page.keyboard.press('Tab');
        await page.keyboard.type("7");
        // await page.waitForTimeout(2000)
        await page.keyboard.press('Tab');
        await page.keyboard.type("13");
        // await page.waitForTimeout(2000)
        await page.keyboard.press('Tab');
        await page.keyboard.type("1");

        await page.waitForTimeout(1000);
    }
    



    //Labor: Update
    laborUpdateDataA = async () => {
        let page = this.page;
        let { laborOrgA, laborIDGridBoxA } = locators.laborTypeData;
        // await page.waitForTimeout(3000);

        await page.click(laborIDGridBoxA);    
        
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowRight');
        await page.waitForTimeout(1000);
        await page.click(laborOrgA); 

        await page.keyboard.down('Control');
        await page.keyboard.press('KeyA');

        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');
        await page.keyboard.type("6");

        // await page.waitForTimeout(2000)

        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');
        await page.keyboard.type("6");

        // await page.waitForTimeout(2000)

        await page.keyboard.press('Tab');

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');
        await page.keyboard.type("89");

        // await page.waitForTimeout(2000)
        
        await page.keyboard.press('Tab');

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');
        await page.keyboard.type("6");

        // await page.waitForTimeout(2000)

        await page.keyboard.press('Tab');

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');
        await page.keyboard.type("11");

        // await page.waitForTimeout(1000);
    }

    laborUpdateDataB = async () => {
        let page = this.page;
        let { laborOrgB, laborIDGridBoxB } = locators.laborTypeData;
        // await page.waitForTimeout(3000);

        await page.click(laborIDGridBoxB);    
        
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowUp');
        await page.keyboard.press('ArrowUp');
        await page.keyboard.press('ArrowUp');
        await page.keyboard.press('ArrowRight');
        await page.waitForTimeout(1000);
        await page.click(laborOrgB); 
        
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');
        await page.keyboard.type("8");

        // await page.waitForTimeout(2000)

        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');
        await page.keyboard.type("2");

        // await page.waitForTimeout(2000)

        await page.keyboard.press('Tab');

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');
        await page.keyboard.type("33");

        // await page.waitForTimeout(2000)

        await page.keyboard.press('Tab');

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');
        await page.keyboard.type("45");

        // await page.waitForTimeout(2000)

        await page.keyboard.press('Tab');

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');
        await page.keyboard.type("1");

        // await page.waitForTimeout(1000);
    }

    laborUpdateDataC = async () => {
        let page = this.page;
        let { laborOrgC, laborIDGridBoxC } = locators.laborTypeData;
        // await page.waitForTimeout(3000);

        await page.click(laborIDGridBoxC);    
        
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowUp');
        await page.keyboard.press('ArrowUp');
        await page.keyboard.press('ArrowUp');
        await page.keyboard.press('ArrowRight');
        await page.waitForTimeout(1000);
        await page.click(laborOrgC);
        
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');
        await page.keyboard.type("8");

        // await page.waitForTimeout(2000)

        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');
        await page.keyboard.type("8");

        // await page.waitForTimeout(2000)

        await page.keyboard.press('Tab');

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');
        await page.keyboard.type("2");

        // await page.waitForTimeout(2000)

        await page.keyboard.press('Tab');

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');
        await page.keyboard.type("11");

        // await page.waitForTimeout(2000)

        await page.keyboard.press('Tab');

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');
        await page.keyboard.type("12");
        // await page.waitForTimeout(3000);
    }




    //Labor: Save
    laborSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        // await page.waitForTimeout(3000);

        await page.click(saveBtn);
        await page.waitForTimeout(2000);
        await page.click(saveOK);
        // await page.waitForTimeout(3000);
    }

    //Labor: Delete
    laborDeleteDataA = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);
    
        await page.click(deleteBtn);
        await page.waitForTimeout(2000);
        await page.click(yesDeleteBtn);
            
        // await page.waitForTimeout(3000);
    }


    laborReload = async () => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, logOutYes, logoutHereLink } = locators.laborTypeLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.waitForTimeout(2000);
        await page.click(logoutUserBtn);
        await page.waitForTimeout(2000);
        await page.click(logOutYes);

        await page.waitForTimeout(2000);
        await page.click(logoutHereLink);
    }

    laborReloadB = async () => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, logoutHereLink } = locators.laborTypeLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);;

        await page.click(logoutHereLink);
    }
}

module.exports.resourcePage = resourcePage;
