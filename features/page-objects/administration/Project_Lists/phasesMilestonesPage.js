const { action } = require('../../../utilities/action')

const locators = {   
    //Admin List
    pmData: {
        //Create
        pmAddBtn: `[id="AdminListsTaskDefaultGrid-bodyWrap"] [role="toolbar"] [data-componentid="adminListsTaskDefaultGridAdd"]`,
        textBoxName: `[id="AdminListsTaskDefaultGrid-body"] [data-recordindex="0"] [role="presentation"]`,

        //Update
        pmDataSelect: `//*[text()="New Phase"]`,

        textBoxNameReTypeA: `//*[text()="data1"]`,
        textBoxNameReTypeB: `//*[text()="data2"]`,
        textBoxNameReTypeC: `//*[text()="data3"]`,

        //delete
        deleteBtn: `[id="AdminListsTaskDefaultGrid-bodyWrap"] [role="toolbar"] [data-qtip="Remove"]`,
        deleteYes: `//*[text()="Yes"]`,
        
        //Save
        partSaveBtn: `[id="AdminListsTaskDefaultGrid-bodyWrap"] [role="toolbar"] [data-qtip="Save"]`,
        saveBtnOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,

        //Reload
        partReloadBtn: `[id="AdminListsTaskDefaultGrid-bodyWrap"] [id="adminListsTaskDefaultGridReload-btnIconEl"]`,
        reloadYes: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    
    pmNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        pmAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`
    },
        
    pmLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    },
}



class pmPage {
    constructor(page) {
        this.page = page;
    }

    // Creating multiple Partitions Data
    pmCreateData = async() => {
        let page=this.page;
        let { pmAddBtn, pmDataSelect, textBoxName }=locators.pmData;

        await page.click(pmAddBtn);

        await page.dblclick(pmDataSelect);
        let textInput = await page.$(textBoxName, el=>el.getAttribute("id"));

        // await page.waitForTimeout(1000);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('data1');
        await page.waitForTimeout(1000);
    }

   pmCreateDataB = async() => {
    let page=this.page;
    let { pmAddBtn, pmDataSelect, textBoxName }=locators.pmData;

    await page.click(pmAddBtn);

    await page.dblclick(pmDataSelect);
    let textInput = await page.$(textBoxName, el=>el.getAttribute("id"));

    // await page.waitForTimeout(1000);
    await textInput.click({clickCount: 3})
    await page.keyboard.type('data2');
    await page.waitForTimeout(1000);
    }

   pmCreateDataC = async() => {
    let page=this.page;
    let { pmAddBtn, pmDataSelect, textBoxName }=locators.pmData;

    await page.click(pmAddBtn);

    await page.dblclick(pmDataSelect);
    let textInput = await page.$(textBoxName, el=>el.getAttribute("id"));

    // await page.waitForTimeout(1000);
    await textInput.click({clickCount: 3})
    await page.keyboard.type('data3');
    await page.waitForTimeout(1000);
    }




    // Updating multiple Partitions Data
    pmRetypeData = async() => {
        let page=this.page;
        let { textBoxNameReTypeA }=locators.pmData;
       
        await page.dblclick(textBoxNameReTypeA);

        await page.keyboard.type('Update 1');
        await page.waitForTimeout(1000);
    }

    pmRetypeDataB = async() => {
        let page=this.page;
        let { textBoxNameReTypeA }=locators.pmData;
       
        await page.dblclick(textBoxNameReTypeA);

        await page.keyboard.type('Update 2');
        await page.waitForTimeout(3000);
    }

    pmRetypeDataC = async() => {
        let page=this.page;
        let { textBoxNameReTypeA }=locators.pmData;
       
        await page.dblclick(textBoxNameReTypeA);

        await page.keyboard.type('Update 3');
        await page.waitForTimeout(3000);
    }





    // Delete multiple Partitions Data
    pmDeleteButton = async() => {
        let page=this.page;
        let { deleteBtn, deleteYes }=locators.pmData;

        await page.click(deleteBtn);
        await page.waitForTimeout(1000);
        await page.click(deleteYes);

        await page.waitForTimeout(3000);
    }

    pmSave = async() => {
        let page=this.page;
        let { partSaveBtn, saveBtnOK }=locators.pmData;
        await page.click(partSaveBtn);
        await page.click(saveBtnOK);
        await page.waitForTimeout(3000);
    }

    pmReload = async () => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.pmLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }

}

module.exports.pmPage = pmPage;
