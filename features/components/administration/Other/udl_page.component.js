const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        otherLink: `//*[text()="Other"]`,
        udlLink: `//*[text()="User Defined Lists"]`,
    },

    udlNav: {
        udlAddDetailsBtn: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [role="toolbar"] [aria-label="Add"]`,
    },

    udlCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        udlBox: `[data-componentid="r1MainViewPort"] [id="AdminUserDefinedListDetailGrid-bodyWrap"] [data-recordindex="0"] [class="x-grid-checkcolumn"]`,
        udlBoxB: `[data-componentid="r1MainViewPort"] [id="AdminUserDefinedListDetailGrid-bodyWrap"] [data-recordindex="1"] [class="x-grid-checkcolumn"]`,
        udlBoxC: `[data-componentid="r1MainViewPort"] [id="AdminUserDefinedListDetailGrid-bodyWrap"] [data-recordindex="2"] [class="x-grid-checkcolumn"]`
    }
}


class UserDefinedData {
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

    listUDL_Select = async () => {
        let page = this.page;
        let { udlLink, otherLink } = locator.admin_Page;

        await page.click(otherLink);
        // await page.waitForTimeout(1000);
        await page.click(udlLink);
        await page.waitForTimeout(3000);
    }

    listUDL_SelectData = async () => {
        let page = this.page;
        let { udlBox, udlBoxB, udlBoxC } = locator.udlCheckBox;

        await page.click(udlBox);
        await page.click(udlBoxB);
        await page.click(udlBoxC);
        await page.waitForTimeout(3000);
    }

    listUDL_Add = async () => {
        let page = this.page;
        let { udlAddDetailsBtn } = locator.udlNav;

        await page.click(udlAddDetailsBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.UserDefinedData = UserDefinedData;
