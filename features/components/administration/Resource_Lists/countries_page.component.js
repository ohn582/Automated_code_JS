const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        resListLink: `//*[text()="Resource Lists"]`,
        countriesLink: `//*[text()="Countries"]`,
    },

    countriesCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        countriesBox: `[data-componentid="r1MainViewPort"] [id="adminListsCountryGrid-bodyWrap"] [data-recordindex="0"] [role="row"] [tabindex="-1"]`,
        countriesBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsCountryGrid-bodyWrap"] [data-recordindex="1"] [role="row"] [tabindex="-1"]`,
        countriesBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsCountryGrid-bodyWrap"] [data-recordindex="2"] [role="row"] [tabindex="-1"]`
    }
}

class countriesTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    // Project OBS
    projectListLink = async() => {
        let page=this.page;
        let { adminLink }=locator.admin_Page;
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    listCountriesSelect = async() => {
        let page=this.page;
        let { countriesLink, resListLink }=locator.admin_Page;

        await page.click(resListLink);
        // await page.waitForTimeout(1000);
        await page.click(countriesLink);
        await page.waitForTimeout(3000);
    }

    listCountriesSelectData = async() => {
        let page=this.page;
        let { countriesBox, countriesBoxB, countriesBoxC }=locator.countriesCheckBox;

        await page.click(countriesBox);
        await page.click(countriesBoxB);
        await page.click(countriesBoxC);
        await page.waitForTimeout(3000);
    }
}

exports.countriesTypeData = countriesTypeData;