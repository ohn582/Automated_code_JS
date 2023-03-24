const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1010"] [data-componentid="r1NavToggle"]`,
        projListLink: `//*[text()="Project Lists"]`,
        pmLink: `//*[text()="Phases & Milestones"]`,
    },

    pmNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        pmAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`
    },

    pmCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        pmBox: `[data-componentid="r1MainViewPort"] [id="AdminListsTaskDefaultGrid-body"] [data-recordindex="0"] [data-columnid="checkcolumn-1038"]`,
        pmBoxB: `[data-componentid="r1MainViewPort"] [id="AdminListsTaskDefaultGrid-body"] [data-recordindex="1"] [data-columnid="checkcolumn-1038"]`,
        pmBoxC: `[data-componentid="r1MainViewPort"] [id="AdminListsTaskDefaultGrid-body"] [data-recordindex="2"] [data-columnid="checkcolumn-1038"]`
    }
}


class pmTypeData {
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

    listPCSelect = async() => {
        let page=this.page;
        let { pmLink, projListLink }=locator.admin_Page;

        await page.click(projListLink);
        // await page.waitForTimeout(1000);
        await page.click(pmLink);
        await page.waitForTimeout(3000);
    }

    listPCSelectData = async() => {
        let page=this.page;
        let { pmBox, pmBoxB, pmBoxC }=locator.pmCheckBox;

        await page.click(pmBox);
        await page.click(pmBoxB);
        await page.click(pmBoxC);
        await page.waitForTimeout(3000);
    }

    listPCAdd = async() => {
        let page=this.page;
        let { pmAddBtn }=locator.pmNav;

        await page.click(pmAddBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.pmTypeData = pmTypeData;
