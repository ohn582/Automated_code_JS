const { action } = require('../../../utilities/action')

const locators = {        
    initiationNav: {
        addInitiationData:`[id="R1TPInitiation"] [role="toolbar"] [data-qtip="Add"]`,
    },

    initiationData: {
        //Project Data Add
        initiationName: `[id="projectAddPanel"] [id="projectAddPanel-body"] [id="r1ProjectAddName-bodyEl"]`,
        initiationOwnerDropdown: `[id="projectAddPanel"] [id="r1ProjectAddNodes-triggerWrap"] [id="r1ProjectAddNodes-trigger-_trigger1"]`,
        initiationEnterprise: `[id="ProjectNodeFieldTreePanel"] [id="ProjectNodeFieldPanelTree-body"] [data-recordindex="0"]`,
        initiationApply: `//*[text()="Apply"]`,
        intAddClose: `[id="projectAddPanel"] [role="toolbar"] [aria-label="Add & Close"]`,


        //Project Data Update
        initiationDataSelectA: `[id="ProjectInitiationList-targetEl"] [data-recordindex="2"]`,
        initiationDataSelectB: `[id="ProjectInitiationList-targetEl"] [data-recordindex="1"]`,
        initiationDataSelectC: `[id="ProjectInitiationList-targetEl"] [data-recordindex="0"]`,

        initiationProjectName: `[id="ProjectInitiationList-targetEl"] [id="ProjectInitiationMainContainer"] [role="group"] [name="projectName"]`,
        initiationProjectState: `[id="ProjectInitiationList-targetEl"] [id="ProjectInitiationMainContainer"] [role="group"] [name="projectStateName"]`,
        initiationRegion: `[id="ProjectInitiationList-targetEl"] [id="ProjectInitiationMainContainer"] [role="group"] [name="pField2"]`,
        initiationDateStart: `[id="ProjectInitiationList-targetEl"] [id="ProjectInitiationMainContainer"] [role="group"] [name="startDate"]`,

        initiationEnterprise: `[id="ProjectNodeFieldTreePanel"] [id="ProjectNodeFieldPanelTree-body"] [data-recordindex="0"]`,
        initiationApply: `//*[text()="Apply"]`,
        intAddClose: `[id="projectAddPanel"] [role="toolbar"] [aria-label="Add & Close"]`,

    },

    deleteNav: {
        deleteBtn: `[id="ProjectInitiationList"] [class="data-list-delete-button fa-regular fa-trash-alt"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    initiationLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }
}

class initiationPage {
    constructor(page) {
        this.page = page;
    }

    //Project Data Create
    initiationAddDataA = async() => {
        let page=this.page;
        let { initiationName, initiationOwnerDropdown, initiationEnterprise, initiationApply, intAddClose }=locators.initiationData;
        let { addInitiationData }=locators.initiationNav;

        await page.click(addInitiationData);
        await page.waitForTimeout(1000);

        await page.click(initiationName);
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(1000);
        
        await page.click(initiationOwnerDropdown);
        await page.click(initiationEnterprise);
        await page.click(initiationApply);
        await page.waitForTimeout(1000);

        await page.click(intAddClose);
        await page.waitForTimeout(2000);
    }

    initiationAddDataB = async() => {
        let page=this.page;
        let { initiationName, initiationOwnerDropdown, initiationEnterprise, initiationApply, intAddClose }=locators.initiationData;
        let { addInitiationData }=locators.initiationNav;

        await page.click(addInitiationData);
        await page.waitForTimeout(1000);

        await page.click(initiationName);
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(1000);
        
        await page.click(initiationOwnerDropdown);
        await page.click(initiationEnterprise);
        await page.click(initiationApply);
        await page.waitForTimeout(1000);

        await page.click(intAddClose);
        await page.waitForTimeout(2000);
    }

    initiationAddDataC = async() => {
        let page=this.page;
        let { initiationName, initiationOwnerDropdown, initiationEnterprise, initiationApply, intAddClose }=locators.initiationData;
        let { addInitiationData }=locators.initiationNav;

        await page.click(addInitiationData);
        await page.waitForTimeout(1000);

        await page.click(initiationName);
        await page.keyboard.type('tes3');
        // await page.waitForTimeout(1000);
        
        await page.click(initiationOwnerDropdown);
        await page.click(initiationEnterprise);
        await page.click(initiationApply);
        await page.waitForTimeout(1000);

        await page.click(intAddClose);
        // await page.waitForTimeout(2000);
    }




    //Project Data Update
    initiationUpdateA = async() => {
        let page=this.page;
        let { initiationDataSelectA, initiationProjectName, initiationProjectState, initiationRegion, initiationDateStart }=locators.initiationData;
        await page.dblclick(initiationDataSelectA)
        await page.dblclick(initiationProjectName)
        await page.keyboard.type('UPDATE A');
        await page.dblclick(initiationProjectState)
        await page.keyboard.type('On Hold');
        await page.dblclick(initiationRegion)
        await page.keyboard.type('EMEA');
        await page.dblclick(initiationDateStart)
        await page.keyboard.type('08/24/2023');
        // await page.dblclick(initiationProjectStateDropdownB)
        await page.waitForTimeout(1000);
    }

    initiationUpdateB = async() => {
        let page=this.page;
        let { initiationDataSelectB, initiationProjectName, initiationProjectState, initiationRegion, initiationDateStart }=locators.initiationData;
        await page.dblclick(initiationDataSelectB)
        await page.dblclick(initiationProjectName)
        await page.keyboard.type('UPDATE B');
        await page.dblclick(initiationProjectState)
        await page.keyboard.type('Proposed');
        await page.dblclick(initiationRegion)
        await page.keyboard.type('NAM');
        await page.dblclick(initiationDateStart)
        await page.keyboard.type('09/01/2023');
        await page.waitForTimeout(1000);
    }

    initiationUpdateC = async() => {
        let page=this.page;
        let { initiationDataSelectC, initiationProjectName, initiationProjectState, initiationRegion, initiationDateStart }=locators.initiationData;
        await page.dblclick(initiationDataSelectC)
        await page.dblclick(initiationProjectName)
        await page.keyboard.type('UPDATE C');
        await page.dblclick(initiationProjectState)
        await page.keyboard.type('On Hold');
        await page.dblclick(initiationRegion)
        await page.keyboard.type('EMEA');
        await page.dblclick(initiationDateStart)
        await page.keyboard.type('08/24/2023');
    }


    //Project Data Delete
    initiationDeleteA = async() => {
        let page=this.page;
        let { initiationDataSelectA, deleteBtn, yesDeleteBtn }=locators.initiationData;
        // await locators.hover(initiationDataSelect);
        await page.locator(initiationDataSelectA).first().hover()
        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.dblclick(initiationProjectStateDropdownB)
        await page.waitForTimeout(1000);
    }

    initiationDeleteB = async() => {
        let page=this.page;
        let { initiationDataSelectB, deleteBtn, yesDeleteBtn }=locators.initiationData;
        // await locators.hover(initiationDataSelect);
        await page.locator(initiationDataSelectB).first().hover()
        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.dblclick(initiationProjectStateDropdownB)
        await page.waitForTimeout(1000);
    }

    initiationDeleteC = async() => {
        let page=this.page;
        let { initiationDataSelectC, deleteBtn, yesDeleteBtn }=locators.initiationData;
        // await locators.hover(initiationDataSelect);
        await page.locator(initiationDataSelectC).first().hover()
        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.dblclick(initiationProjectStateDropdownB)
        await page.waitForTimeout(1000);
    }


    
    initiationDataRefresh = async() => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.initiationLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }

}

module.exports.initiationPage = initiationPage;
