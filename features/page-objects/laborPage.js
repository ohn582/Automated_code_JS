const { action } = require('../utilities/action')

const locators = {   

    resourcePage: {

        LaborAddBtn: `[id="r1LaborAssignmentPanel-bodyWrap"] [data-componentid="laborAssignmentAddBtn"]`,
        LaborDropdown: `//*[text()="Add Resource Assignment"]`,

        laborPicker: `[id="insert_resource_assignment_form"] [id="AddResourceAssignmentDialogProjectCombo-bodyEl"] [data-ref="triggerWrap"] [data-ref="inputWrap"]`,
        laborPickerSelectA: `//*[text()="TEST 1 UPDATE A"]`,

        laborSkillPicker: `[id="AddResourceAssignmentDialogSkillCombo-picker-listWrap"] [data-recordindex="2"]`,

        laborActivePicker: `[id="PdwInsertResourceAssignmentrActive-picker-listEl"] [data-recordindex="1"]`,


        laborCheckBoxA: `[data-componentid="gridview-1119"] [data-recordindex="0"] [data-columnid="checkcolumn-1128"]`,
        laborCheckBoxB: `[data-componentid="gridview-1119"] [data-recordindex="0"] [data-columnid="checkcolumn-1128"]`,

        //Nav Labor
        laborCreateBtn: `[id="toolbar-1126"] [data-componentid="AddResourceAssignmentDialogAddClose"]`,
        laborSaveBtn: `[id="r1LaborAssignmentPanel-bodyWrap"] [id="toolbar-1044-innerCt"] [data-qtip="Save"]`,
        

        //Save Btn,
        laborRefresh: `[id="r1CapacityGrid-bodyWrap"] [id="capacityGridReload"]`,
        saveYes: `//*[text()="Yes"]`,
        saveOk: `//*[text()="OK"]`,

    },

}

class laborPage {
    constructor(page) {
        this.page = page;
    }


    //Rescource Create data
    laborCreateData = async() => {
        let page=this.page;
        let { LaborAddBtn, LaborDropdown, laborPicker, laborSkillPicker, laborActivePicker }=locators.resourcePage;

        let textInputA = await page.$(laborPicker);
        let textInputB = await page.$(laborSkillPicker);
        let textInputC = await page.$(laborActivePicker);

        await page.click(LaborAddBtn);
        // await page.waitForTimeout(1000);
        await page.click(LaborDropdown);
        // await page.waitForTimeout(1000);
        await textInputA.click({clickCount: 1})
        await page.keyboard.type('TEST 1 UPDATE A');
        await textInputB.click({clickCount: 1})
        await page.keyboard.type('CAD');
        await textInputC.click({clickCount: 1})
        await page.keyboard.type('true');
        await page.waitForTimeout(1000);

    }

    laborCreateDataB = async() => {
        let page=this.page;
        let { LaborAddBtn, LaborDropdown, laborAddName, laborPickerB, laborAddSkill, laborSkillPickerB, laborAddActive, laborActivePickerB, laborAddCostCategory, laborCostCategoryPickerB, laborCheckBoxB, laborCreateBtn }=locators.resourcePage;

        await page.click(LaborAddBtn);
        // await page.waitForTimeout(1000);
        await page.click(LaborDropdown);
        // await page.waitForTimeout(1000);
        
        await page.click(laborAddName);
        // await page.waitForTimeout(1000);
        await page.click(laborPickerB);
        // await page.waitForTimeout(2000);

        await page.click(laborAddSkill);
        // await page.waitForTimeout(1000);
        await page.click(laborSkillPickerB);
        // await page.waitForTimeout(2000);
        
        await page.click(laborAddActive);
        // await page.waitForTimeout(1000);
        await page.click(laborActivePickerB);
        // await page.waitForTimeout(2000);

        await page.click(laborAddCostCategory);
        await page.click(laborCostCategoryPickerB);
        // await page.waitForTimeout(2000);

        await page.click(laborAddActive);
        await page.click(laborActivePickerB);
  
        await page.click(laborCheckBoxB);
        
        await page.click(laborCreateBtn);
        // await page.waitForTimeout(3000);
    }


    //Rescource Update data



    laborSave = async() => {
        let page=this.page;
        let { laborSaveBtn, saveOk, capRefresh }=locators.resourcePage;
        await page.click(laborSaveBtn)
        // await page.click(saveOk)
        // await page.click(capRefresh)
        await page.waitForTimeout(3000);
    }

}

module.exports.laborPage = laborPage;
