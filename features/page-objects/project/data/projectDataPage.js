const { action } = require('../../../utilities/action')

const locators = {        
    projectNav: {
        addProjectData:`[id="R1TProject"] [id="ProjectListToolBar"] [data-qtip="Add"]`,
    },

    projectData: {
        //Project Data Add
        projectName: `[id="projectAddPanel"] [id="projectAddPanel-body"] [id="r1ProjectAddName-bodyEl"]`,
        projectOwner: `[id="projectAddPanel"] [id="projectAddPanel-body"] [data-ref="triggerWrap"] [id="r1ProjectAddNodes-trigger-_trigger1"]`,

        projectDropdownEnterprise: `[id="ProjectNodeFieldTreePanel"] [id="ProjectNodeFieldPanelTree-body"] [data-recordindex="0"]`,
        
        projDropdownApply: `[id="ProjectNodeFieldTreePanel-bodyWrap"] [role="toolbar"] [tabindex="0"]`,
        projAddClose: `[id="projectAddPanel"] [role="toolbar"] [aria-label="Add & Close"]`,


        reTypeProjA: `//*[text()="tes1"]`,
        reTypeProjB: `//*[text()="tes2"]`,
        reTypeProjC: `//*[text()="tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="ProjectMainContainer"] [id="ProjectListToolBar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="ProjectMainContainer"] [id="ProjectListToolBar"] [aria-label="Save"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    projectLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }
}

class projectDataPage {
    constructor(page) {
        this.page = page;
    }

    //Project Data Create
    projectAddDataA = async() => {
        let page=this.page;
        let { projectName, projectOwner, projectDropdownEnterprise, projDropdownApply, projAddClose }=locators.projectData;
        let { addProjectData }=locators.projectNav;

        await page.click(addProjectData);
        await page.waitForTimeout(1000);

        await page.click(projectName);
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(1000);
        
        await page.keyboard.press('Tab');
        await page.keyboard.type('Acme Life Sciences');
        await page.waitForTimeout(1000);

        await page.keyboard.press('Tab');
        await page.keyboard.type('24');
        await page.waitForTimeout(1000);

        await page.click(projAddClose);
        await page.waitForTimeout(1000);
    }

    projectAddDataB = async() => {
        let page=this.page;
        let { projectName, projectOwner, projectDropdownEnterprise, projDropdownApply, projAddClose }=locators.projectData;
        let { addProjectData }=locators.projectNav;

        await page.click(addProjectData);
        await page.waitForTimeout(1000);

        await page.click(projectName);
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(1000);
        
        await page.click(projectOwner);
        await page.click(projectDropdownEnterprise);
        await page.click(projDropdownApply);
        await page.waitForTimeout(1000);

        await page.click(projAddClose);
        await page.waitForTimeout(1000);
    }

    projectAddDataC = async() => {
        let page=this.page;
        let { projectName, projectOwner, projectDropdownEnterprise, projDropdownApply, projAddClose }=locators.projectData;
        let { addProjectData }=locators.projectNav;

        await page.click(addProjectData);
        await page.waitForTimeout(1000);

        await page.click(projectName);
        await page.keyboard.type('tes3');
        // await page.waitForTimeout(1000);
        
        await page.click(projectOwner);
        await page.click(projectDropdownEnterprise);
        await page.click(projDropdownApply);
        await page.waitForTimeout(1000);

        await page.click(projAddClose);
        await page.waitForTimeout(1000);
    }




    //Project Data Update
    projectUpdateA = async() => {
        let page=this.page;
        let { reTypeProjA }=locators.projectData;
        await page.dblclick(reTypeProjA)
        await page.keyboard.type('UPDATE A');
        await page.waitForTimeout(1000);
    }

    projectUpdateB = async() => {
        let page=this.page;
        let { reTypeProjB }=locators.projectData;
        await page.dblclick(reTypeProjB)
        await page.keyboard.type('UPDATE B');
        await page.waitForTimeout(1000);
    }

    projectUpdateC = async() => {
        let page=this.page;
        let { reTypeProjC }=locators.projectData;
        await page.dblclick(reTypeProjC)
        await page.keyboard.type('UPDATE C');
        await page.waitForTimeout(1000);
    }

    



    //Project Data Delete
    projectDelete = async() => {
        let page=this.page;
        let { deleteBtn, yesDeleteBtn }=locators.deleteNav;
        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        await page.waitForTimeout(3000);
    }

    projectSave = async() => {
        let page=this.page;
        let { saveBtn, saveOK }=locators.saveNav;

        await page.click(saveBtn);
        // await page.waitForTimeout(1000);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    projectDataRefresh = async() => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.projectLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }

}

module.exports.projectDataPage = projectDataPage;
