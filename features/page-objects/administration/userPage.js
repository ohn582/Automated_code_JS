const { action } = require('../../utilities/action')

const locators = {
    userNav: {
        userAddBtn: `[role="toolbar"] [aria-label="Add"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    userData: {
        userLogin: `[id="userAddPanel"] [id="userAddPanel-body"] [id="textfield-1052"] [id="textfield-1052-bodyEl"]`,
        userFullName: `[id="userAddPanel"] [id="userAddPanel-body"] [id="textfield-1053"] [id="textfield-1053-bodyEl"]`,
        userEmail: `[id="userAddPanel"] [id="userAddPanel-body"] [id="textfield-1054"] [id="textfield-1054-bodyEl"]`,
        userPassword: `[id="userAddPanel"] [id="userAddPanel-body"] [id="AdminAddUserPassword"] [id="AdminAddUserPassword-bodyEl"]`,
        userPasswordRetype: `[id="userAddPanel"] [id="userAddPanel-body"] [id="textfield-1055"] [id="textfield-1055-bodyEl"]`,

        userWindowAddBtn: `//*[text()="Add"]`
    },

    deleteNav: {
        deleteBtn: `[id="AdminFilterDesginer"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `[role="alertdialog"] [data-componentid="button-1005"]`,
    },

    saveNav: {
        saveBtn: `[data-componentid="r1MainViewPort"] [role="toolbar"] [data-qtip="Save"]`,
        saveOK: `[data-componentid="messagebox-1001"] [id="messagebox-1001-toolbar"] [id="button-1005"]`,
    },

    reloadBtn: {
        relBtn: `[id="AdminFilterDesginer"] [id="toolbar-1039"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },

    adminAccount: {
        adminBtn: `[data-componentid="r1MainViewPort"] [id="container-1009-innerCt"] [data-componentid="r1MainUser"]`
    }

}



class userPage {
    constructor(page) {
        this.page = page;
    }


    //Filters: Create
    pageData = async() => {
        let page=this.page;
        let { userAddBtn }=locators.userNav;
        let { userLogin, userFullName, userEmail, userPassword, userPasswordRetype, userWindowAddBtn }=locators.userData;
        let { saveBtn, saveOK }=locators.saveNav;
        // await page.waitForTimeout(3000);
        
        await page.click(userAddBtn);

        let textInput = await page.$(userLogin); 
        await textInput.click({clickCount: 1})
        await page.keyboard.type('Admin_test_1');

        let textInputB = await page.$(userFullName); 
        await textInputB.click({clickCount: 1})
        await page.keyboard.type('Nameless1');

        let textInputC = await page.$(userEmail); 
        await textInputC.click({clickCount: 1})
        await page.keyboard.type('nameless@gmail.com');

        let textInputD = await page.$(userPassword); 
        await textInputD.click({clickCount: 1})
        await page.keyboard.type('phprAR10!');

        let textInputE = await page.$(userPasswordRetype); 
        await textInputE.click({clickCount: 1})
        await page.keyboard.type('phprAR10!');


        await page.click(userWindowAddBtn);
        await page.click(saveBtn);
        await page.click(saveOK);
        // await page.waitForTimeout(3000);
    }

    saveData = async() => {
        let page=this.page;
        let { saveBtn, saveOK }=locators.saveNav;
        
        await page.click(saveBtn);
        await page.waitForTimeout(3000);
        await page.click(saveOK);
        // await page.waitForTimeout(3000);
    }

    adminData = async() => {
        let page=this.page;
        let { saveBtn, saveOK }=locators.saveNav;
        
        await page.click(saveBtn);
        await page.waitForTimeout(3000);
        await page.click(saveOK);
        // await page.waitForTimeout(3000);
    }

}

module.exports.userPage = userPage;
