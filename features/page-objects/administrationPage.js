const { action } = require('../utilities/action')

const locators = {
    periodSaveNav: {
        savePeriodBtn: `[id="R1TPeriods-bodyWrap"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminNodeTreeGrid-bodyWrap"] [id="toolbar-1042"] [data-qtip="Save"]`,
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
        projAddSibling: `//*[text()="Add Sibling"]`,

        //Project OBS
        projOBSAddChild: `//*[text()="Add Child"]`,
        projOBSAddSibling: `//*[text()="Add Sibling"]`,
        projOBSExtentionA: `//*[text()="New Project Node"]`,


        projOBSRetypeSib: `//*[text()="New Project Node"]`,


        projOBSProjChildData: `[id="AdminNodeTreeGrid-body"] [data-recordindex="0"]`,

    },

    adminPeriods: {
        periodTypeA: `[id="R1TPeriods-body"] [data-recordindex="0"] [data-columnid="datecolumn-1031"]`,
        periodTypeB: `[id="R1TPeriods-body"] [data-recordindex="0"] [data-columnid="datecolumn-1032"]`,

        periodTypeC: `[id="R1TPeriods-body"] [data-recordindex="0"] [data-columnid="datecolumn-1031"]`,
        periodTypeD: `[id="R1TPeriods-body"] [data-recordindex="0"] [data-columnid="datecolumn-1032"]`,

        periodTypeE: `[id="R1TPeriods-body"] [data-recordindex="0"] [data-columnid="datecolumn-1031"]`,
        periodTypeF: `[id="R1TPeriods-body"] [data-recordindex="0"] [data-columnid="datecolumn-1032"]`,


        
        periodDataA: `[id="R1TPeriods-body"] [data-recordindex="0"] [data-columnid="datecolumn-1031"]`,
        periodDataB: `[id="R1TPeriods-body"] [data-recordindex="0"] [data-columnid="datecolumn-1032"]`,

        periodDeleteA: `[id="R1TPeriods-body"] [data-recordindex="0"] [data-columnid="checkcolumn-1061"]`,
        periodDeleteB: `[id="R1TPeriods-body"] [data-recordindex="2"] [data-columnid="checkcolumn-1061"]`,

        periodDeleteBtn: `[id="R1TPeriods-body"] [aria-label="Delete"]`,
        periodDeleteYes: `//*[text()="Yes"]`,
    },

    adminPulse: {
        pulseTypeNameA: `[id="AdminSettingPulseSettingAddPulseWindow-body"] [id="NewPulseName-bodyEl"]`,
        pulseTypeDescriptionA: `[id="AdminSettingPulseSettingAddPulseWindow-body"] [id="NewPulseDescription-inputEl"]`,
        pulseAddBtn: `[id="AdminSettingPulseSettingAddPulseWindow"] [data-ref="btnWrap"]`,
    }
}



class administrationPage {
    constructor(page) {
        this.page = page;
    }




    //Project OBS 
    projOBSSiblingAdd = async() => {
        let page=this.page;
        let {  projOBSAddSibling }=locators.editOBSNav;
        await page.click(projOBSAddSibling);
        await page.waitForTimeout(3000);
    }

    projOBSChildAdd = async() => {
        let page=this.page;
        let { projOBSAddChild }=locators.editOBSNav;
        await page.click(projOBSAddChild);
        await page.waitForTimeout(3000);
    }

    projOBSRetypeSibling = async() => {
        let page=this.page;
        let { projOBSRetypeSib }=locators.editOBSNav;
        let textInput = await page.$(projOBSRetypeSib);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('SIBLING TEST 1');
        await page.waitForTimeout(3000);
    }

    projOBSRetypeChildA = async() => {
        let page=this.page;
        let { projOBSRetypeSib }=locators.editOBSNav;
        let textInput = await page.$(projOBSRetypeSib);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('CHILD 1');
        await page.waitForTimeout(3000);
    }

