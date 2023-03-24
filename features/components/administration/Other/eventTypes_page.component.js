const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1018"] [data-componentid="r1NavToggle"]`,
        otherLink: `//*[text()="Other"]`,
        eventTypeLink: `//*[text()="Event Types"]`,
    },

    eventTypeNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        eventTypeAddBtn: `[id="AdminEventTypeGrid"] [role="toolbar"] [data-qtip="Add"]`,

    },

    eventTypeCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        eventTypeBox: `[data-componentid="r1MainViewPort"] [id="AdminEventTypeGrid-body"] [data-recordindex="4"] [data-columnid="checkcolumn-1109"]`,
        eventTypeBoxB: `[data-componentid="r1MainViewPort"] [id="AdminEventTypeGrid-body"] [data-recordindex="5"] [data-columnid="checkcolumn-1109"]`,
        eventTypeBoxC: `[data-componentid="r1MainViewPort"] [id="AdminEventTypeGrid-body"] [data-recordindex="6"] [data-columnid="checkcolumn-1109"]`
    }
}


class EventTypesData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    otherListLink = async () => {
        let page = this.page;
        let { menuSliderBtn, adminLink } = locator.admin_Page;
        await page.click(menuSliderBtn);
        // await page.waitForTimeout(1000);
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

    listEventTypeAdd = async () => {
        let page = this.page;
        let { eventTypeAddBtn } = locator.eventTypeNav;

        await page.click(eventTypeAddBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.EventTypesData = EventTypesData;
