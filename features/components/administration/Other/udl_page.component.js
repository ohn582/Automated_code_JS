const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1018"] [data-componentid="r1NavToggle"]`,
        otherLink: `//*[text()="Other"]`,
        udlLink: `//*[text()="User Defined Lists"]`,
    },

    udlNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        uldDropdown: `[id="AdminUserDefinedListGrid-bodyWrap"] [role="toolbar"] [id="AdminUdfTypeSelector-btnEl"]`,
        udlAddDetailsBtn: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [role="toolbar"] [aria-label="Add"]`,

        // selectin Feild 3 
        udlSelecting: `[id="AdminUdfListsGrid-body"] [data-boundview="gridview-1035"]`,
    },

    udlCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        udlBox: `[data-componentid="r1MainViewPort"] [id="AdminUserDefinedListDetailGrid-bodyWrap"] [data-recordindex="0"] [data-columnid="checkcolumn-1069"]`,
        udlBoxB: `[data-componentid="r1MainViewPort"] [id="AdminUserDefinedListDetailGrid-bodyWrap"] [data-recordindex="1"] [data-columnid="checkcolumn-1069"]`,
        udlBoxC: `[data-componentid="r1MainViewPort"] [id="AdminUserDefinedListDetailGrid-bodyWrap"] [data-recordindex="2"] [data-columnid="checkcolumn-1069"]`
    }
}


class UserDefinedData {
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

    listUDL_Select = async () => {
        let page = this.page;
        let { udlLink, otherLink } = locator.admin_Page;

        await page.click(otherLink);
        // await page.waitForTimeout(1000);
        await page.click(udlLink);
        await page.waitForTimeout(3000);
    }

    listUDL_Dropdown = async () => {
        let page = this.page;
        let { uldDropdown } = locator.udlNav;

        let textInput = await page.$(uldDropdown);

        await textInput.click({ clickCount: 3 })
        await page.click(uldDropdown);
        // await page.waitForTimeout(3000);
    }

    listUDL_DataSelect = async () => {
        let page = this.page;
        let { udlSelecting } = locator.udlNav;

        await page.click(udlSelecting);
        // await page.waitForTimeout(3000);
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
