const locator = {
    admin_Page: {
        adminLink: `//*[text()="Administration"]`,

        //UDLD Save Btn
        UDLDetailProjSave: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [id="button-1053"]`,
        saveYes: `//*[text()="Yes"]`,
        saveOk: `//*[text()="Ok"]`,
    },

    saveOkBtn: {
        //UDLD Save Btn
        UDLDetailProjSave: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [aria-label="Save"]`,
        saveYes: `//*[text()="Yes"]`,
        saveOk: `[id="messagebox-1001"] [role="button"]`,

        reloadYes: `//*[text()="Yes"]`,
    },

    //Administration
    adminNav: {
        //Projext
        obsLink: `//*[text()="Edit OBSs"]`,
        projOBSAddBtn: `[id="AdminNodeTreeGrid-bodyWrap"] [aria-label="Add"]`,
        // partBoxCheckA: `[id="adminListsPartitionGrid-body"] [data-recordindex="4"] [data-columnid="checkcolumn-1039"]`,
    },

    list_Page: {
        listsLink: `//*[text()="Lists"]`,

        partitionsLink: `//*[text()="Partitions"]`,
        partAddBtn: `[id="adminListsPartitionGrid-bodyWrap"] [id="adminListsPartitionGridAdd-btnIconEl"]`,
        partBoxCheckA: `[id="adminListsPartitionGrid-body"] [data-recordindex="4"] [data-columnid="checkcolumn-1038"]`,

        domainsLink: `//*[text()="Domains"]`,
        domAddBtn: `[id="adminListsDomainGrid-bodyWrap"] [data-componentid="adminListsDomainGridAdd"]`,
        domBoxCheckA: `[id="adminListsDomainGrid-body"] [data-recordindex="3"] [data-columnid="checkcolumn-1040"]`,

        sponsorsLink: `//*[text()="Sponsors"]`,
        sponAddBtn: `[id="adminListsSponsorGrid-bodyWrap"] [data-componentid="adminListsSponsorGridAdd"]`,
        sponBoxCheckA: `[id="adminListsSponsorGrid-body"] [data-recordindex="4"] [data-columnid="checkcolumn-1039"]`,

        categoriesLink: `//*[text()="Categories"]`,
        cateAddBtn: `[id="adminListsCategoryGrid-bodyWrap"] [data-componentid="adminListsCategoryGridAdd"]`,
        cateBoxCheckA: `[id="adminListsCategoryGrid-body"] [data-recordindex="4"] [data-columnid="checkcolumn-1040"]`,

        pcLink: `//*[text()="Project Codes"]`,
        pcAddBtn: `[id="adminListsProjectCodeGrid-bodyWrap"] [data-componentid="adminListsProjectCodeGridAdd"]`,
        pcBoxCheckA: `[id="adminListsProjectCodeGrid-body"] [data-recordindex="1"] [data-columnid="checkcolumn-1039"]`,

        psLink: `//*[text()="Project States"]`,
        psAddBtn: `[id="adminListsProjectStateGrid-bodyWrap"] [data-componentid="adminListsProjectStateGridAdd"]`,
        psBoxCheckA: `[id="adminListsProjectStateGrid-body"] [data-recordindex="11"] [data-columnid="checkcolumn-1042"]`,

        countLink: `//*[text()="Countries"]`,
        countAddBtn: `[id="adminListsCountryGrid-bodyWrap"] [data-componentid="adminListsCountryGridAdd"]`,
        countBoxCheckA: `[id="adminListsCountryGrid-body"] [data-recordindex="8"] [data-columnid="checkcolumn-1041"]`,

        locLink: `//*[text()="Locations"]`,
        locAddBtn: `[id="adminListsLocationGrid-bodyWrap"] [data-componentid="adminListsLocationGridAdd"]`,
        locBoxCheckA: `[id="adminListsLocationGrid-body"] [data-recordindex="9"] [data-columnid="checkcolumn-1040"]`,

        esLink: `//*[text()="Effort States"]`,
        esAddBtn: `[id="adminListsEffortStateGrid-bodyWrap"] [data-componentid="adminListsEffortStateGridAdd"]`,
        esBoxCheckA: `[id="adminListsEffortStateGrid-body"] [data-recordindex="5"] [data-columnid="checkcolumn-1042"]`,

        ccLink: `//*[text()="Cost Categories"]`,
        ccAddBtn: `[id="R1TCostCategories-body"] [id="adminListsCostCategoryGridAdd"]`,
        ccBoxCheckA: `[id="adminListsCostCategoryGrid-body"] [data-recordindex="9"] [data-columnid="checkcolumn-1041"]`,

        cicLink: `//*[text()="Cost Item Categories"]`,
        cicAddBtn: `[id="R1TCostItemCategories-body"] [id="adminListsCostItemCategoryGridAdd"]`,
        cicBoxCheckA: `[id="adminListsCostItemCategoryGrid-body"] [data-recordindex="7"] [data-columnid="checkcolumn-1039"]`,

        ciLink: `//*[text()="Cost Items"]`,
        ciAddBtn: `[id="R1TCostItems-body"] [id="adminListsCostItemGridAdd"]`,
        ciBoxCheckA: `[id="adminListsCostItemGrid-body"] [data-recordindex="23"] [data-columnid="checkcolumn-1044"]`,

        btLink: `//*[text()="Baseline Types"]`,
        btAddBtn: `[id="R1TBaselineTypes-body"] [id="adminListsBaselineTypeGridAdd"]`,
        btBoxCheckA: `[id="adminListsBaselineTypeGrid-body"] [data-recordindex="6"] [data-columnid="checkcolumn-1040"]`,

        ftLink: `//*[text()="Feature Types"]`,
        ftAddBtn: `[id="R1TFeatureTypes-body"] [id="adminListsFeatureTypeGridAdd"]`,
        ftBoxCheckA: `[id="adminListsFeatureTypeGrid-body"] [data-recordindex="2"] [data-columnid="checkcolumn-1039"]`,

        fsLink: `//*[text()="Feature States"]`,
        fsAddBtn: `[id="R1TFeatureStates-body"] [id="adminListsFeatureStateGridAdd"]`,
        fsBoxCheckA: `[id="adminListsFeatureStateGrid-body"] [data-recordindex="0"] [data-columnid="checkcolumn-1041"]`,

        overLink: `//*[text()="Overheads"]`,
        overAddBtn: `[id="R1TOverheads-body"] [id="adminListsOverheadGridAdd"]`,
        overBoxCheckA: `[id="adminListsOverheadGrid-body"] [data-recordindex="3"] [data-columnid="checkcolumn-1039"]`,


        //Main User Defined Lists
        uldLink: `//*[text()="User Defined Lists"]`,
        uldAddBtn: `[id="R1TUserDefinedLists-body"] [id="AdminUserDefinedListGridAdd"]`,
        UDLDetailAdd: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [aria-label="Add"]`,

        //User Defined Lists: Project
        selectFieldDataA: `//*[text()="Field 101"]`,
        textBoxProjA: `//*[text()="New List Project tes1"]`,
    },

    //User Defind list: Project
    udlProjectNav: {
        uldpMenu: `//*[text()="Edit OBSs"]`,
    
        uldpProjectFieldSelect: `[id="AdminUdfListsGrid-bodyWrap"] [data-recordindex="1"]`,
        udldpProjectDataSelect: `[id="AdminUserDefinedListDetailGrid-body"] [data-columnid="gridcolumn-1042"]`,
    },

    //User Defind list: Rescource
    udlrescourceNav: {
        uldpMenu: `//*[text()="Edit OBSs"]`,
        
        udlRescourceSelect: `[id="AdminUdfListsGrid-bodyWrap"] [data-recordindex="2"]`,
        // uldprescourceFieldSelect: `[id="AdminUserDefinedListDetailGrid-body"] [data-columnid="gridcolumn-1042"]`,
        uldprescourceFieldSelect: `[id="AdminUserDefinedListDetailGrid-body"] [data-recordindex="0"] [data-columnid="checkcolumn-1059"]`,
        // udldpProjectDataSelect: `[id="AdminUserDefinedListDetailGrid-body"] [data-columnid="gridcolumn-1042"]`,
        ULDRescourceAddBtnB: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [tabindex="0"]`,
    },

    //User Defind list: Team
    udlTeamNav: {
        uldpMenu: `//*[text()="Edit OBSs"]`,
            
        udlTeamSelect: `[id="AdminUdfListsGrid-bodyWrap"] [data-recordindex="2"]`,
        // uldpTeamFieldSelect: `[id="AdminUserDefinedListDetailGrid-body"] [data-columnid="gridcolumn-1042"]`,
        uldpTeamFieldSelect: `[id="AdminUserDefinedListDetailGrid-body"] [data-recordindex="0"] [data-columnid="checkcolumn-1059"]`,
        // udldpProjectDataSelect: `[id="AdminUserDefinedListDetailGrid-body"] [data-columnid="gridcolumn-1042"]`,
        ULDTeamAddBtnB: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [tabindex="0"]`,
    },
}

class adminListTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    //Resource List
    adminListSelect = async() => {
        let page=this.page;
        let { adminLink }=locator.admin_Page;
        let { listsLink }=locator.list_Page;
        await page.click(adminLink).catch(e => e);
        await page.click(listsLink).catch(e => e);
        await page.waitForTimeout(3000);
    }




    //Partition List
    listPartitionsSelect = async() => {
        let page=this.page;
        let { adminLink }=locator.admin_Page;
        let { partitionsLink }=locator.list_Page;
        await page.click(partitionsLink).catch(e => e);
        await page.waitForTimeout(3000);
    }

    listPartitionsAdd = async() => {
        let page=this.page;
        let { partAddBtn }=locator.list_Page;
        await page.click(partAddBtn);
        await page.waitForTimeout(3000);
    }

    listPartitionsSelectData = async() => {
        let page=this.page;
        let { partBoxCheckA }=locator.list_Page;
        await page.waitForTimeout(1000);
        await page.click(partBoxCheckA).catch(e => e);
        await page.waitForTimeout(3000);
    }




    //Domain List
    listDomainsSelect = async() => {
        let page=this.page;
        let { domainsLink }=locator.list_Page;
        await page.click(domainsLink);
        await page.waitForTimeout(3000);
    }

    listDomainsAdd = async() => {
        let page=this.page;
        let { domAddBtn }=locator.list_Page;
        await page.click(domAddBtn);
        await page.waitForTimeout(3000);
    }

    listDomainSelectData = async() => {
        let page=this.page;
        let { domBoxCheckA }=locator.list_Page;
        await page.click(domBoxCheckA);
        await page.waitForTimeout(3000);
    }




    //Sponsors List
    listSponsorsSelect = async() => {
        let page=this.page;
        let { sponsorsLink }=locator.list_Page;
        await page.click(sponsorsLink);
        await page.waitForTimeout(3000);
    }
    
    listSponsorsAdd = async() => {
        let page=this.page;
        let { sponAddBtn }=locator.list_Page;
        await page.click(sponAddBtn);
        await page.waitForTimeout(3000);
    }

    listSponsorSelectData = async() => {
        let page=this.page;
        let { sponBoxCheckA }=locator.list_Page;
        await page.click(sponBoxCheckA);
        await page.waitForTimeout(3000);
    }




    //Categories List
    listCategoriesSelect = async() => {
        let page=this.page;
        let { categoriesLink }=locator.list_Page;
        await page.click(categoriesLink);
        await page.waitForTimeout(3000);
    }
        
    listCategoriesAdd = async() => {
        let page=this.page;
        let { cateAddBtn }=locator.list_Page;
        await page.click(cateAddBtn);
        await page.waitForTimeout(3000);
    }
    
    listCategorieSelectData = async() => {
        let page=this.page;
        let { cateBoxCheckA }=locator.list_Page;
        await page.click(cateBoxCheckA);
        await page.waitForTimeout(3000);
    }




    //Project Codes List
    listPCSelect = async() => {
        let page=this.page;
        let { pcLink }=locator.list_Page;
        await page.click(pcLink);
        await page.waitForTimeout(3000);
    }
        
    listPCAdd = async() => {
        let page=this.page;
        let { pcAddBtn }=locator.list_Page;
        await page.click(pcAddBtn);
        await page.waitForTimeout(3000);
    }

    listPCSelectData = async() => {
        let page=this.page;
        let { pcBoxCheckA }=locator.list_Page;
        await page.click(pcBoxCheckA);
        await page.waitForTimeout(3000);
    }



    //Countries List
    listCountriesSelect = async() => {
        let page=this.page;
        let { countLink }=locator.list_Page;
        await page.click(countLink);
        await page.waitForTimeout(3000);
    }
            
    listCountriesAdd = async() => {
        let page=this.page;
        let { countAddBtn }=locator.list_Page;
        await page.click(countAddBtn);
        await page.waitForTimeout(3000);
    }
    
    listCountriesSelectData = async() => {
        let page=this.page;
        let { countBoxCheckA }=locator.list_Page;
        await page.click(countBoxCheckA);
        await page.waitForTimeout(3000);
    }



    //Project States
    listPSSelect = async() => {
        let page=this.page;
        let { psLink }=locator.list_Page;
        await page.click(psLink);
        await page.waitForTimeout(3000);
    }
        
    listPSAdd = async() => {
        let page=this.page;
        let { psAddBtn }=locator.list_Page;
        await page.click(psAddBtn);
        await page.waitForTimeout(3000);
    }
    
    listPSSelectData = async() => {
        let page=this.page;
        let { psBoxCheckA }=locator.list_Page;
        await page.click(psBoxCheckA);
        await page.waitForTimeout(3000);
    }




    //Locations
    listLocSelect = async() => {
        let page=this.page;
        let { locLink }=locator.list_Page;
        await page.click(locLink);
        await page.waitForTimeout(3000);
    }
        
    listLocAdd = async() => {
        let page=this.page;
        let { locAddBtn }=locator.list_Page;
        await page.click(locAddBtn);
        await page.waitForTimeout(3000);
    }
    
    listLocSelectData = async() => {
        let page=this.page;
        let { locBoxCheckA }=locator.list_Page;
        await page.click(locBoxCheckA);
        await page.waitForTimeout(3000);
    }






    //Effort States
    listESSelect = async() => {
        let page=this.page;
        let { esLink }=locator.list_Page;
        await page.click(esLink);
        await page.waitForTimeout(3000);
    }
        
    listESAdd = async() => {
        let page=this.page;
        let { esAddBtn }=locator.list_Page;
        await page.click(esAddBtn);
        await page.waitForTimeout(3000);
    }
    
    listESSelectData = async() => {
        let page=this.page;
        let { esBoxCheckA }=locator.list_Page;
        await page.click(esBoxCheckA);
        await page.waitForTimeout(3000);
    }





    //cost categories
    listCCSelect = async() => {
        let page=this.page;
        let { ccLink }=locator.list_Page;
        await page.click(ccLink);
        await page.waitForTimeout(3000);
    }
            
    listCCAdd = async() => {
        let page=this.page;
        let { ccAddBtn }=locator.list_Page;
        await page.click(ccAddBtn);
        await page.waitForTimeout(3000);
    }
        
    listCCSelectData = async() => {
        let page=this.page;
        let { ccBoxCheckA }=locator.list_Page;
        await page.click(ccBoxCheckA);
        await page.waitForTimeout(3000);
    }





    //Cost Item Categories
    listCICSelect = async() => {
        let page=this.page;
        let { cicLink }=locator.list_Page;
        await page.click(cicLink);
        await page.waitForTimeout(3000);
    }
            
    listCICAdd = async() => {
        let page=this.page;
        let { cicAddBtn }=locator.list_Page;
        await page.click(cicAddBtn);
        await page.waitForTimeout(3000);
    }
        
    listCICSelectData = async() => {
        let page=this.page;
        let { cicBoxCheckA }=locator.list_Page;
        await page.click(cicBoxCheckA);
        await page.waitForTimeout(3000);
    }





    //Cost Item Categories
    listCISelect = async() => {
        let page=this.page;
        let { ciLink }=locator.list_Page;
        await page.click(ciLink);
        await page.waitForTimeout(3000);
    }
                
    listCIAdd = async() => {
        let page=this.page;
        let { ciAddBtn }=locator.list_Page;
        await page.click(ciAddBtn);
        await page.waitForTimeout(3000);
    }
            
    listCISelectData = async() => {
        let page=this.page;
        let { ciBoxCheckA }=locator.list_Page;
        await page.click(ciBoxCheckA);
        await page.waitForTimeout(3000);
    }





    
    //Baseline Types
    listBTSelect = async() => {
        let page=this.page;
        let { btLink }=locator.list_Page;
        await page.click(btLink);
        await page.waitForTimeout(3000);
    }
            
    listBTAdd = async() => {
        let page=this.page;
        let { btAddBtn }=locator.list_Page;
        await page.click(btAddBtn);
        await page.waitForTimeout(3000);
    }
        
    listBTSelectData = async() => {
        let page=this.page;
        let { btBoxCheckA }=locator.list_Page;
        await page.click(btBoxCheckA);
        await page.waitForTimeout(3000);
    }





    //Baseline Types
    listFTSelect = async() => {
        let page=this.page;
        let { ftLink }=locator.list_Page;
        await page.click(ftLink);
        await page.waitForTimeout(3000);
    }
            
    listFTAdd = async() => {
        let page=this.page;
        let { ftAddBtn }=locator.list_Page;
        await page.click(ftAddBtn);
        await page.waitForTimeout(3000);
    }
        
    listFTSelectData = async() => {
        let page=this.page;
        let { ftBoxCheckA }=locator.list_Page;
        await page.click(ftBoxCheckA);
        await page.waitForTimeout(3000);
    }





    //Feature States
    listFSSelect = async() => {
        let page=this.page;
        let { fsLink }=locator.list_Page;
        await page.click(fsLink);
        await page.waitForTimeout(3000);
    }
            
    listFSAdd = async() => {
        let page=this.page;
        let { fsAddBtn }=locator.list_Page;
        await page.click(fsAddBtn);
        await page.waitForTimeout(3000);
    }
        
    listFSSelectData = async() => {
        let page=this.page;
        let { fsBoxCheckA }=locator.list_Page;
        await page.click(fsBoxCheckA);
        await page.waitForTimeout(3000);
    }






    //Overheads
    listOverSelect = async() => {
        let page=this.page;
        let { overLink }=locator.list_Page;
        await page.click(overLink);
        await page.waitForTimeout(3000);
    }
            
    listOverAdd = async() => {
        let page=this.page;
        let { overAddBtn }=locator.list_Page;
        await page.click(overAddBtn);
        await page.waitForTimeout(3000);
    }
        
    listOverSelectData = async() => {
        let page=this.page;
        let { overBoxCheckA }=locator.list_Page;
        await page.click(overBoxCheckA);
        await page.waitForTimeout(3000);
    }




    //Lists User Defined Lists: Links
    listUDLSelect = async() => {
        let page=this.page;
        let { uldLink }=locator.list_Page;
        await page.click(uldLink);
        await page.waitForTimeout(3000);
    }
            
    listUDLAdd = async() => {
        let page=this.page;
        let { uldAddBtn }=locator.list_Page;
        await page.click(uldAddBtn);
        await page.waitForTimeout(3000);
    }

    listUserDetailAdd = async() => {
        let page=this.page;
        let { UDLDetailAdd }=locator.list_Page;
        await page.waitForTimeout(3000);
        await page.click(UDLDetailAdd);
        await page.waitForTimeout(3000);
    }


    //Lists User Defined Lists: Project Update
    // listUDLProjectDataSelect = async() => {
    //     let page=this.page;
    //     let { selectFieldDataA, textBoxProjA }=locator.list_Page;
    //     await page.waitForTimeout(3000);
    //     await page.click(selectFieldDataA);
    //     await page.waitForTimeout(3000);
    //     await page.click(textBoxProjA);
    // }


    // Lists User Defined Lists: Project Update
    listUDLProjectDataSelect = async() => {
        let page=this.page;
        let { uldpProjectFieldSelect }=locator.udlProjectNav;
        // await page.waitForTimeout(3000);
        await page.click(uldpProjectFieldSelect);
    }

    
    // Lists User Defined Lists: Rescource
    listUDLDataSelectA = async() => {
        let page=this.page;
        let { udlRescourceSelect }=locator.udlrescourceNav;
        await page.click(udlRescourceSelect);
        // await page.waitForTimeout(3000);
    }


    // Lists User Defined Lists: Rescource
    listUDLRescourceAdd = async() => {
        let page=this.page;
        let { uldAddBtn }=locator.list_Page;
        await page.click(uldAddBtn);
        await page.waitForTimeout(3000);
    }

    ULDRescourceAddBtnB = async() => {
        let page=this.page;
        let { ULDRescourceAddBtnB }=locator.udlrescourceNav;
        await page.click(ULDRescourceAddBtnB);
        // await page.waitForTimeout(3000);
    }








    // Lists User Defined Lists: Test
    listUDLTestAdd = async() => {
        let page=this.page;
        let { uldAddBtn }=locator.list_Page;
        await page.click(uldAddBtn);
        await page.waitForTimeout(3000);
    }
    
    ULDTestAddBtnB = async() => {
        let page=this.page;
        let { ULDRescourceAddBtnB }=locator.udlrescourceNav;
        await page.click(ULDRescourceAddBtnB);
        // await page.waitForTimeout(3000);
    }
    

}

exports.adminListTypeData = adminListTypeData;