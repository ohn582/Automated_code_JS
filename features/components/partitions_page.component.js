const locator = {
    //Administration
    adminNav: {
        //Partition link
        MenuSliderBtn: `[id="toolbar-1010-innerCt"] [data-ref="targetEl"] [id="r1NavToggle"]`,

        adminLink: `//*[text()="Administration"]`,
        objLink: `//*[text()="Objects"]`,
        partLink: `//*[text()="Partitions"]`,

    },

}

class partitionsTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    // Partition link
    administrationLink = async() => {
        let page=this.page;
        let { adminLink, MenuSliderBtn, objLink, partLink }=locator.adminNav;
        await page.click(MenuSliderBtn);
        // await page.waitForTimeout(1000);
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.click(objLink);
        // await page.waitForTimeout(1000);
        await page.click(partLink);
        await page.waitForTimeout(3000);
    }

    partitionsLink = async() => {
        let page=this.page;
        let { objLink, partLink }=locator.adminNav;
        await page.click(objLink);
        await page.click(partLink);
        await page.waitForTimeout(3000);
    }

}

exports.partitionsTypeData = partitionsTypeData;