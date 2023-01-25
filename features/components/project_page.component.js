const locator = {
    project_Page: {
        //Project Data
        MenuSliderBtn: `[data-componentid="r1MainViewPort"] [data-componentid="r1NavToggle"]`,
        projLink: `//*[text()="Project"]`,
        projData: `//*[text()="Data"]`,
        
        projDataAdd: `[id="ProjectListToolBar-innerCt"] [data-componentid="projectListGridAdd"]`,

        pdBoxB:`[id="gridview-1031"] [data-recordindex="4"] [data-columnid="checkcolumn-1045"]`,
        pdBoxC:`[id="gridview-1031"] [data-recordindex="5"] [data-columnid="checkcolumn-1045"]`,


        //Project Demand
        projViewB: `[id="R1TDemand-bodyWrap"] [id="demandGridViews"] [id="demandGridViews-trigger-picker"]`,

        projDemand: `[id="panel-1021"] [data-componentid="ext-customtreelistitem-43"] [data-recordid="78"]`,

        projDemViewDrop: `[id="R1TDemand-body"] [id="demandGridViews"] [id="demandGridViews-trigger-picker"]`,
        projDemViewSelect: `[data-componentid="demandGridViews-picker"] [data-recordindex="0"]`,

    },

}

class projectTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    //Project Data Create
    projLinkSelect = async() => {
        let page=this.page;
        let { MenuSliderBtn, projLink, projData }=locator.project_Page;
        await page.click(MenuSliderBtn);
        await page.waitForTimeout(1000);
        await page.click(projLink);
        await page.waitForTimeout(1000);
        await page.click(projData);
        await page.waitForTimeout(1000);
    }

    projAddBtn = async() => {
        let page=this.page;
        let { projDataAdd }=locator.project_Page;
        await page.click(projDataAdd);
        await page.waitForTimeout(3000);
    }



    // Project Data Delete
    projBoxSelectB = async() => {
        let page=this.page;
        let { pdBoxB }=locator.project_Page;
        await page.click(pdBoxB);
        await page.waitForTimeout(3000);
    }

    projBoxSelectC = async() => {
        let page=this.page;
        let { pdBoxC }=locator.project_Page;
        await page.click(pdBoxC);
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

}

exports.projectTypeData = projectTypeData;