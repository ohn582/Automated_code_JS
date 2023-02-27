const locator = {
    //Administration
    partNav: {
        //Partition link
        MenuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1010"] [data-componentid="r1NavToggle"]`,

        adminLink: `//*[text()="Administration"]`,
        objLink: `//*[text()="Objects"]`,
        partLink: `//*[text()="Partitions"]`,

    },

    partitions: {
        checkBoxSelectA: `[id="adminListsPartitionGrid-body"] [data-recordindex="3"] [data-columnid="checkcolumn-1037"]`,
        checkBoxSelectB: `[id="adminListsPartitionGrid-body"] [data-recordindex="4"] [data-columnid="checkcolumn-1037"]`,
        checkBoxSelectC: `[id="adminListsPartitionGrid-body"] [data-recordindex="5"] [data-columnid="checkcolumn-1037"]`,
    },

}

class partitionsTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    // Partition link
    objectsLink = async() => {
        let page=this.page;
        let { MenuSliderBtn, adminLink, objLink }=locator.partNav;
        await page.click(MenuSliderBtn);
        await page.click(adminLink);
        await page.click(objLink);
        await page.waitForTimeout(3000);
    }

    partitionsLink = async() => {
        let page=this.page;
        let { partLink }=locator.partNav;
        await page.click(partLink);
        await page.waitForTimeout(3000);
    }

    partitionsCheckBox = async() => {
        let page=this.page;
        let { checkBoxSelectA, checkBoxSelectB, checkBoxSelectC }=locator.partitions;

        await page.click(checkBoxSelectA);
        // await page.waitForTimeout(1000);
        await page.click(checkBoxSelectB);
        // await page.waitForTimeout(1000);
        await page.click(checkBoxSelectC);

        await page.waitForTimeout(3000);
    }

}

exports.partitionsTypeData = partitionsTypeData;