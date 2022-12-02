const locator = {
    project_Page: {
        //Project Data
        projViewDropdown: `[id="ProjectListGrid-bodyWrap"] [id="projectListGridViews-bodyEl"]`,
        projViewA: `//*[text()="Project Expanded-MR import"]`,
        // projViewA: `[data-componentid="projectListGridViews-picker"] [data-recordindex="2"]`,

        projLink: `//*[text()="Project"]`,
        projData: `//*[text()="Project Data"]`,

        //UDLD Save Btn
        UDLDetailProjSave: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [id="button-1053"]`,
        saveYes: `//*[text()="Yes"]`,
        saveOk: `//*[text()="Ok"]`,


        //Project Demand
        projViewB: `[id="R1TDemand-bodyWrap"] [id="demandGridViews"] [id="demandGridViews-trigger-picker"]`,

        projDemand: `[id="panel-1021"] [data-componentid="ext-customtreelistitem-43"] [data-recordid="78"]`,

        projDemViewDrop: `[id="R1TDemand-body"] [id="demandGridViews"] [id="demandGridViews-trigger-picker"]`,
        projDemViewSelect: `[data-componentid="demandGridViews-picker"] [data-recordindex="0"]`,


        //Project Assingnments
        projAssignments: `//*[text()="Assignments"]`,
        projAssignmentsFilter:`[id="r1LaborAssignmentPanel-bodyWrap"] [id="laborAssignmentViewsFilter"]`,

        projAssignViewDrop: `[id="r1LaborAssignmentPanel-bodyWrap"] [id="laborAssignmentViews-trigger-picker"]`,
        projAssignViewSelect: `[id="laborAssignmentViews-picker"] [data-recordindex="4"]`,
        
    },

}

class projectTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    //Project Data
    projLinkSelect = async() => {
        let page=this.page;
        let { projLink, projData }=locator.project_Page;
        await page.click(projLink);
        await page.waitForTimeout(2000);
        await page.click(projData);
        await page.waitForTimeout(3000);
    }

    projViewSelect = async() => {
        let page=this.page;
        let { projViewDropdown, projViewA }=locator.project_Page;
        await page.click(projViewDropdown);
        await page.waitForTimeout(1000);
        await page.click(projViewA);
        await page.waitForTimeout(3000);
    }



    //Project Demand
    projDemandLink = async() => {
        let page=this.page;
        let { projLink, projDemand }=locator.project_Page;
        await page.click(projLink);
        await page.waitForTimeout(2000);
        await page.click(projDemand);
        await page.waitForTimeout(3000);
    }

    projDemandView = async() => {
        let page=this.page;
        let { projLink, projDemViewDrop, projDemViewSelect }=locator.project_Page;
        await page.click(projLink);
        await page.click(projDemViewDrop);
        await page.waitForTimeout(1000);
        await page.click(projDemViewSelect );
        await page.waitForTimeout(3000);
    }



    //Project Assingnments 
    projAssingnmentSelect = async() => {
        let page=this.page;
        let { projLink, projAssignments }=locator.project_Page;
        await page.click(projLink);
        await page.waitForTimeout(1000);
        await page.click(projAssignments);
        await page.waitForTimeout(3000);
    }

    projAssingFilterSelect = async() => {
        let page=this.page;
        let { projAssignmentsFilter }=locator.project_Page;
        await page.click(projAssignmentsFilter);
        await page.waitForTimeout(3000);
    }

    projAssingnmentView = async() => {
        let page=this.page;
        let { projAssignViewDrop, projAssignViewSelect }=locator.project_Page;
        await page.click(projAssignViewDrop);
        await page.waitForTimeout(1000);
        await page.click(projAssignViewSelect);
        await page.waitForTimeout(3000);
    }
}

exports.projectTypeData = projectTypeData;