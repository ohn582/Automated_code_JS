const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1010"] [data-componentid="r1NavToggle"]`,
        projListLink: `//*[text()="Project Lists"]`,
        psLink: `//*[text()="Project States"]`,
    },

    psNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        psAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`
    },

    psCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        psBox: `[data-componentid="r1MainViewPort"] [id="adminListsProjectStateGrid-body"] [data-recordindex="10"] [data-columnid="checkcolumn-1041"]`,
        psBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsProjectStateGrid-body"] [data-recordindex="11"] [data-columnid="checkcolumn-1041"]`,
        psBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsProjectStateGrid-body"] [data-recordindex="12"] [data-columnid="checkcolumn-1041"]`
    }
}

class psTypeData {
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

    listPSSelect = async() => {
        let page=this.page;
        let { psLink, projListLink }=locator.admin_Page;

        await page.click(projListLink);
        // await page.waitForTimeout(1000);
        await page.click(psLink);
        await page.waitForTimeout(3000);
    }

    listPSSelectData = async() => {
        let page=this.page;
        let { psBox, psBoxB, psBoxC }=locator.psCheckBox;

        await page.click(psBox);
        await page.click(psBoxB);
        await page.click(psBoxC);
        await page.waitForTimeout(3000);
    }

    listPSAdd = async() => {
        let page=this.page;
        let { psAddBtn }=locator.psNav;

        await page.click(psAddBtn);
        // await page.waitForTimeout(3000);
    }
}

exports.psTypeData = psTypeData;