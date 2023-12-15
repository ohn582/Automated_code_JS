[
  {
    "description": "",
    "elements": [
      {
        "description": "",
        "id": "pdware-admin-user-module;@t.2356.21.190-testing-user-data",
        "keyword": "Scenario",
        "line": 9,
        "name": "@T.2356.21.190-testing user data",
        "steps": [
          {
            "keyword": "Before",
            "hidden": true,
            "result": {
              "status": "passed",
              "duration": 582057500
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
              "duration": 1557599200
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
              "duration": 6522529100
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 7,
            "name": "I click over the \"Assing\" nav and click on \"Labor\"",
            "match": {
              "location": "features\\step_definitions\\LoginPage\\frontPageLogin.js:38"
            },
            "result": {
              "status": "passed",
              "duration": 3014646799
            }
          },
          {
            "arguments": [],
            "keyword": "When ",
            "line": 10,
            "name": "I select Labor from Resources",
            "match": {
              "location": "features\\step_definitions\\assignment\\Labor\\Skill_Assignment\\when.js:9"
            },
            "result": {
              "status": "passed",
              "duration": 2016929100
            }
          },
          {
            "arguments": [],
            "keyword": "Then ",
            "line": 12,
            "name": "I Create Skill Assignment Data for labor A",
            "match": {
              "location": "features\\step_definitions\\assignment\\Labor\\Skill_Assignment\\then.js:9"
            },
            "result": {
              "status": "passed",
              "duration": 2012457699
            }
          },
          {
            "arguments": [],
            "keyword": "Then ",
            "line": 13,
            "name": "I Create Skill Assignment Data for labor B",
            "match": {
              "location": "features\\step_definitions\\assignment\\Labor\\Skill_Assignment\\then.js:16"
            },
            "result": {
              "status": "passed",
              "duration": 2006644600
            }
          },
          {
            "keyword": "After",
            "hidden": true,
            "result": {
              "status": "passed",
              "duration": 747900
            }
          }
        ],
        "tags": [
          {
            "name": "@create",
            "line": 8
          },
          {
            "name": "@302",
            "line": 8
          },
          {
            "name": "@T.2356.21.190",
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
    "uri": "features\\feature_files\\Assignment\\Labor\\Skill_Assignment\\T.2456.21.190_Skill_create.feature"
  }
]