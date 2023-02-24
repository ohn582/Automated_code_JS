const { action } = require('../../utilities/action')

const locators = {
    periodNav: {
        periodAddBtn: `[id="r1AdminMain"] [aria-label="Add"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminNodeTreeGrid-bodyWrap"] [id="toolbar-1045-innerCt"] [tabindex="0"] [data-componentid="button-1064"]`,
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


        projOBStypeSib: `//*[text()="New Project Node"]`,
        projOBSSibText: `[id="AdminNodeTreeGrid-body"] [data-recordindex="4"] [data-columnid="treecolumn-1043"] [id="celleditor-1084"]`,


        projOBSProjChildData: `[id="AdminNodeTreeGrid-body"] [data-recordindex="0"]`,

    },

    //Edit periods
    adminPeriods: {
        periodTypeA: `[id="r1AdminMain"] [data-recordindex="0"] [data-columnid="datecolumn-1033"] [id="celleditor-1066"]`,
        periodTypeEndDate: `[id="r1AdminMain"] [data-recordindex="0"] [data-columnid="datecolumn-1034"]`,
        periodTypeB2: `[id="r1AdminMain"] [data-recordindex="0"] [data-columnid="datecolumn-1034"] [id="celleditor-1068"]`,

        periodTypeC: `[id="r1AdminMain"] [data-recordindex="0"] [data-columnid="datecolumn-1033"] [id="celleditor-1066"]`,
        periodTypeD: `[id="r1AdminMain"] [data-recordindex="0"] [data-columnid="datecolumn-1034"] [id="celleditor-1068"]`,

        periodTypeE: `[id="r1AdminMain"] [data-recordindex="0"] [data-columnid="datecolumn-1033"] [id="celleditor-1066"]`,
        periodTypeF: `[id="r1AdminMain"] [data-recordindex="0"] [data-columnid="datecolumn-1034"] [id="celleditor-1068"]`,
        
        periodDataA: `[id="r1AdminMain"] [data-recordindex="0"] [data-columnid="datecolumn-1033"] [id="celleditor-1066"]`,
        periodDataB: `[id="r1AdminMain"] [data-recordindex="0"] [data-columnid="datecolumn-1034"] [id="celleditor-1068"]`,

        periodDeleteA: `[id="r1AdminMain"] [data-recordindex="0"] [data-columnid="checkcolumn-1061"]`,
        periodDeleteB: `[id="r1AdminMain"] [data-recordindex="2"] [data-columnid="checkcolumn-1061"]`,

        periodDeleteBtn: `[id="r1AdminMain"] [aria-label="Delete"]`,
        periodDeleteYes: `//*[text()="Yes"]`,
    },

    adminPulse: {
        pulseTypeNameA: `[id="AdminSettingPulseSettingAddPulseWindow-body"] [id="NewPulseName-bodyEl"]`,
        pulseTypeDescriptionA: `[id="AdminSettingPulseSettingAddPulseWindow-body"] [id="NewPulseDescription-inputEl"]`,
        pulseAddBtn: `[id="AdminSettingPulseSettingAddPulseWindow"] [data-ref="btnWrap"]`,
    }
}



class periodsPage {
    constructor(page) {
        this.page = page;
    }

    //OBS:Fields create
    periodOBStype = async() => {
        let page=this.page;
        let {  projOBSAddSibling, projOBStypeSib, projOBSSibText }=locators.editOBSNav;
        await page.click(projOBSAddSibling);

        let textInput = await page.$(projOBStypeSib);
        // await page.click(projOBStypeSib);
        // await page.dblclick(projOBSSibText);
        await textInput.click({clickCount: 1})
        await page.keyboard.type(' SIBLING 1');
        await page.waitForTimeout(3000);
    }
}

module.exports.periodsPage = periodsPage;