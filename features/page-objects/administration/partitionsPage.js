const { action } = require('../../utilities/action')

const locators = {   
    //Admin List
    partitions: {
        addBtn: `[id="adminListsPartitionGrid-bodyWrap"] [role="toolbar"] [data-componentid="adminListsPartitionGridAdd"]`,

        textBoxName: `[id="adminListsPartitionGrid-body"] [data-recordindex="0"] [data-columnid="gridcolumn-1028"] [id="celleditor-1040"]`,

        textBoxNameReTypeA: `[id="adminListsPartitionGrid-body"] [data-recordindex="2"] [data-columnid="gridcolumn-1028"]`,
        textBoxNameReTypeB: `[id="adminListsPartitionGrid-body"] [data-recordindex="3"] [data-columnid="gridcolumn-1028"]`,
        textBoxNameReTypeC: `[id="adminListsPartitionGrid-body"] [data-recordindex="4"] [data-columnid="gridcolumn-1028"]`,

        deleteBtn: `[id="toolbar-1032-innerCt"] [data-qtip="Remove"]`,
        deleteYes: `//*[text()="Yes"]`,
        
        partSaveBtn: `[id="adminListsPartitionGrid-bodyWrap"] [id="toolbar-1032"] [data-qtip="Save"]`,
        saveBtnOK: `[aria-describedby="messagebox-1001-msg"] [data-componentid="button-1005"]`,

        partReloadBtn: `[id="adminListsPartitionGrid-bodyWrap"] [id="adminListsPartitionGridReload-btnIconEl"]`,
        reloadYes: `//*[text()="Yes"]`,
        // partReloadYes: `//*[text()="Yes"]`,
    },
        
    
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

        await page.waitForTimeout(1000);

        let textInput = await page.$(textBoxName);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('data1');
        await page.waitForTimeout(3000);
    }

    partitionCreateDataB = async() => {
        let page=this.page;
        let { addBtn, textBoxName }=locators.partitions;
        await page.click(addBtn);

        await page.waitForTimeout(1000);

        let textInput = await page.$(textBoxName);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('data2');
        await page.waitForTimeout(3000);
    }

    partitionCreateDataC = async() => {
        let page=this.page;
        let { addBtn, textBoxName }=locators.partitions;
        await page.click(addBtn);

        await page.waitForTimeout(1000);

        let textInput = await page.$(textBoxName);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('data3');
        await page.waitForTimeout(3000);
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
        let page=this.page;
        let { partReloadBtn, reloadYes }=locators.partitions;
        await page.click(partReloadBtn);
        // await page.click(reloadYes);
        // await page.waitForTimeout(3000);
    }

}

module.exports.partitionsPage = partitionsPage;
