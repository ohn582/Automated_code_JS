const { action } = require('../../../utilities/action')

const locators = {
    periodNav: {
        periodAddBtn: `[id="r1AdminMain"] [aria-label="Add"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },
    // [id="r1AdminMain"] [role="toolbar"]
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

    //Edit periods
    adminPeriods: {
        periodBoxA: `[id="r1AdminMain"] [data-recordindex="0"] [data-columnid="datecolumn-1048"]`,
        periodTypeA: `[id="r1AdminMain"] [data-recordindex="0"] [data-columnid="datecolumn-1048"] [data-columnid="celleditor-1018"]`,
        periodBoxB: `[id="r1AdminMain"] [data-recordindex="0"] [data-columnid="datecolumn-1049"]`,
        periodTypeB: `[id="r1AdminMain"] [data-recordindex="0"] [data-columnid="datecolumn-1049"] [data-columnid="celleditor-1018"]`,

    }
}



class periodsPage {
    constructor(page) {
        this.page = page;
    }

    //OBS:Fields create
    periodOBStype = async() => {
        let page=this.page;
        let {  periodAddBtn }=locators.periodNav;
        let {  periodBoxA, periodTypeA, periodBoxB, periodTypeB }=locators.adminPeriods;
        await page.click(periodAddBtn);

        // let textInput2 = await page.$(periodTypeB);

        // await textInput.click({clickCount: 1})
        await page.click(periodBoxA);
        // await page.click(periodTypeA);
        await page.keyboard.type('10/04/2022');
        // await action.type(page, periodBoxA, `10/04/2022`);

        // await textInput2.click({clickCount: 1})
        await page.click(periodBoxB);
        // await page.click(periodTypeB);
        await page.keyboard.type('1/04/2023');

        await page.waitForTimeout(3000);
    }
}

module.exports.periodsPage = periodsPage;