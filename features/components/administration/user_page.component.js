const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1010"] [data-componentid="r1NavToggle"]`,
        userRightsLink: `//*[text()="Users & Rights"]`,
        userLink: `//*[text()="Users"]`,
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

class userTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    // Project OBS
    userLink = async() => {
        let page=this.page;
        let { menuSliderBtn, adminLink, userRightsLink, userLink }=locator.admin_Page;
        await page.click(menuSliderBtn);
        // await page.waitForTimeout(1000);
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.click(userRightsLink);
        // await page.waitForTimeout(1000);
        await page.click(userLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }
}

exports.userTypeData = userTypeData;