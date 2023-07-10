const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        projListLink: `//*[text()="Views & Filters"]`,
        categoriesLink: `//*[text()="Forms"]`,
    }
}

class formsTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    // Project OBS
    adminViewFiltersLink = async() => {
        let page=this.page;
        let { adminLink }=locator.admin_Page;
        let { categoriesLink, projListLink }=locator.admin_Page;
        await page.click(adminLink);

        await page.click(projListLink);
        // await page.waitForTimeout(1000);
        await page.click(categoriesLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }
}

exports.formsTypeData = formsTypeData;