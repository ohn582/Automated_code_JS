const { action } = require('../../../utilities/action')

const locators = {        
    projectNav: {
        addProjectData:`[id="ProjectMainContainer"] [id="ProjectListToolBar"] [data-qtip="Add"]`,
    },

    projectData: {
        //Project Data Add
        projectName: `[id="projectAddPanel"] [id="projectAddPanel-body"] [id="r1ProjectAddName-bodyEl"]`,
        projectOwner: `[id="projectAddPanel"] [id="projectAddPanel-body"] [data-ref="triggerWrap"] [id="r1ProjectAddNodes-trigger-_trigger1"]`,

        projectDropdownEnterprise: `[id="ProjectNodeFieldTreePanel"] [id="ProjectNodeFieldPanelTree-body"] [data-recordindex="0"]`,
        
        projDropdownApply: `[id="ProjectNodeFieldTreePanel-bodyWrap"] [role="toolbar"] [tabindex="0"]`,
        projAddClose: `[id="projectAddPanel"] [role="toolbar"] [aria-label="Add & Close"]`,

        projAcmeLifeSciences: `//*[text()="Acme Life Sciences"]`,
        projEnterprise: `//*[text()="Enterprise"]`,
        projPeter: `//*[text()="Peter"]`,


        reTypeProjA: `//*[text()="tes1"]`,
        reTypeProjB: `//*[text()="tes2"]`,

        reUnitPriorityA: `//*[text()="33"]`,
        reUnitPriorityB: `//*[text()="187"]`,

        //Updating a data
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
        let { projectName, projectOwner, projAcmeLifeSciences, projDropdownApply, projAddClose, reTypeProjA }=locators.projectData;
        let { addProjectData }=locators.projectNav;

        await page.click(addProjectData);
        await page.waitForTimeout(1000);

        await page.click(projectName);
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(1000);
        
        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowDown');
        await page.click(projAcmeLifeSciences);
        await page.waitForTimeout(1000);

        await page.keyboard.press('Tab');
        await page.keyboard.type('24');
        await page.waitForTimeout(1000);

        await page.click(projAddClose);
        // await page.waitForTimeout(1000);
    }

    projectAddDateA = async() => {
        let page=this.page;
        let { projectName, projectOwner, projAcmeLifeSciences, projDropdownApply, projAddClose, reTypeProjA }=locators.projectData;
        let { addProjectData }=locators.projectNav;

        await page.click(reTypeProjA);
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');

        //Selecting status color Green
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');

        //Selecting "apiguy_pm" as a Manager
        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');

        //Start Date
        await page.keyboard.press('Tab');
        await page.keyboard.type('03/11/2024');
        await page.keyboard.press('Enter');

        //Finish Date
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');
        await page.keyboard.type('03/20/2024');
    }





    projectAddDataB = async() => {
        let page=this.page;
        let { projectName, projectOwner, projPeter, projDropdownApply, projAddClose, reTypeProjB }=locators.projectData;
        let { addProjectData }=locators.projectNav;

        await page.click(addProjectData);
        await page.waitForTimeout(1000);

        await page.click(projectName);
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(1000);
        
        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowDown');
        await page.click(projPeter);
        await page.waitForTimeout(1000);

        await page.keyboard.press('Tab');
        await page.keyboard.type('10');
        await page.waitForTimeout(1000);

        await page.click(projAddClose);
        // await page.waitForTimeout(1000);
    }


    projectAddDateB = async() => {
        let page=this.page;
        let { projectName, projectOwner, projPeter, projDropdownApply, projAddClose, reTypeProjB }=locators.projectData;
        let { addProjectData }=locators.projectNav;

        await page.click(reTypeProjB);
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');

        //Selecting status color red
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');

        //Selecting "Jerry Manas" as a Manager
        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');

        //Start Date
        await page.keyboard.press('Tab');
        await page.keyboard.type('05/21/2024');

        //Finish Date
        await page.keyboard.press('Tab');
        await page.keyboard.type('07/09/2024');
    }







    //Project Data Update
    projectUpdateA = async() => {
        let page=this.page;
        let { reTypeProjA }=locators.projectData;
        await page.dblclick(reTypeProjA)
        await page.keyboard.type('UPDATE A');
        await page.keyboard.press('Tab');
        await page.keyboard.type('xde');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');

        await page.keyboard.type('33');
        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');
        await page.keyboard.press('Enter');

    
        //Start Date
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');

        await page.keyboard.type('04/22/2024');
        await page.keyboard.press('Enter');

        //Finish Date
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');

        await page.keyboard.type('07/17/2024');
        await page.keyboard.press('Enter');
        // await page.waitForTimeout(1000);
    }




    projectUpdateB = async() => {
        let page=this.page;
        let { reTypeProjB }=locators.projectData;
        await page.dblclick(reTypeProjB)
        await page.keyboard.type('UPDATE B');
        await page.keyboard.press('Tab');
        await page.keyboard.type('1x2');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('187');
        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');
        await page.keyboard.press('Enter');


        //Start Date
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');

        await page.keyboard.type('07/07/2024');
        await page.keyboard.press('Enter');

        //Finish Date
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');

        await page.keyboard.type('08/15/2024');
        await page.keyboard.press('Enter');
        // await page.waitForTimeout(1000);
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
