const { action } = require('../utilities/action')

const locators = {        
    project_Page: {
        
        //Project Data Add
        projAddBtn: `[id="R1TProjectData"] [id="projectListGridAdd"]`,
        projAddOBSDrop: `[id="projectAddPanel-bodyWrap"] [id="r1ProjectAddNodes"] [id="r1ProjectAddNodes-trigger-_trigger1"]`,
        projRescourceSelect: `[id="ProjectNodeFieldTreePanel-bodyWrap"] [data-recordindex="3"]`,
        projApplyAddBtn: `[id="toolbar-1061-innerCt"] [aria-label="Apply"]`,
        projNameText: `[id="projectAddPanel-bodyWrap"] [id="r1ProjectAddName-inputEl"]`,

        projEditAdd: `[id="toolbar-1054"] [id="ProjectAddPanelAddButton"]`,
        projEditCancel: `[id="projectAddPanel"] [id="projectAddPanel-bodyWrap"] [aria-label="Cancel"]`,
        projEditSave: `[id="ProjectListGrid-bodyWrap"] [id="projectListGridSave"]`,
        addClosed: `//*[text()="Add & Close"]`,
        projSaveOk: `[id="messagebox-1001"] [id="button-1005"]`,

        projReWriteA: `//*[text()="ProjectA"]`,
        projReWriteB: `//*[text()="ProjectB"]`,
        projReWriteC: `//*[text()="ProjectC"]`,

        projSelectA: `[id="ProjectListGrid-body"] [data-recordindex="0"] [data-columnid="checkcolumn-1044"]`,
        projSelectB: `[id="ProjectListGrid-body"] [data-recordindex="1"] [data-columnid="checkcolumn-1044"]`,

        projDeleteBtn: `[id="ProjectListGrid-bodyWrap"] [id="projectListGridRemove-btnIconEl"]`,
        projDeleteYes: `[data-componentid="messagebox-1001"] [data-componentid="button-1006"]`,

        projReload: `[id="ProjectListGrid-bodyWrap"] [data-qtip="Reload"]`,

        projViewDropdown: `[id="r1DemandGrid-bodyWrap"] [id="demandGridValueMode"]`,



        //Project Assignments
        projAssingAddBtn: `[id="r1LaborAssignmentPanel-bodyWrap"] [data-componentid="laborAssignmentAddBtn"]`,
        projAddAssing: `[id="laborAssignmentAddResource"] [id="laborAssignmentAddResource-textEl"]`,
        addAssingProjDropdown: `[id="insert_resource_assignment_form"] [id="AddResourceAssignmentDialogProjectCombo-triggerWrap"] [data-componentid="AddResourceAssignmentDialogProjectCombo"]`,
        addAssingSkillDropdown: `[id="insert_resource_assignment_form"] [id="AddResourceAssignmentDialogSkillCombo-triggerWrap"] [data-componentid="AddResourceAssignmentDialogSkillCombo"]`,
        // addProjectCloseBtn: `[id="toolbar-1132"] [data-componentid="AddResourceAssignmentDialogAddClose"]`,
        addProjectCloseBtn: `//*[text()="Add & Close"]`,
        addProjectSaveBtn: `[id="r1LaborAssignmentPanel-bodyWrap"] [data-qtip="Save"]`,

        //Data 1
        addAssingProjPickerA: `[id="AddResourceAssignmentDialogProjectCombo-picker-listWrap"] [id="AddResourceAssignmentDialogProjectCombo-picker-listEl"] [data-recordindex="0"]`,
        // addAssingProjPickerA: `//*[text()="ProjectAVVV"]`,
        addProjReqSkillA: `[id="AddResourceAssignmentDialogSkillCombo-picker-listEl"] [data-boundview="AddResourceAssignmentDialogSkillCombo-picker"]`,
        addProjNewSearchBtn: `//*[text()="Add New Search Field"]`,

        addProjectSearchCheckBox: `[id="AddResourceAssignmentDialogCustomSearchMenu-body"] [data-recordindex="0"] [tabindex="-1"]`,
        projectActiveSelect: `//*[text()="false"]`,

        addProjectSearchCheckBoxB: `[id="AddResourceAssignmentDialogCustomSearchMenu-body"] [data-recordindex="2"] [tabindex="-1"]`,
        projectActiveSelectB: `//*[text()="Dev 2"]`,

        searchFieldDropDownA: `[id="insert_resource_assignment_form-innerCt"] [id="PdwInsertResourceAssignmentrActive"] [id="PdwInsertResourceAssignmentrActive-inputWrap"]`,
        searchFieldDropDownB: `[id="insert_resource_assignment_form-innerCt"] [id="PdwInsertResourceAssignmentrCostCategoryName"] [id="PdwInsertResourceAssignmentrCostCategoryName-inputWrap"]`,

        projectRescourceName: `[id="AddResourceAssignmentDialogResourceGrid"] [data-recordindex="0"] [tabindex="-1"]`,


        
        // //Data2
        // addAssingProjPickerA: `[id="AddResourceAssignmentDialogProjectCombo-picker-listWrap"] [id="AddResourceAssignmentDialogProjectCombo-picker-listEl"] [data-recordindex="0"]`,
        // // addAssingProjPickerA: `//*[text()="ProjectAVVV"]`,

        // addProjReqSkillA: `[id="AddResourceAssignmentDialogSkillCombo-picker-listEl"] [data-boundview="AddResourceAssignmentDialogSkillCombo-picker"]`,

        // addProjNewSearchBtn: `//*[text()="Add New Search Field"]`,

        // addProjectSearchCheckBox: `[id="AddResourceAssignmentDialogCustomSearchMenu-body"] [data-recordindex="0"] [tabindex="-1"]`,
        // projectActiveSelect: `//*[text()="false"]`,

        // addProjectSearchCheckBoxB: `[id="AddResourceAssignmentDialogCustomSearchMenu-body"] [data-recordindex="2"] [tabindex="-1"]`,
        // projectActiveSelectB: `//*[text()="Dev 2"]`,

        // searchFieldDropDownA: `[id="insert_resource_assignment_form-innerCt"] [id="PdwInsertResourceAssignmentrActive"] [id="PdwInsertResourceAssignmentrActive-inputWrap"]`,
        // searchFieldDropDownB: `[id="insert_resource_assignment_form-innerCt"] [id="PdwInsertResourceAssignmentrCostCategoryName"] [id="PdwInsertResourceAssignmentrCostCategoryName-inputWrap"]`,

        // projectRescourceName: `[id="AddResourceAssignmentDialogResourceGrid"] [data-recordindex="0"] [tabindex="-1"]`,
    },
}

