const locator = {
    //Administration
    partNav: {
        //Partition link
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        objLink: `//*[text()="Objects"]`,
        partLink: `//*[text()="Partitions"]`,

    },

    partitions: {
        checkBoxSelectA: `[id="adminListsPartitionGrid-body"] [data-recordindex="3"] [role="row"] [tabindex="-1"]`,
        checkBoxSelectB: `[id="adminListsPartitionGrid-body"] [data-recordindex="4"] [role="row"] [tabindex="-1"]`,
        checkBoxSelectC: `[id="adminListsPartitionGrid-body"] [data-recordindex="5"] [role="row"] [tabindex="-1"]`,
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
        let { adminLink, objLink }=locator.partNav;
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