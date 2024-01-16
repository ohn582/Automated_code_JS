let reporter = require('cucumber-html-reporter');
// let fs = require('fs-extra');
var platform = require(`./features/utilities/platform`)
require('dotenv').config()

/**
 * reporter options and metadata
 */

var options = {
    theme: 'bootstrap',
    // jsonFile: 'test/report/cucumber_report.json',
    // output: 'test/report/cucumber_report.html',
    jsonFile: 'cucumber_report.json',
    output: 'report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    brandTitle: "PDWare ResourceFirst Report",
    metadata: {
        "App Version": process.env.APP_VERSION,
        "Test Environment": process.env.TEST_ENVIRONMENT,
        "Browser": `${process.env.BROWSER_NAME}  ${process.env.BROWSER_VERSION}`,
        "Platform": platform(),
        "Parallel": "Scenarios",
        "Executed": "Local"
    }
    // failedSummaryReport: true,
};
    // reporter.generate(options);


// const fs = require("fs");
// const path = require("path");
// console.log(path.toString() + "#################################");

// const currentPath = path.join(__dirname, "report", "cucumber_report.html");
// console.log(currentPath);
// const destinationPath = path.join(__dirname, "history", `cucumber_report_${new Date().getTime()}.html`);
// console.log(destinationPath);

// fs.rename(currentPath, destinationPath, function (err) {
//     if (err) {

//         return true;
//         //throw err
//     } else {
//         reporter.generate(options);
//         console.log("Successfully moved the file!");
//     }
// });
// reporter.generate(options);



/**
 * Moving reports to history
 */

const fs = require("fs");
const path = require("path");

const currentPath = path.join(__dirname, "report", "cucumber_report.html");
const destinationPath = path.join(__dirname, "history", `cucumber_report_${new Date().getTime()}.html`);

fs.rename(currentPath, destinationPath, function (err) {
    if (err) {
        throw err
    } else {
        reporter.generate(options);
        console.log("Successfully moved the file!");
    }
});
// reporter.generate(options);



