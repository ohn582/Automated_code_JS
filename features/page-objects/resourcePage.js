const { action } = require('../utilities/action')

const locators = {        
    resourcePage: {

        resAddBtn: `[id="R1TResourceData-bodyWrap"] [data-qtip="Add"]`,
        addResOBSDropdown: `[id="resourceAddPanel-bodyWrap"] [id="r1ResourceAddNodes-trigger-_trigger1"]`,
        addResOBSName: `[id="resourceAddPanel-bodyWrap"] [id="r1ResourceAddName-inputEl"]`,
        addResOBSCostCategory: `[id="resourceAddPanel"] [id="resourceAddPanel-innerCt"] [id="combo-1085-trigger-picker"]`,
        addResAddBtnWindow: `//*[text()="Add"]`,

        //Resource Capacity
        capData1: `[id="gridview-1028"] [data-recordindex="1"] [data-columnid="numbercolumn-1046"]`,
        capData2: `[id="gridview-1028"] [data-recordindex="7"] [data-columnid="numbercolumn-1045"]`,
        capData3: `[id="gridview-1028"] [data-recordindex="4"] [data-columnid="numbercolumn-1048"]`,
        capData4: `[id="gridview-1028"] [data-recordindex="11"] [data-columnid="numbercolumn-1050"]`,


        //Save Btn
        UDLDetailProjSave: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [id="button-1053"]`,
        capSave: `[id="r1CapacityGrid-bodyWrap"] [data-componentid="capacityGridSave"]`,
        capRefresh: `[id="r1CapacityGrid-bodyWrap"] [id="capacityGridReload"]`,
        saveYes: `//*[text()="Yes"]`,
        saveOk: `[id="messagebox-1001"] [data-componentid="button-1005"]`,
    },

}

class resourcePage {
    constructor(page) {
        this.page = page;
    }


    //Rescource data
    resourceCreateData = async() => {
        let page=this.page;
        let { resAddBtn, addResOBSDropdown, addResOBSName, addResOBSCostCategory, addResAddBtnWindow }=locators.resourcePage;

        await page.click(resAddBtn);
        // await page.waitForTimeout(2000);
        await page.click(addResOBSDropdown);
        // await page.waitForTimeout(2000);
        await page.click(addResOBSName);
        await page.keyboard.type('ProjectC');
        // await page.waitForTimeout(2000);
        await page.click(addResOBSCostCategory);
        // await page.waitForTimeout(3000);
        await page.click(addResAddBtnWindow);
        await page.waitForTimeout(3000);
    }


    
    //Rescouce Capacity
    capacityUpdateData = async() => {
        let page=this.page;
        let { capData1 }=locators.resourcePage;
        let textInput = await page.$(capData1);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('4');
        await page.waitForTimeout(1000);
    }

    capacityUpdateDataB = async() => {
        let page=this.page;
        let { capData2 }=locators.resourcePage;
        let textInput = await page.$(capData2);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('10');
        await page.waitForTimeout(1000);
    }

    capacityUpdateDataC = async() => {
        let page=this.page;
        let { capData3 }=locators.resourcePage;
        let textInput = await page.$(capData3);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('2.53');
        await page.waitForTimeout(1000);
    }

    capacityUpdateDataD = async() => {
        let page=this.page;
        let { capData4 }=locators.resourcePage;
        let textInput = await page.$(capData4);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('1.12');
        await page.waitForTimeout(1000);
    }



    capacitySave = async() => {
        let page=this.page;
        let { capSave, saveOk, capRefresh }=locators.resourcePage;
        await page.click(capSave)
        await page.click(saveOk)
        await page.click(capRefresh)
        await page.waitForTimeout(1000);
    }

}

module.exports.resourcePage = resourcePage;
