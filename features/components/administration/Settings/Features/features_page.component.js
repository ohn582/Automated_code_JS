const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-7"]`,
        settingLinks: `//*[text()="Settings"]`,
        featureLinks: `//*[text()="Features"]`,
    },
}


class FeaturesTypeData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    settingListLink = async () => {
        let page = this.page;
        let { adminLink, settingLinks } = locator.admin_Page;
        await page.click(adminLink);
        await page.click(settingLinks);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    featuresLink = async () => {
        let page = this.page;
        let { featureLinks } = locator.admin_Page;
        await page.click(featureLinks);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

}

module.exports.FeaturesTypeData = FeaturesTypeData;
