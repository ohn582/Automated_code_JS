const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1010"] [data-componentid="r1NavToggle"]`,
        resListLink: `//*[text()="Resource Lists"]`,
        countriesLink: `//*[text()="Countries"]`,
    },

    countriesNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        countriesAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`
    },

    countriesCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        countriesBox: `[data-componentid="r1MainViewPort"] [id="adminListsCountryGrid-bodyWrap"] [data-recordindex="7"] [data-columnid="checkcolumn-1040"]`,
        countriesBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsCountryGrid-bodyWrap"] [data-recordindex="8"] [data-columnid="checkcolumn-1040"]`,
        countriesBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsCountryGrid-bodyWrap"] [data-recordindex="9"] [data-columnid="checkcolumn-1040"]`
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
        let { menuSliderBtn, adminLink }=locator.admin_Page;
        await page.click(menuSliderBtn);
        // await page.waitForTimeout(1000);
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

    listCountriesAdd = async() => {
        let page=this.page;
        let { countriesAddBtn }=locator.countriesNav;

        await page.click(countriesAddBtn);
        // await page.waitForTimeout(3000);
    }
}

exports.countriesTypeData = countriesTypeData;