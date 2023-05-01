const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[data-componentid="r1MainViewPort"] [id="R1Navigation"] [data-componentid="ext-customtreelistitem-7"]`,
        agileListLink: `//*[text()="Agile"]`,
        fsLink: `//*[text()="Feature States"]`,
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
        let { adminLink } = locator.admin_Page;
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
}

module.exports.FeatureStatesTypeData = FeatureStatesTypeData;
