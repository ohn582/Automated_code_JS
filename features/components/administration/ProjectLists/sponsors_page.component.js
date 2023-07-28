const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        projListLink: `//*[text()="Project Lists"]`,
        sponsorsLink: `//*[text()="Sponsors"]`,
    },

    sponsorsCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        sponsorsBox: `[id="adminListsParitionGrid-bodyWrap"] [data-recordindex="0"] [role="row"] [tabindex="-1"]`,
        sponsorsBoxB: `[id="adminListsParitionGrid-bodyWrap"] [data-recordindex="1"] [role="row"] [tabindex="-1"]`,
        sponsorsBoxC: `[id="adminListsParitionGrid-bodyWrap"] [data-recordindex="2"] [role="row"] [tabindex="-1"]`
    }
}

class sponsorsTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    // Project OBS
    projectListLink = async() => {
        let page=this.page;
        let { adminLink }=locator.admin_Page;
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    projectsponsorsLink = async() => {
        let page=this.page;
        let { sponsorsLink, projListLink }=locator.admin_Page;

        await page.click(projListLink);
        // await page.waitForTimeout(1000);
        await page.click(sponsorsLink);
        await page.waitForTimeout(3000);
    }

    listsponsorsSelect = async() => {
        let page=this.page;
        let { sponsorsBox, sponsorsBoxB, sponsorsBoxC }=locator.sponsorsCheckBox;

        await page.click(sponsorsBox);
        await page.click(sponsorsBoxB);
        await page.click(sponsorsBoxC);
        await page.waitForTimeout(3000);
    }
}

exports.sponsorsTypeData = sponsorsTypeData;