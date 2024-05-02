const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[data-componentid="r1MainViewPort"] [id="R1Navigation"] [data-componentid="ext-customtreelistitem-8"]`,
        systemListLink: `//*[text()="System Lists"]`,
        fsLink: `//*[text()="Feature States"]`,
    },

    fsCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        fsBox: `[id="adminListsFeatureStateGrid-bodyWrap"] [data-recordindex="0"] [role="row"] [tabindex="-1"]`,
        fsBoxB: `[id="adminListsFeatureStateGrid-bodyWrap"] [data-recordindex="1"] [role="row"] [tabindex="-1"]`,
        fsBoxC: `[id="adminListsFeatureStateGrid-bodyWrap"] [data-recordindex="2"] [role="row"] [tabindex="-1"]`
    }
}


class SystemListsTypeData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    systemListLink = async () => {
        let page = this.page;
        let { adminLink, systemListLink } = locator.admin_Page;
        // await page.waitForTimeout(1000);
        await page.click(adminLink);
        await page.click(systemListLink);
        // await page.waitForTimeout(1000);
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

module.exports.SystemListsTypeData = SystemListsTypeData;
