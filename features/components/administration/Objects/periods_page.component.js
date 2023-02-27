const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1010"] [data-componentid="r1NavToggle"]`,
        objLink: `//*[text()="Objects"]`,
        periodsLink: `//*[text()="Periods"]`,
    }
}

class periodsTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    // Project OBS
    peroidsOBSLink = async() => {
        let page=this.page;
        let { menuSliderBtn, adminLink, objLink, periodsLink }=locator.admin_Page;
        await page.click(menuSliderBtn);
        // await page.waitForTimeout(1000);
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.click(objLink);
        // await page.waitForTimeout(1000);
        await page.click(periodsLink);
        await page.waitForTimeout(3000);
    }
}

exports.periodsTypeData = periodsTypeData;