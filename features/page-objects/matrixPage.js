const { action } = require('../utilities/action')

const locators = {        
    matrix_Page: {
        //data
        selectH: `//*[text()="H"]`,
        selectL: `//*[text()="L"]`,
        selectM: `//*[text()="M"]`,

        boxA: `[id="r1SkillAssignmentGrid-bodyWrap"] [data-recordindex="0"] [data-columnid="gridcolumn-1031"]`,
        dropdownA: `[id="celleditor-1059"]`,

        boxB: `[id="r1SkillAssignmentGrid-bodyWrap"] [data-recordindex="3"] [data-columnid="gridcolumn-1030"]`,
        dropdownB: `[id="celleditor-1061"]`,

        boxC: `[id="r1SkillAssignmentGrid-bodyWrap"] [data-recordindex="7"] [data-columnid="gridcolumn-1034"]`,
        dropdownC: `[id="celleditor-1068"]`,

        boxD: `[id="r1SkillAssignmentGrid-bodyWrap"] [data-recordindex="9"] [data-columnid="gridcolumn-1030"]`,
        dropdownD: `[id="celleditor-1072"]`,

        saveBtn: `[id="r1SkillAssignmentGrid-bodyWrap"] [aria-label="Save"]`,
        saveOk: `[id="messagebox-1001"] [id="messagebox-1001-toolbar"] [tabindex="0"]`
    },

}

class matrixPage {
    constructor(page) {
        this.page = page;
    }

    //Matrix Skill Create
    resourceDropView = async() => {
        let page=this.page;

        let { boxA, dropdownA, selectH }=locators.matrix_Page;

        await page.click(boxA);
        let textInput = await page.$(dropdownA); 
        await textInput.click({clickCount: 2})
        await page.keyboard.type('H');
        await page.click(selectH);
        await page.waitForTimeout(3000);
    }

    resourceDropViewB = async() => {
        let page=this.page;

        let { boxB, dropdownB, selectM }=locators.matrix_Page;

        // await page.click(boxB);
        // let textInputB = await page.$(dropdownB); 
        // await textInputB.click({clickCount: 1})
        // await page.keyboard.type('M');
        // await page.click(selectM);
        // await page.waitForTimeout(3000);

        await page.dblclick(boxB);
        // await page.click(dropdownB);
        // await page.waitForTimeout(1000);
        await page.keyboard.type('M');
        await page.click(selectM);
        await page.waitForTimeout(3000);

    }

    resourceDropViewC = async() => {
        let page=this.page;

        let { boxC, dropdownC, selectM }=locators.matrix_Page;

        // await page.click(boxC);
        // let textInputC = await page.$(dropdownC); 
        // await textInputC.click({clickCount: 1})
        // await page.keyboard.type('M');
        // await page.click(selectM);
        // await page.waitForTimeout(3000);

        await page.dblclick(boxC);
        // await page.click(dropdownC);
        // await page.waitForTimeout(1000);
        await page.keyboard.type('M');
        await page.click(selectM);
        await page.waitForTimeout(3000);

    }

    resourceDropViewD = async() => {
        let page=this.page;

        let { boxD, dropdownD, selectL }=locators.matrix_Page;

        // await page.click(boxD);
        // let textInputC = await page.$(dropdownD); 
        // await textInputC.click({clickCount: 1})
        // await page.keyboard.type('L');
        // await page.click(selectL);
        // await page.waitForTimeout(3000);


        await page.dblclick(boxD);
        // await page.click(dropdownD);
        // await page.waitForTimeout(1000);
        await page.keyboard.type('L');
        await page.click(selectL);
        await page.waitForTimeout(3000);

    }


    //Retype Matrix skill
    ReTypeResourceDataA = async() => {
        let page=this.page;
        let { boxA, selectL }=locators.matrix_Page;

        await page.dblclick(boxA);

        await page.keyboard.type('L');
        await page.click(selectL);
        // await page.waitForTimeout(3000);
    }

    ReTypeResourceDataB = async() => {
        let page=this.page;
        let { boxB, selectH }=locators.matrix_Page;

        await page.dblclick(boxB);
        await page.keyboard.type('H');
        await page.click(selectH);
        await page.waitForTimeout(3000);
    }

    ReTypeResourceDataC = async() => {
        let page=this.page;
        let { boxC, selectL }=locators.matrix_Page;

        await page.dblclick(boxC);
        await page.keyboard.type('L');
        await page.click(selectL);
        await page.waitForTimeout(3000);
    }

    ReTypeResourceDataD = async() => {
        let page=this.page;
        let { boxC, selectM }=locators.matrix_Page;

        await page.dblclick(boxC);
        await page.keyboard.type('M');
        await page.click(selectM);
        await page.waitForTimeout(3000);
    }








    resourceMatrixSave = async() => {
        let page=this.page;
        let { saveBtn, saveOk }=locators.matrix_Page;
        await page.click(saveBtn);
        // await page.waitForTimeout(1000);
        await page.click(saveOk);

        
    }

}

module.exports.matrixPage = matrixPage;
