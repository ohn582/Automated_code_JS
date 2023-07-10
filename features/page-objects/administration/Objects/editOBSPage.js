const { action } = require('../../../utilities/action')

const locators = {
    periodNav: {
        ObsAddBtn: `[id="r1AdminMain"] [aria-label="Add"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminMainContainer"] [role="toolbar"] [aria-label="Save"]`,
        // saveOK: `[role="alertdialog"] [data-ref="btnWrap"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
        // saveOK: `[] [id="button-"]`,
    },

    reloadBtn: {
        relBtn: `[id="R1TEditOBSs-bodyWrap"] [tabindex="0"]`,
        reloadPeriodBtn: `[id="R1TPeriods-body"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },
    
    //Edit obs
    editOBSNav: {
        uldpMenu: `//*[text()="Edit OBSs"]`,
        obsAddDropdown: `[id="AdminNodeTreeGrid-bodyWrap"] [role="toolbar"] [aria-label="Add"]`,

        //Project OBS
        projOBSAddSibling: `//*[text()="Add Sibling"]`,
        projOBSExtentionA: `//*[text()="New Project Node"]`,
        projOBSAddChild: `//*[text()="Add Child"]`,


        enterprise: `//*[text()="Enterprise"]`,
        data1: `//*[text()="New SIBLING 1 Node"]`,
        data2: `//*[text()="New SIBLING 2 Node"]`,
        data3: `//*[text()="New SIBLING 3 Node"]`,



        projOBSProjChildData: `[id="AdminNodeTreeGrid-body"] [data-recordindex="0"]`,
    },

    editOBSLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }
}



class editOBSPage {
    constructor(page) {
        this.page = page;
    }




    //Project OBS 
    projOBSChildAdd = async() => {
        let page=this.page;
        let { projOBSAddChild }=locators.editOBSNav;
        await page.click(projOBSAddChild);
        await page.waitForTimeout(3000);
    }


    projOBStypeSibling = async() => {
        let page=this.page;
        let { enterprise }=locators.editOBSNav;
        let { projOBSExtentionA, projOBSAddSibling, obsAddDropdown, data1 }=locators.editOBSNav;
        let { projOBSAddChild }=locators.editOBSNav;

        //Creating Sibling
        await page.click(enterprise)

        await page.click(obsAddDropdown)
        // await page.waitForTimeout(1000);
        await page.click(projOBSAddSibling);

        await page.dblclick(projOBSExtentionA)
        await page.keyboard.type('SIBLING 1 ');
        // await page.waitForTimeout(1000);
        
        await page.click(enterprise)
        // await page.waitForTimeout(1000);
        await page.click(data1)

        //Creating Child
        await page.click(obsAddDropdown)
        // await page.waitForTimeout(1000);
        await page.click(projOBSAddChild);

        await page.dblclick(projOBSExtentionA)
        await page.keyboard.type('CHILD 1 ');
        await page.waitForTimeout(3000);
    }

    projOBStypeSiblingB = async() => {
        let page=this.page;
        let { enterprise }=locators.editOBSNav;
        let { projOBSExtentionA, projOBSAddSibling, obsAddDropdown, data2 }=locators.editOBSNav;
        let { projOBSAddChild }=locators.editOBSNav;

        //Creating Sibling
        await page.dblclick(enterprise)

        await page.click(obsAddDropdown)
        // await page.waitForTimeout(1000);
        await page.click(projOBSAddSibling);

        await page.dblclick(projOBSExtentionA)
        await page.keyboard.type('SIBLING 2 ');
        // await page.waitForTimeout(1000);
        
        await page.click(enterprise)
        // await page.waitForTimeout(1000);
        await page.click(data2)

        //Creating Child
        await page.click(obsAddDropdown)
        // await page.waitForTimeout(1000);
        await page.click(projOBSAddChild);

        await page.dblclick(projOBSExtentionA)
        await page.keyboard.type('CHILD 2 ');
        await page.waitForTimeout(3000);
    }

    projOBStypeSiblingC = async() => {
        let page=this.page;
        let { enterprise }=locators.editOBSNav;
        let { projOBSExtentionA, projOBSAddSibling, obsAddDropdown, data3 }=locators.editOBSNav;
        let { projOBSAddChild }=locators.editOBSNav;

        //Creating Sibling
        await page.dblclick(enterprise)

        await page.click(obsAddDropdown)
        // await page.waitForTimeout(1000);
        await page.click(projOBSAddSibling);

        await page.dblclick(projOBSExtentionA)
        await page.keyboard.type('SIBLING 3 ');
        // await page.waitForTimeout(1000);
        
        await page.click(enterprise)
        // await page.waitForTimeout(1000);
        await page.click(data3)

        //Creating Child
        await page.click(obsAddDropdown)
        // await page.waitForTimeout(1000);
        await page.click(projOBSAddChild);

        await page.dblclick(projOBSExtentionA)
        await page.keyboard.type('CHILD 3 ');
        await page.waitForTimeout(3000);
    }







    adminOBSProjChildData = async() => {
        let page=this.page;
        let { projOBSProjChildData }=locators.editOBSNav;
        let textInput = await page.$(projOBSProjChildData);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('DATA RE-WRITE 1');
        await page.waitForTimeout(3000);
    }






    projOBSRetypeExtention = async() => {
        let page=this.page;
        let { projOBSExtentionA }=locators.editOBSNav;
        await page.dblclick(projOBSExtentionA);
        await page.waitForTimeout(1000);
        await page.keyboard.type('tes1 ');
        await page.waitForTimeout(3000);
    }

    obsSaveBtn = async() => {
        let page=this.page;
        let { saveBtn, saveOK }=locators.saveNav;
        await page.click(saveBtn);
        // await page.waitForTimeout(1000);
        // await page.click(saveOK);
        await page.waitForTimeout(5000);
    }

    projOBSReload = async() => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.editOBSLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }

}

module.exports.editOBSPage = editOBSPage;
