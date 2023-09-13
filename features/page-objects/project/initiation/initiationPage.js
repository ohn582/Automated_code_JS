const { action } = require('../../../utilities/action')

const locators = {        
    initiationNav: {
        addInitiationData:`[id="R1TPInitiation"] [role="toolbar"] [data-qtip="Add"]`,
    },

    initiationData: {
        //Project Data Add
        initiationName: `[id="projectAddPanel"] [id="projectAddPanel-body"] [id="r1ProjectAddName-bodyEl"]`,
        initiationOwnerDropdown: `[id="projectAddPanel"] [id="r1ProjectAddNodes-triggerWrap"] [id="r1ProjectAddNodes-trigger-_trigger1"]`,
        initiationApply: `//*[text()="Apply"]`,
        intAddProjectCloseBtn: `[id="projectAddPanel"] [role="toolbar"] [aria-label="Add & Close"]`,


        //Project Data Update
        initiationDataSelectA: `[id="ProjectInitiationList-targetEl"] [data-recordindex="0"]`,
        // initiationDataSelectB: `[id="ProjectInitiationList-targetEl"] [data-recordindex="0"]`,

        initiationLaborNav: `[id="ProjectInitiationMainContainer"] [role="toolbar"] [data-qtip="Labor"]`,
        initiationLaborAddBtn: `[id="ProjectInitiationMainContainer"] [aria-label="Add Assignment"]`,
        initiationLaborAddSkills: `//*[text()="Add Skill Assignment"]`,

        initiationOBS: `[id="insert_skill_assignment_form"] [id="AddSkillAssignmentDialogResourceNode-triggerWrap"]`,
        initiationOBSEnterprise: `//*[text()="Enterprise"]`,
        initiationOBSResourceNode: `//*[text()="New Resource Node"]`,

        initiationActive: `[id="insert_skill_assignment_form"] [id="PdwInsertSkillAssignmentrActive-triggerWrap"]`,
        initiationActiveTrue: `//*[text="true"]`,


        initiationEnterprise: `[id="ProjectNodeFieldTreePanel"] [id="ProjectNodeFieldPanelTree-body"] [data-recordindex="0"]`,
        initiationApply: `//*[text()="Apply"]`,
        intAddBtn: `[id="ProjectNodeFieldTreePanel"] [role="toolbar"] [aria-label="Apply"]`,
        intAddCloseBtn: `[id="projectAddPanel"] [role="toolbar"] [data-componentid="ProjectAddPanelAddCloseButton"]`,

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
        let { initiationName, initiationOwnerDropdown, initiationEnterprise, initiationApply, intAddBtn, intAddProjectCloseBtn }=locators.initiationData;
        let { addInitiationData }=locators.initiationNav;

        await page.click(addInitiationData);
        // await page.waitForTimeout(1000);

        await page.click(initiationName);
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(1000);
        
        await page.click(initiationOwnerDropdown);
        await page.click(initiationEnterprise);
        // await page.click(initiationApply);
        // await page.waitForTimeout(1000);
        await page.click(intAddBtn);

        await page.click(intAddProjectCloseBtn);
        // await page.waitForTimeout(2000);
    }

    initiationAddDataB = async() => {
        let page=this.page;
        let { initiationName, initiationOwnerDropdown, initiationEnterprise, initiationApply, intAddBtn, intAddProjectCloseBtn }=locators.initiationData;
        let { addInitiationData }=locators.initiationNav;

        await page.click(addInitiationData);
        // await page.waitForTimeout(1000);

        await page.click(initiationName);
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(1000);
        
        await page.click(initiationOwnerDropdown);
        await page.click(initiationEnterprise);
        await page.click(initiationApply);
        // await page.waitForTimeout(1000);
        await page.click(intAddBtn);

        await page.click(intAddProjectCloseBtn);
        // await page.waitForTimeout(2000);
    }




    //Project Data Update
    initiationUpdateA = async() => {
        let page=this.page;
        let { initiationDataSelectA, initiationLaborNav, initiationLaborAddBtn, initiationLaborAddSkills, initiationOBS, initiationOBSEnterprise, initiationActive, initiationActiveTrue }=locators.initiationData;
        await page.click(initiationDataSelectA)
        await page.click(initiationLaborNav)
        await page.click(initiationLaborAddBtn)
        await page.click(initiationLaborAddSkills)

        await page.click(initiationOBS)
        await page.click(initiationOBSEnterprise)

        await page.click(initiationActive)
        await page.keyboard.type('true');
        await page.click(initiationActiveTrue)
        // await page.dblclick(initiationProjectStateDropdownB)
        // await page.waitForTimeout(1000);
    }

    initiationUpdateB = async() => {
        let page=this.page;
        let { initiationDataSelectB, initiationLaborNav, initiationLaborAddBtn, initiationLaborAddSkills, initiationOBS, initiationOBSEnterprise, initiationActive, initiationActiveTrue }=locators.initiationData;
        await page.click(initiationDataSelectB)
        await page.click(initiationLaborNav)
        await page.click(initiationLaborAddBtn)
        await page.click(initiationLaborAddSkills)

        await page.click(initiationOBS)
        await page.click(initiationOBSEnterprise)

        await page.click(initiationActive)
        await page.click(initiationActiveTrue)
        // await page.dblclick(initiationProjectStateDropdownB)
        // await page.waitForTimeout(1000);
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

    // initiationDeleteC = async() => {
    //     let page=this.page;
    //     let { initiationDataSelectC, deleteBtn, yesDeleteBtn }=locators.initiationData;
    //     // await locators.hover(initiationDataSelect);
    //     await page.locator(initiationDataSelectC).first().hover()
    //     await page.click(deleteBtn);
    //     await page.click(yesDeleteBtn);
    //     // await page.dblclick(initiationProjectStateDropdownB)
    //     await page.waitForTimeout(1000);
    // }


    
    initiationDataRefresh = async() => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.initiationLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }

}

module.exports.initiationPage = initiationPage;
