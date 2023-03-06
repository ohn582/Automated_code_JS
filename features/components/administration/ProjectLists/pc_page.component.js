const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1010"] [data-componentid="r1NavToggle"]`,
        projListLink: `//*[text()="Project Lists"]`,
        pcLink: `//*[text()="Project Codes"]`,
    },

    pcNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        pcAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`
    },

    pcCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        pcBox: `[data-componentid="r1MainViewPort"] [id="adminListsProjectCodeGrid-bodyWrap"] [data-recordindex="0"] [data-columnid="checkcolumn-1038"]`,
        pcBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsProjectCodeGrid-bodyWrap"] [data-recordindex="1"] [data-columnid="checkcolumn-1038"]`,
        pcBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsProjectCodeGrid-bodyWrap"] [data-recordindex="2"] [data-columnid="checkcolumn-1038"]`
    }
}


class pcTypeData {
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
        let { pcLink, projListLink }=locator.admin_Page;

        await page.click(projListLink);
        // await page.waitForTimeout(1000);
        await page.click(pcLink);
        await page.waitForTimeout(3000);
    }

    listPCSelectData = async() => {
        let page=this.page;
        let { pcBox, pcBoxB, pcBoxC }=locator.pcCheckBox;

        await page.click(pcBox);
        await page.click(pcBoxB);
        await page.click(pcBoxC);
        await page.waitForTimeout(3000);
    }

    listPCAdd = async() => {
        let page=this.page;
        let { pcAddBtn }=locator.pcNav;

        await page.click(pcAddBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.pcTypeData = pcTypeData;
