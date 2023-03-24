const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1018"] [data-componentid="r1NavToggle"]`,
        finListLink: `//*[text()="Financial Lists"]`,
        curLink: `//*[text()="Currencies"]`,
    },

    curNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        curAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`,
        curAddDropdownA: `//*[text()="Add Currency"]`
    },

    curCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        curBox: `[data-componentid="r1MainViewPort"] [id="AdminCurrency-body"] [data-recordindex="0"] [data-columnid="checkcolumn-1074"]`,
        curBoxB: `[data-componentid="r1MainViewPort"] [id="AdminCurrency-body"] [data-recordindex="1"] [data-columnid="checkcolumn-1074"]`,
        curBoxC: `[data-componentid="r1MainViewPort"] [id="AdminCurrency-body"] [data-recordindex="2"] [data-columnid="checkcolumn-1074"]`
    }
}


class CurrenciesTypeData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    financialListLink = async () => {
        let page = this.page;
        let { menuSliderBtn, adminLink } = locator.admin_Page;
        await page.click(menuSliderBtn);
        // await page.waitForTimeout(1000);
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    listCurrenciesSelect = async () => {
        let page = this.page;
        let { curLink, finListLink } = locator.admin_Page;

        await page.click(finListLink);
        // await page.waitForTimeout(1000);
        await page.click(curLink);
        await page.waitForTimeout(3000);
    }

    listCurrenciesSelectData = async () => {
        let page = this.page;
        let { curBox, curBoxB, curBoxC } = locator.curCheckBox;

        await page.click(curBox);
        await page.click(curBoxB);
        await page.click(curBoxC);
        await page.waitForTimeout(3000);
    }

    listCurrenciesAdd = async () => {
        let page = this.page;
        let { curAddBtn, curAddDropdownA } = locator.curNav;

        await page.click(curAddBtn);
        await page.click(curAddDropdownA);
        // await page.waitForTimeout(3000);
    }
}

module.exports.CurrenciesTypeData = CurrenciesTypeData;
