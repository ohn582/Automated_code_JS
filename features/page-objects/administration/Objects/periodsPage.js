const { action } = require('../../../utilities/action')

const locators = {
    periodNav: {
        periodAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [aria-label="Add"]`,
    },
    // [id="r1AdminMain"] [role="toolbar"]
    saveNav: {
        saveBtn: `[id="AdminNodeTreeGrid-bodyWrap"] [id="toolbar-1045-innerCt"] [tabindex="0"] [data-componentid="button-1064"]`,
        // saveOK: `[role="alertdialog"] [data-ref="btnWrap"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
        // saveOK: `[] [id="button-"]`,
    },

    reloadBtn: {
        relBtn: `[id="R1TEditOBSs-bodyWrap"] [tabindex="0"]`,
        reloadPeriodBtn: `[id="R1TPeriods-body"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },

    //Edit periods
    adminPeriods: {
        // textBoxName: `[id="AdminPeriodsContainer"] [data-recordindex="0"] [role="presentation"]`,
        textBoxName: `[id="AdminPeriodsContainer"] [data-recordindex="0"] [role="presentation"]`,
        textBoxNameB: `[id="AdminPeriodsContainer"] [data-recordindex="0"] [role="presentation"]`,


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
        let { textBoxName, periodStartB }=locators.adminPeriods;
        await page.click(periodAddBtn);

        let textInput = await page.$(textBoxName, el=>el.getAttribute("id"));
        let textInputB = await page.$(".class").attr("data-columnid");




        await textInput.click({clickCount: 3})
        await page.keyboard.type('10/04/2022');

        // await textInput2.click({clickCount: 1})
        await textInputB.click({clickCount: 3})
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