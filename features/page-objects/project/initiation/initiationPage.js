const { action } = require('../../../utilities/action')

const locators = {        
    initiationNav: {
        addInitiationData:`[id="R1TPInitiation"] [role="toolbar"] [data-qtip="Add"]`,
    },

    initiationData: {
        //Project Data Add
        initiationName: `[id="projectAddPanel"] [id="projectAddPanel-body"] [id="r1ProjectAddName-bodyEl"]`,
        initiationOwnerDropdown: `[id="projectAddPanel"] [id="r1ProjectAddNodes-bodyEl"] [id="r1ProjectAddNodes-trigger-picker"]`,
        // initiationApply: `//*[text()="Apply"]`,
        intAddProjectCloseBtn: `[id="projectAddPanel"] [role="toolbar"] [aria-label="Add & Close"]`,

        initiationAcmeLifeSciences: `[role="treegrid"] [data-recordindex="0"]`,
        initiationEnterprise: `[role="treegrid"] [data-recordindex="1"]`,
        initiationPeter: `[role="treegrid"] [data-recordindex="2"]`,

        //Updating 
        // tes1: `[id="ProjectInitiationList"] [class="x-panel x-border-item x-box-item x-panel-default"] [data-recordindex="2"]`,
        // tes2: `[id="ProjectInitiationList"] [class="x-panel x-border-item x-box-item x-panel-default"] [data-recordindex="1"]`,
        // tes3: `[id="ProjectInitiationList"] [class="x-panel x-border-item x-box-item x-panel-default"] [data-recordindex="0"]`,

        tes1: `//*[text()="1"]`,
        tes2: `//*[text()="2"]`,
        tes3: `//*[text()="3"]`,
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
        let { initiationName, initiationOwnerDropdown, initiationEnterprise, intAddProjectCloseBtn }=locators.initiationData;
        let { addInitiationData }=locators.initiationNav;

        await page.click(addInitiationData);
        // await page.waitForTimeout(1000);

        await page.click(initiationName);
        await page.keyboard.type('1');
        // await page.waitForTimeout(1000);
        
        await page.click(initiationOwnerDropdown);
        await page.click(initiationEnterprise);
        // await page.waitForTimeout(1000);
        await page.keyboard.press('Tab');
        await page.keyboard.type('24');

        await page.click(intAddProjectCloseBtn);
        // await page.waitForTimeout(2000);
    }

    initiationAddDataB = async() => {
        let page=this.page;
        let { initiationName, initiationOwnerDropdown, initiationAcmeLifeSciences, intAddProjectCloseBtn }=locators.initiationData;
        let { addInitiationData }=locators.initiationNav;

        await page.click(addInitiationData);
        // await page.waitForTimeout(1000);

        await page.click(initiationName);
        await page.keyboard.type('2');
        // await page.waitForTimeout(1000);
        
        await page.click(initiationOwnerDropdown);
        await page.click(initiationAcmeLifeSciences);
        // await page.waitForTimeout(1000);
        await page.keyboard.press('Tab');
        await page.keyboard.type('45');

        await page.click(intAddProjectCloseBtn);
        // await page.waitForTimeout(2000);
    }

    initiationAddDataC = async() => {
        let page=this.page;
        let { initiationName, initiationOwnerDropdown, initiationPeter, intAddProjectCloseBtn }=locators.initiationData;
        let { addInitiationData }=locators.initiationNav;

        await page.click(addInitiationData);
        // await page.waitForTimeout(1000);

        await page.click(initiationName);
        await page.keyboard.type('3');
        // await page.waitForTimeout(1000);
        
        await page.click(initiationOwnerDropdown);
        await page.click(initiationPeter);
        // await page.waitForTimeout(1000);
        await page.keyboard.press('Tab');
        await page.keyboard.type('300');

        await page.click(intAddProjectCloseBtn);
        // await page.waitForTimeout(2000);
    }





    //Project Data Update
    initiationUpdateA = async() => {
        let page=this.page;
        let { tes1 }=locators.initiationData;
        await page.click(tes1)
        // await page.dblclick(initiationProjectStateDropdownB)
        await page.waitForTimeout(1000);
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

    initiationUpdateC = async() => {
        let page=this.page;
        let { initiationDataSelectC, initiationLaborNav, initiationLaborAddBtn, initiationLaborAddSkills, initiationOBS, initiationOBSEnterprise, initiationActive, initiationActiveTrue }=locators.initiationData;
        await page.click(initiationDataSelectC)
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
