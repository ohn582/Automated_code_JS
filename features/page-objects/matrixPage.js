const { action } = require('../utilities/action')

const locators = {        
    matrix_Page: {
        //data
        selectH: `//*[text()="H"]`,
        selectL: `//*[text()="L"]`,
        selectM: `//*[text()="M"]`,

        boxA: `[id="r1SkillAssignmentGrid-bodyWrap"] [data-recordindex="0"] [data-columnid="gridcolumn-1031"]`,
        dropdownA: `[id="celleditor-1060"]`,

        boxB: `[id="r1SkillAssignmentGrid-bodyWrap"] [data-recordindex="4"] [data-columnid="gridcolumn-1029"]`,
        dropdownB: `[id="celleditor-1060"]`,

        boxC: `[id="r1SkillAssignmentGrid-bodyWrap"] [data-recordindex="7"] [data-columnid="gridcolumn-1034"]`,
        dropdownC: `[id="celleditor-1068"]`,

        boxD: `[id="r1SkillAssignmentGrid-bodyWrap"] [data-recordindex="9"] [data-columnid="gridcolumn-1030"]`,
        dropdownD: `[id="celleditor-1072"]`,
    },

}

class matrixPage {
    constructor(page) {
        this.page = page;
    }

    resourceDropView = async() => {
        let page=this.page;

        let { boxA, dropdownA, selectL }=locators.matrix_Page;

        await page.click(boxA);
        let textInput = await page.$(dropdownA); 
        await textInput.click({clickCount: 1})
        await page.keyboard.type('L');
        await page.click(selectL);
        await page.waitForTimeout(3000);

    }

    resourceDropViewB = async() => {
        let page=this.page;

        let { boxB, dropdownB, selectM }=locators.matrix_Page;

        await page.click(boxB);
        let textInputB = await page.$(dropdownB); 
        await textInputB.click({clickCount: 1})
        await page.keyboard.type('M');
        await page.click(selectM);
        await page.waitForTimeout(3000);

    }

    resourceDropViewC = async() => {
        let page=this.page;

        let { boxC, dropdownC, selectM }=locators.matrix_Page;

        await page.click(boxC);
        let textInputC = await page.$(dropdownC); 
        await textInputC.click({clickCount: 1})
        await page.keyboard.type('M');
        await page.click(selectM);
        await page.waitForTimeout(3000);

    }



    resourceMatrixSave = async() => {
        let page=this.page;
        let { boxA, dropdownA }=locators.matrix_Page;
        await page.click(boxA);
        await page.click(dropdownA);
        await page.waitForTimeout(3000);
    }

}

module.exports.matrixPage = matrixPage;
