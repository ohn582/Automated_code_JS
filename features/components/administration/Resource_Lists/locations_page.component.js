const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        resListLink: `//*[text()="Resource Lists"]`,
        locationLink: `//*[text()="Locations"]`,
    },

    locationCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        locationBox: `[id="adminListsLocationGrid-bodyWrap"] [data-recordindex="2"] [role="row"] [tabindex="-1"]`,
        locationBoxB: `[id="adminListsLocationGrid-bodyWrap"] [data-recordindex="3"] [role="row"] [tabindex="-1"]`,
        locationBoxC: `[id="adminListsLocationGrid-bodyWrap"] [data-recordindex="4"] [role="row"] [tabindex="-1"]`
    }
}


class LocationsTypeData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    resourceListLink = async () => {
        let page = this.page;
        let { adminLink } = locator.admin_Page;
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
}

module.exports.LocationsTypeData = LocationsTypeData;
