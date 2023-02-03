const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1010"] [data-componentid="r1NavToggle"]`,
        objLink: `//*[text()="Objects"]`,
        editObsLink: `//*[text()="Edit OBSs"]`,
    },

    //Administration
    adminNav: {
        //Projext


        projOBSAddBtn: `[id="AdminNodeTreeGrid-bodyWrap"] [aria-label="Add"]`,
        // partBoxCheckA: `[id="adminListsPartitionGrid-body"] [data-recordindex="4"] [data-columnid="checkcolumn-1039"]`,
        projOBSName: `//*[text()="Secure node"]`,
        projOBSNameDrop: `[id="AdminNodeTreeGrid-body"] [data-recordindex="3"] [role="presentation"]`,

        resOBSDrop: `[id="AdminNodeTreeGrid-bodyWrap"] [tabindex="0"]`,

        projOBSSiblingDataCreated: `[id="AdminNodeTreeGrid-body"] [data-recordindex="4"] [role="presentation"]`,

        //View
        viewSelect: `//*[text()="Views"]`,
        viewData: `//*[text()="Project Demand Analysis"]`,
        viewDataSelect: `[id="AdminViewDetailGrid-bodyWrap"] [aria-label="Add"]`,

        //period
        periodSelect: `//*[text()="Periods"]`,
        periodAdd: `[id="R1TPeriods-body"] [aria-label="Add"]`,
        periodType: `[id="R1TPeriods-body] [id="celleditor-1064"]`,

        //Pulse
        pulseSelect: `//*[text()="Pulse"]`,
        pulseAdd: `[id="R1TPulse-body"] [aria-label="Add"]`,
        pulseType: `[id="R1TPulse-body"] [id="celleditor-1064"]`,
    },

        //Main User Defined Lists
        uldLink: `//*[text()="User Defined Lists"]`,
        uldAddBtn: `[id="R1TUserDefinedLists-body"] [id="AdminUserDefinedListGridAdd"]`,
        UDLDetailAdd: `[id="toolbar-1047"] [aria-label="Add"]`,

}

class administrationTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    // Project OBS
    adminOBSProjLink = async() => {
        let page=this.page;
        let { menuSliderBtn, adminLink, objLink, editObsLink }=locator.admin_Page;
        await page.click(menuSliderBtn);
        // await page.waitForTimeout(1000);
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.click(objLink);
        // await page.waitForTimeout(1000);
        await page.click(editObsLink);
        await page.waitForTimeout(3000);
    }







    adminOBSProjData = async() => {
        let page=this.page;
        let { projOBSName }=locator.adminNav;
        await page.dblclick(projOBSName);
        await page.waitForTimeout(3000);
    }

    adminOBSRecentSibling = async() => {
        let page=this.page;
        let { projOBSSiblingDataCreated }=locator.adminNav;
        await page.dblclick(projOBSSiblingDataCreated);
        await page.waitForTimeout(3000);
    }




    adminOBSProjDataDropdown = async() => {
        let page=this.page;
        let { projOBSNameDrop }=locator.adminNav;
        await page.click(projOBSNameDrop);
        await page.waitForTimeout(3000);
    }



    adminOBSProjectLink = async() => {
        let page=this.page;
        let { obsLink }=locator.adminNav;
        let { adminLink }=locator.admin_Page;
        await page.click(adminLink);
        await page.click(obsLink);
        await page.waitForTimeout(3000);
    }

    projOBSAdd = async() => {
        let page=this.page;
        let {  projOBSAddBtn }=locator.adminNav;
        await page.click( projOBSAddBtn);
        await page.waitForTimeout(3000);
    }
     
    // listUDLRWriteA = async() => {
    //     let page=this.page;
    //     let { uldTextBox, uldAddBtnPopUp }=locators.udlNav;
    //     await page.click(uldTextBox);
    //     await page.keyboard.type('Field 33');
    //     await page.waitForTimeout(3000);
    //     await page.click(uldAddBtnPopUp);
    // }
     
    // listUserDetailTextBoxRescource = async() => {
    //     let page=this.page;
    //     let { UDLDetailBox, UDLDetailText }=locators.udlNav;
    //     await page.dblclick(UDLDetailBox);
    //     await page.waitForTimeout(3000)
    //     await page.keyboard.type('Rescource tes1');
    //     // await page.type(UDLDetailText, 'Project tes1');
    //     await page.waitForTimeout(3000);
    // }



    //Rescource OBS
    adminOBSResDrop = async() => {
        let page=this.page;
        let { resOBSDrop }=locator.adminNav;
        await page.click(resOBSDrop);
        await page.waitForTimeout(3000);
    }




    //Views
    adminOBSView = async() => {
        let page=this.page;
        let { viewSelect }=locator.adminNav;
        let { adminLink }=locator.admin_Page;
        await page.click(adminLink);
        await page.click(viewSelect);
        await page.waitForTimeout(3000);
    }

    adminOBSViewData = async() => {
        let page=this.page;
        let { viewData }=locator.adminNav;
        await page.click(viewData);
        await page.waitForTimeout(3000);
    }

    adminOBSViewDetailsAdd = async() => {
        let page=this.page;
        let { viewDataSelect }=locator.adminNav;
        await page.dblclick(viewDataSelect);
        await page.waitForTimeout(3000);
    }




    //Periods
    adminPeriodsSelect = async() => {
        let page=this.page;
        let { periodSelect }=locator.adminNav;
        let { adminLink }=locator.admin_Page;
        await page.click(adminLink);
        await page.dblclick(periodSelect);
        await page.waitForTimeout(3000);
    }

    adminPeriodsAdd = async() => {
        let page=this.page;
        let { periodAdd }=locator.adminNav;
        await page.click(periodAdd);
        await page.waitForTimeout(3000);
    }




    //Pulse
    adminPulseSelect = async() => {
        let page=this.page;
        let { pulseSelect }=locator.adminNav;
        let { adminLink }=locator.admin_Page;
        await page.click(adminLink);
        await page.dblclick(pulseSelect);
        await page.waitForTimeout(3000);
    }
    
    adminPulsesAdd = async() => {
        let page=this.page;
        let { pulseAdd }=locator.adminNav;
        await page.click(pulseAdd);
        await page.waitForTimeout(3000);
    }

    // adminPulsesAddB = async() => {
    //     let page=this.page;
    //     let { pulseAdd }=locator.adminNav;
    //     await page.click(pulseAdd);
    //     await page.waitForTimeout(3000);
    // }

    // adminPulsesAddC = async() => {
    //     let page=this.page;
    //     let { pulseAdd }=locator.adminNav;
    //     await page.click(pulseAdd);
    //     await page.waitForTimeout(3000);
    // }
    

}

exports.administrationTypeData = administrationTypeData;