    projOBSRetypeChildB = async() => {
        let page=this.page;
        let { projOBSRetypeSib, projOBSSiblingDataCreated }=locators.editOBSNav;
        let textInput = await page.$(projOBSRetypeSib);
        await page.click(projOBSSiblingDataCreated);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('CHILD 2');
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



    // projOBSChildAdd = async() => {
    //     let page=this.page;
    //     let { projOBSAddChild }=locators.editOBSNav;
    //     await page.click( projOBSAddChild);
    //     await page.waitForTimeout(3000);
    // }



    projOBSRetypeExtention = async() => {
        let page=this.page;
        let { projOBSExtentionA }=locators.editOBSNav;
        await page.dblclick(projOBSExtentionA);
        await page.waitForTimeout(1000);
        await page.keyboard.type('tes1 ');
        await page.waitForTimeout(3000);
    }

    projOBSSave = async() => {
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


    //Edit OBS


    //Periods
    adminPeriodsType = async() => {
        let page=this.page;
        let { periodTypeA }=locators.adminPeriods;
        await page.click(periodTypeA);
        await page.keyboard.type('01/01/2022');
        await page.waitForTimeout(3000);
    }

    adminPeriodsTypeB = async() => {
        let page=this.page;
        let { periodTypeB }=locators.adminPeriods;
        await page.click(periodTypeB);
        await page.keyboard.type('02/19/2022');
        await page.waitForTimeout(3000);
    }



    adminPeriodsTypeC = async() => {
        let page=this.page;
        let { periodTypeC }=locators.adminPeriods;
        await page.click(periodTypeC);
        await page.keyboard.type('01/04/2022');
        await page.waitForTimeout(3000);
    }

    adminPeriodsTypeD = async() => {
        let page=this.page;
        let { periodTypeD }=locators.adminPeriods;
        await page.click(periodTypeD);
        await page.keyboard.type('03/20/2022');
        await page.waitForTimeout(3000);
    }



    adminPeriodsTypeE = async() => {
        let page=this.page;
        let { periodTypeE }=locators.adminPeriods;
        await page.click(periodTypeE);
        await page.keyboard.type('01/07/2022');
        await page.waitForTimeout(3000);
    }

    adminPeriodsTypeF = async() => {
        let page=this.page;
        let { periodTypeF }=locators.adminPeriods;
        await page.click(periodTypeF);
        await page.keyboard.type('02/30/2022');
        await page.waitForTimeout(3000);
    }






    adminPeriodsSave = async() => {
        let page=this.page;
        let { savePeriodBtn, savePeriodOK }=locators.periodSaveNav;
        await page.click(savePeriodBtn);
        await page.waitForTimeout(3000);
        // await page.click(savePeriodOK);
        // await page.waitForTimeout(3000);
    }

    adminPeriodsReload = async() => {
        let page=this.page;
        let { reloadPeriodBtn }=locators.reloadBtn;
        await page.click(reloadPeriodBtn);
        await page.waitForTimeout(3000);
    }

    adminPeriodsReTypeA = async() => {
        let page=this.page;
        let { periodDataA }=locators.adminPeriods;
        await page.click(periodDataA);
    }

    adminPeriodsReTypeA = async() => {
        let page=this.page;
        let { periodDataA }=locators.adminPeriods;
        let searchInput = await page.$(periodDataA);
        await searchInput.click({clickCount: 3});
        await page.waitForTimeout(1000);
        await page.keyboard.type('01/09/2022');
    }

    adminPeriodsReTypeB = async() => {
        let page=this.page;
        let { periodDataB }=locators.adminPeriods;
        let searchInput = await page.$(periodDataB);
        await searchInput.click({clickCount: 3});
        await page.waitForTimeout(1000);
        await page.keyboard.type('02/10/2022');
    }




    adminPeriodsDeleteA = async() => {
        let page=this.page;
        let { periodDeleteA }=locators.adminPeriods;
        await page.click(periodDeleteA);
    }

    adminPeriodsDeleteB = async() => {
        let page=this.page;
        let { periodDeleteB }=locators.adminPeriods;
        await page.click(periodDeleteB);
    }

    adminPeriodsDeleteBtn = async() => {
        let page=this.page;
        let { periodDeleteBtn, periodDeleteYes }=locators.adminPeriods;
        await page.click(periodDeleteBtn);
        await page.click(periodDeleteYes);
    }




    //Pulse
    adminPulseTypeA = async() => {
        let page=this.page;
        let { pulseTypeNameA, pulseTypeDescriptionA, pulseAddBtn }=locators.adminPulse;
        await page.click(pulseTypeNameA);
        await page.keyboard.type('Tes1');
        await page.waitForTimeout(1000);
        await page.click(pulseTypeDescriptionA);
        await page.keyboard.type('Description test sample');
        await page.waitForTimeout(1000);
        await page.click(pulseAddBtn);
    }

    adminPulseTypeB = async() => {
        let page=this.page;
        let { pulseTypeNameA, pulseTypeDescriptionA, pulseAddBtn }=locators.adminPulse;
        await page.click(pulseTypeNameA);
        await page.keyboard.type('Tes2');
        await page.waitForTimeout(1000);
        await page.click(pulseTypeDescriptionA);
        await page.keyboard.type('Description test sample');
        await page.waitForTimeout(1000);
        await page.click(pulseAddBtn);
    }

    adminPulseTypeC = async() => {
        let page=this.page;
        let { pulseTypeNameA, pulseTypeDescriptionA, pulseAddBtn }=locators.adminPulse;
        await page.click(pulseTypeNameA);
        await page.keyboard.type('Tes3');
        await page.waitForTimeout(1000);
        await page.click(pulseTypeDescriptionA);
        await page.keyboard.type('Description test sample');
        await page.waitForTimeout(1000);
        await page.click(pulseAddBtn);
    }

    pulseDataBtn = async() => {
        let page=this.page;
        let { pulseAddBtn }=locators.adminPulse;
        await page.click(pulseAddBtn);
    }

}

module.exports.administrationPage = administrationPage;
