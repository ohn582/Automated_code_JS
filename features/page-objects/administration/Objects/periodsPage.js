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


        periodStartA: `//*[text()="10/04/2022"]`,
        periodEndA: `//*[text()="1/04/2023"]`,
        periodStartB: `//*[text()="10/04/2022"]`,
        periodEndB: `//*[text()="1/04/2023"]`,
        periodStartC: `//*[text()="1/04/2023"]`,
        periodEndC: `//*[text()="1/04/2023"]`,
    },

    periodsLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }
}



class periodsPage {
    constructor(page) {
        this.page = page;
    }

    //Periods:Fields create
    // periodOBStype = async() => {
    //     let page=this.page;
    //     let {  periodAddBtn }=locators.periodNav;
    //     let { textBoxName, periodStartB }=locators.adminPeriods;
    //     await page.click(periodAddBtn);

    //     let textInput = await page.$(textBoxName, el=>el.getAttribute("id"));
    //     let textInputB = await page.$(".class").attr("data-columnid");




    //     await textInput.click({clickCount: 3})
    //     await page.keyboard.type('10/04/2022');

    //     // await textInput2.click({clickCount: 1})
    //     await textInputB.click({clickCount: 3})
    //     await page.keyboard.type('1/04/2023');

    //     await page.waitForTimeout(3000);
    // }


    periodOBStype = async() => {
        let page=this.page;
        let {  periodAddBtn }=locators.periodNav;
        let { textBoxName, textBoxNameB }=locators.adminPeriods;
        
        await page.click(periodAddBtn);

        let textInput = await page.$(textBoxName, el=>el.getAttribute("id"));
        
        await textInput.click({clickCount: 3})
        await page.keyboard.type('10/04/2022');

        
        // let textInputB = await page.$(".class").attr("data-columnid");
        // let textInputB = await page.$(textBoxNameB, el=>el.getAttribute("id"));

        let test = await page.locator('data-columnid')[0].cellIndex > 1

        // await page.locator('input#my-input').inputValue();

        // await textInput2.click({clickCount: 1})
        await test.click({clickCount: 3})
        await page.keyboard.type('1/04/2023');

        await page.waitForTimeout(3000);

    }

    

    // periodOBStypeB = async() => {
    //     let page=this.page;
    //     let {  periodAddBtn }=locators.periodNav;
    //     let {  periodStartA, periodEndA, periodStartB, periodEndB }=locators.adminPeriods;
    //     await page.click(periodAddBtn);

    //     // let textInput2 = await page.$(periodEndB);

    //     // await textInput.click({clickCount: 1})
    //     await page.click(periodStartA);
    //     // await page.click(periodEndA);
    //     await page.keyboard.type('10/04/2022');
    //     // await action.type(page, periodStartA, `10/04/2022`);

    //     // await textInput2.click({clickCount: 1})
    //     await page.click(periodStartB);
    //     // await page.click(periodEndB);
    //     await page.keyboard.type('1/04/2023');

    //     await page.waitForTimeout(3000);
    // }

    // periodOBStypeC = async() => {
    //     let page=this.page;
    //     let {  periodAddBtn }=locators.periodNav;
    //     let {  periodStartA, periodEndA, periodStartB, periodEndB }=locators.adminPeriods;
    //     await page.click(periodAddBtn);

    //     // let textInput2 = await page.$(periodEndB);

    //     // await textInput.click({clickCount: 1})
    //     await page.click(periodStartA);
    //     // await page.click(periodEndA);
    //     await page.keyboard.type('10/04/2022');
    //     // await action.type(page, periodStartA, `10/04/2022`);

    //     // await textInput2.click({clickCount: 1})
    //     await page.click(periodStartB);
    //     // await page.click(periodEndB);
    //     await page.keyboard.type('1/04/2023');

    //     await page.waitForTimeout(3000);
    // }






    //Sponsor: Delete
    listBTDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);
    
        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    //Periods:Save
    listBTSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listBTReload = async () => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.periodsLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.periodsPage = periodsPage;