const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        projListLink: `//*[text()="Project Lists"]`,
        categoriesLink: `//*[text()="Categories"]`,
    },

    categoriesCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        categoriesBox: `[id="adminListsCategoryGrid-body"] [data-recordindex="3"] [role="row"] [tabindex="-1"]`,
        categoriesBoxB: `[id="adminListsCategoryGrid-body"] [data-recordindex="4"] [role="row"] [tabindex="-1"]`,
        categoriesBoxC: `[id="adminListsCategoryGrid-body"] [data-recordindex="5"] [role="row"] [tabindex="-1"]`
    }
}

class categoriesTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    // Project OBS
    projectListLink = async() => {
        let page=this.page;
        let { menuSliderBtn, adminLink }=locator.admin_Page;
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    projectCategoriesLink = async() => {
        let page=this.page;
        let { categoriesLink, projListLink }=locator.admin_Page;

        await page.click(projListLink);
        // await page.waitForTimeout(1000);
        await page.click(categoriesLink);
        await page.waitForTimeout(3000);
    }

    listCategoriesSelect = async() => {
        let page=this.page;
        let { categoriesBox, categoriesBoxB, categoriesBoxC }=locator.categoriesCheckBox;

        await page.click(categoriesBox);
        await page.click(categoriesBoxB);
        await page.click(categoriesBoxC);
        await page.waitForTimeout(3000);
    }
}

exports.categoriesTypeData = categoriesTypeData;