const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [role="toolbar"] [data-componentid="r1NavToggle"]`,
        viewFilterLink: `//*[text()="Views & Filters"]`,
        viewsLink: `//*[text()="Views"]`,
    },

    //Administration
    filterViewNav: {
        //Filter
        filterDrop: `[id="AdminMainContainer"] [role="toolbar"] [data-componentid="AdminViewsTypeSelector"]`,
    },

}

class viewsTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    // Project OBS
    viewsLink = async() => {
        let page=this.page;
        let { menuSliderBtn, adminLink, viewFilterLink, viewsLink }=locator.admin_Page;
        await page.click(menuSliderBtn);
        // await page.waitForTimeout(1000);
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.click(viewFilterLink);
        // await page.waitForTimeout(1000);
        await page.click(viewsLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    viewsDropDownMenu = async() => {
        let page=this.page;
        let { filterDrop, }=locator.filterViewNav;

        let textInput = await page.$(filterDrop); 
        await textInput.click({clickCount: 3})
        await page.waitForTimeout(3000);
    }
    

}

exports.viewsTypeData = viewsTypeData;