const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        projListLink: `//*[text()="Project Lists"]`,
        psLink: `//*[text()="Project States"]`,
    },

    psCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        psBox: `[id="adminListsProjectStateGrid-body"] [data-recordindex="10"] [role="row"] [tabindex="-1"]`,
        psBoxB: `[id="adminListsProjectStateGrid-body"] [data-recordindex="11"] [role="row"] [tabindex="-1"]`,
        psBoxC: `[id="adminListsProjectStateGrid-body"] [data-recordindex="12"] [role="row"] [tabindex="-1"]`
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
        let { adminLink }=locator.admin_Page;
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
}

exports.psTypeData = psTypeData;