class projectPage {
    constructor(page) {
        this.page = page;
    }

    //Project
    projectAdd = async() => {
        let page=this.page;

        let { projAddBtn, projAddOBSDrop, projRescourceSelect, projApplyAddBtn }=locators.project_Page;
        await page.click(projAddBtn);
        await page.waitForTimeout(1000);
        await page.click(projAddOBSDrop);
        await page.waitForTimeout(1000);
        await page.click(projRescourceSelect);
        await page.waitForTimeout(1000);
        await page.click(projApplyAddBtn);
        await page.waitForTimeout(3000);
    }

    projectAddNameText = async() => {
        let page=this.page;
        let { projNameText, projEditAdd, addClosed }=locators.project_Page;

        await page.click(projNameText);
        await page.keyboard.type('ProjectA');
        await page.click(projEditAdd);
        // await page.waitForTimeout(1000);
        await page.click(projNameText);
        await page.keyboard.type('ProjectB');
        await page.click(projEditAdd);
        // await page.waitForTimeout(1000);
        await page.click(projNameText);
        await page.keyboard.type('ProjectC');
        // await page.click(addClosed);
        await page.click(projEditAdd);
        await page.waitForTimeout(1000);

    }

    projectSaveData = async() => {
        let page=this.page;
        let { projEditSave, projSaveOk }=locators.project_Page;

        await page.click(projEditSave);
        await page.waitForTimeout(1000);
        await page.click(projSaveOk);
        
        await page.waitForTimeout(3000);
    }

    projectDataRefresh = async() => {
        let page=this.page;
        let { projReload }=locators.project_Page;
        await page.click(projReload);   
        await page.waitForTimeout(3000);
    }

    projectDataUpdate = async() => {
        let page=this.page;
        let { projReWriteA, projReWriteB, projReWriteC }=locators.project_Page;

        let textInputA = await page.$(projReWriteA); 
        await textInputA.click({clickCount: 3})
        await page.keyboard.type('tes1');
        await page.waitForTimeout(1000);
        let textInputB = await page.$(projReWriteB); 
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('tes2');
        await page.waitForTimeout(1000);
        let textInputC = await page.$(projReWriteC); 
        await textInputC.click({clickCount: 3})
        await page.keyboard.type('tes3');

        await page.waitForTimeout(3000);
    }

