const { action } = require('../utilities/action')

const locators = {        
    project_Page: {
        
        //Project Data Add
        projAddDropDown: `[id="projectAddPanel-bodyWrap"] [id="r1ProjectAddNodes-bodyEl"] [id="r1ProjectAddNodes-trigger-_trigger1"]`,
        
        dropSelectA: `[id="ProjectNodeFieldPanelTree-body"] [data-recordindex="2"]`,
        dropSelectB: `[id="ProjectNodeFieldPanelTree-body"] [data-recordindex="0"]`,
        dropSelectC: `[id="ProjectNodeFieldPanelTree-body"] [data-recordindex="3"]`,

        projTextBox: `[id="projectAddPanel-bodyWrap"] [id="r1ProjectAddName-inputEl"]`,

        //Create Project Data 1
        unitPriorityA: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="numbercolumn-1052"]`,
        pKeyA: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="gridcolumn-1054"]`,
        managerA: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="gridcolumn-1055"]`,
        sponsorA: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="gridcolumn-1056"]`,
        startA: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="datecolumn-1057"]`,
        finishA: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="datecolumn-1058"]`,
        projectStateA: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="gridcolumn-1059"]`,
        domainA: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="gridcolumn-1060"]`,
        categoryA: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="gridcolumn-1061"]`,

        //Create Project Data 2
        unitPriorityB: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="numbercolumn-1052"]`,
        pKeyB: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="gridcolumn-1054"]`,
        managerB: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="gridcolumn-1055"]`,
        sponsorB: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="gridcolumn-1056"]`,
        startB: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="datecolumn-1057"]`,
        finishB: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="datecolumn-1058"]`,
        projectStateB: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="gridcolumn-1059"]`,
        domainB: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="gridcolumn-1060"]`,
        categoryB: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="gridcolumn-1061"]`,

        //Create Project Data 3
        unitPriorityC: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="numbercolumn-1052"]`,
        pKeyC: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="gridcolumn-1054"]`,
        managerC: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="gridcolumn-1055"]`,
        sponsorC: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="gridcolumn-1056"]`,
        startC: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="datecolumn-1057"]`,
        finishC: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="datecolumn-1058"]`,
        projectStateC: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="gridcolumn-1059"]`,
        domainC: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="gridcolumn-1060"]`,
        categoryC: `[data-componentid="gridview-1033"] [data-recordindex="0"] [data-columnid="gridcolumn-1061"]`,







        //Update Project Data 1
        update_unitPriorityA: `[data-componentid="gridview-1033"] [data-recordindex="4"] [data-columnid="numbercolumn-1052"]`,
        update_pKeyA: `[data-componentid="gridview-1033"] [data-recordindex="4"] [data-columnid="gridcolumn-1054"]`,
        update_managerA: `[data-componentid="gridview-1033"] [data-recordindex="4"] [data-columnid="gridcolumn-1055"]`,
        update_sponsorA: `[data-componentid="gridview-1033"] [data-recordindex="4"] [data-columnid="gridcolumn-1056"]`,
        update_startA: `[data-componentid="gridview-1033"] [data-recordindex="4"] [data-columnid="datecolumn-1057"]`,
        update_finishA: `[data-componentid="gridview-1033"] [data-recordindex="4"] [data-columnid="datecolumn-1058"]`,
        update_projectStateA: `[data-componentid="gridview-1033"] [data-recordindex="4"] [data-columnid="gridcolumn-1059"]`,
        update_domainA: `[data-componentid="gridview-1033"] [data-recordindex="4"] [data-columnid="gridcolumn-1060"]`,
        update_categoryA: `[data-componentid="gridview-1033"] [data-recordindex="4"] [data-columnid="gridcolumn-1061"]`,

        //Update Project Data 2
        update_unitPriorityB: `[data-componentid="gridview-1033"] [data-recordindex="5"] [data-columnid="numbercolumn-1052"]`,
        update_pKeyB: `[data-componentid="gridview-1033"] [data-recordindex="5"] [data-columnid="gridcolumn-1054"]`,
        update_managerB: `[data-componentid="gridview-1033"] [data-recordindex="5"] [data-columnid="gridcolumn-1055"]`,
        update_sponsorB: `[data-componentid="gridview-1033"] [data-recordindex="5"] [data-columnid="gridcolumn-1056"]`,
        update_startB: `[data-componentid="gridview-1033"] [data-recordindex="5"] [data-columnid="datecolumn-1057"]`,
        update_finishB: `[data-componentid="gridview-1033"] [data-recordindex="5"] [data-columnid="datecolumn-1058"]`,
        update_projectStateB: `[data-componentid="gridview-1033"] [data-recordindex="5"] [data-columnid="gridcolumn-1059"]`,
        update_domainB: `[data-componentid="gridview-1033"] [data-recordindex="5"] [data-columnid="gridcolumn-1060"]`,
        update_categoryB: `[data-componentid="gridview-1033"] [data-recordindex="5"] [data-columnid="gridcolumn-1061"]`,

        //Update Project Data 3
        update_unitPriorityC: `[data-componentid="gridview-1033"] [data-recordindex="6"] [data-columnid="numbercolumn-1052"]`,
        update_pKeyC: `[data-componentid="gridview-1033"] [data-recordindex="6"] [data-columnid="gridcolumn-1054"]`,
        update_managerC: `[data-componentid="gridview-1033"] [data-recordindex="6"] [data-columnid="gridcolumn-1055"]`,
        update_sponsorC: `[data-componentid="gridview-1033"] [data-recordindex="6"] [data-columnid="gridcolumn-1056"]`,
        update_startC: `[data-componentid="gridview-1033"] [data-recordindex="6"] [data-columnid="datecolumn-1057"]`,
        update_finishC: `[data-componentid="gridview-1033"] [data-recordindex="6"] [data-columnid="datecolumn-1058"]`,
        update_projectStateC: `[data-componentid="gridview-1033"] [data-recordindex="6"] [data-columnid="gridcolumn-1059"]`,
        update_domainC: `[data-componentid="gridview-1033"] [data-recordindex="6"] [data-columnid="gridcolumn-1060"]`,
        update_categoryC: `[data-componentid="gridview-1033"] [data-recordindex="6"] [data-columnid="gridcolumn-1061"]`,


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
        // reTypeProjA: `[id="ProjectListGrid-bodyWrap"] [data-columnid="templatecolumn-1143"] [data-recordindex="0"] [id="celleditor-1160"]`,
        // reTypeProjB: `[id="ProjectListGrid-bodyWrap"] [data-columnid="templatecolumn-1143"] [data-recordindex="1"] [id="celleditor-1160"]`,
        // reTypeProjC: `[id="ProjectListGrid-bodyWrap"] [data-columnid="templatecolumn-1143"] [data-recordindex="2"] [id="celleditor-1160"]`,

        reTypeProjA: `//*[text()="TEST 1"]`,
        reTypeProjB: `//*[text()="TEST 2"]`,
        reTypeProjC: `//*[text()="TEST 3"]`,
        
        //Project Delete
        projDeleteBtn: `[id="ProjectListToolBar-innerCt"] [data-componentid="projectListGridRemove"]`,
        projDeleteYes: `//*[text()="Yes"]`,

        //project reload
        reloadBtn: `[id="ProjectListGrid-bodyWrap"] [id="ProjectListToolBar"] [data-qtip="Reload"]`
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

    projReloadBtn = async() => {
        let page=this.page;
        let { reloadBtn }=locators.project_Page;

        await page.click(reloadBtn);
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

    // projectTypeA = async() => {
    //     let page=this.page;
    //     let { projTextBox }=locators.project_Page;
    //     let textInput = await page.$(projTextBox);
    //     await textInput.click({clickCount: 1})
    //     await page.keyboard.type('TEST 1');
    //     await page.waitForTimeout(1000);
    // }

    // projectUnitPriority = async() => {
    //     let page=this.page;
    //     let { unitPriorityA, pKeyA, managerA, sponsorA, startA, finishA, projectStateA, domainA, categoryA }=locators.project_Page;
    //     let textInput = await page.$(unitPriorityA);
    //     let textInputB = await page.$(pKeyA);
    //     let textInputC = await page.$(managerA);
    //     let textInputD = await page.$(sponsorA);
    //     let textInputE = await page.$(startA);
    //     let textInputF = await page.$(finishA);
    //     let textInputG = await page.$(projectStateA);
    //     let textInputH = await page.$(domainA);
    //     let textInputI = await page.$(categoryA);
    //     await textInput.click({clickCount: 1})
    //     await page.keyboard.type('9590');
    //     // await page.waitForTimeout(1000);
    //     await textInputB.click({clickCount: 1})
    //     await page.keyboard.type('5255');
    //     // await page.waitForTimeout(1000);
    //     await textInputC.click({clickCount: 1})
    //     await page.keyboard.type('Wolf, Phil');
    //     // await page.waitForTimeout(1000);
    //     await textInputD.click({clickCount: 1})
    //     await page.keyboard.type('Gates, Bill');
    //     await textInputE.click({clickCount: 1})
    //     await page.keyboard.type('01/26/2023');
    //     await textInputF.click({clickCount: 1})
    //     await page.keyboard.type('01/27/2023');
    //     await textInputG.click({clickCount: 1})
    //     await page.keyboard.type('On Hold');
    //     await textInputH.click({clickCount: 1})
    //     await page.keyboard.type('Research');
    //     await textInputI.click({clickCount: 1})
    //     await page.keyboard.type('Growth');
    //     await page.waitForTimeout(1000);
    // }






    // projectTypeB = async() => {
    //     let page=this.page;
    //     let { projTextBox }=locators.project_Page;
    //     let textInput = await page.$(projTextBox);
    //     await textInput.click({clickCount: 1})
    //     await page.keyboard.type('TEST 2');
    //     await page.waitForTimeout(1000);
    // }

    // projectUnitPriorityB = async() => {
    //     let page=this.page;
    //     let { unitPriorityA, pKeyB, managerB, sponsorB, startB, finishB, projectStateB, domainB, categoryB }=locators.project_Page;
    //     let textInput = await page.$(unitPriorityA);
    //     let textInputB = await page.$(pKeyB);
    //     let textInputC = await page.$(managerB);
    //     let textInputD = await page.$(sponsorB);
    //     let textInputE = await page.$(startB);
    //     let textInputF = await page.$(finishB);
    //     let textInputG = await page.$(projectStateB);
    //     let textInputH = await page.$(domainB);
    //     let textInputI = await page.$(categoryB);
    //     await textInput.click({clickCount: 1})
    //     await page.keyboard.type('4500');
    //     // await page.waitForTimeout(1000);
    //     await textInputB.click({clickCount: 1})
    //     await page.keyboard.type('1234');
    //     // await page.waitForTimeout(1000);
    //     await textInputC.click({clickCount: 1})
    //     await page.keyboard.type('Kern, Bill');
    //     // await page.waitForTimeout(1000);
    //     await textInputD.click({clickCount: 1})
    //     await page.keyboard.type('Samarel, Paul');
    //     await textInputE.click({clickCount: 1})
    //     await page.keyboard.type('02/26/2023');
    //     await textInputF.click({clickCount: 1})
    //     await page.keyboard.type('03/17/2023');
    //     await textInputG.click({clickCount: 1})
    //     await page.keyboard.type('Started');
    //     await textInputH.click({clickCount: 1})
    //     await page.keyboard.type('NPD');
    //     await textInputI.click({clickCount: 1})
    //     await page.keyboard.type('Strategic');
    //     await page.waitForTimeout(1000);
    // }





    // projectTypeC = async() => {
    //     let page=this.page;
    //     let { projTextBox }=locators.project_Page;
    //     let textInput = await page.$(projTextBox);
    //     await textInput.click({clickCount: 1})
    //     await page.keyboard.type('TEST 3');
    //     await page.waitForTimeout(1000);
    // }

    // projectUnitPriorityC = async() => {
    //     let page=this.page;
    //     let { unitPriorityA, pKeyC, managerC, sponsorC, startC, finishC, projectStateC, domainC, categoryC }=locators.project_Page;
    //     let textInput = await page.$(unitPriorityA);
    //     let textInputB = await page.$(pKeyC);
    //     let textInputC = await page.$(managerC);
    //     let textInputD = await page.$(sponsorC);
    //     let textInputE = await page.$(startC);
    //     let textInputF = await page.$(finishC);
    //     let textInputG = await page.$(projectStateC);
    //     let textInputH = await page.$(domainC);
    //     let textInputI = await page.$(categoryC);
    //     await textInput.click({clickCount: 1})
    //     await page.keyboard.type('9557');
    //     // await page.waitForTimeout(1000);
    //     await textInputB.click({clickCount: 1})
    //     await page.keyboard.type('8889');
    //     // await page.waitForTimeout(1000);
    //     await textInputC.click({clickCount: 1})
    //     await page.keyboard.type('Heinrich, Peter');
    //     // await page.waitForTimeout(1000);
    //     await textInputD.click({clickCount: 1})
    //     await page.keyboard.type('Wolf, Phil');
    //     await textInputE.click({clickCount: 1})
    //     await page.keyboard.type('03/10/2023');
    //     await textInputF.click({clickCount: 1})
    //     await page.keyboard.type('08/20/2023');
    //     await textInputG.click({clickCount: 1})
    //     await page.keyboard.type('To Be Deleted');
    //     await textInputH.click({clickCount: 1})
    //     await page.keyboard.type('New Domain');
    //     await textInputI.click({clickCount: 1})
    //     await page.keyboard.type('Growth');
    //     await page.waitForTimeout(1000);
    // }







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



    //Project Data Update 1
    projectUpdateA = async() => {
        let page=this.page;
        let { reTypeProjA }=locators.project_Page;
        let textInput = await page.$(reTypeProjA);
        await textInput.click({clickCount: 3})
        await page.keyboard.type(' UPDATE A');
        await page.waitForTimeout(1000);
    }

    projectDataUpdateA = async() => {
        let page=this.page;
        let { update_unitPriorityA, update_managerA, update_sponsorA, update_projectStateA }=locators.project_Page;
        let textInput = await page.$(update_unitPriorityA);
        let textInputC = await page.$(update_managerA);
        let textInputD = await page.$(update_sponsorA);
        let textInputG = await page.$(update_projectStateA);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('333');
        // await page.waitForTimeout(1000);
        await textInputC.click({clickCount: 3})
        await page.keyboard.type('Kern, Bill');
        // await page.waitForTimeout(1000);
        await textInputD.click({clickCount: 3})
        await page.keyboard.type('Gates, Bill');
        await textInputG.click({clickCount: 3})
        await page.keyboard.type('Cancelled');

        await page.waitForTimeout(1000);
    }

        
    //Project Data Update 2
    projectUpdateB = async() => {
        let page=this.page;
        let { reTypeProjB }=locators.project_Page;
        let textInput = await page.$(reTypeProjB);
        await textInput.click({clickCount: 3})
        await page.keyboard.type(' UPDATE B');
        await page.waitForTimeout(1000);
    }

    projectDataUpdateB = async() => {
        let page=this.page;
        let { update_unitPriorityB, update_managerB, update_sponsorB, update_projectStateB }=locators.project_Page;
        let textInput = await page.$(update_unitPriorityB);
        let textInputC = await page.$(update_managerB);
        let textInputD = await page.$(update_sponsorB);
        let textInputG = await page.$(update_projectStateB);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('9557');
        // await page.waitForTimeout(1000);
        await textInputC.click({clickCount: 3})
        await page.keyboard.type('Heinrich, Peter');
        // await page.waitForTimeout(1000);
        await textInputD.click({clickCount: 3})
        await page.keyboard.type('Wolf, Phil');
        await textInputG.click({clickCount: 3})
        await page.keyboard.type('To Be Deleted');
        await page.waitForTimeout(1000);
    }

    //Project Data Update 3
    projectUpdateC = async() => {
        let page=this.page;
        let { reTypeProjC }=locators.project_Page;
        let textInput = await page.$(reTypeProjC);
        await textInput.click({clickCount: 3})
        await page.keyboard.type(' UPDATE C');
        await page.waitForTimeout(1000);
    }

    projectDataUpdateC = async() => {
        let page=this.page;
        let { update_unitPriorityC, update_managerC, update_sponsorC, update_projectStateC }=locators.project_Page;
        let textInput = await page.$(update_unitPriorityC);
        let textInputC = await page.$(update_managerC);
        let textInputD = await page.$(update_sponsorC);
        let textInputG = await page.$(update_projectStateC);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('9557');
        // await page.waitForTimeout(1000);
        await textInputC.click({clickCount: 3})
        await page.keyboard.type('Heinrich, Peter');
        // await page.waitForTimeout(1000);
        await textInputD.click({clickCount: 3})
        await page.keyboard.type('Wolf, Phil');
        await textInputG.click({clickCount: 3})
        await page.keyboard.type('To Be Deleted');
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
