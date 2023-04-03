const { action } = require('../utilities/action')

const locators = {   

    resourcePage: {

        LaborAddBtn: `[id="r1LaborAssignmentPanel-bodyWrap"] [data-componentid="laborAssignmentAddBtn"]`,
        LaborDropdown: `//*[text()="Add Resource Assignment"]`,

        laborPicker: `[id="insert_resource_assignment_form"] [id="AddResourceAssignmentDialogProjectCombo"] [id="AddResourceAssignmentDialogProjectCombo-inputWrap"]`,
        laborSkillPicker: `[id="insert_resource_assignment_form"] [id="AddResourceAssignmentDialogSkillCombo"] [id="AddResourceAssignmentDialogSkillCombo-inputEl"]`,
        laborActivePicker: `[id="insert_resource_assignment_form"] [id="PdwInsertResourceAssignmentrActive"] [id="PdwInsertResourceAssignmentrActive-inputEl"]`,

        //Creating Labor Data 1
        tes1: `//*[text()="true"]`,
        laborCheckBox: `[id="laborAssignmentGrid-body"] [data-recordindex="278"] [tabindex="-1"]`,

        tes1LaborDataBox: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="0"] [data-columnid="numbercolumn-1082"]`,
        tes1LaborDataBoxB: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="0"] [data-columnid="numbercolumn-1093"]`,
        tes1LaborDataBoxC: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="0"] [data-columnid="numbercolumn-1094"]`,
        tes1LaborDataBoxD: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="0"] [data-columnid="numbercolumn-1095"]`,
        tes1LaborDataBoxE: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="0"] [data-columnid="numbercolumn-1096"]`,
        tes1LaborDataBoxF: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="0"] [data-columnid="numbercolumn-1097"]`,
        tes1LaborDataBoxG: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="0"] [data-columnid="numbercolumn-1098"]`,
        tes1LaborDataBoxH: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="0"] [data-columnid="numbercolumn-1099"]`,
        tes1LaborDataBoxI: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="0"] [data-columnid="numbercolumn-1100"]`,
        tes1LaborDataBoxJ: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="0"] [data-columnid="numbercolumn-1101"]`,
        tes1LaborDataBoxK: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="0"] [data-columnid="numbercolumn-1102"]`,
        tes1LaborDataBoxL: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="0"] [data-columnid="numbercolumn-1103"]`,
        tes1LaborDataBoxM: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="0"] [data-columnid="numbercolumn-1104"]`,


        //Creating Labor Data 2
        tes2: `//*[text()="true"]`,
        laborCheckBoxB: `[id="laborAssignmentGrid-body"] [data-recordindex="270"] [tabindex="-1"]`,

        tes2LaborDataBox: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1082"]`,
        tes2LaborDataBoxB: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1093"]`,
        tes2LaborDataBoxC: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1094"]`,
        tes2LaborDataBoxD: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1095"]`,
        tes2LaborDataBoxE: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1096"]`,
        tes2LaborDataBoxF: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1097"]`,
        tes2LaborDataBoxG: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1098"]`,
        tes2LaborDataBoxH: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1099"]`,
        tes2LaborDataBoxI: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1100"]`,
        tes2LaborDataBoxJ: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1101"]`,
        tes2LaborDataBoxK: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1102"]`,
        tes2LaborDataBoxL: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1103"]`,
        tes2LaborDataBoxM: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1104"]`,



        
        //Creating Labor Data 3
        tes3: `//*[text()="true"]`,
        laborCheckBoxC: `[id="laborAssignmentGrid-body"] data-recordindex="339"] [tabindex="-1"]`,

        tes3LaborDataBox: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1082"]`,
        tes3LaborDataBoxB: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1093"]`,
        tes3LaborDataBoxC: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1094"]`,
        tes3LaborDataBoxD: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1095"]`,
        tes3LaborDataBoxE: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1096"]`,
        tes3LaborDataBoxF: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1097"]`,
        tes3LaborDataBoxG: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1098"]`,
        tes3LaborDataBoxH: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1099"]`,
        tes3LaborDataBoxI: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1100"]`,
        tes3LaborDataBoxJ: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1101"]`,
        tes3LaborDataBoxK: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1102"]`,
        tes3LaborDataBoxL: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1103"]`,
        tes3LaborDataBoxM: `[id="laborAssignmentGrid-bodyWrap"] [id="ext-element-56"] [data-recordindex="1"] [data-columnid="numbercolumn-1104"]`,



        //Delete Labor Data
        // tes3: `//*[text()="true"]`,
        // laborCheckBoxC: `[id="R1TALabor"] [id="AddResourceAssignmentDialogResourceGrid-body"] [data-recordindex="1"] [tabindex="-1"]`,

        laborAddCloseBtn: `//*[text()="Add & Close"]`,
        
        //Save Btn,
        laborSaveBtn: `[id="R1Main"] [role="toolbar"] [aria-label="Save"]`,
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
        let { LaborAddBtn, LaborDropdown, laborPicker, laborSkillPicker, laborActivePicker,laborCheckBox, tes1, laborAddCloseBtn }=locators.resourcePage;

        await page.click(LaborAddBtn);
        // await page.waitForTimeout(1000);
        await page.click(LaborDropdown);
        // await page.waitForTimeout(1000);
        await page.click(laborPicker);
        await page.keyboard.type('AABBCC');
        // await page.waitForTimeout(1000);
        await page.click(laborSkillPicker);
        await page.keyboard.type('CAD');
        // await page.waitForTimeout(1000);
        await page.click(laborActivePicker);
        await page.keyboard.type('true');
        await page.click(tes1);
        // await page.waitForTimeout(1000);

        await page.click(laborCheckBox);
        // await page.waitForTimeout(1000);

        await page.click(laborAddCloseBtn);

        // await page.waitForTimeout(3000);
    }

    laborCreateDataB = async() => {
        let page=this.page;
        let { LaborAddBtn, LaborDropdown, laborPicker, laborSkillPicker, laborActivePicker, laborCheckBoxB, tes2, laborAddCloseBtn }=locators.resourcePage;

        await page.click(LaborAddBtn);
        // await page.waitForTimeout(1000);
        await page.click(LaborDropdown);
        // await page.waitForTimeout(1000);
        await page.click(laborPicker);
        await page.keyboard.type('Blaisdell');
        // await page.waitForTimeout(1000);
        await page.click(laborSkillPicker);
        await page.keyboard.type('DBA');
        // await page.waitForTimeout(1000);
        await page.click(laborActivePicker);
        await page.keyboard.type('true');
        await page.click(tes2);

        // await page.waitForTimeout(1000);
        await page.click(laborCheckBoxB);

        await page.click(laborAddCloseBtn);

        // await page.waitForTimeout(1000);
    }

    laborCreateDataC = async() => {
        let page=this.page;
        let { LaborAddBtn, LaborDropdown, laborPicker, laborSkillPicker, laborActivePicker, laborCheckBoxB, tes3, laborAddCloseBtn }=locators.resourcePage;

        await page.click(LaborAddBtn);
        // await page.waitForTimeout(1000);
        await page.click(LaborDropdown);
        // await page.waitForTimeout(1000);
        await page.click(laborPicker);
        await page.keyboard.type('Product B');
        // await page.waitForTimeout(1000);
        await page.click(laborSkillPicker);
        await page.keyboard.type('Java');
        // await page.waitForTimeout(1000);
        await page.click(laborActivePicker);
        await page.keyboard.type('true');
        await page.click(tes3);

        // await page.waitForTimeout(1000);
        await page.click(laborCheckBoxB);

        await page.click(laborAddCloseBtn);

        // await page.waitForTimeout(1000);
    }

    //Rescource Create data D
    laborCreateDataD = async() => {
        let page=this.page;
        let { tes1LaborDataBox, tes1LaborDataBoxB, tes1LaborDataBoxC, tes1LaborDataBoxD, tes1LaborDataBoxE, tes1LaborDataBoxF, tes1LaborDataBoxG, tes1LaborDataBoxH,
              tes1LaborDataBoxI, tes1LaborDataBoxJ, tes1LaborDataBoxK, tes1LaborDataBoxL, tes1LaborDataBoxM }=locators.resourcePage;

        await page.click(tes1LaborDataBox);
        await page.keyboard.type('1331');

        await page.click(tes1LaborDataBoxB);
        await page.keyboard.type('.40');

        await page.click(tes1LaborDataBoxC);
        await page.keyboard.type('.40');

        await page.click(tes1LaborDataBoxD);
        await page.keyboard.type('.40');

        await page.click(tes1LaborDataBoxE);
        await page.keyboard.type('.40');

        await page.click(tes1LaborDataBoxF);
        await page.keyboard.type('.40');

        await page.click(tes1LaborDataBoxG);
        await page.keyboard.type('.40');

        await page.click(tes1LaborDataBoxH);
        await page.keyboard.type('.40');

        await page.click(tes1LaborDataBoxI);
        await page.keyboard.type('.40');

        await page.click(tes1LaborDataBoxJ);
        await page.keyboard.type('.40');

        await page.click(tes1LaborDataBoxK);
        await page.keyboard.type('.40');

        await page.click(tes1LaborDataBoxL);
        await page.keyboard.type('.40');

        await page.click(tes1LaborDataBoxM);
        await page.keyboard.type('.40');

        // await page.waitForTimeout(1000);
    }




    

    //Rescource Data Delete
    laborUpdateData = async() => {
        let page=this.page;
        let { laborDataBox, laborDataBoxB, laborDataBoxC, laborDataBoxD, laborDataBoxE, laborDataBoxF, laborDataBoxG, laborDataBoxH,
              laborDataBoxI, laborDataBoxJ, laborDataBoxK, laborDataBoxL, laborDataBoxM }=locators.resourcePage;


        // await page.dblclick(laborDataBox);
        // await page.keyboard.type('1001');

        // await page.dblclick(laborDataBoxB);
        // await page.keyboard.type('.07');

        // await page.dblclick(laborDataBoxC);
        // await page.keyboard.type('.07');

        // await page.dblclick(laborDataBoxD);
        // await page.keyboard.type('.07');

        // await page.dblclick(laborDataBoxE);
        // await page.keyboard.type('.07');

        // await page.dblclick(laborDataBoxF);
        // await page.keyboard.type('.07');

        // await page.dblclick(laborDataBoxG);
        // await page.keyboard.type('.07');

        // await page.dblclick(laborDataBoxH);
        // await page.keyboard.type('.07');

        // await page.dblclick(laborDataBoxI);
        // await page.keyboard.type('.07');

        // await page.dblclick(laborDataBoxJ);
        // await page.keyboard.type('.07');

        // await page.dblclick(laborDataBoxK);
        // await page.keyboard.type('.07');

        // await page.dblclick(laborDataBoxL);
        // await page.keyboard.type('.07');

        // await page.dblclick(laborDataBoxM);
        // await page.keyboard.type('.07');

        // await page.waitForTimeout(3000);
    }


    //Rescource Update data
    laborSave = async() => {
        let page=this.page;
        let { laborSaveBtn, saveOk, capRefresh }=locators.resourcePage;
        await page.click(laborSaveBtn);
        // await page.click(saveOk)
        // await page.click(capRefresh)
        await page.waitForTimeout(3000);
    }

}

module.exports.laborPage = laborPage;