    projectDataSelect = async() => {
        let page=this.page;
        let { projSelectA, projSelectB, projDeleteBtn, projDeleteYes }=locators.project_Page;

        await page.click(projSelectA);
        await page.click(projSelectB);
        await page.click(projDeleteBtn);
        await page.click(projDeleteYes);     

        await page.waitForTimeout(3000);
    }

    projectDemandValue = async() => {
        let page=this.page;
        let { projViewDropdown }=locators.project_Page;

        // let textClick = await page.$(projReWriteC); 
        // await textClick.click({clickCount: 3})

        await page.click(projViewDropdown);
        await page.waitForTimeout(1000);
        await page.click(projViewDropdown);
        // await page.waitForTimeout(1000);
        await page.click(projViewDropdown);    
        await page.waitForTimeout(1000);
    }


    //Project Assignments
    //Creating Data 1
    projectAssingnmentsAdd = async() => {
        let page=this.page;
        let { projAssingAddBtn, projAddAssing }=locators.project_Page;

        await page.click(projAssingAddBtn);   
        await page.waitForTimeout(1000);
        await page.click(projAddAssing);   
        // await page.waitForTimeout(1000);

    }

    projectAssingnmentsAddB = async() => {
        let page=this.page;
        let { addAssingProjDropdown, addAssingProjPickerA }=locators.project_Page;

        let textInput = await page.$(addAssingProjDropdown);
        await textInput.click({clickCount: 1})
        await page.waitForTimeout(1000);
        await page.keyboard.type('Project');
        await page.click(addAssingProjPickerA); 
        await page.waitForTimeout(3000);

    }

    projectAssingnmentsAddC = async() => {
        let page=this.page;
        let { addAssingSkillDropdown, addProjReqSkillA }=locators.project_Page;


        let textInputB = await page.$(addAssingSkillDropdown);
        await textInputB.click({clickCount: 1})
        await page.waitForTimeout(1000);
        await page.keyboard.type('Java');
        await page.click(addProjReqSkillA); 
        await page.waitForTimeout(3000); 

    }

    projectAssingnmentsAddD = async() => {
        let page=this.page;
        let { addProjNewSearchBtn }=locators.project_Page;

        await page.click(addProjNewSearchBtn);
        await page.waitForTimeout(3000);

    }

    projectAssingnmentsAddD = async() => {
        let page=this.page;
        let { addProjNewSearchBtn, addProjectSearchCheckBox, addProjectSearchCheckBoxB }=locators.project_Page;

        await page.click(addProjNewSearchBtn);
        // await page.waitForTimeout(1000);
        await page.click(addProjectSearchCheckBox);
        // await page.waitForTimeout(1000);
        await page.click(addProjectSearchCheckBoxB);
        await page.waitForTimeout(3000);
    }

    projectAssingnmentsAddD = async() => {
        let page=this.page;
        let { addProjNewSearchBtn, addProjectSearchCheckBox, addProjectSearchCheckBoxB, 
              searchFieldDropDownA, searchFieldDropDownB, projectActiveSelect, projectActiveSelectB,
              projectRescourceName }=locators.project_Page;

        await page.click(addProjNewSearchBtn);
        await page.waitForTimeout(1000);
        await page.click(addProjectSearchCheckBox);
        await page.waitForTimeout(1000);
        await page.click(addProjectSearchCheckBoxB);
        await page.waitForTimeout(1000);
        
        let textInputA = await page.$(searchFieldDropDownA); 
        await textInputA.click({clickCount: 2})
        await page.keyboard.type('false');
        await page.click(projectActiveSelect);
        // await page.waitForTimeout(1000);

        let textInputB = await page.$(searchFieldDropDownB); 
        await textInputB.click({clickCount: 2})
        await page.keyboard.type('Dev 2');
        await page.click(projectActiveSelectB);
        await page.waitForTimeout(1000);

    }

    projectSelectRescource = async() => {
        let page=this.page;
        let { addProjNewSearchBtn, addProjectSearchCheckBox, addProjectSearchCheckBoxB }=locators.project_Page;

        await page.click(addProjNewSearchBtn);
        // await page.waitForTimeout(1000);
        await page.click(addProjectSearchCheckBox);
        // await page.waitForTimeout(1000);
        await page.click(addProjectSearchCheckBoxB);
        await page.waitForTimeout(1000);
    }

