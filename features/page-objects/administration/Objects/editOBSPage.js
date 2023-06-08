const { action } = require('../../../utilities/action')

const locators = {
    periodNav: {
        ObsAddBtn: `[id="r1AdminMain"] [aria-label="Add"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminNodeTreeGrid-bodyWrap"] [role="toolbar"] [data-qtip="Save"]`,
        // saveOK: `[role="alertdialog"] [data-ref="btnWrap"]`,
        saveOK: `//*[text()="OK"]`,
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


        lifeScience: `//*[text()="Life Sciences"]`,
        data1: `//*[text()="New SIBLING 1 Node"]`,
        data2: `//*[text()="New SIBLING 2 Node"]`,
        data3: `//*[text()="New SIBLING 3 Node"]`,



        projOBSProjChildData: `[id="AdminNodeTreeGrid-body"] [data-recordindex="0"]`,
    },


    adminPulse: {
        pulseTypeNameA: `[id="AdminSettingPulseSettingAddPulseWindow-body"] [id="NewPulseName-bodyEl"]`,
        pulseTypeDescriptionA: `[id="AdminSettingPulseSettingAddPulseWindow-body"] [id="NewPulseDescription-inputEl"]`,
        pulseAddBtn: `[id="AdminSettingPulseSettingAddPulseWindow"] [data-ref="btnWrap"]`,
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
        let { lifeScience }=locators.editOBSNav;
        let { projOBSExtentionA, projOBSAddSibling, obsAddDropdown, data1 }=locators.editOBSNav;
        let { projOBSAddChild }=locators.editOBSNav;

        //Creating Sibling
        await page.click(lifeScience)

        await page.click(obsAddDropdown)
        // await page.waitForTimeout(1000);
        await page.click(projOBSAddSibling);

        await page.dblclick(projOBSExtentionA)
        await page.keyboard.type('SIBLING 1 ');
        // await page.waitForTimeout(1000);
        
        await page.click(lifeScience)
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
        let { lifeScience }=locators.editOBSNav;
        let { projOBSExtentionA, projOBSAddSibling, obsAddDropdown, data2 }=locators.editOBSNav;
        let { projOBSAddChild }=locators.editOBSNav;

        //Creating Sibling
        await page.dblclick(lifeScience)

        await page.click(obsAddDropdown)
        // await page.waitForTimeout(1000);
        await page.click(projOBSAddSibling);

        await page.dblclick(projOBSExtentionA)
        await page.keyboard.type('SIBLING 2 ');
        // await page.waitForTimeout(1000);
        
        await page.click(lifeScience)
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
        let { lifeScience }=locators.editOBSNav;
        let { projOBSExtentionA, projOBSAddSibling, obsAddDropdown, data3 }=locators.editOBSNav;
        let { projOBSAddChild }=locators.editOBSNav;

        //Creating Sibling
        await page.dblclick(lifeScience)

        await page.click(obsAddDropdown)
        // await page.waitForTimeout(1000);
        await page.click(projOBSAddSibling);

        await page.dblclick(projOBSExtentionA)
        await page.keyboard.type('SIBLING 3 ');
        // await page.waitForTimeout(1000);
        
        await page.click(lifeScience)
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
        await page.click(saveOK);
        await page.waitForTimeout(5000);
    }

    projOBSReload = async() => {
        let page=this.page;
        let { relBtn }=locators.reloadBtn;
        await page.click(relBtn);
        await page.waitForTimeout(5000);
    }

}

module.exports.editOBSPage = editOBSPage;
