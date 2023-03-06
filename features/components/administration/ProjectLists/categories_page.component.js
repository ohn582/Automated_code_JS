const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1010"] [data-componentid="r1NavToggle"]`,
        projListLink: `//*[text()="Project Lists"]`,
        categoriesLink: `//*[text()="Categories"]`,
    },

    categoriesNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        categoriesAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`
    },

    categoriesCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        categoriesBox: `[data-componentid="r1MainViewPort"] [id="adminListsSponsorGrid-body"] [data-recordindex="4"] [data-columnid="checkcolumn-1042"]`,
        categoriesBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsSponsorGrid-body"] [data-recordindex="5"] [data-columnid="checkcolumn-1042"]`,
        categoriesBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsSponsorGrid-body"] [data-recordindex="6"] [data-columnid="checkcolumn-1042"]`
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
        await page.click(menuSliderBtn);
        // await page.waitForTimeout(1000);
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

    listCategoriesAdd = async() => {
        let page=this.page;
        let { categoriesAddBtn }=locator.categoriesNav;

        await page.click(categoriesAddBtn);
        // await page.waitForTimeout(3000);
    }
}

exports.categoriesTypeData = categoriesTypeData;