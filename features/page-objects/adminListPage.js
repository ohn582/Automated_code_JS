const { action } = require('../utilities/action')

const locators = {
    saveOkBtn: {
        // saveOK: `[role="alertdialog"] [role="button"]`,
        saveOK: `[data-componentid="messagebox-1001"] [id="button-1005"]`,

        //UDLD Save Btn
        UDLDetailProjSave: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [aria-label="Save"]`,
        saveYes: `//*[text()="Yes"]`,
        // saveOk: `[id="messagebox-1001"] [role="button"]`,
    },
    
    reload: {
        reloadBtnA: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [aria-label="Reload"]`,
        reloadYes: `[id="messagebox-1001"] [id="messagebox-1001-toolbar"] [data-componentid="button-1006"]`,
    },
    
    //Admin List
    partitionsNav: {
        partBox: `[id="adminListsPartitionGrid-bodyWrap"] [data-columnid="gridcolumn-1024"]`,
        partSave: `[id="adminListsPartitionGrid-bodyWrap"] [id="adminListsPartitionGridSave-btnIconEl"]`,
        partDeleteBtn: `[id="adminListsPartitionGrid-bodyWrap"] [id="adminListsPartitionGridRemove"]`,
        partTextA: `//div[text()="tes1"]`,
        partTextB: `//div[text()="tes2"]`,
        partDeleteBtnYes: `//*[text()="Yes"]`,
        partSaveBtn: `[id="adminListsPartitionGrid-body"] [data-recordindex="4"] [data-columnid="checkcolumn-1039"]`,
        partReloadBtn: `[id="adminListsPartitionGrid-bodyWrap"] [id="adminListsPartitionGridReload"]`,
        // partReloadYes: `//*[text()="Yes"]`,
    },

    domainNav: {
        domBox: `[id="adminListsDomainGrid-body"] [data-columnid="gridcolumn-1024"]`,
        domSave: `[id="adminListsDomainGrid-bodyWrap"] [id="adminListsDomainGridSave-btnEl"]`,
        domDeleteBtn: `[id="adminListsDomainGrid-bodyWrap"] [id="adminListsDomainGridRemove"]`,
        domTextA: `//div[text()="tes1"]`,
        domTextB: `//div[text()="tes2"]`,
        domDeleteBtnYes: `//*[text()="Yes"]`,
        domSaveBtn: `[id="adminListsDomainGrid-body"] [data-recordindex="3"] [data-columnid="checkcolumn-1041"]`,
        domReloadBtn: `[id="adminListsDomainGrid-bodyWrap"] [id="adminListsDomainGridReload"]`,
        // domReloadYes: `//*[text()="Yes"]`,
    },

    sponsorNav: {
        sponBox: `[id="adminListsSponsorGrid-body"] [data-columnid="gridcolumn-1024"]`,
        sponSave: `[id="adminListsSponsorGrid-bodyWrap"] [id="adminListsSponsorGridSave-btnEl"]`,
        sponDeleteBtn: `[id="adminListsSponsorGrid-bodyWrap"] [id="adminListsSponsorGridRemove"]`,
        sponTextA: `//div[text()="tes1"]`,
        sponTextB: `//div[text()="tes2"]`,
        sponDeleteBtnYes: `//*[text()="Yes"]`,
        sponSaveBtn: `[id="R1TSponsors-body"] [data-recordindex="3"] [data-columnid="gridcolumn-1064"]`,
        sponReloadBtn: `[id="adminListsSponsorGrid-bodyWrap"] [id="adminListsSponsorGridReload"]`,
        // sponReloadYes: `//*[text()="Yes"]`,
    },

    categorieNav: {
        cateBox: `[id="adminListsCategoryGrid-body"] [data-recordindex="0"] [data-columnid="gridcolumn-1028"] [id="celleditor-1046"]`,
        cateSave: `[id="adminListsCategoryGrid-bodyWrap"] [data-componentid="adminListsCategoryGridSave"]`,
        cateDeleteBtn: `[id="adminListsCategoryGrid-bodyWrap"] [id="toolbar-1039"] [data-qtip="Remove"]`,
        cateTextA: `//*[text()="tes3"]`,
        cateTextB: `//*[text()="tes2"]`,
        cateDeleteBtnYes: `//*[text()="Yes"]`,
        // cateSaveBtn: `[id="adminListsCategoryGrid-body"] [data-recordindex="4"] [data-columnid="gridcolumn-1064"]`,
        cateReloadBtn: `[id="adminListsCategoryGrid-bodyWrap"] [id="adminListsCategoryGridReload"]`,
    },

    pcNav: {
        pcBox: `[id="R1TProjectCodes-body"] [data-columnid="gridcolumn-1024"]`,
        pcSave: `[id="R1TProjectCodes-bodyWrap"] [id="adminListsProjectCodeGridSave-btnEl"]`,
        pcDeleteBtn: `[id="R1TProjectCodes-bodyWrap"] [id="adminListsProjectCodeGridRemove"]`,
        pcTextA: `//*[text()="tes1"]`,
        pcTextB: `//*[text()="tes3"]`,
        pcDeleteBtnYes: `//*[text()="Yes"]`,
        pcSaveBtn: `[id="R1TProjectCodes-body"] [data-recordindex="2"] [data-columnid="gridcolumn-1064"]`,
        pcReloadBtn: `[id="R1TProjectCodes-bodyWrap"] [id="adminListsProjectCodeGridReload"]`,
    },

    psNav: {
        psBox: `[id="R1TProjectStates"] [data-columnid="gridcolumn-1024"]`,
        psSave: `[id="R1TProjectStates-bodyWrap"] [id="adminListsProjectStateGridSave-btnEl"]`,
        psDeleteBtn: `[id="R1TProjectStates-bodyWrap"] [id="adminListsProjectStateGridRemove"]`,
        psTextA: `//*[text()="tes3"]`,
        psTextB: `//*[text()="tes2"]`,
        psDeleteBtnYes: `//*[text()="Yes"]`,
        psSaveBtn: `[id="R1TProjectStates-body"] [data-recordindex="2"] [data-columnid="gridcolumn-1045"]`,
        psReloadBtn: `[id="R1TProjectStates-bodyWrap"] [id="adminListsProjectStateGridReload"]`,
    },

    countrieNav: {
        countBox: `[id="adminListsCountryGrid-body"] [data-columnid="gridcolumn-1024"]`,
        countSave: `[id="R1TCountries-bodyWrap"] [id="adminListsCountryGridSave-btnEl"]`,
        countDeleteBtn: `[id="R1TCountries-bodyWrap"] [id="adminListsCountryGridRemove"]`,
        countTextA: `//*[text()="tes3"]`,
        countTextB: `//*[text()="tes2"]`,
        countDeleteBtnYes: `//*[text()="Yes"]`,
        countSaveBtn: `[id="R1TCountries-body"] [data-recordindex="2"] [data-columnid="gridcolumn-1045"]`,
        countReloadBtn: `[id="R1TCountries-bodyWrap"] [id="adminListsCountryGridReload"]`,
    },

    locationNav: {
        locBox: `[id="R1TLocations-body"] [data-columnid="gridcolumn-1024"]`,
        locSave: `[id="R1TLocations-bodyWrap"] [id="adminListsLocationGridSave-btnEl"]`,
        locDeleteBtn: `[id="R1TLocations-bodyWrap"] [id="adminListsLocationGridRemove"]`,
        locTextA: `//*[text()="tes3"]`,
        locTextB: `//*[text()="tes2"]`,
        locDeleteBtnYes: `//*[text()="Yes"]`,
        locSaveBtn: `[id="R1TLocations-body"] [data-recordindex="2"] [data-columnid="gridcolumn-1045"]`,
        locReloadBtn: `[id="R1TLocations-bodyWrap"] [id="adminListsLocationGridReload"]`,
    },

    esNav: {
        esBox: `[id="R1TEffortStates-body"] [data-columnid="gridcolumn-1024"]`,
        esSave: `[id="R1TEffortStates-bodyWrap"] [id="adminListsEffortStateGridSave-btnEl"]`,
        esDeleteBtn: `[id="R1TEffortStates-bodyWrap"] [id="adminListsEffortStateGridRemove"]`,
        esTextA: `//*[text()="tes3"]`,
        esTextB: `//*[text()="tes2"]`,
        esDeleteBtnYes: `//*[text()="Yes"]`,
        esSaveBtn: `[id="R1TEffortStates-body"] [data-recordindex="2"] [data-columnid="gridcolumn-1045"]`,
        esReloadBtn: `[id="R1TEffortStates-bodyWrap"] [id="adminListsEffortStateGridReload"]`,
    },

    ccNav: {
        ccBox: `[id="adminListsCostCategoryGrid-body"] [data-recordindex="0"] [data-columnid="gridcolumn-1025"]`,
        ccSave: `[id="R1TCostCategories-bodyWrap"] [id="adminListsCostCategoryGridSave-btnEl"]`,
        ccDeleteBtn: `[id="R1TCostCategories-bodyWrap"] [id="adminListsCostCategoryGridRemove"]`,
        ccTextA: `//*[text()="tes3"]`,
        ccTextB: `//*[text()="tes2"]`,
        ccDeleteBtnYes: `//*[text()="Yes"]`,
        ccSaveBtn: `[id="R1TCostCategories-body"] [data-recordindex="2"] [data-columnid="gridcolumn-1045"]`,
        ccReloadBtn: `[id="R1TCostCategories-body"] [id="toolbar-1058"] [data-componentid="adminListsCategoryGridReload"]`,
    },

    cicNav: {
        cicBox: `[id="R1TCostItemCategories-body"] [data-columnid="gridcolumn-1024"]`,
        cicSave: `[id="R1TCostItemCategories-bodyWrap"] [id="adminListsCostItemCategoryGridSave-btnEl"]`,
        cicDeleteBtn: `[id="R1TCostItemCategories-bodyWrap"] [id="adminListsCostItemCategoryGridRemove"]`,
        cicTextA: `//*[text()="tes1"]`,
        cicTextB: `//*[text()="tes3"]`,
        cicDeleteBtnYes: `//*[text()="Yes"]`,
        cicSaveBtn: `[id="R1TCostItemCategories-body"] [data-recordindex="2"] [data-columnid="gridcolumn-1045"]`,
        cicReloadBtn: `[id="R1TCostItemCategories-bodyWrap"] [id="adminListsCostItemCategoryGridReload"]`,
        // cicReloadYes: `//*[text()="Yes"]`
    },

    ciNav: {
        ciBox: `[id="R1TCostItems-body"] [data-columnid="gridcolumn-1024"]`,
        ciSave: `[id="R1TCostItems-bodyWrap"] [id="adminListsCostItemGridSave-btnEl"]`,
        ciDeleteBtn: `[id="R1TCostItems-bodyWrap"] [id="adminListsCostItemGridRemove"]`,
        ciTextA: `//*[text()="tes1"]`,
        ciTextB: `//*[text()="tes3"]`,
        ciDeleteBtnYes: `//*[text()="Yes"]`,
        ciSaveBtn: `[id="R1TCostItems-body"] [data-recordindex="2"] [data-columnid="gridcolumn-1045"]`,
        ciReloadBtn: `[id="R1TCostItems-bodyWrap"] [id="adminListsCostItemGridReload"]`,
        // ciReloadYes: `//*[text()="Yes"]`,
    },

    btNav: {
        btBox: `[id="adminListsBaselineTypeGrid-body"] [data-recordindex="0"] [data-columnid="gridcolumn-1027"] [id="celleditor-1046"]`,
        btSave: `[id="toolbar-1039-innerCt"] [id="adminListsBaselineTypeGridSave"]`,
        btDeleteBtn: `[id="adminListsBaselineTypeGrid-bodyWrap"] [id="toolbar-1039"] [data-qtip="Remove"]`,
        // btTextA: `[id="gridview-1034"] [data-recordindex="4"] [data-columnid="gridcolumn-1027"]`,
        // btTextB: `[id="gridview-1034"] [data-recordindex="5"] [data-columnid="gridcolumn-1027"]`,
        btTextA: `//*[text()="tes2"]`,
        btTextB: `//*[text()="tes3"]`,
        btDeleteBtnYes: `//*[text()="Yes"]`,
        btReloadBtn: `[id="toolbar-1039-innerCt"] [id="adminListsBaselineTypeGridReload"]`,
    },

    ftNav: {
        ftBox: `[id="R1TFeatureTypes-body"] [data-columnid="gridcolumn-1024"]`,
        ftSave: `[id="R1TFeatureTypes-bodyWrap"] [id="adminListsFeatureTypeGridSave-btnEl"]`,
        ftDeleteBtn: `[id="R1TFeatureTypes-bodyWrap"] [id="adminListsFeatureTypeGridRemove"]`,
        ftTextA: `//*[text()="tes2"]`,
        ftTextB: `//*[text()="tes3"]`,
        ftDeleteBtnYes: `//*[text()="Yes"]`,
        ftSaveBtn: `[id="R1TFeatureTypes-body"] [data-recordindex="2"] [data-columnid="gridcolumn-1040"]`,
        ftReloadBtn: `[id="R1TFeatureTypes-bodyWrap"] [id="adminListsFeatureTypeGridReload"]`,
    },

    fsNav: {
        fsBox: `[id="R1TFeatureStates-body"] [data-columnid="gridcolumn-1024"]`,
        fsSave: `[id="R1TFeatureStates-bodyWrap"] [id="adminListsFeatureStateGridSave-btnEl"]`,
        fsDeleteBtn: `[id="R1TFeatureStates-bodyWrap"] [id="adminListsFeatureStateGridRemove"]`,
        fsTextA: `//*[text()="tes2"]`,
        fsTextB: `//*[text()="tes3"]`,
        fsDeleteBtnYes: `//*[text()="Yes"]`,
        fsSaveBtn: `[id="R1TFeatureStates-body"] [data-recordindex="2"] [data-columnid="gridcolumn-1040"]`,
        fsReloadBtn: `[id="R1TFeatureStates-bodyWrap"] [id="adminListsFeatureStateGridReload"]`,
    },

    overheadNav: {
        overBox: `[id="R1TOverheads-body"] [data-columnid="gridcolumn-1024"]`,
        overSave: `[id="R1TOverheads-bodyWrap"] [id="adminListsOverheadGridSave-btnEl"]`,
        overDeleteBtn: `[id="R1TOverheads-bodyWrap"] [id="adminListsOverheadGridRemove"]`,
        overTextA: `//*[text()="tes1"]`,
        overTextB: `//*[text()="tes2"]`,
        overDeleteBtnYes: `//*[text()="Yes"]`,
        overSaveBtn: `[id="R1TOverheads-body"] [data-recordindex="2"] [data-columnid="gridcolumn-1040"]`,
        overReloadBtn: `[id="R1TOverheads-bodyWrap"] [id="adminListsOverheadGridReload"]`,
    },


    //Main User Defined Lists
    udlNav: {
        udlLinkArrowDrop: `[id="AdminUdfListsGrid-bodyWrap"] [id="AdminUdfTypeSelector-arrowEl"]`,
        uldTextBox: `[id="AdminUdfListAddWindow-body"] [id="AdminUdfListAddWindowCombo-inputEl"]`,
        uldResTextBox: `id="AdminUdfListAddWindowCombo-inputWrap"] [id="AdminUdfListAddWindowCombo-inputEl"]`,
        uldAddBtnPopUp: `//*[text()="Add"]`,
        uldReload: `[id="AdminUdfListsGrid-bodyWrap"] [id="adminViewsReload"]`,

        UDLDetailBox: `[id="AdminUserDefinedListDetailGrid-body"] [data-columnid="gridcolumn-1042"]`,
        UDLDetailBoxB: `//*[text()="New List Item"]`,
        UDLDetailText: `[id="AdminUserDefinedListDetailGrid-body"] [data-recordindex="0"] [id="celleditor-1065"]`,
    },

    //User Defind list: Project
    udlProjectNav: {
        uldpMenu: `//*[text()="Edit OBSs"]`,

        uldpProjectFieldSelect: `[id="AdminUdfListsGrid-bodyWrap"] [data-recordindex="1"]`,
        udldpProjectDataSelect: `[id="AdminUserDefinedListDetailGrid-body"] [data-columnid="gridcolumn-1042"]`,

        udldpProjectDataDelete: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [aria-label="Remove"]`,
    },

    //User Defind list: Rescource
    udlrescourceNav: {

        udlLinkArrowDropRescource: `[id="AdminUdfListsGrid-bodyWrap"] [data-componentid="AdminUdfTypeSelector"]`,
        udlRescourceAdd: `[id="AdminUdfListAddWindow"] [aria-label="Add"]`,
        udlRescourceSelectB: `[id="AdminUdfListsGrid-body"] [data-recordindex="9"]`,


        // udlWinAddBtn: `[id="AdminUdfListsGrid-bodyWrap"] [id="AdminUdfListAddWindow-bodyWrap"] [aria-label="Add"]`,
        // rescourceSelectA: `[id="AdminUdfListsGrid-bodyWrap"] [data-recordindex="2"]`,
        udlRescourceSelect: `[id="AdminUdfListAddWindowCombo-picker"] [data-recordindex="0"]`,

        rescourceRetypeB: `[id="AdminUserDefinedListDetailGrid-body"] [data-recordindex="0"] [data-columnid="gridcolumn-1042"]`,

        udlWinAddBtn: `[id="AdminUdfListAddWindow-bodyWrap"] [aria-label="Add"]`,
        UDLRescourceBox: `[id="AdminUserDefinedListDetailGrid-body"] [data-columnid="gridcolumn-1042"]`,

        udldRescourceDataSelect: `[id="AdminUserDefinedListGrid-bodyWrap"] [id="AdminUdfListsGrid-body"] [data-recordindex="2"]`,

        uldRescourceFieldSelectCheck: `[id="AdminUserDefinedListGrid-body"] [id="AdminUserDefinedListDetailGrid-body"] [data-columnid="checkcolumn-1059"]`,
        // udldRescourceDataSelect: `[id="AdminUserDefinedListDetailGrid-body"] [data-columnid="gridcolumn-1042"]`,
        UDLDetailResSave: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [aria-label="Save"]`,
        udldRescourceDataDelete: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [aria-label="Remove"]`,
        udldRescourceDataDeleteClear: `[id="messagebox-1001"] [data-componentid="button-1007"]`,
    },
    


    //User Defind list: Assingnment
    udlAssingnmentNav: {
        udlLinkArrowDropAssingnment: `[id="AdminUdfListsGrid-bodyWrap"] [id="AdminUdfTypeSelector-btnWrap"]`,
    
        udldAssignText: `[id="AdminUdfListAddWindow-outerCt"] [id="AdminUdfListAddWindowCombo-bodyEl"] [id="AdminUdfListAddWindowCombo-inputWrap"]`,
    
        udldAssingnmentDataDelete: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [aria-label="Remove"]`,

        popupAssingBtnAdd: `[id="AdminUdfListAddWindow"] [aria-label="Add"]`,

        AssignTextListItem: `[id="AdminUserDefinedListDetailGrid-body"] [data-columnid="gridcolumn-1041"]`,
        UDLDetailAssingSave: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [id="button-1071"]`,
        UDLDetailAssingSave2: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [id="button-1052"]`,

        AssignTextListSelect: `[id="AdminUdfListsGrid-body"] [data-recordindex="3"]`,
        AssingCheckBox: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [data-recordindex="0"] [data-columnid="checkcolumn-1059"]`,

        assingnmentDeleteOk: `[id="messagebox-1001"] [data-componentid="button-1006"]`,
    },


    //User Defind list: Test
    udlTeamNav: {
        
        udlLinkArrowDropTeam: `[id="AdminUserDefinedListGrid-body"] [id="AdminUdfTypeSelector-btnWrap"] [id="AdminUdfTypeSelector-arrowEl"]`,
    
        udldTeamText: `[id="AdminUdfListAddWindow-outerCt"] [id="AdminUdfListAddWindowCombo-bodyEl"] [id="AdminUdfListAddWindowCombo-inputWrap"]`,
    
        udldTeamDataDelete: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [aria-label="Remove"]`,
    
        popupTeamBtnAdd: `[id="AdminUdfListAddWindow"] [aria-label="Add"]`,
    
        teamTextListItem: `[id="AdminUserDefinedListDetailGrid-body"] [data-columnid="gridcolumn-1042"]`,
        UDLDetailTeamSave: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [aria-label="Save"]`,
            
        teamTextListSelect: `[id="AdminUdfListsGrid0-body"] [data-recordindex="3"]`,
        AssingCheckBox: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [data-recordindex="0"] [data-columnid="checkcolumn-1059"]`,
    
        teamDeleteOk: `[id="messagebox-1001"] [data-componentid="button-1006"]`,
    },
        
    
}



