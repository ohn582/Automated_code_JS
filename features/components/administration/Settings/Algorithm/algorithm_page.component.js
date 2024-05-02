const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree-bodyWrap"] [data-componentid="ext-customtreelistitem-7"]`,
        settingLinks: `//*[text()="Settings"]`,
        algorithumLinks: `//*[text()="Algorithm"]`,
    },
}


class AlgorithumTypeData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    adminLink = async () => {
        let page = this.page;
        let { adminLink, settingLinks } = locator.admin_Page;
        await page.click(adminLink);
        await page.click(settingLinks);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    algorithumSettingLink = async () => {
        let page = this.page;
        let { algorithumLinks } = locator.admin_Page;
        await page.click(algorithumLinks);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

}

module.exports.AlgorithumTypeData = AlgorithumTypeData;
