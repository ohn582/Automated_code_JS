const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        projListLink: `//*[text()="Project Lists"]`,
        pcLink: `//*[text()="Codes"]`,
    },

    pcCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        pcBox: `[id="adminListsProjectCodeGrid-bodyWrap"] [data-recordindex="0"] [role="row"] [tabindex="-1"]`,
        pcBoxB: `[id="adminListsProjectCodeGrid-bodyWrap"] [data-recordindex="1"] [role="row"] [tabindex="-1"]`,
        pcBoxC: `[id="adminListsProjectCodeGrid-bodyWrap"] [data-recordindex="2"] [role="row"] [tabindex="-1"]`
    }
}


class pcTypeData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    projectListLink = async() => {
        let page=this.page;
        let { adminLink }=locator.admin_Page;

        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        // await page.waitForTimeout(1000);
    }

    listPCSelect = async() => {
        let page=this.page;
        let { pcLink, projListLink }=locator.admin_Page;

        await page.click(projListLink);
        // await page.waitForTimeout(1000);
        await page.click(pcLink);
        // await page.waitForTimeout(1000);
    }

    listPCSelectData = async() => {
        let page=this.page;
        let { pcBox, pcBoxB, pcBoxC }=locator.pcCheckBox;

        await page.click(pcBox);
        await page.click(pcBoxB);
        await page.click(pcBoxC);
        // await page.waitForTimeout(1000);
    }
}

module.exports.pcTypeData = pcTypeData;