class adminListPage {
    constructor(page) {
        this.page = page;
    }

    // Editing Partitions Data select 
    listPartitionsWriteA = async() => {
        let page=this.page;
        let { partBox }=locators.partitionsNav;
        let textInput = await page.$(partBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes1');
        await page.waitForTimeout(1000);
    }

    listPartitionsWriteB = async() => {
        let page=this.page;
        let { partBox }=locators.partitionsNav;
        let textInput = await page.$(partBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes2');
        await page.waitForTimeout(3000);
    }

    listPartitionsWriteC = async() => {
        let page=this.page;
        let { partBox }=locators.partitionsNav;
        let textInput = await page.$(partBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        await page.waitForTimeout(3000);
    }

    listPartitionSave = async() => {
        let page=this.page;
        let { partSave }=locators.partitionsNav;
        let { saveOK }=locators.saveOkBtn;
        await page.click(partSave);
        await page.waitForTimeout(3000);
        await page.click(saveOK).catch(e => e);
    }

    listPartitionUpdateA = async() => {
        let page=this.page;
        let { partTextA }=locators.partitionsNav;
        let textInput = await page.$(partTextA);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewA');
        await page.waitForTimeout(1000);
    }

    listPartitionUpdateB = async() => {
        let page=this.page;
        let { partTextB }=locators.partitionsNav;
        let textInput = await page.$(partTextB);
        await textInput.click({clickCount: 3})
        await page.waitForTimeout(1000);
        await page.keyboard.type('NewB');
    }

    listPartitionDelete = async() => {
        let page=this.page;
        let { partDeleteBtn, partDeleteBtnYes }=locators.partitionsNav;
        await page.click(partDeleteBtn).catch(e => e);
        await page.click(partDeleteBtnYes).catch(e => e);
        await page.waitForTimeout(3000);
    }

    listPartitionReload = async() => {
        let page=this.page;
        let { partReloadBtn }=locators.partitionsNav;
        let { reloadYes }=locators.saveOkBtn;
        await page.click(partReloadBtn).catch(e => e);
        await page.click(reloadYes).catch(e => e);
        await page.waitForTimeout(1000);
    }





    // Editing Domains Data select 
    listDomainWriteA = async() => {
        let page=this.page;
        let { domBox }=locators.domainNav;
        let textInput = await page.$(domBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes1');
        await page.waitForTimeout(1000);
    }

    listDomainWriteB = async() => {
        let page=this.page;
        let { domBox }=locators.domainNav;
        let textInput = await page.$(domBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes2');
        await page.waitForTimeout(1000);
    }

    listDomainWriteC = async() => {
        let page=this.page;
        let { domBox }=locators.domainNav;
        let textInput = await page.$(domBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        await page.waitForTimeout(1000);
    }

    listDomainSave = async() => {
        let page=this.page;
        let { domSave }=locators.domainNav;
        let { saveOK }=locators.saveOkBtn;
        await page.click(domSave);
        await page.waitForTimeout(3000);
        await page.click(saveOK).catch(e => e);
    }

    listDomainUpdateA = async() => {
        let page=this.page;
        let { domTextA }=locators.domainNav;
        let textInput = await page.$(domTextA);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewA');
        await page.waitForTimeout(1000);
    }

    listDomainUpdateB = async() => {
        let page=this.page;
        let { domTextB }=locators.domainNav;
        let textInput = await page.$(domTextB);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewB');
        await page.waitForTimeout(1000);
    }

    listDomainDelete = async() => {
        let page=this.page;
        let { domDeleteBtn, domDeleteBtnYes }=locators.domainNav;
        await page.click(domDeleteBtn).catch(e => e);
        await page.click(domDeleteBtnYes).catch(e => e);
        await page.waitForTimeout(1000);
    }

    listDomainReload = async() => {
        let page=this.page;
        let { domReloadBtn }=locators.domainNav;
        let { reloadYes }=locators.saveOkBtn;
        await page.click(domReloadBtn).catch(e => e);
        await page.waitForTimeout(1000);
    }









    // Editing Sponsors Data select 
    listSponsorWriteA = async() => {
        let page=this.page;
        let { sponBox }=locators.sponsorNav;
        let textInput = await page.$(sponBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes1');
        await page.waitForTimeout(1000);
    }


    listSponsorWriteB = async() => {
        let page=this.page;
        let { sponBox }=locators.sponsorNav;
        let textInput = await page.$(sponBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes2');
        await page.waitForTimeout(1000);
    }

    listSponsorWriteC = async() => {
        let page=this.page;
        let { sponBox }=locators.sponsorNav;
        let textInput = await page.$(sponBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        await page.waitForTimeout(1000);
    }

    listSponsorSave = async() => {
        let page=this.page;
        let { sponSave }=locators.sponsorNav;
        let { saveOK }=locators.saveOkBtn;
        await page.click(sponSave);
        await page.waitForTimeout(1000);
        await page.click(saveOK).catch(e => e);
    }

    listSponsorUpdateA = async() => {
        let page=this.page;
        let { sponTextA }=locators.sponsorNav;
        let textInput = await page.$(sponTextA);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewA');
        await page.waitForTimeout(1000);
    }

    listSponsorUpdateB = async() => {
        let page=this.page;
        let { sponTextB }=locators.sponsorNav;
        let textInput = await page.$(sponTextB);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewB');
        await page.waitForTimeout(1000);
    }

    listSponsorDelete = async() => {
        let page=this.page;
        let { sponDeleteBtn, sponDeleteBtnYes }=locators.sponsorNav;
        await page.click(sponDeleteBtn).catch(e => e);
        await page.click(sponDeleteBtnYes).catch(e => e);
        await page.waitForTimeout(1000);
    }

    listSponsorReload = async() => {
        let page=this.page;
        let { sponReloadBtn }=locators.sponsorNav;
        let { reloadYes }=locators.saveOkBtn;
        await page.click(sponReloadBtn).catch(e => e);
        await page.waitForTimeout(1000);
    }






    // Editing Categories Data select 
    listCategorieWriteA = async() => {
        let page=this.page;
        let { cateBox }=locators.categorieNav;
        let textInput = await page.$(cateBox);
        await textInput.click({clickCount: 3})

        await page.keyboard.type('tes1');
        await page.waitForTimeout(1000);
    }

    listCategorieWriteB = async() => {
        let page=this.page;
        let { cateBox }=locators.categorieNav;
        let textInput = await page.$(cateBox);
        await textInput.click({clickCount: 3})

        await page.keyboard.type('tes2');
        await page.waitForTimeout(1000);
    }

    listCategorieWriteC = async() => {
        let page=this.page;
        let { cateBox }=locators.categorieNav;
        let textInput = await page.$(cateBox);
        await textInput.click({clickCount: 3})

        await page.keyboard.type('tes3');
        await page.waitForTimeout(1000);
    }

    listCategorieUpdateA = async() => {
        let page=this.page;
        let { cateTextA }=locators.categorieNav;
        let textInput = await page.$(cateTextA);
        await textInput.click({clickCount: 3})
        await page.keyboard.type(' NewA');
        await page.waitForTimeout(1000);
    }

    listCategorieUpdateB = async() => {
        let page=this.page;
        let { cateTextB }=locators.categorieNav;
        let textInput = await page.$(cateTextB);
        await textInput.click({clickCount: 3})
        await page.waitForTimeout(1000);
        await page.keyboard.type(' NewB');
    }

    listCategorieSave = async() => {
        let page=this.page;
        let { cateSave }=locators.categorieNav;
        let { saveOK }=locators.saveOkBtn;
        await page.click(cateSave);
        await page.waitForTimeout(3000);
        await page.click(saveOK).catch(e => e);
    }






    listCategorieDelete = async() => {
        let page=this.page;
        let { cateDeleteBtn, cateDeleteBtnYes }=locators.categorieNav;
        await page.click(cateDeleteBtn).catch(e => e);
        await page.click(cateDeleteBtnYes).catch(e => e);
        await page.waitForTimeout(1000);
    }

    listCategorieReload = async() => {
        let page=this.page;
        let { cateReloadBtn }=locators.categorieNav;
        await page.click(cateReloadBtn).catch(e => e);
        // let { reloadYes }=locators.saveOkBtn;
        await page.waitForTimeout(1000);
    }






    // Editing Project Codes 
    listPCWriteA = async() => {
        let page=this.page;
        let { pcBox }=locators.pcNav;
        let textInput = await page.$(pcBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes1');
        await page.waitForTimeout(1000);
    }

    listPCWriteB = async() => {
        let page=this.page;
        let { pcBox }=locators.pcNav;
        let textInput = await page.$(pcBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes2');
        await page.waitForTimeout(1000);
    }

    listPCWriteC = async() => {
        let page=this.page;
        let { pcBox }=locators.pcNav;
        let textInput = await page.$(pcBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        await page.waitForTimeout(1000);
    }

    listPCSave = async() => {
        let page=this.page;
        let { pcSave }=locators.pcNav;
        let { saveOK }=locators.saveOkBtn;
        await page.click(pcSave);
        await page.waitForTimeout(3000);
        await page.click(saveOK).catch(e => e);
    }

    listPCUpdateA = async() => {
        let page=this.page;
        let { pcTextA }=locators.pcNav;
        let textInput = await page.$(pcTextA);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewA');
        await page.waitForTimeout(1000);
    }

    listPCUpdateB = async() => {
        let page=this.page;
        let { pcTextB }=locators.pcNav;
        let textInput = await page.$(pcTextB);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewB');
        await page.waitForTimeout(1000)
    }

    listPCDelete = async() => {
        let page=this.page;
        let { pcDeleteBtn, pcDeleteBtnYes }=locators.pcNav;
        await page.click(pcDeleteBtn).catch(e => e);
        await page.click(pcDeleteBtnYes).catch(e => e);
        await page.waitForTimeout(1000);
    }

    listPCReload = async() => {
        let page=this.page;
        let { pcReloadBtn }=locators.pcNav;
        let { reloadYes }=locators.saveOkBtn;
        await page.click(pcReloadBtn).catch(e => e);
        await page.waitForTimeout(1000);
    }






    // Editing Project States 
    listPSWriteA = async() => {
        let page=this.page;
        let { psBox }=locators.psNav;
        let textInput = await page.$(psBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes1');
        await page.waitForTimeout(1000);
    }
    
    listPSWriteB = async() => {
        let page=this.page;
        let { psBox }=locators.psNav;
        let textInput = await page.$(psBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes2');
        await page.waitForTimeout(1000);
    }
    
    listPSWriteC = async() => {
        let page=this.page;
        let { psBox }=locators.psNav;
        let textInput = await page.$(psBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        await page.waitForTimeout(1000);
    }
    
    listPSSave = async() => {
        let page=this.page;
        let { psSave }=locators.psNav;
        let { saveOK }=locators.saveOkBtn;
        await page.click(psSave);
        await page.waitForTimeout(3000);
        await page.click(saveOK).catch(e => e);
    }

    listPSUpdateA = async() => {
        let page=this.page;
        let { psTextA }=locators.psNav;
        let textInput = await page.$(psTextA);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewA');
        await page.waitForTimeout(1000);
    }
    
    listPSUpdateB = async() => {
        let page=this.page;
        let { psTextB }=locators.psNav;
        let textInput = await page.$(psTextB);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewB');
        await page.waitForTimeout(1000);
    }
    
    listPSDelete = async() => {
        let page=this.page;
        let { psDeleteBtn, psDeleteBtnYes }=locators.psNav;
        await page.click(psDeleteBtn).catch(e => e);
        await page.click(psDeleteBtnYes).catch(e => e);
        await page.waitForTimeout(1000);
    }

    listPSReload = async() => {
        let page=this.page;
        let { psReloadBtn }=locators.psNav;
        let { reloadYes }=locators.saveOkBtn;
        await page.click(psReloadBtn).catch(e => e);
        await page.waitForTimeout(1000);
    }








    // Editing Countries 
    listCountWriteA = async() => {
        let page=this.page;
        let { countBox }=locators.countrieNav;
        let textInput = await page.$(countBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes1');
        await page.waitForTimeout(1000);
    }
  
    listCountWriteB = async() => {
        let page=this.page;
        let { countBox }=locators.countrieNav;
        let textInput = await page.$(countBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes2');
        await page.waitForTimeout(1000);
    }
    
    listCountWriteC = async() => {
        let page=this.page;
        let { countBox }=locators.countrieNav;
        let textInput = await page.$(countBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        await page.waitForTimeout(1000);
    }
    
    listCountSave = async() => {
        let page=this.page;
        let { countSave }=locators.countrieNav;
        let { saveOK }=locators.saveOkBtn;
        await page.click(countSave);
        await page.waitForTimeout(3000);
        await page.click(saveOK).catch(e => e);
    }

    listCountUpdateA = async() => {
        let page=this.page;
        let { countTextA }=locators.countrieNav;
        let textInput = await page.$(countTextA);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewA');
        await page.waitForTimeout(1000);
    }

    listCountUpdateB = async() => {
        let page=this.page;
        let { countTextB }=locators.countrieNav;
        let textInput = await page.$(countTextB);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewB');
        await page.waitForTimeout(1000);
    }
    
    listCountDelete = async() => {
        let page=this.page;
        let { countDeleteBtn, countDeleteBtnYes }=locators.countrieNav;
        await page.click(countDeleteBtn).catch(e => e);
        await page.click(countDeleteBtnYes).catch(e => e);
        await page.waitForTimeout(1000);
    }

    listCountReload = async() => {
        let page=this.page;
        let { countReloadBtn }=locators.countrieNav;
        let { reloadYes }=locators.saveOkBtn;
        await page.click(countReloadBtn).catch(e => e);
        await page.waitForTimeout(1000);
    }










    // Editing locations 
    listLocWriteA = async() => {
        let page=this.page;
        let { locBox }=locators.locationNav;
        let textInput = await page.$(locBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes1');
        await page.waitForTimeout(1000);
    }

    listLocWriteB = async() => {
        let page=this.page;
        let { locBox }=locators.locationNav;
        let textInput = await page.$(locBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes2');
        await page.waitForTimeout(1000);
    }

    listLocWriteC = async() => {
        let page=this.page;
        let { locBox }=locators.locationNav;
        let textInput = await page.$(locBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        await page.waitForTimeout(1000);
    }

    listLocSave = async() => {
        let page=this.page;
        let { locSave }=locators.locationNav;
        let { saveOK }=locators.saveOkBtn;
        await page.click(locSave);
        await page.waitForTimeout(3000);
        await page.click(saveOK).catch(e => e);
    }

    listLocUpdateA = async() => {
        let page=this.page;
        let { locTextA }=locators.locationNav;
        let textInput = await page.$(locTextA);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewA');
        await page.waitForTimeout(1000);
    }

    listLocUpdateB = async() => {
        let page=this.page;
        let { locTextB }=locators.locationNav;
        let textInput = await page.$(locTextB);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewB');
    }

    listLocDelete = async() => {
        let page=this.page;
        let { locDeleteBtn, locDeleteBtnYes }=locators.locationNav;
        await page.click(locDeleteBtn).catch(e => e);
        await page.click(locDeleteBtnYes).catch(e => e);
        await page.waitForTimeout(1000);
    }

    listLocReload = async() => {
        let page=this.page;
        let { locReloadBtn }=locators.locationNav;
        let { reloadYes }=locators.saveOkBtn;
        await page.click(locReloadBtn).catch(e => e);
        await page.waitForTimeout(1000);
    }






    // Editing Effort States 
    listESWriteA = async() => {
        let page=this.page;
        let { esBox }=locators.esNav;
        let textInput = await page.$(esBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes1');
        await page.waitForTimeout(1000);
    }

    listESWriteB = async() => {
        let page=this.page;
        let { esBox }=locators.esNav;
        let textInput = await page.$(esBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes2');
        await page.waitForTimeout(1000);
    }

    listESWriteC = async() => {
        let page=this.page;
        let { esBox }=locators.esNav;
        let textInput = await page.$(esBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        await page.waitForTimeout(1000);
    }

    listESSave = async() => {
        let page=this.page;
        let { esSave }=locators.esNav;
        let { saveOK }=locators.saveOkBtn;
        await page.click(esSave);
        await page.waitForTimeout(3000);
        await page.click(saveOK).catch(e => e);
    }

    listESUpdateA = async() => {
        let page=this.page;
        let { esTextA }=locators.esNav;
        let textInput = await page.$(esTextA);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewA');
        await page.waitForTimeout(1000);
    }

    listESUpdateB = async() => {
        let page=this.page;
        let { esTextB }=locators.esNav;
        let textInput = await page.$(esTextB);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewB');
        await page.waitForTimeout(1000);
    }

    listESDelete = async() => {
        let page=this.page;
        let { esDeleteBtn, esDeleteBtnYes }=locators.esNav;
        await page.click(esDeleteBtn).catch(e => e);
        await page.click(esDeleteBtnYes).catch(e => e);
        await page.waitForTimeout(1000);
    }

    listESReload = async() => {
        let page=this.page;
        let { esReloadBtn }=locators.esNav;
        let { reloadYes }=locators.saveOkBtn;
        await page.click(esReloadBtn).catch(e => e);
        await page.waitForTimeout(1000);
    }







    // Editing cost categories
    listCCWriteA = async() => {
        let page=this.page;
        let { ccBox }=locators.ccNav;
        let textInput = await page.$(ccBox);
        await textInput.click({clickCount: 3})
        // await page.dblclick(ccBox);
        await page.keyboard.type('tes1');
        await page.waitForTimeout(1000);
    }

    listCCWriteB = async() => {
        let page=this.page;
        let { ccBox }=locators.ccNav;
        let textInput = await page.$(ccBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes2');
        await page.waitForTimeout(1000);
    }

    listCCWriteC = async() => {
        let page=this.page;
        let { ccBox }=locators.ccNav;
        let textInput = await page.$(ccBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        await page.waitForTimeout(1000);
    }



    listCCSave = async() => {
        let page=this.page;
        let { ccSave }=locators.ccNav;
        let { saveOK }=locators.saveOkBtn;
        await page.click(ccSave);
        await page.waitForTimeout(3000);
        await page.click(saveOK).catch(e => e);
    }



    listCCUpdateA = async() => {
        let page=this.page;
        let { ccTextA }=locators.ccNav;
        let textInput = await page.$(ccTextA);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewA');
        await page.waitForTimeout(1000);
    }

    listCCUpdateB = async() => {
        let page=this.page;
        let { ccTextB }=locators.ccNav;
        let textInput = await page.$(ccTextB);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewB');
        await page.waitForTimeout(1000);
    }


    listCCDelete = async() => {
        let page=this.page;
        let { ccDeleteBtn, ccDeleteBtnYes }=locators.ccNav;
        await page.click(ccDeleteBtn);
        await page.click(ccDeleteBtnYes);
        await page.waitForTimeout(1000);
    }

    listCCReload = async() => {
        let page=this.page;
        let { ccReloadBtn }=locators.ccNav;
        let { reloadYes }=locators.saveOkBtn;
        await page.click(ccReloadBtn).catch(e => e);
        await page.waitForTimeout(1000);
    }






    // Editing cost item categories
    listCICWriteA = async() => {
        let page=this.page;
        let { cicBox }=locators.cicNav;
        let textInput = await page.$(cicBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes1');
        await page.waitForTimeout(1000);
    }

    listCICWriteB = async() => {
        let page=this.page;
        let { cicBox }=locators.cicNav;
        let textInput = await page.$(cicBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes2');
        await page.waitForTimeout(1000);
    }

    listCICWriteC = async() => {
        let page=this.page;
        let { cicBox }=locators.cicNav;
        let textInput = await page.$(cicBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        await page.waitForTimeout(1000);
    }

    listCICSave = async() => {
        let page=this.page;
        let { cicSave }=locators.cicNav;
        let { saveOK }=locators.saveOkBtn;
        await page.click(cicSave);
        await page.waitForTimeout(3000);
        await page.click(saveOK).catch(e => e);
    }

    listCICUpdateA = async() => {
        let page=this.page;
        let { cicTextA }=locators.cicNav;
        let textInput = await page.$(cicTextA);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewA');
        await page.waitForTimeout(1000);
    }

    listCICUpdateB = async() => {
        let page=this.page;
        let { cicTextB }=locators.cicNav;
        let textInput = await page.$(cicTextB);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewB');
        await page.waitForTimeout(1000);
    }    

    listCICDelete = async() => {
        let page=this.page;
        let { cicDeleteBtn, cicDeleteBtnYes }=locators.cicNav;
        await page.click(cicDeleteBtn).catch(e => e);
        await page.click(cicDeleteBtnYes).catch(e => e);
        await page.waitForTimeout(1000);
    }

    listCICReload = async() => {
        let page=this.page;
        let { cicReloadBtn }=locators.cicNav;
        let { reloadYes }=locators.saveOkBtn;
        await page.click(cicReloadBtn).catch(e => e);
        await page.waitForTimeout(1000);
    }







    // Editing cost items
    listCIWriteA = async() => {
        let page=this.page;
        let { ciBox }=locators.ciNav;
        let textInput = await page.$(ciBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes1');
        await page.waitForTimeout(1000);
    }

    listCIWriteB = async() => {
        let page=this.page;
        let { ciBox }=locators.ciNav;
        let textInput = await page.$(ciBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes2');
        await page.waitForTimeout(1000);
    }

    listCIWriteC = async() => {
        let page=this.page;
        let { ciBox }=locators.ciNav;
        let textInput = await page.$(ciBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        await page.waitForTimeout(1000);
    }

    listCISave = async() => {
        let page=this.page;
        let { ciSave }=locators.ciNav;
        let { saveOK }=locators.saveOkBtn;
        await page.click(ciSave);
        // await page.waitForTimeout(3000);
        await page.click(saveOK).catch(e => e);
    }

    listCIUpdateA = async() => {
        let page=this.page;
        let { ciTextA }=locators.ciNav;
        await page.dblclick(ciTextA);
        await page.waitForTimeout(1000);
        await page.keyboard.type('NewA');
    }

    listCIUpdateB = async() => {
        let page=this.page;
        let { ciTextB }=locators.ciNav;
        await page.dblclick(ciTextB);
        await page.waitForTimeout(1000);
        await page.keyboard.type('NewB');
    }

    listCIDelete = async() => {
        let page=this.page;
        let { ciDeleteBtn, ciDeleteBtnYes }=locators.ciNav;
        await page.click(ciDeleteBtn).catch(e => e);
        await page.click(ciDeleteBtnYes).catch(e => e);
        await page.waitForTimeout(1000);
    }

    listCIReload = async() => {
        let page=this.page;
        let { ciReloadBtn }=locators.ciNav;
        let { reloadYes }=locators.saveOkBtn;
        await page.click(ciReloadBtn).catch(e => e);
        // await page.click(ciReloadYes).catch(e => e);
        await page.waitForTimeout(1000);
    }









    // Editing Baseline Types
    listBTWriteA = async() => {
        let page=this.page;
        let { btBox }=locators.btNav;
        let textInput = await page.$(btBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes1');
        await page.waitForTimeout(1000);
    }


    listBTWriteB = async() => {
        let page=this.page;
        let { btBox }=locators.btNav;
        let textInput = await page.$(btBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes2');
        await page.waitForTimeout(1000);
    }

    listBTWriteC = async() => {
        let page=this.page;
        let { btBox }=locators.btNav;
        let textInput = await page.$(btBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        await page.waitForTimeout(1000);
    }

    listBTSave = async() => {
        let page=this.page;
        let { btSave }=locators.btNav;
        let { saveOK }=locators.saveOkBtn;
        await page.click(btSave);
        await page.waitForTimeout(3000);
        await page.click(saveOK).catch(e => e);
    }

    listBTUpdateA = async() => {
        let page=this.page;
        let { btTextA }=locators.btNav;
        let textInput = await page.$(btTextA);
        await textInput.click({clickCount: 3})
        await page.keyboard.type(' NewA');
        await page.waitForTimeout(1000);
    }

    listBTUpdateB = async() => {
        let page=this.page;
        let { btTextB }=locators.btNav;
        let textInput = await page.$(btTextB);
        await textInput.click({clickCount: 3})
        await page.keyboard.type(' NewB');
        await page.waitForTimeout(1000);
    }



    listBTDelete = async() => {
        let page=this.page;
        let { btDeleteBtn, btDeleteBtnYes }=locators.btNav;
        await page.click(btDeleteBtn).catch(e => e);
        await page.click(btDeleteBtnYes).catch(e => e);
        await page.waitForTimeout(1000);
    }

    listBTReload = async() => {
        let page=this.page;
        let { btReloadBtn }=locators.btNav;
        let { reloadYes }=locators.reload;
        await page.click(btReloadBtn).catch(e => e);
        await page.click(reloadYes).catch(e => e);
        // await page.waitForTimeout(1000);
    }







    // Editing Feature Types
    listFTWriteA = async() => {
        let page=this.page;
        let { ftBox }=locators.ftNav;
        let textInput = await page.$(ftBox);
        await textInput.click({clickCount: 3})
        await page.waitForTimeout(1000);
        await page.keyboard.type('tes1');
        await page.waitForTimeout(3000);
    }

    listFTWriteB = async() => {
        let page=this.page;
        let { ftBox }=locators.ftNav;
        let textInput = await page.$(ftBox);
        await textInput.click({clickCount: 3})
        await page.waitForTimeout(1000);
        await page.keyboard.type('tes2');
        await page.waitForTimeout(3000);
    }

    listFTWriteC = async() => {
        let page=this.page;
        let { ftBox }=locators.ftNav;
        let textInput = await page.$(ftBox);
        await textInput.click({clickCount: 3})
        await page.waitForTimeout(1000);
        await page.keyboard.type('tes3');
        await page.waitForTimeout(3000);
    }

    listFTSave = async() => {
        let page=this.page;
        let { ftSave }=locators.ftNav;
        let { saveOK }=locators.saveOkBtn;
        await page.click(ftSave);
        await page.waitForTimeout(3000);
        await page.click(saveOK).catch(e => e);
    }

    listFTUpdateA = async() => {
        let page=this.page;
        let { ftTextA }=locators.ftNav;
        let textInput = await page.$(ftTextA);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewA');
        await page.waitForTimeout(1000);
    }

    listFTUpdateB = async() => {
        let page=this.page;
        let { ftTextB }=locators.ftNav;
        let textInput = await page.$(ftTextB);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewB');
        await page.waitForTimeout(1000);
    }

    listFTDelete = async() => {
        let page=this.page;
        let { ftDeleteBtn, ftDeleteBtnYes }=locators.ftNav;
        await page.click(ftDeleteBtn).catch(e => e);
        await page.waitForTimeout(1000);
        await page.click(ftDeleteBtnYes).catch(e => e);
        await page.waitForTimeout(1000);
    }

    listFTReload = async() => {
        let page=this.page;
        let { ftReloadBtn }=locators.ftNav;
        let { reloadYes }=locators.reload;
        await page.click(ftReloadBtn).catch(e => e);
        await page.waitForTimeout(1000);
    }









    // Editing Feature States
    listFSWriteA = async() => {
        let page=this.page;
        let { fsBox }=locators.fsNav;
        let textInput = await page.$(fsBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes1');
        await page.waitForTimeout(1000);
    }

    listFSWriteB = async() => {
        let page=this.page;
        let { fsBox }=locators.fsNav;
        let textInput = await page.$(fsBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes2');
        await page.waitForTimeout(1000);
    }

    listFSWriteC = async() => {
        let page=this.page;
        let { fsBox }=locators.fsNav;
        let textInput = await page.$(fsBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        await page.waitForTimeout(1000);
    }

    listFSSave = async() => {
        let page=this.page;
        let { fsSave }=locators.fsNav;
        let { saveOK }=locators.saveOkBtn;
        await page.click(fsSave);
        await page.waitForTimeout(3000);
        await page.click(saveOK).catch(e => e);
    }

    listFSUpdateA = async() => {
        let page=this.page;
        let { fsTextA }=locators.fsNav;
        let textInput = await page.$(fsTextA);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewA');
        await page.waitForTimeout(1000);
    }

    listFSUpdateB = async() => {
        let page=this.page;
        let { fsTextB }=locators.fsNav;
        let textInput = await page.$(fsTextB);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewB');
        await page.waitForTimeout(1000);
    }

    listFSDelete = async() => {
        let page=this.page;
        let { fsDeleteBtn, fsDeleteBtnYes }=locators.fsNav;
        await page.click(fsDeleteBtn).catch(e => e);
        await page.click(fsDeleteBtnYes).catch(e => e);
        await page.waitForTimeout(1000);
    }

    listFSReload = async() => {
        let page=this.page;
        let { fsReloadBtn }=locators.fsNav;
        let { reloadYes }=locators.saveOkBtn;
        await page.click(fsReloadBtn).catch(e => e);
        await page.waitForTimeout(1000);
    }








    // Editing Overheads
    listOverWriteA = async() => {
        let page=this.page;
        let { overBox }=locators.overheadNav;
        let textInput = await page.$(overBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes1');
        await page.waitForTimeout(1000);
    }

    listOverWriteB = async() => {
        let page=this.page;
        let { overBox }=locators.overheadNav;
        let textInput = await page.$(overBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes2');
        await page.waitForTimeout(1000);
    }

    listOverWriteC = async() => {
        let page=this.page;
        let { overBox }=locators.overheadNav;
        let textInput = await page.$(overBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        await page.waitForTimeout(1000);
    }

    listOverSave = async() => {
        let page=this.page;
        let { overSave }=locators.overheadNav;
        let { saveOK }=locators.saveOkBtn;
        await page.click(overSave);
        await page.waitForTimeout(3000);
        await page.click(saveOK).catch(e => e);
    }


    listOverWriteC = async() => {
        let page=this.page;
        let { overBox }=locators.overheadNav;
        let textInput = await page.$(overBox);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        await page.waitForTimeout(1000);
    }



    listOverUpdateA = async() => {
        let page=this.page;
        let { overTextA }=locators.overheadNav;
        let textInput = await page.$(overTextA);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewA');
        await page.waitForTimeout(1000);
    }

    listOverUpdateB = async() => {
        let page=this.page;
        let { overTextB }=locators.overheadNav;
        let textInput = await page.$(overTextB);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('NewB');
        await page.waitForTimeout(1000);
    }

    listOverDelete = async() => {
        let page=this.page;
        let { overDeleteBtn, overDeleteBtnYes }=locators.overheadNav;
        await page.click(overDeleteBtn).catch(e => e);
        await page.click(overDeleteBtnYes).catch(e => e);
        await page.waitForTimeout(1000);
    }

    listOverReload = async() => {
        let page=this.page;
        let { overReloadBtn }=locators.overheadNav;
        let { reloadYes }=locators.saveOkBtn;
        await page.click(overReloadBtn).catch(e => e);
        await page.waitForTimeout(1000);
    }









    //Lists User Defined Lists: Main
    listUDLReload = async() => {
        let page=this.page;
        let { uldReload }=locators.udlNav;
        let { reloadYes }=locators.saveOkBtn;
        await page.click(uldReload);
        // await page.waitForTimeout(3000);
        await page.click(reloadYes);
        await page.waitForTimeout(3000);
    }



    // Lists User Defined Lists: Project
    listUDLPSelect = async() => {
       let page=this.page;
       let { udlLinkArrowDrop }=locators.udlNav;
       let { uldpMenu }=locators.udlProjectNav;
       await page.click(udlLinkArrowDrop);
       await page.waitForTimeout(3000);
       await page.click(uldpMenu);
       await page.waitForTimeout(3000);
    }

    listUDLPWriteA = async() => {
        let page=this.page;
        let { uldTextBox, uldAddBtnPopUp }=locators.udlNav;
        await page.click(uldTextBox);
        await page.keyboard.type('Field 101');
        await page.waitForTimeout(3000);
        await page.click(uldAddBtnPopUp);
    }

    // listUserDetailTextBoxProject = async() => {
    //     let page=this.page;
    //     let { UDLDetailBox }=locators.udlNav;
    //     let searchInput = await page.$(UDLDetailBox);
    //     await searchInput.click({clickCount: 3});
    //     await page.waitForTimeout(1000);
    //     await page.keyboard.type('Project tes1');
    // }

    listUserDetailTextBoxProject = async() => {
        let page=this.page;
        let { UDLDetailBox }=locators.udlNav;
        await page.dblclick(UDLDetailBox);
        await page.keyboard.type('Project tes1');
        await page.waitForTimeout(3000);
    }

    listDetailProjectSaveA = async() => {
        let page=this.page;
        let { UDLDetailProjSave, saveOk }=locators.saveOkBtn;
        // await page.waitForTimeout(3000);
        await page.click(UDLDetailProjSave);
        // await page.waitForTimeout(3000);
        await page.click(saveOk);
    }

    // // Lists User Defined Lists: Project Update
    // listUDLPFieldDataSelect = async() => {
    //     let page=this.page;
    //     let { uldpProjectFieldSelect, udldpProjectDataSelect }=locators.udlProjectNav;
    //     // await page.waitForTimeout(3000);
    //     await page.click(uldpProjectFieldSelect);
    //     // await page.waitForTimeout(3000);
    //     await page.dblclick(udldpProjectDataSelect);
    //     await page.keyboard.type('NewA');
    //     await page.click(UDLDetailProjSave);
    //     await page.click(saveOk);
    // }

    listUDLProjectDataDelete = async() => {
        let page=this.page;
        let { udldpProjectDataDelete, udldpProjectDataSelect }=locators.udlProjectNav;
        // await page.waitForTimeout(3000);
        await page.dblclick(udldpProjectDataSelect);
        await page.dblclick(udldpProjectDataDelete);
        await page.keyboard.type('NewA ');
    }







    //Lists User Defined Lists: Reload Rescource
    listUDLReloadRescource = async() => {
        let page=this.page;
        let { uldReload }=locators.udlNav;
        let { reloadYes }=locators.reload;
        await page.click(uldReload);
        // await page.waitForTimeout(3000);
        await page.click(reloadYes);
        await page.waitForTimeout(3000);
    }

    // Lists User Defined Lists: Rescource
    listUDLRSelectB = async() => {
       let page=this.page;
       let { udlLinkArrowDropRescource, udlRescourceAdd }=locators.udlrescourceNav;
       await page.click(udlLinkArrowDropRescource);
       await page.click(udlRescourceAdd);
       await page.waitForTimeout(3000);
    }

    listUDLRWriteA = async() => {
        let page=this.page;
        let { uldTextBox }=locators.udlNav;
        let { udlWinAddBtn, udlRescourceSelect }=locators.udlrescourceNav;
        await page.click(uldTextBox);
        await page.keyboard.type('Field 33');
        await page.waitForTimeout(3000);
        await page.dblclick(udlRescourceSelect);
        // await page.click(uldAddBtnPopUp);
        await page.click(udlWinAddBtn);
    }

    TextBoxRescourceReType = async() => {
        let page=this.page;
        let { UDLDetailBox }=locators.udlNav;
        let { udldprescourceDataSelect, UDLRescourceBox }=locators.udlrescourceNav;
        await page.click(udldprescourceDataSelect);
        await page.click(UDLRescourceBox);
        // await page.waitForTimeout(3000)
        await page.keyboard.type(' Rescource tes1');
        await page.waitForTimeout(3000);
    }

    listUserDetailTextBoxRescource = async() => {
        let page=this.page;
        let { UDLDetailBox }=locators.udlNav;
        let { udldprescourceDataSelect, UDLRescourceBox }=locators.udlrescourceNav;
        await page.click(udldprescourceDataSelect);
        await page.click(UDLRescourceBox);
        // await page.waitForTimeout(3000)
        await page.keyboard.type(' Rescource A');
        await page.waitForTimeout(3000);
    }

    // listUDLProjectDataRetype = async() => {
    //     let page=this.page;
    //     let { udldpProjectDataSelect }=locators.udlProjectNav;
    //     // await page.waitForTimeout(3000);
    //     await page.dblclick(udldpProjectDataSelect);
    //     await page.keyboard.type('NewA ');
    // }

    listUDLDataRetypeB = async() => {
        let page=this.page;
        let { rescourceRetypeB }=locators.udlrescourceNav;
        await page.dblclick(rescourceRetypeB);
        await page.keyboard.type('NewA ');
        // await page.waitForTimeout(3000);
    }

    listUserDetailRescourceSave = async() => {
        let page=this.page;
        let { UDLDetailResSave }=locators.udlrescourceNav;
        let { saveOk }=locators.saveOkBtn;
        // await page.waitForTimeout(3000);
        await page.click(UDLDetailResSave);
        // await page.waitForTimeout(3000);
        await page.click(saveOk);
    }

    listUDLRescourceCheckBox = async() => {
        let page=this.page;
        let { uldRescourceFieldSelectCheck }=locators.udlrescourceNav;
        // await page.waitForTimeout(3000);
        await page.click(uldRescourceFieldSelectCheck);
        await page.waitForTimeout(3000);
    }
    
    listUDLRescourceDataDelete = async() => {
        let page=this.page;
        let { udldRescourceDataDelete, udldRescourceDataDeleteClear }=locators.udlrescourceNav;
        // await page.waitForTimeout(3000);
        await page.click(udldRescourceDataDelete);
        await page.click(udldRescourceDataDeleteClear);
        await page.waitForTimeout(3000);
    }








    //Lists User Defined Lists: Assingnment
    listUDLAssignment = async() => {
        let page=this.page;
        let { udlLinkArrowDropAssingnment }=locators.udlAssingnmentNav;
        let searchInput = await page.$(udlLinkArrowDropAssingnment);
        await searchInput.click({clickCount: 2});
        await page.waitForTimeout(3000);
    }

    listUDLAssignmentText = async() => {
        let page=this.page;
        let { udldAssignText, popupAssingBtnAdd }=locators.udlAssingnmentNav;
        // await page.waitForTimeout(3000);
        await page.click(udldAssignText);
        await page.keyboard.type('Field 5');

        await page.dblclick(popupAssingBtnAdd);
        await page.waitForTimeout(3000);
    }

    ULDRescourceRetypeA = async() => {
        let page=this.page;
        let { AssignTextListItem }=locators.udlAssingnmentNav;
        let searchInput = await page.$(AssignTextListItem);
        await searchInput.click({clickCount: 2})
        await page.keyboard.type('tes1');
        await page.waitForTimeout(3000);
    }

    listUserDetailAssignmentSave = async() => {
        let page=this.page;
        let { UDLDetailAssingSave }=locators.udlAssingnmentNav;
        let { saveOk }=locators.saveOkBtn;
        // await page.waitForTimeout(3000);
        await page.click(UDLDetailAssingSave);
        await page.waitForTimeout(1000);
        await page.click(saveOk);
    }

    listUserDetailAssignmentSave2 = async() => {
        let page=this.page;
        let { UDLDetailAssingSave2 }=locators.udlAssingnmentNav;
        let { saveOk }=locators.saveOkBtn;
        // await page.waitForTimeout(3000);
        await page.click(UDLDetailAssingSave2);
        await page.waitForTimeout(1000);
        await page.click(saveOk);
    }


    RetypeTes1AssignmentList = async() => {
        let page=this.page;
        let { AssignTextListSelect }=locators.udlAssingnmentNav;
        let searchInput = await page.$(AssignTextListSelect);
        await searchInput.click({clickCount: 2})
        await page.keyboard.type('Assingnment A');
        await page.waitForTimeout(3000);
    }

    AssignmentDelete = async() => {
        let page=this.page;
        let { udldAssingnmentDataDelete, AssingCheckBox, assingnmentDeleteOk }=locators.udlAssingnmentNav;
        await page.click(AssingCheckBox)
        await page.click(udldAssingnmentDataDelete)
        await page.click(assingnmentDeleteOk)
        await page.waitForTimeout(3000);
    }

    listUDLReloadAssignment = async() => {
        let page=this.page;
        let { reloadBtnA }=locators.reload;
        let { reloadYes }=locators.reload;
        await page.click(reloadBtnA);
        // await page.waitForTimeout(3000);
        await page.click(reloadYes);
        await page.waitForTimeout(3000);
    }







    //Lists User Defined Lists: Team
    listUDLTest = async() => {
        let page=this.page;
        let { udlLinkArrowDropTeam }=locators.udlTeamNav;
        await page.click(udlLinkArrowDropTeam);
        await page.waitForTimeout(3000);
    }

    listUDLTestTextField = async() => {
        let page=this.page;
        let { udldtestText, popupTestBtnAdd }=locators.udlTeamNav;
        // await page.waitForTimeout(3000);
        await page.click(udldtestText);
        await page.keyboard.type('Field 16');

        await page.dblclick(popupTestBtnAdd);
        await page.waitForTimeout(3000);
    }

}

module.exports.adminListPage = adminListPage;
