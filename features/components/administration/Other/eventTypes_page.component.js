const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        otherLink: `//*[text()="Other"]`,
        eventTypeLink: `//*[text()="Event Types"]`,
    },

    eventTypeCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        eventTypeBox: `[data-componentid="r1MainViewPort"] [id="AdminEventTypeGrid-body"] [data-recordindex="3"] [role="row"] [tabindex="-1"]`,
        eventTypeBoxB: `[data-componentid="r1MainViewPort"] [id="AdminEventTypeGrid-body"] [data-recordindex="4"] [role="row"] [tabindex="-1"]`,
        eventTypeBoxC: `[data-componentid="r1MainViewPort"] [id="AdminEventTypeGrid-body"] [data-recordindex="5"] [role="row"] [tabindex="-1"]`
    }
}


class EventTypesData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    otherListLink = async () => {
        let page = this.page;
        let { adminLink } = locator.admin_Page;
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    listEventTypeSelect = async () => {
        let page = this.page;
        let { eventTypeLink, otherLink } = locator.admin_Page;

        await page.click(otherLink);
        // await page.waitForTimeout(1000);
        await page.click(eventTypeLink);
        await page.waitForTimeout(3000);
    }

    listEventTypeSelectData = async () => {
        let page = this.page;
        let { eventTypeBox, eventTypeBoxB, eventTypeBoxC } = locator.eventTypeCheckBox;

        await page.click(eventTypeBox);
        await page.click(eventTypeBoxB);
        await page.click(eventTypeBoxC);
        await page.waitForTimeout(3000);
    }
}

module.exports.EventTypesData = EventTypesData;
