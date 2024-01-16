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


        projDemandNameA: `//*[text()="tes1"]`,
        projDemandNameB: `//*[text()="tes2"]`,

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

class projectDemandPage {
    constructor(page) {
        this.page = page;
    }

    //Project Data Create
    projectAddDemandA = async() => {
        let page=this.page;
        let { projDemandName }=locators.projectData;

        await page.click(projDemandName);
        await page.keyboard.type('tes1');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('24');
        await page.keyboard.press('Tab');
        await page.keyboard.type('2');
        await page.keyboard.press('Tab');
        await page.keyboard.type('3');
        await page.keyboard.press('Tab');
        await page.keyboard.type('1');
        await page.keyboard.press('Tab');
        await page.keyboard.type('1');
        await page.keyboard.press('Enter');
        // await page.waitForTimeout(1000);
    }

    projectAddDemandB = async() => {
        let page=this.page;
        let { projDemandNameB }=locators.projectData;

        await page.click(projDemandNameB);
        await page.keyboard.type('tes1');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('8');
        await page.keyboard.press('Tab');
        await page.keyboard.type('6');
        await page.keyboard.press('Tab');
        await page.keyboard.type('6');
        await page.keyboard.press('Tab');
        await page.keyboard.type('3');
        await page.keyboard.press('Tab');
        await page.keyboard.type('7');
        await page.keyboard.press('Enter');
        // await page.waitForTimeout(1000);
    }

}

module.exports.projectDemandPage = projectDemandPage;
