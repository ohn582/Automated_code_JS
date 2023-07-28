const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        projListLink: `//*[text()="Project Lists"]`,
        pmLink: `//*[text()="Phases & Milestones"]`,
    },

    pmCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        pmBox: `[data-componentid="r1MainViewPort"] [id="AdminListsTaskDefaultGrid-body"] [data-recordindex="0"] [role="row"] [tabindex="-1"]`,
        pmBoxB: `[data-componentid="r1MainViewPort"] [id="AdminListsTaskDefaultGrid-body"] [data-recordindex="1"] [role="row"] [tabindex="-1"]`,
        pmBoxC: `[data-componentid="r1MainViewPort"] [id="AdminListsTaskDefaultGrid-body"] [data-recordindex="2"] [role="row"] [tabindex="-1"]`
    }
}


class pmTypeData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    pmListLink = async() => {
        let page=this.page;
        let { pmLink, adminLink }=locator.admin_Page;
        await page.click(adminLink);
        await page.click(pmLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    linkPMSelect = async() => {
        let page=this.page;
        let { projListLink }=locator.admin_Page;

        await page.click(projListLink);
        await page.waitForTimeout(3000);
    }

    listPMSelectData = async() => {
        let page=this.page;
        let { pmBox, pmBoxB, pmBoxC }=locator.pmCheckBox;

        await page.click(pmBox);
        await page.click(pmBoxB);
        await page.click(pmBoxC);
        await page.waitForTimeout(3000);
    }
}

module.exports.pmTypeData = pmTypeData;
