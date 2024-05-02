const { action } = require('../../../utilities/action')

const locators = {   
    //Admin List
    partitions: {
        //Create
        addBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-componentid="adminListsPartitionGridAdd"]`,
        textBoxName: `[id="adminListsParitionGrid-body"] [data-recordindex="0"] [role="presentation"]`,

        //Update
        textBoxNameReTypeA: `//*[text()="data1"]`,
        textBoxNameReTypeB: `//*[text()="data2"]`,
        textBoxNameReTypeC: `//*[text()="data3"]`,

        //delete
        deleteBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Remove"]`,
        deleteYes: `//*[text()="Yes"]`,
        
        //Save
        partSaveBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Save"]`,
        saveBtnOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,

        //Reload
        partReloadBtn: `[id="AdminMainContainer"] [id="adminListsPartitionGridReload-btnIconEl"]`,
        reloadYes: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    partitionsLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }
           
}



class partitionsPage {
    constructor(page) {
        this.page = page;
    }

    // Creating multiple Partitions Data
    partitionCreateData = async() => {
        let page=this.page;
        let { addBtn, textBoxName }=locators.partitions;
        await page.click(addBtn);

        // await page.waitForTimeout(1000);

        let textInput = await page.$(textBoxName, el=>el.getAttribute("id"));

        await textInput.click({clickCount: 3})
        await page.keyboard.type('data1');
        await page.waitForTimeout(1000);
    }

    partitionCreateDataB = async() => {
        let page=this.page;
        let { addBtn, textBoxName }=locators.partitions;
        await page.click(addBtn);

        // await page.waitForTimeout(1000);

        let textInput = await page.$(textBoxName);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('data2');
        await page.waitForTimeout(1000);
    }

    partitionCreateDataC = async() => {
        let page=this.page;
        let { addBtn, textBoxName }=locators.partitions;
        await page.click(addBtn);

        // await page.waitForTimeout(1000);

        let textInput = await page.$(textBoxName);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('data3');
        await page.waitForTimeout(1000);
    }




    // Updating multiple Partitions Data
    partitionRetypeData = async() => {
        let page=this.page;
        let { textBoxNameReTypeA }=locators.partitions;
        let textInput = await page.$(textBoxNameReTypeA);
        await textInput.click({clickCount: 3})
        // await page.click(textBoxNameReTypeA);
        await page.keyboard.type('Update1');
        await page.waitForTimeout(3000);
    }

    partitionRetypeDataB = async() => {
        let page=this.page;
        let { textBoxNameReTypeB }=locators.partitions;
        let textInput = await page.$(textBoxNameReTypeB);
        await textInput.click({clickCount: 3})
        // await page.click(textBoxNameReTypeA);
        await page.keyboard.type('Update2');
        await page.waitForTimeout(3000);
    }

    partitionRetypeDataC = async() => {
        let page=this.page;
        let { textBoxNameReTypeC }=locators.partitions;
        let textInput = await page.$(textBoxNameReTypeC);
        await textInput.click({clickCount: 3})
        // await page.click(textBoxNameReTypeA);
        await page.keyboard.type('Update3');
        await page.waitForTimeout(3000);
    }





    // Delete multiple Partitions Data
    partitionDeleteButton = async() => {
        let page=this.page;
        let { deleteBtn, deleteYes }=locators.partitions;

        await page.click(deleteBtn);
        await page.waitForTimeout(1000);
        await page.click(deleteYes);

        await page.waitForTimeout(3000);
    }

    partitionSave = async() => {
        let page=this.page;
        let { partSaveBtn, saveBtnOK }=locators.partitions;
        await page.click(partSaveBtn);
        await page.click(saveBtnOK);
        await page.waitForTimeout(3000);
    }

    partitionReload = async() => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.partitionsLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }

}

module.exports.partitionsPage = partitionsPage;
