const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1010"] [data-componentid="r1NavToggle"]`,
        resListLink: `//*[text()="Resource Lists"]`,
        locationLink: `//*[text()="Locations"]`,
    },

    locationNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        locationAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`
    },

    locationCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        locationBox: `[data-componentid="r1MainViewPort"] [id="adminListsLocationGrid-bodyWrap"] [data-recordindex="14"] [data-columnid="checkcolumn-1039"]`,
        locationBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsLocationGrid-bodyWrap"] [data-recordindex="15"] [data-columnid="checkcolumn-1039"]`,
        locationBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsLocationGrid-bodyWrap"] [data-recordindex="16"] [data-columnid="checkcolumn-1039"]`
    }
}


class LocationsTypeData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    resourceListLink = async () => {
        let page = this.page;
        let { menuSliderBtn, adminLink } = locator.admin_Page;
        await page.click(menuSliderBtn);
        // await page.waitForTimeout(1000);
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    listLocationsSelect = async () => {
        let page = this.page;
        let { locationLink, resListLink } = locator.admin_Page;

        await page.click(resListLink);
        // await page.waitForTimeout(1000);
        await page.click(locationLink);
        await page.waitForTimeout(3000);
    }

    listLocationsSelectData = async () => {
        let page = this.page;
        let { locationBox, locationBoxB, locationBoxC } = locator.locationCheckBox;

        await page.click(locationBox);
        await page.click(locationBoxB);
        await page.click(locationBoxC);
        await page.waitForTimeout(3000);
    }

    listLocationsAdd = async () => {
        let page = this.page;
        let { locationAddBtn } = locator.locationNav;

        await page.click(locationAddBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.LocationsTypeData = LocationsTypeData;
