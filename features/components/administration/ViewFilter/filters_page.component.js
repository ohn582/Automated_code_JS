const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1010"] [data-componentid="r1NavToggle"]`,
        viewFilterLink: `//*[text()="Views & Filters"]`,
        filterLink: `//*[text()="Filters"]`,
    },

    //Administration
    filterViewNav: {
        //Filter
        filterDrop: `[role="toolbar"] [data-componentid="AdminFiltersTypeSelector"]`,




        projOBSAddBtn: `[id="AdminNodeTreeGrid-bodyWrap"] [aria-label="Add"]`,
        // partBoxCheckA: `[id="adminListsPartitionGrid-body"] [data-recordindex="4"] [data-columnid="checkcolumn-1039"]`,
        projOBSName: `//*[text()="Secure node"]`,
        projOBSNameDrop: `[id="AdminNodeTreeGrid-body"] [data-recordindex="3"] [role="presentation"]`,

        resOBSDrop: `[id="AdminNodeTreeGrid-bodyWrap"] [tabindex="0"]`,

        projOBSSiblingDataCreated: `[id="AdminNodeTreeGrid-body"] [data-recordindex="4"] [role="presentation"]`,





        //Pulse
        pulseSelect: `//*[text()="Pulse"]`,
        pulseAdd: `[id="R1TPulse-body"] [aria-label="Add"]`,
        pulseType: `[id="R1TPulse-body"] [id="celleditor-1064"]`,
    },

}

class viewFilterTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    // Project OBS
    adminOBSPeroidsLink = async() => {
        let page=this.page;
        let { menuSliderBtn, adminLink, viewFilterLink, filterLink }=locator.admin_Page;
        await page.click(menuSliderBtn);
        // await page.waitForTimeout(1000);
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.click(viewFilterLink);
        // await page.waitForTimeout(1000);
        await page.click(filterLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    filterDropDownMenu = async() => {
        let page=this.page;
        let { filterDrop, }=locator.filterViewNav;

        let textInput = await page.$(filterDrop); 
        await textInput.click({clickCount: 3})
        await page.waitForTimeout(3000);
    }
    

}

exports.viewFilterTypeData = viewFilterTypeData;