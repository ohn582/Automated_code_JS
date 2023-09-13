const locator = {
    projectNav: {
        projectGridMode:`[id="R1TProject"] [id="ProjectListToolBar"] [aria-label="Grid Mode"]`,
    },

    project_Page: {
        //Project Data
        projLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-2"]`,
        projInitiation: `//*[text()="Initiation"]`,


        initiationDataSelectA: `[id="ProjectInitiationList-targetEl"] [data-recordindex="2"]`,
        initiationDataSelectB: `[id="ProjectInitiationList-targetEl"] [data-recordindex="1"]`,
        initiationDataSelectC: `[id="ProjectInitiationList-targetEl"] [data-recordindex="0"]`,
    },
}

class initiationTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    //Project Data Create
    initiationLink = async() => {
        let page=this.page;
        let { projLink, projInitiation }=locator.project_Page;
        // await page.click(MenuSliderBtn);
        // await page.waitForTimeout(1000);
        await page.click(projLink);
        // await page.waitForTimeout(1000);
        await page.click(projInitiation);
        await page.waitForTimeout(1000);
    }

    listInitiationSelectA = async() => {
        let page=this.page;
        let { projectGridMode }=locator.projectNav;

        await page.click(projectGridMode);
        await page.waitForTimeout(1000);
    }

    listInitiationSelectB= async() => {
        let page=this.page;
        let { projectGridMode }=locator.projectNav;

        await page.click(projectGridMode);
        await page.waitForTimeout(1000);
    }

    // Project Data Delete
    listProjectSelect = async() => {
        let page=this.page;
        let { pdBoxA, pdBoxB, pdBoxC }=locator.project_Page;
        await page.click(pdBoxA);
        await page.click(pdBoxB);
        await page.click(pdBoxC);
        await page.waitForTimeout(3000);
    }



}

exports.initiationTypeData = initiationTypeData;