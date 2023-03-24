const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1018"] [data-componentid="r1NavToggle"]`,
        agileListLink: `//*[text()="Agile"]`,
        fsLink: `//*[text()="Feature States"]`,
    },

    fsNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        fsAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`
    },

    fsCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        fsBox: `[id="adminListsFeatureStateGrid-bodyWrap"] [data-recordindex="0"] [data-columnid="checkcolumn-1048"]`,
        fsBoxB: `[id="adminListsFeatureStateGrid-bodyWrap"] [data-recordindex="1"] [data-columnid="checkcolumn-1048"]`,
        fsBoxC: `[id="adminListsFeatureStateGrid-bodyWrap"] [data-recordindex="2"] [data-columnid="checkcolumn-1048"]`
    }
}


class FeatureStatesTypeData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    agileListLink = async () => {
        let page = this.page;
        let { menuSliderBtn, adminLink } = locator.admin_Page;
        await page.click(menuSliderBtn);
        // await page.waitForTimeout(1000);
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    listFSSelect = async () => {
        let page = this.page;
        let { fsLink, agileListLink } = locator.admin_Page;

        await page.click(agileListLink);
        // await page.waitForTimeout(1000);
        await page.click(fsLink);
        await page.waitForTimeout(3000);
    }

    listFSSelectData = async () => {
        let page = this.page;
        let { fsBox, fsBoxB, fsBoxC } = locator.fsCheckBox;

        await page.click(fsBox);
        await page.click(fsBoxB);
        await page.click(fsBoxC);
        await page.waitForTimeout(3000);
    }

    listFSAdd = async () => {
        let page = this.page;
        let { fsAddBtn } = locator.fsNav;

        await page.click(fsAddBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.FeatureStatesTypeData = FeatureStatesTypeData;
