const { action } = require('../utilities/action')

const locators = {        
    project_Page: {
        
        //Project Data Add
        projAddDropDown: `[id="projectAddPanel-bodyWrap"] [id="r1ProjectAddNodes-bodyEl"] [id="r1ProjectAddNodes-trigger-_trigger1"]`,
        
        dropSelectA: `[id="ProjectNodeFieldPanelTree-body"] [data-recordindex="2"]`,
        dropSelectB: `[id="ProjectNodeFieldPanelTree-body"] [data-recordindex="0"]`,
        dropSelectC: `[id="ProjectNodeFieldPanelTree-body"] [data-recordindex="3"]`,
        projTextBox: `[id="projectAddPanel-bodyWrap"] [id="r1ProjectAddName-inputEl"]`,

        projAddCloseBtn: `[id="projectAddPanel-bodyWrap"] [role="toolbar"] [id="ProjectAddPanelAddCloseButton"]`,
        projSaveBtn: `[id="ProjectListToolBar-targetEl"] [id="projectListGridSave"]`,
        projApply: `[id="ProjectNodeFieldTreePanel"] [role="toolbar"] [aria-label="Apply"]`,
        addClosed: `//*[text()="Add & Close"]`,
        projSaveOk: `[id="messagebox-1001"] [id="button-1005"]`,

        projDeleteBtn: `[id="ProjectListGrid-bodyWrap"] [id="projectListGridRemove-btnIconEl"]`,
        projDeleteYes: `[data-componentid="messagebox-1001"] [data-componentid="button-1006"]`,

        projReload: `[id="ProjectListGrid-bodyWrap"] [data-qtip="Reload"]`,

        projViewDropdown: `[id="r1DemandGrid-bodyWrap"] [id="demandGridValueMode"]`,

        //Project Update
        reTypeProjA: `[id="gridview-1025"] [data-recordindex="9"] [data-columnid="templatecolumn-1045"]`,
        reTypeProjB: `[id="gridview-1025"] [data-recordindex="10"] [data-columnid="templatecolumn-1045"]`,
        reTypeProjC: `[id="gridview-1025"] [data-recordindex="11"] [data-columnid="templatecolumn-1045"]`,
        
        //Project Delete
        projDeleteBtn: `[id="ProjectListToolBar-innerCt"] [data-componentid="projectListGridRemove"]`,
        projDeleteYes: `//*[text()="Yes"]`,
    },
}

class projectPage {
    constructor(page) {
        this.page = page;
    }

    //Project Data Create
    projectAddData = async() => {
        let page=this.page;
        let { projAddDropDown, dropSelectA }=locators.project_Page;

        await page.click(projAddDropDown);
        await page.waitForTimeout(1000);
        await page.click(dropSelectA);
        await page.waitForTimeout(1000);
    }

    projectAddDataB = async() => {
        let page=this.page;
        let { projAddDropDown, dropSelectB }=locators.project_Page;

        await page.click(projAddDropDown);
        await page.waitForTimeout(1000);
        await page.click(dropSelectB);
        await page.waitForTimeout(1000);
    }

    projectAddDataC = async() => {
        let page=this.page;
        let { projAddDropDown, dropSelectC }=locators.project_Page;

        await page.click(projAddDropDown);
        await page.waitForTimeout(1000);
        await page.click(dropSelectC);
        await page.waitForTimeout(1000);
    }

    projectApply = async() => {
        let page=this.page;
        let { projApply }=locators.project_Page;

        await page.click(projApply);
        await page.waitForTimeout(1000);

    }

    projectTypeA = async() => {
        let page=this.page;
        let { projTextBox }=locators.project_Page;
        let textInput = await page.$(projTextBox);
        await textInput.click({clickCount: 1})
        await page.keyboard.type('TEST 1');
        await page.waitForTimeout(1000);
    }

    projectTypeB = async() => {
        let page=this.page;
        let { projTextBox }=locators.project_Page;
        let textInput = await page.$(projTextBox);
        await textInput.click({clickCount: 1})
        await page.keyboard.type('TEST 2');
        await page.waitForTimeout(1000);
    }

    projectTypeC = async() => {
        let page=this.page;
        let { projTextBox }=locators.project_Page;
        let textInput = await page.$(projTextBox);
        await textInput.click({clickCount: 1})
        await page.keyboard.type('TEST 3');
        await page.waitForTimeout(1000);
    }

    projectAddClose = async() => {
        let page=this.page;
        let { projAddCloseBtn }=locators.project_Page;

        await page.click(projAddCloseBtn);
        await page.waitForTimeout(1000);
    }

    projectSave = async() => {
        let page=this.page;
        let { projSaveBtn, projSaveOk }=locators.project_Page;

        await page.click(projSaveBtn);
        await page.waitForTimeout(1000);
        await page.click(projSaveOk);
        await page.waitForTimeout(3000);
    }



    //Project Data Update
    projectUpdateA = async() => {
        let page=this.page;
        let { reTypeProjA }=locators.project_Page;
        let textInput = await page.$(reTypeProjA);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('UPDATE A');
        await page.waitForTimeout(1000);
    }
        
    projectUpdateB = async() => {
        let page=this.page;
        let { reTypeProjB }=locators.project_Page;
        let textInput = await page.$(reTypeProjB);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('UPDATE B');
        await page.waitForTimeout(1000);
    }

    projectUpdateC = async() => {
        let page=this.page;
        let { reTypeProjC }=locators.project_Page;
        let textInput = await page.$(reTypeProjC);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('UPDATE C');
        await page.waitForTimeout(1000);
    }


    //Project Data Delete
    projectDelete = async() => {
        let page=this.page;
        let { projDeleteBtn, projDeleteYes }=locators.project_Page;
        await page.click(projDeleteBtn);
        await page.click(projDeleteYes);
        await page.waitForTimeout(3000);
    }



    projectDataRefresh = async() => {
        let page=this.page;
        let { projReload }=locators.project_Page;
        await page.click(projReload);   
        await page.waitForTimeout(3000);
    }

}

module.exports.projectPage = projectPage;
