const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1010"] [data-componentid="r1NavToggle"]`,
        projListLink: `//*[text()="Project Lists"]`,
        domainsLink: `//*[text()="Domains"]`,
    },

    domainsNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        domainAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`
    },

    domainsCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        domainBox: `[data-componentid="r1MainViewPort"] [id="adminListsDomainGrid-body"] [data-recordindex="5"] [data-columnid="checkcolumn-1044"]`,
        domainBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsDomainGrid-body"] [data-recordindex="6"] [data-columnid="checkcolumn-1044"]`,
        domainBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsDomainGrid-body"] [data-recordindex="7"] [data-columnid="checkcolumn-1044"]`
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
        let { menuSliderBtn, adminLink }=locator.admin_Page;
        await page.click(menuSliderBtn);
        // await page.waitForTimeout(1000);
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

    listDomainsAdd = async() => {
        let page=this.page;
        let { domainAddBtn }=locator.domainsNav;

        await page.click(domainAddBtn);
        // await page.waitForTimeout(3000);
    }
}

exports.domainsTypeData = domainsTypeData;