    projectDataAdd = async() => {
        let page=this.page;
        let { addProjectCloseBtn, projectRescourceName, addProjectSaveBtn }=locators.project_Page;

        await page.click(projectRescourceName);

        await page.click(addProjectCloseBtn);

        await page.click(addProjectSaveBtn);
        await page.waitForTimeout(2000);
    }


    // //Creating Data 2
    // projectAssingnmentsAddF = async() => {
    //     let page=this.page;
    //     let { addAssingProjDropdown, addAssingProjPickerA }=locators.project_Page;

    //     let textInput = await page.$(addAssingProjDropdown);
    //     await textInput.click({clickCount: 1})
    //     await page.waitForTimeout(1000);
    //     await page.keyboard.type('Project');
    //     await page.click(addAssingProjPickerA); 
    //     await page.waitForTimeout(3000);

    // }

    // projectAssingnmentsAddG = async() => {
    //     let page=this.page;
    //     let { addAssingSkillDropdown, addProjReqSkillA }=locators.project_Page;


    //     let textInputB = await page.$(addAssingSkillDropdown);
    //     await textInputB.click({clickCount: 1})
    //     await page.waitForTimeout(1000);
    //     await page.keyboard.type('Java');
    //     await page.click(addProjReqSkillA); 
    //     await page.waitForTimeout(3000); 

    // }

    // projectAssingnmentsAddH = async() => {
    //     let page=this.page;
    //     let { addProjNewSearchBtn }=locators.project_Page;

    //     await page.click(addProjNewSearchBtn);
    //     await page.waitForTimeout(3000);

    // }

    // projectAssingnmentsAddH = async() => {
    //     let page=this.page;
    //     let { addProjNewSearchBtn, addProjectSearchCheckBox, addProjectSearchCheckBoxB }=locators.project_Page;

    //     await page.click(addProjNewSearchBtn);
    //     // await page.waitForTimeout(1000);
    //     await page.click(addProjectSearchCheckBox);
    //     // await page.waitForTimeout(1000);
    //     await page.click(addProjectSearchCheckBoxB);
    //     await page.waitForTimeout(3000);
    // }

    // projectAssingnmentsAddH = async() => {
    //     let page=this.page;
    //     let { addProjNewSearchBtn, addProjectSearchCheckBox, addProjectSearchCheckBoxB, 
    //           searchFieldDropDownA, searchFieldDropDownB, projectActiveSelect, projectActiveSelectB,
    //           projectRescourceName }=locators.project_Page;

    //     await page.click(addProjNewSearchBtn);
    //     await page.waitForTimeout(1000);
    //     await page.click(addProjectSearchCheckBox);
    //     await page.waitForTimeout(1000);
    //     await page.click(addProjectSearchCheckBoxB);
    //     await page.waitForTimeout(1000);
        
    //     let textInputA = await page.$(searchFieldDropDownA); 
    //     await textInputA.click({clickCount: 2})
    //     await page.keyboard.type('false');
    //     await page.click(projectActiveSelect);
    //     // await page.waitForTimeout(1000);

    //     let textInputB = await page.$(searchFieldDropDownB); 
    //     await textInputB.click({clickCount: 2})
    //     await page.keyboard.type('Dev 2');
    //     await page.click(projectActiveSelectB);
    //     await page.waitForTimeout(1000);

    // }

    // projectSelectRescourceI = async() => {
    //     let page=this.page;
    //     let { addProjNewSearchBtn, addProjectSearchCheckBox, addProjectSearchCheckBoxB }=locators.project_Page;

    //     await page.click(addProjNewSearchBtn);
    //     // await page.waitForTimeout(1000);
    //     await page.click(addProjectSearchCheckBox);
    //     // await page.waitForTimeout(1000);
    //     await page.click(addProjectSearchCheckBoxB);
    //     await page.waitForTimeout(1000);
    // }

    // projectDataAdd = async() => {
    //     let page=this.page;
    //     let { addProjectCloseBtn, projectRescourceName }=locators.project_Page;

    //     await page.click(projectRescourceName);

    //     await page.click(addProjectCloseBtn);
    //     await page.waitForTimeout(2000);
    // }

}

module.exports.projectPage = projectPage;
