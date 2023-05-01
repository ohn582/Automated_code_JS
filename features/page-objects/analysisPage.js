const { action } = require('../utilities/action')

const locators = {        
    analysisPage: {
        //Resource Capacity
        rankData1: `[id="R1TAnalysis"] [data-recordindex="0"] [data-columnid="gridcolumn-1061"]`,
        rankData2: `[id="R1TAnalysis"] [data-recordindex="7"] [data-columnid="gridcolumn-1063"]`,
        rankData3: `[id="R1TAnalysis"] [data-recordindex="4"] [data-columnid="gridcolumn-1064"]`,
        rankData4: `[id="R1TAnalysis"] [data-recordindex="11"] [data-columnid="gridcolumn-1061"]`,


        //Save Btn
        rankSave: `[id="R1TRanking"] [role="toolbar"] [data-qtip="Save"]`,
        saveYes: `//*[text()="Yes"]`,
    },

}

class analysisPage {
    constructor(page) {
        this.page = page;
    }


    //Rescouce Capacity
    rankAnalysisCreateTextDataA = async() => {
        let page=this.page;
        let { rankData1 }=locators.analysisPage;
        // let textInput = await page.$(rankData1);
        // await textInput.click({clickCount: 3})

        await page.dblclick(rankData1);
        await page.keyboard.type('1 - Low');
        await page.waitForTimeout(1000);
    }

    rankAnalysisCreateTextDataB = async() => {
        let page=this.page;
        let { rankData2 }=locators.analysisPage;
        let textInput = await page.$(rankData2);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('3 - High');
        await page.waitForTimeout(1000);
    }

    rankAnalysisCreateTextDataC = async() => {
        let page=this.page;
        let { rankData3 }=locators.analysisPage;
        let textInput = await page.$(rankData3);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('2 - Med');
        await page.waitForTimeout(1000);
    }

    rankAnalysisCreateTextDataD = async() => {
        let page=this.page;
        let { rankData4 }=locators.analysisPage;
        let textInput = await page.$(rankData4);
        await textInput.click({clickCount: 3})
        await page.keyboard.type('2 - Med');
        await page.waitForTimeout(1000);
    }



    rankAnalysisSaveData = async() => {
        let page=this.page;
        let { rankSave, saveYes }=locators.analysisPage;
        await page.click(rankSave)
        await page.click(saveYes)
        await page.waitForTimeout(1000);
    }

}

module.exports.analysisPage = analysisPage;
