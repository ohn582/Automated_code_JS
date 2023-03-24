const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1018"] [data-componentid="r1NavToggle"]`,
        finListLink: `//*[text()="Financial Lists"]`,
        ratesLink: `//*[text()="Rates"]`,
    },

    ratesNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        ratesAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`,

    },

    ratesCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        ratesBox: `[data-componentid="r1MainViewPort"] [id="AdminCurrency-body"] [data-recordindex="0"] [data-columnid="checkcolumn-1074"]`,
        ratesBoxB: `[data-componentid="r1MainViewPort"] [id="AdminCurrency-body"] [data-recordindex="1"] [data-columnid="checkcolumn-1074"]`,
        ratesBoxC: `[data-componentid="r1MainViewPort"] [id="AdminCurrency-body"] [data-recordindex="2"] [data-columnid="checkcolumn-1074"]`
    }
}


class RatesTypeData {
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

    listRatesSelect = async () => {
        let page = this.page;
        let { ratesLink, finListLink } = locator.admin_Page;

        await page.click(finListLink);
        // await page.waitForTimeout(1000);
        await page.click(ratesLink);
        await page.waitForTimeout(3000);
    }

    listRatesSelectData = async () => {
        let page = this.page;
        let { ratesBox, ratesBoxB, ratesBoxC } = locator.ratesCheckBox;

        await page.click(ratesBox);
        await page.click(ratesBoxB);
        await page.click(ratesBoxC);
        await page.waitForTimeout(3000);
    }

    listRatesAdd = async () => {
        let page = this.page;
        let { ratesAddBtn } = locator.ratesNav;

        await page.click(ratesAddBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.RatesTypeData = RatesTypeData;
