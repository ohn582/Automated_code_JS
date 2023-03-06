const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1010"] [data-componentid="r1NavToggle"]`,
        projListLink: `//*[text()="Project Lists"]`,
        sponsorsLink: `//*[text()="Sponsors"]`,
    },

    sponsorsNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        sponsorsAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`
    },

    sponsorsCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        sponsorsBox: `[data-componentid="r1MainViewPort"] [id="adminListsSponsorGrid-body"] [data-recordindex="4"] [data-columnid="checkcolumn-1042"]`,
        sponsorsBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsSponsorGrid-body"] [data-recordindex="5"] [data-columnid="checkcolumn-1042"]`,
        sponsorsBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsSponsorGrid-body"] [data-recordindex="6"] [data-columnid="checkcolumn-1042"]`
    }
}

class sponsorsTypeData {
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

    projectsponsorsLink = async() => {
        let page=this.page;
        let { sponsorsLink, projListLink }=locator.admin_Page;

        await page.click(projListLink);
        // await page.waitForTimeout(1000);
        await page.click(sponsorsLink);
        await page.waitForTimeout(3000);
    }

    listsponsorsSelect = async() => {
        let page=this.page;
        let { sponsorsBox, sponsorsBoxB, sponsorsBoxC }=locator.sponsorsCheckBox;

        await page.click(sponsorsBox);
        await page.click(sponsorsBoxB);
        await page.click(sponsorsBoxC);
        await page.waitForTimeout(3000);
    }

    listsponsorsAdd = async() => {
        let page=this.page;
        let { sponsorsAddBtn }=locator.sponsorsNav;

        await page.click(sponsorsAddBtn);
        // await page.waitForTimeout(3000);
    }
}

exports.sponsorsTypeData = sponsorsTypeData;