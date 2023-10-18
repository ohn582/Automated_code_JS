const { action } = require('../../../utilities/action')

const locators = {
    periodNav: {
        periodAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [aria-label="Add"]`,
    },
    // [id="r1AdminMain"] [role="toolbar"]
    saveNav: {
        saveBtn: `[id="AdminNodeTreeGrid-bodyWrap"] [role="toolbar"] [aria-label="Save"]`,
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
        textBoxNameB: `[id="AdminPeriodsContainer"] [role="rowgroup"] [data-recordindex="0"] [role="gridcell"]`,


        periodStartA: `//*[text()="01/02/2023"]`,
        periodEndA: `//*[text()="03/08/2023"]`,

        periodStartB: `//*[text()="02/25/2023"]`,
        periodEndB: `//*[text()="06/07/2023"]`,

        periodStartC: `//*[text()="06/14/2023"]`,
        periodEndC: `//*[text()="11/17/2023"]`,
    },

    //Periods Filter
    periodFilter: {
        filterSlider: `[id="AdminMainContainer"] [role="toolbar"] [aria-label="Expand panel"]`,
    },

    periodfilterVerify: {
        periodStartDate: `[class="x-fieldset x-fieldset-default"] [id="adminPeriodStartDateFilter-inputWrap"]`,
        periodEndDate: `[class="x-fieldset x-fieldset-default"] [id="adminPeriodStartDateFilter-inputWrap"]`,

        loadPeriods: `[class="x-toolbar x-docked x-toolbar-footer x-box-layout-ct"] [aria-label="Load"]`,
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
    periodOBStypeA = async() => {
        let page=this.page;
        let {  periodAddBtn }=locators.periodNav;
        let { textBoxName, textBoxNameB }=locators.adminPeriods;
        
        await page.click(periodAddBtn);

        let textInput = await page.$(textBoxName, el=>el.getAttribute("id"));
        
        await textInput.click({clickCount: 3})
        await page.keyboard.type('01/02/2040');

        await page.keyboard.press('Tab');

        await page.keyboard.type('05/08/2041');
        // await page.waitForTimeout(3000);
    }

    periodOBStypeB = async() => {
        let page=this.page;
        let {  periodAddBtn }=locators.periodNav;
        let { textBoxName, textBoxNameB }=locators.adminPeriods;
        
        await page.click(periodAddBtn);

        let textInput = await page.$(textBoxName, el=>el.getAttribute("id"));
        
        await textInput.click({clickCount: 3})
        await page.keyboard.type('02/25/2023');

        await page.keyboard.press('Tab');

        await page.keyboard.type('01/07/2041');
        // await page.waitForTimeout(3000);
    }

    periodOBStypeC = async() => {
        let page=this.page;
        let {  periodAddBtn }=locators.periodNav;
        let { textBoxName, textBoxNameB }=locators.adminPeriods;
        
        await page.click(periodAddBtn);

        let textInput = await page.$(textBoxName, el=>el.getAttribute("id"));
        
        await textInput.click({clickCount: 3})
        await page.keyboard.type('06/14/2023');

        await page.keyboard.press('Tab');

        await page.keyboard.type('11/17/2041');
        // await page.waitForTimeout(3000);
    }



    //period filter verify
    periodfilterVerifyA = async() => {
        let page=this.page;
        let { filterSlider }=locators.periodFilter;
        let { periodStartDate, periodEndDate, loadPeriods }=locators.periodfilterVerify;
    
        await page.click(filterSlider);
    
        await page.waitForTimeout(1000)
            
        await page.click(periodStartDate)
        await page.keyboard.press('Control+A');
        await page.keyboard.type('01/02/2023');
    
        // await page.waitForTimeout(1000)
    
        await page.keyboard.press('Tab');
    
        await page.keyboard.press('Control+A');
        await page.keyboard.type('05/08/2041');
    
        await page.click(loadPeriods);
    
        await page.waitForTimeout(3000);
    }
    
    periodfilterVerifyB = async() => {
        let page=this.page;
        let { filterSlider }=locators.periodFilter;
        let { periodStartDate, periodEndDate, loadPeriods }=locators.periodfilterVerify;
    
        await page.click(filterSlider);
    
        await page.waitForTimeout(1000)
            
        await page.click(periodStartDate)
        await page.keyboard.press('Control+A');
        await page.keyboard.type('02/25/2023');
    
        // await page.waitForTimeout(1000)
    
        await page.keyboard.press('Tab');
    
        await page.keyboard.press('Control+A');
        await page.keyboard.type('01/07/2041');
    
        await page.click(loadPeriods);
    
        await page.waitForTimeout(3000);
    }
    
    periodfilterVerifyC = async() => {
        let page=this.page;
        let { filterSlider }=locators.periodFilter;
        let { periodStartDate, periodEndDate, loadPeriods }=locators.periodfilterVerify;
    
        await page.click(filterSlider);
    
        await page.waitForTimeout(1000)
            
        await page.click(periodStartDate)
        await page.keyboard.press('Control+A');
        await page.keyboard.type('06/14/2023');
    
        // await page.waitForTimeout(1000)
    
        await page.keyboard.press('Tab');
    
        await page.keyboard.press('Control+A');
        await page.keyboard.type('11/17/2041');
    
        await page.click(loadPeriods);
    
        await page.waitForTimeout(3000);
    }

    


    //Periods:Fields update
    periodsRetypeDataA = async() => {
        let page=this.page;
        let { periodStartA, periodEndA }=locators.adminPeriods;
            
        await periodStartA.click({clickCount: 3})
        await page.keyboard.type('02/22/2023');
    
        await page.keyboard.press('Tab');
    
        await periodEndA.click({clickCount: 3})
        await page.keyboard.type('04/12/2023');
        // await page.waitForTimeout(3000);
    }

    periodsRetypeDataB = async() => {
        let page=this.page;
        let { periodStartB, periodEndB }=locators.adminPeriods;
        
        await periodStartB.click({clickCount: 3})
        await page.keyboard.type('04/11/2023');

        await page.keyboard.press('Tab');

        await periodEndB.click({clickCount: 3})
        await page.keyboard.type('05/02/2023');
        // await page.waitForTimeout(3000);
    }

    periodsRetypeDataC = async() => {
        let page=this.page;
        let { periodStartC, periodEndC }=locators.adminPeriods;
        
        await periodStartC.click({clickCount: 3})
        await page.keyboard.type('07/22/2024');

        await page.keyboard.press('Tab');

        await periodEndC.click({clickCount: 3})
        await page.keyboard.type('10/20/2024');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    periodDeleteButton = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);
    
        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    //Periods:Save
    periodSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        // await page.waitForTimeout(3000);
    }

    periodsReload = async () => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.periodsLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.periodsPage = periodsPage;