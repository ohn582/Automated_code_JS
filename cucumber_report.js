[
  {
    "description": "",
    "elements": [
      {
        "description": "",
        "id": "pdware-admin-user-module;@t.2221.33.001-testing-user-data",
        "keyword": "Scenario",
        "line": 9,
        "name": "@T.2221.33.001-testing user data",
        "steps": [
          {
            "keyword": "Before",
            "hidden": true,
            "result": {
              "status": "passed",
              "duration": 569079600
            }
          },
          {
            "arguments": [],
            "keyword": "Given ",
            "line": 4,
            "name": "I visit the pdware r1test landing page 'https://r1test.pdware.com/'",
            "match": {
              "location": "features\\step_definitions\\LoginPage\\frontPageLogin.js:16"
            },
            "result": {
              "status": "passed",
              "duration": 1683423600
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 5,
            "name": "I login with the credentials : user \"admin\" and \"zhti8d4R_\"",
            "match": {
              "location": "features\\step_definitions\\LoginPage\\frontPageLogin.js:24"
            },
            "result": {
              "status": "passed",
              "duration": 6477757100
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 7,
            "name": "I click over the \"Admin\" nav and click on \"Lists\"",
            "match": {
              "location": "features\\step_definitions\\LoginPage\\frontPageLogin.js:38"
            },
            "result": {
              "status": "passed",
              "duration": 3006439600
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 10,
            "name": "I select Administration and select Cost Items Financial Lists",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\when.js:10"
            },
            "result": {
              "status": "passed",
              "duration": 2008033800
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 11,
            "name": "I select Cost Items",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\when.js:17"
            },
            "result": {
              "status": "passed",
              "duration": 2012525400
            }
          },
          {
            "arguments": [],
            "keyword": "Then ",
            "line": 12,
            "name": "I typed a new Cost Items",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\then.js:9"
            },
            "result": {
              "status": "passed",
              "duration": 2169544700
            }
          },
          {
            "arguments": [],
            "keyword": "Then ",
            "line": 13,
            "name": "I typed a new Cost Items tes2",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\then.js:16"
            },
            "result": {
              "status": "passed",
              "duration": 2161962500
            }
          },
          {
            "arguments": [],
            "keyword": "Then ",
            "line": 14,
            "name": "I typed a new Cost Items tes3",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\then.js:23"
            },
            "result": {
              "status": "passed",
              "duration": 2171060200
            }
          },
          {
            "arguments": [],
            "keyword": "Then ",
            "line": 16,
            "name": "I clicked save button in Cost Items",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\then.js:69"
            },
            "result": {
              "status": "passed",
              "duration": 5234144199
            }
          },
          {
            "arguments": [],
            "keyword": "Then ",
            "line": 17,
            "name": "I verify the Cost Item by re-loging admin account",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\then.js:76"
            },
            "result": {
              "status": "passed",
              "duration": 3360850699
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 19,
            "name": "I login with the credentials : user \"admin\" and \"zhti8d4R_\"",
            "match": {
              "location": "features\\step_definitions\\LoginPage\\frontPageLogin.js:24"
            },
            "result": {
              "status": "passed",
              "duration": 4069698300
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 20,
            "name": "I select Administration and select Cost Items Financial Lists",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\when.js:10"
            },
            "result": {
              "status": "passed",
              "duration": 2008200999
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 21,
            "name": "I select Cost Items",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\when.js:17"
            },
            "result": {
              "status": "passed",
              "duration": 2008940600
            }
          },
          {
            "keyword": "After",
            "hidden": true,
            "result": {
              "status": "passed",
              "duration": 1305200
            }
          }
        ],
        "tags": [
          {
            "name": "@create",
            "line": 8
          },
          {
            "name": "@888",
            "line": 8
          },
          {
            "name": "@T.2221.33.001",
            "line": 8
          }
        ],
        "type": "scenario"
      }
    ],
    "id": "pdware-admin-user-module",
    "line": 1,
    "keyword": "Feature",
    "name": "Pdware Admin User Module",
    "tags": [],
    "uri": "features\\feature_files\\Admin\\Financial_Lists\\Cost_Items\\T.2221.33.001_CI_Create.feature"
  },
  {
    "description": "",
    "elements": [
      {
        "description": "",
        "id": "pdware-admin-user-module;@t.t.2221.33.002-testing-user-data",
        "keyword": "Scenario",
        "line": 9,
        "name": "@T.T.2221.33.002-testing user data",
        "steps": [
          {
            "keyword": "Before",
            "hidden": true,
            "result": {
              "status": "failed",
              "duration": 167416399,
              "error_message": "page.click: Target closed\n=========================== logs ===========================\nwaiting for selector \"//*[text()=\"Financial Lists\"]\"\n  selector resolved to hidden <div id=\"ext-element-244\" class=\"x-treelist-item-text\">Financial Lists</div>\nattempting click action\n  waiting for element to be visible, enabled and stable\n    element is not visible - waiting...\n============================================================\n    at CostItemsTypeData.listCISelect (C:\\Users\\Admin\\Desktop\\New_Autimation\\r1testC\\features\\components\\administration\\Financial_Lists\\ci_page.component.js:36:20)\n    at CustomWorld.<anonymous> (C:\\Users\\Admin\\Desktop\\New_Autimation\\r1testC\\features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\when.js:20:14)"
            }
          },
          {
            "arguments": [],
            "keyword": "Given ",
            "line": 4,
            "name": "I visit the pdware r1test landing page 'https://r1test.pdware.com/'",
            "match": {
              "location": "features\\step_definitions\\LoginPage\\frontPageLogin.js:16"
            },
            "result": {
              "status": "skipped",
              "duration": 0
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 5,
            "name": "I login with the credentials : user \"admin\" and \"zhti8d4R_\"",
            "match": {
              "location": "features\\step_definitions\\LoginPage\\frontPageLogin.js:24"
            },
            "result": {
              "status": "skipped",
              "duration": 0
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 7,
            "name": "I click over the \"Admin\" nav and click on \"Lists\"",
            "match": {
              "location": "features\\step_definitions\\LoginPage\\frontPageLogin.js:38"
            },
            "result": {
              "status": "skipped",
              "duration": 0
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 10,
            "name": "I select Administration and select Cost Items Financial Lists",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\when.js:10"
            },
            "result": {
              "status": "skipped",
              "duration": 0
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 11,
            "name": "I select Cost Items",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\when.js:17"
            },
            "result": {
              "status": "skipped",
              "duration": 0
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 12,
            "name": "I Re-Typed a new Cost Items",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\then.js:33"
            },
            "result": {
              "status": "skipped",
              "duration": 0
            }
          },
          {
            "arguments": [],
            "keyword": "Then ",
            "line": 13,
            "name": "I Re-Typed a new Cost Items tes2",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\then.js:40"
            },
            "result": {
              "status": "skipped",
              "duration": 0
            }
          },
          {
            "arguments": [],
            "keyword": "Then ",
            "line": 14,
            "name": "I Re-Typed a new Cost Items tes3",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\then.js:47"
            },
            "result": {
              "status": "skipped",
              "duration": 0
            }
          },
          {
            "arguments": [],
            "keyword": "Then ",
            "line": 16,
            "name": "I clicked save button in Cost Items",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\then.js:69"
            },
            "result": {
              "status": "skipped",
              "duration": 0
            }
          },
          {
            "arguments": [],
            "keyword": "Then ",
            "line": 17,
            "name": "I verify the Cost Item by re-loging admin account",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\then.js:76"
            },
            "result": {
              "status": "skipped",
              "duration": 0
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 19,
            "name": "I login with the credentials : user \"admin\" and \"zhti8d4R_\"",
            "match": {
              "location": "features\\step_definitions\\LoginPage\\frontPageLogin.js:24"
            },
            "result": {
              "status": "skipped",
              "duration": 0
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 20,
            "name": "I select Administration and select Cost Items Financial Lists",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\when.js:10"
            },
            "result": {
              "status": "skipped",
              "duration": 0
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 21,
            "name": "I select Cost Items",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\when.js:17"
            },
            "result": {
              "status": "skipped",
              "duration": 0
            }
          },
          {
            "keyword": "After",
            "hidden": true,
            "result": {
              "status": "failed",
              "duration": 6597299,
              "error_message": "page.screenshot: Target page, context or browser has been closed\n    at CustomWorld.<anonymous> (C:\\Users\\Admin\\Desktop\\New_Autimation\\r1testC\\features\\support\\world.js:52:27)"
            }
          }
        ],
        "tags": [
          {
            "name": "@update",
            "line": 8
          },
          {
            "name": "@888",
            "line": 8
          },
          {
            "name": "@T.2221.33.002",
            "line": 8
          }
        ],
        "type": "scenario"
      }
    ],
    "id": "pdware-admin-user-module",
    "line": 1,
    "keyword": "Feature",
    "name": "Pdware Admin User Module",
    "tags": [],
    "uri": "features\\feature_files\\Admin\\Financial_Lists\\Cost_Items\\T.2221.33.002_CI_Update.feature"
  },
  {
    "description": "",
    "elements": [
      {
        "description": "",
        "id": "pdware-admin-user-module;@t.2221.33.003-testing-user-data",
        "keyword": "Scenario",
        "line": 8,
        "name": "@T.2221.33.003-testing user data",
        "steps": [
          {
            "keyword": "Before",
            "hidden": true,
            "result": {
              "status": "passed",
              "duration": 426080500
            }
          },
          {
            "arguments": [],
            "keyword": "Given ",
            "line": 4,
            "name": "I visit the pdware r1test landing page 'https://r1test.pdware.com/'",
            "match": {
              "location": "features\\step_definitions\\LoginPage\\frontPageLogin.js:16"
            },
            "result": {
              "status": "passed",
              "duration": 1600914599
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 5,
            "name": "I login with the credentials : user \"admin\" and \"zhti8d4R_\"",
            "match": {
              "location": "features\\step_definitions\\LoginPage\\frontPageLogin.js:24"
            },
            "result": {
              "status": "passed",
              "duration": 6447089399
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 6,
            "name": "I click over the \"Admin\" nav and click on \"Lists\"",
            "match": {
              "location": "features\\step_definitions\\LoginPage\\frontPageLogin.js:38"
            },
            "result": {
              "status": "passed",
              "duration": 3011049800
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 10,
            "name": "I select Administration and select Cost Items Financial Lists",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\when.js:10"
            },
            "result": {
              "status": "passed",
              "duration": 2016834200
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 11,
            "name": "I select Cost Items",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\when.js:17"
            },
            "result": {
              "status": "passed",
              "duration": 2006296499
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 12,
            "name": "I select multiple Cost Items datas",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\when.js:24"
            },
            "result": {
              "status": "passed",
              "duration": 2014407399
            }
          },
          {
            "arguments": [],
            "keyword": "Then ",
            "line": 13,
            "name": "I delete the Cost Items data",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\then.js:58"
            },
            "result": {
              "status": "passed",
              "duration": 2132907599
            }
          },
          {
            "arguments": [],
            "keyword": "Then ",
            "line": 15,
            "name": "I clicked save button in Cost Items",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\then.js:69"
            },
            "result": {
              "status": "passed",
              "duration": 5160173000
            }
          },
          {
            "arguments": [],
            "keyword": "Then ",
            "line": 16,
            "name": "I verify the Cost Item by re-loging admin account",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\then.js:76"
            },
            "result": {
              "status": "passed",
              "duration": 3296357200
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 18,
            "name": "I login with the credentials : user \"admin\" and \"zhti8d4R_\"",
            "match": {
              "location": "features\\step_definitions\\LoginPage\\frontPageLogin.js:24"
            },
            "result": {
              "status": "passed",
              "duration": 4032277700
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 19,
            "name": "I select Administration and select Cost Items Financial Lists",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\when.js:10"
            },
            "result": {
              "status": "passed",
              "duration": 2013453299
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 20,
            "name": "I select Cost Items",
            "match": {
              "location": "features\\step_definitions\\administration\\Financial_Lists\\Cost_Items\\when.js:17"
            },
            "result": {
              "status": "passed",
              "duration": 2001604700
            }
          },
          {
            "keyword": "After",
            "hidden": true,
            "result": {
              "status": "passed",
              "duration": 592700
            }
          }
        ],
        "tags": [
          {
            "name": "@delete",
            "line": 7
          },
          {
            "name": "@888",
            "line": 7
          },
          {
            "name": "@T.2221.33.003",
            "line": 7
          }
        ],
        "type": "scenario"
      }
    ],
    "id": "pdware-admin-user-module",
    "line": 1,
    "keyword": "Feature",
    "name": "Pdware Admin User Module",
    "tags": [],
    "uri": "features\\feature_files\\Admin\\Financial_Lists\\Cost_Items\\T.2221.33.003_CI_Delete.feature"
  }
]