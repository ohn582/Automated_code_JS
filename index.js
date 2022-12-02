let reporter = require('simple-cucumber-html-reporter');
// let fs = require('fs-extra');
var platform = require(`./features/utilities/platform`)
require('dotenv').config()

/**
 * reporter options and metadata
 */

var options = {
        theme: 'bootstrap',
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
    };

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