const { action } = require('../utilities/action')

const locators = {        
    matrix_Page: {
        //data
        selectH: `//*[text()="H"]`,
        selectL: `//*[text()="L"]`,
        selectM: `//*[text()="M"]`,

        boxA: `[id="r1SkillAssignmentGrid-bodyWrap"] [data-recordindex="0"] [data-columnid="gridcolumn-1065"]`,
        dropdownA: `[id="celleditor-1059"]`,

        boxB: `[id="r1SkillAssignmentGrid-bodyWrap"] [data-recordindex="3"] [data-columnid="gridcolumn-1048"]`,
        dropdownB: `[id="celleditor-1089"]`,

        boxC: `[id="r1SkillAssignmentGrid-bodyWrap"] [data-recordindex="7"] [data-columnid="gridcolumn-1053"]`,
        dropdownC: `[id="celleditor-1087"]`,

        boxD: `[id="r1SkillAssignmentGrid-bodyWrap"] [data-recordindex="9"] [data-columnid="gridcolumn-1047"]`,
        dropdownD: `[id="celleditor-1085"]`,

        saveBtn: `[id="r1SkillAssignmentGrid-bodyWrap"] [aria-label="Save"]`,
        saveOk: `[id="messagebox-1009"] [role="button"]`
    },

}

class matrixPage {
    constructor(page) {
        this.page = page;
    }

    //Matrix Skill Create
    resourceDropView = async() => {
        let page=this.page;

        let { boxA, selectH }=locators.matrix_Page;

        let textInput = await page.$(boxA); 
        await textInput.click({clickCount: 2})
        await page.keyboard.type('H');
        await page.click(selectH);
        await page.waitForTimeout(3000);
    }

    resourceDropViewB = async() => {
        let page=this.page;

        let { boxB, selectM }=locators.matrix_Page;

        let textInput = await page.$(boxB); 
        await textInput.click({clickCount: 2})
        await page.keyboard.type('M');
        await page.click(selectM);
        await page.waitForTimeout(3000);

    }

    resourceDropViewC = async() => {
        let page=this.page;

        let { boxC, selectM }=locators.matrix_Page;

        await page.dblclick(boxC);
        // await page.click(dropdownC);
        // await page.waitForTimeout(1000);
        await page.keyboard.type('M');
        await page.click(selectM);
        await page.waitForTimeout(3000);

    }

    resourceDropViewD = async() => {
        let page=this.page;

        let { boxD, selectL }=locators.matrix_Page;

        await page.dblclick(boxD);
        // await page.click(dropdownD);
        // await page.waitForTimeout(1000);
        await page.keyboard.type('L');
        await page.click(selectL);
        await page.waitForTimeout(3000);

    }





    //Update Matrix skill
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
