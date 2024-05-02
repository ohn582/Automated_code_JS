const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        otherLink: `//*[text()="Other"]`,
        pulseLink: `//*[text()="Pulse"]`,
    },

    pulseCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        pulseBoxA: `[id="AdminPulseGridForm-bodyWrap"] [role="rowgroup"] [data-recordindex="0"]`,
        pulseBoxB: `[id="AdminPulseGridForm-bodyWrap"] [role="rowgroup"] [data-recordindex="0"]`,
        pulseBoxC: `[id="AdminPulseGridForm-bodyWrap"] [role="rowgroup"] [data-recordindex="0"]`,
    }
}


class PulseTypesData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    otherListLink = async () => {
        let page = this.page;
        let { adminLink, otherLink, pulseLink } = locator.admin_Page;
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.click(otherLink);
        // await page.waitForTimeout(1000);
        await page.click(pulseLink);
        // await page.waitForTimeout(3000);
    }

    listPulseSelectDataA = async () => {
        let page = this.page;
        let { pulseBoxA } = locator.pulseCheckBox;

        await page.click(pulseBoxA);

        await page.waitForTimeout(3000);
    }

    listPulseSelectDataB = async () => {
        let page = this.page;
        let { pulseBoxB } = locator.pulseCheckBox;

        await page.click(pulseBoxB);

        await page.waitForTimeout(3000);
    }

    listPulseSelectDataC = async () => {
        let page = this.page;
        let { pulseBoxC } = locator.pulseCheckBox;

        await page.click(pulseBoxC);

        await page.waitForTimeout(3000);
    }
}

module.exports.PulseTypesData = PulseTypesData;
