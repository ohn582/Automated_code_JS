const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        projListLink: `//*[text()="Project Lists"]`,
        rfLink: `//*[text()="Rank Fields"]`,
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
        let { adminLink }=locator.admin_Page;
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

}

module.exports.rfTypeData = rfTypeData;
