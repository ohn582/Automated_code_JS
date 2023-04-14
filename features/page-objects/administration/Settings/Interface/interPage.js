const { action } = require('../../../../utilities/action')

const locators = {
    adminSettings_Page: {
        //Features
        interfacesAddBtn: `[id="AdminSettingInterfacesGrid"] [role="toolbar"] [data-qtip="Add"]`,

        interName: `[data-componentid="AdminSettingAddNewInterfaceWindow"] [id="form-1068-outerCt"] [id="NewInterfaceName"] [id="NewInterfaceName-inputWrap"]`,
        interDescription: `[data-componentid="AdminSettingAddNewInterfaceWindow"] [id="form-1068-outerCt"] [id="NewInterfaceDescription"] [id="NewInterfaceDescription-bodyEl"]`,
        interType: `[data-componentid="AdminSettingAddNewInterfaceWindow"] [id="form-1068-outerCt"] [id="NewInterfaceType"] [id="NewInterfaceType-trigger-picker"]`,
        interTypeTextA: `[id="NewInterfaceType-picker"]`,

        interSource: `[data-componentid="AdminSettingAddNewInterfaceWindow"] [id="form-1068-outerCt"] [id="NewInterfaceSource"] [id="NewInterfaceSource-trigger-picker"]`,
        interTypeTextB: `//*[text()="aHa"]`,
        interTypeTextC: `//*[text()="Jira"]`,

        interAddBtn: `[id="AdminSettingAddNewInterfaceWindow"] [role="toolbar"] [data-componentid="button-1070"]`,

        interDeleteBtn: `[id="AdminSettingInterfacesGrid"] [role="toolbar"] [data-qtip="Delete"]`,
    },
}



class interPage {
    constructor(page) {
        this.page = page;
    }

    //Create
    listASWriteA = async () => {
        let page = this.page;
        let { interfacesAddBtn, interName, interDescription, interType, interTypeTextA, interSource, interTypeTextB, interAddBtn } = locators.adminSettings_Page;

        // let textInput = await page.$(interName);
        // let textInputB = await page.$(interDescription);
        // let textInputC = await page.$(interType);
        // let textInputD = await page.$(interSource);

        await page.click(interfacesAddBtn);

        // await textInput.click({ clickCount: 3 })
        await page.click(interName);
        await page.keyboard.type('tes1');
        await page.waitForTimeout(1000);

        // await textInputB.click({ clickCount: 3 })
        await page.click(interDescription);
        await page.keyboard.type('Just a test');
        await page.waitForTimeout(1000);

        // await textInputC.click({ clickCount: 2 })
        await page.click(interType);
        await page.click(interTypeTextA);
        await page.waitForTimeout(1000);

        // await textInputD.click({ clickCount: 2 })
        await page.click(interSource);
        await page.click(interTypeTextB);
        await page.waitForTimeout(1000);

        await page.click(interAddBtn);
    }



    listASWriteB = async () => {
        let page = this.page;
        let { interfacesAddBtn, interName, interDescription, interType, interTypeTextA, interSource, interTypeTextB, interTypeTextC, interAddBtn } = locators.adminSettings_Page;

        // let textInput = await page.$(interName);
        // let textInputB = await page.$(interDescription);
        // let textInputC = await page.$(interType);
        // let textInputD = await page.$(interSource);

        await page.click(interfacesAddBtn);

        // await textInput.click({ clickCount: 3 })
        await page.click(interName);
        await page.keyboard.type('tes2');
        await page.waitForTimeout(1000);

        // await textInputB.click({ clickCount: 3 })
        await page.click(interDescription);
        await page.keyboard.type('Just a test');
        await page.waitForTimeout(1000);

        // await textInputC.click({ clickCount: 2 })
        await page.click(interType);
        await page.click(interTypeTextA);
        await page.waitForTimeout(1000);

        // await textInputD.click({ clickCount: 2 })
        await page.click(interSource);
        await page.click(interTypeTextC);
        await page.waitForTimeout(1000);

        await page.click(interAddBtn);
    }



    listASWriteC = async () => {
        let page = this.page;
        let { interfacesAddBtn, interName, interDescription, interType, interTypeTextA, interSource, interTypeTextB, interAddBtn } = locators.adminSettings_Page;

        // let textInput = await page.$(interName);
        // let textInputB = await page.$(interDescription);
        // let textInputC = await page.$(interType);
        // let textInputD = await page.$(interSource);

        await page.click(interfacesAddBtn);

        // await textInput.click({ clickCount: 3 })
        await page.click(interName);
        await page.keyboard.type('tes3');
        await page.waitForTimeout(1000);

        // await textInputB.click({ clickCount: 3 })
        await page.click(interDescription);
        await page.keyboard.type('Just a test');
        await page.waitForTimeout(1000);

        // await textInputC.click({ clickCount: 2 })
        await page.click(interType);
        await page.click(interTypeTextA);
        await page.waitForTimeout(1000);

        // await textInputD.click({ clickCount: 2 })
        await page.click(interSource);
        await page.click(interTypeTextB);
        await page.waitForTimeout(1000);

        await page.click(interAddBtn);
    }


    //Delete
    listASWriteA = async () => {
        let page = this.page;
        let { interfacesAddBtn, interDeleteBtn } = locators.adminSettings_Page;

        await page.click(interfacesAddBtn);

        await page.click(interDeleteBtn);
    }
}

module.exports.interPage = interPage;
