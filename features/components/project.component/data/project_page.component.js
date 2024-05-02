const locator = {
    projectNav: {
        projectGridMode:`[id="R1TProject"] [id="ProjectListToolBar"] [aria-label="Grid Mode"]`,
    },

    project_Page: {
        //Project Data
        projLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-2"]`,
        projData: `[id="r1ProjectMain"] [class="x-container x-box-item x-container-default x-box-layout-ct"] [id="ProjectMainData"]`,


        pdBoxA:`[id="ProjectListGrid-body"] [role="rowgroup"] [data-recordindex="13"] [role="row"] [tabindex="-1"]`,
        pdBoxB:`[id="ProjectListGrid-body"] [role="rowgroup"] [data-recordindex="14"] [role="row"] [tabindex="-1"]`,
        // pdBoxC:`[role="rowgroup"] [data-recordindex="7"] [role="row"] [tabindex="-1"]`,
    },
}

class projectTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    //Project Data Create
    projLinkSelect = async() => {
        let page=this.page;
        let { projLink, projData }=locator.project_Page;
        // await page.click(MenuSliderBtn);
        // await page.waitForTimeout(1000);
        await page.click(projLink);
        // await page.waitForTimeout(1000);
        await page.click(projData);
        await page.waitForTimeout(1000);
    }

    projLinkSelectB = async() => {
        let page=this.page;
        let { projData }=locator.project_Page;
        // await page.click(MenuSliderBtn);
        // await page.waitForTimeout(1000);
        await page.click(projData);
        await page.waitForTimeout(1000);
    }

    projGridModeSelect = async() => {
        let page=this.page;
        let { projectGridMode }=locator.projectNav;

        await page.click(projectGridMode);
        await page.waitForTimeout(1000);
    }


    // Project Data Delete
    listProjectSelect = async() => {
        let page=this.page;
        let { pdBoxA, pdBoxB }=locator.project_Page;
        await page.click(pdBoxA);
        await page.click(pdBoxB);
        // await page.click(pdBoxC);
        await page.waitForTimeout(3000);
    }



}

exports.projectTypeData = projectTypeData;