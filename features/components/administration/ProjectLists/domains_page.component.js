const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1010"] [data-componentid="r1NavToggle"]`,
        projListLink: `//*[text()="Project Lists"]`,
        domainsLink: `//*[text()="Domains"]`,
    },

    domainsCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        domainBox: `[data-componentid="r1MainViewPort"] [id="adminListsDomainGrid-body"] [data-recordindex="3"] [role="row"] [tabindex="-1"]`,
        domainBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsDomainGrid-body"] [data-recordindex="4"] [role="row"] [tabindex="-1"]`,
        domainBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsDomainGrid-body"] [data-recordindex="5"] [role="row"] [tabindex="-1"]`
    }
}

class domainsTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    // Project OBS
    domainsLink = async() => {
        let page=this.page;
        let { adminLink }=locator.admin_Page;
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    projectDomainsLink = async() => {
        let page=this.page;
        let { domainsLink, projListLink }=locator.admin_Page;

        await page.click(projListLink);
        // await page.waitForTimeout(1000);
        await page.click(domainsLink);
        await page.waitForTimeout(3000);
    }

    listDomainsSelect = async() => {
        let page=this.page;
        let { domainBox, domainBoxB, domainBoxC }=locator.domainsCheckBox;

        await page.click(domainBox);
        await page.click(domainBoxB);
        await page.click(domainBoxC);
        await page.waitForTimeout(3000);
    }


}

exports.domainsTypeData = domainsTypeData;