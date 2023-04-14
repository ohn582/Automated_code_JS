Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @delete @223 @T.4100.01.013
    Scenario: @T.4100.01.013-testing user data
    #Creating the Data
        When I select Administration and select PC project Lists
        When I select Project Codes
        When I select multiple Project Codes in data
        Then I delete the Project Codes data
        Then I clicked save button in Project Codes
        # Then I clicked reload button for Project Codes
