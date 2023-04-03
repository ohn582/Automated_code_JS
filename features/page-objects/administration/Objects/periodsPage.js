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
        periodStartA: `[id="AdminPeriodsContainer"] [data-recordindex="0"] [data-columnid="datecolumn-1171"]`,
        periodEndA: `[id="AdminPeriodsContainer"] [data-recordindex="0"] [data-columnid="datecolumn-1172"]`,
        periodStartB: `[id="AdminPeriodsContainer"] [data-recordindex="0"] [data-columnid="datecolumn-1171"]`,
        periodEndB: `[id="AdminPeriodsContainer"] [data-recordindex="0"] [data-columnid="datecolumn-1172"]`,
        periodStartC: `[id="AdminPeriodsContainer"] [data-recordindex="0"] [data-columnid="datecolumn-1171"]`,
        periodEndC: `[id="AdminPeriodsContainer"] [data-recordindex="0"] [data-columnid="datecolumn-1172"]`,
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
        let {  periodStartA, periodEndA, periodStartB, periodEndB }=locators.adminPeriods;
        await page.click(periodAddBtn);

        // let textInput2 = await page.$(periodEndB);

        // await textInput.click({clickCount: 1})
        await page.click(periodStartA);
        // await page.click(periodEndA);
        await page.keyboard.type('10/04/2022');
        // await action.type(page, periodStartA, `10/04/2022`);

        // await textInput2.click({clickCount: 1})
        await page.click(periodStartB);
        // await page.click(periodEndB);
        await page.keyboard.type('1/04/2023');

        await page.waitForTimeout(3000);
    }

    periodOBStypeB = async() => {
        let page=this.page;
        let {  periodAddBtn }=locators.periodNav;
        let {  periodStartA, periodEndA, periodStartB, periodEndB }=locators.adminPeriods;
        await page.click(periodAddBtn);

        // let textInput2 = await page.$(periodEndB);

        // await textInput.click({clickCount: 1})
        await page.click(periodStartA);
        // await page.click(periodEndA);
        await page.keyboard.type('10/04/2022');
        // await action.type(page, periodStartA, `10/04/2022`);

        // await textInput2.click({clickCount: 1})
        await page.click(periodStartB);
        // await page.click(periodEndB);
        await page.keyboard.type('1/04/2023');

        await page.waitForTimeout(3000);
    }

    periodOBStypeC = async() => {
        let page=this.page;
        let {  periodAddBtn }=locators.periodNav;
        let {  periodStartA, periodEndA, periodStartB, periodEndB }=locators.adminPeriods;
        await page.click(periodAddBtn);

        // let textInput2 = await page.$(periodEndB);

        // await textInput.click({clickCount: 1})
        await page.click(periodStartA);
        // await page.click(periodEndA);
        await page.keyboard.type('10/04/2022');
        // await action.type(page, periodStartA, `10/04/2022`);

        // await textInput2.click({clickCount: 1})
        await page.click(periodStartB);
        // await page.click(periodEndB);
        await page.keyboard.type('1/04/2023');

        await page.waitForTimeout(3000);
    }
}

module.exports.periodsPage = periodsPage;