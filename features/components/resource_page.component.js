const locator = {

    resource_Page: {
        //Resource Data
        resourceLink: `//*[text()="Resource"]`,
        resData: `[id="R1Navigation"] [data-recordid="80"]`,

        resAddBtn: `[id="R1TResourceData-bodyWrap"] [data-qtip="Add"]`,
        addResOBSDropdown: `[id="resourceAddPanel-bodyWrap"] [id="r1ResourceAddNodes-trigger-_trigger1"]`,
        addResOBSName: `[id="resourceAddPanel-bodyWrap"] [id="r1ResourceAddName-inputEl"]`,
        addResOBSCostCategory: `[id="resourceAddPanel"] [id="resourceAddPanel-innerCt"] [id="combo-1085-trigger-picker"]`,
        addResAddBtnWindow: `//*[text()="Add"]`,

        //UDLD Save Btn
        UDLDetailProjSave: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [id="button-1053"]`,
        saveYes: `//*[text()="Yes"]`,
        saveOk: `//*[text()="Ok"]`,


        //Resource Assignments
    },

}

class resourceTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    //Rescource Data
    resourceDataSelect = async() => {
        let page=this.page;
        let { resourceLink, resData }=locator.resource_Page;
        await page.click(resourceLink);
        await page.waitForTimeout(1000);
        await page.click(resData);
        await page.waitForTimeout(3000);
    }

    resourceCreateData = async() => {
        let page=this.page;
        let { resAddBtn, addResOBSDropdown, addResOBSName, addResOBSCostCategory, addResBtnWindow }=locator.resource_Page;
        await page.click(resAddBtn);
        // await page.waitForTimeout(2000);
        await page.click(addResOBSDropdown);
        // await page.waitForTimeout(2000);
        await page.click(addResOBSName);
        await page.keyboard.type('ProjectC');
        // await page.waitForTimeout(2000);
        await page.click(addResOBSCostCategory);
        // await page.waitForTimeout(3000);
        await page.click(addResBtnWindow);
        await page.waitForTimeout(3000);
    }

}

exports.resourceTypeData = resourceTypeData;