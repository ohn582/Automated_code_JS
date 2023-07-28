const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        finListLink: `//*[text()="Financial Lists"]`,
        ratesLink: `//*[text()="Rates"]`,
    },

    ratesNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        ratesAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`,

    },

    ratesCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        ratesBox: `[id="AdminMainContainer"] [data-recordindex="0"] [role="row"] [tabindex="-1"]`,
        ratesBoxB: `[id="AdminMainContainer"] [data-recordindex="1"] [role="row"] [tabindex="-1"]`,
        ratesBoxC: `[id="AdminMainContainer"] [data-recordindex="2"] [role="row"] [tabindex="-1"]`
    },

    reloadBtn: {
        relBtn: `[id="r1AdminMain"] [id="AdminRateGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadLoadRates: `//*[text()="Load Rates"]`,
    }
}


class RatesTypeData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    financialListLink = async () => {
        let page = this.page;
        let { adminLink } = locator.admin_Page;
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

    listRatesReloadRates = async () => {
        let page = this.page;
        let { relBtn, reloadLoadRates } = locator.reloadBtn;

        // await page.click(relBtn);
        await page.click(reloadLoadRates);
        // await page.waitForTimeout(3000);
    }
}

module.exports.RatesTypeData = RatesTypeData;
