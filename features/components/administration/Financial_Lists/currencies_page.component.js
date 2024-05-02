const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1MainNavigationTree-innerCt"] [data-componentid="R1Navigation"] [data-componentid="ext-customtreelistitem-8"]`,
        finListLink: `//*[text()="Financial Lists"]`,
        curLink: `//*[text()="Currencies"]`,
    },

    curCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        curBox: `[id="AdminCurrency-body"] [data-recordindex="0"] [role="row"] [tabindex="-1"]`,
        curBoxB: `[id="AdminCurrency-body"] [data-recordindex="1"] [role="row"] [tabindex="-1"]`,
        curBoxC: `[id="AdminCurrency-body"] [data-recordindex="2"] [role="row"] [tabindex="-1"]`
    }
}


class CurrenciesTypeData {
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
}

module.exports.CurrenciesTypeData = CurrenciesTypeData;
