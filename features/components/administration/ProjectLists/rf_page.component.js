const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [role="toolbar"] [data-componentid="r1NavToggle"]`,
        projListLink: `//*[text()="Project Lists"]`,
        rfLink: `//*[text()="Rank Fields"]`,
    },

    rfNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        rfAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`
    },

    rfCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        rfBox: `[data-componentid="r1MainViewPort"] [id="AdminRankFieldGrid-body"] [data-recordindex="0"] [data-columnid="checkcolumn-1064"]`,
        rfBoxB: `[data-componentid="r1MainViewPort"] [id="AdminRankFieldGrid-body"] [data-recordindex="1"] [data-columnid="checkcolumn-1064"]`,
        rfBoxC: `[data-componentid="r1MainViewPort"] [id="AdminRankFieldGrid-body"] [data-recordindex="2"] [data-columnid="checkcolumn-1064"]`
    }
}


class rfTypeData {
    constructor(page) {
        this.page = page;
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

    listRFSelect = async() => {
        let page=this.page;
        let { rfLink, projListLink }=locator.admin_Page;

        await page.click(projListLink);
        // await page.waitForTimeout(1000);
        await page.click(rfLink);
        await page.waitForTimeout(3000);
    }

    listRFSelectData = async() => {
        let page=this.page;
        let { rfBox, rfBoxB, rfBoxC }=locator.rfCheckBox;

        await page.click(rfBox);
        await page.click(rfBoxB);
        await page.click(rfBoxC);
        await page.waitForTimeout(3000);
    }

    listRFAdd = async() => {
        let page=this.page;
        let { rfAddBtn }=locator.rfNav;

        await page.click(rfAddBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.rfTypeData = rfTypeData;
