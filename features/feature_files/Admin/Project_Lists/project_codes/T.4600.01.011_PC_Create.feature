Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.4600.01.011
    Scenario: @T.4600.01.011-testing user data
    #Creating the Data
        When I select Administration and select PC project Lists
        When I select Project Codes
        When I select Add Button in the Project Codes
        Then I typed a new Project Codes tes1
        When I select Add Button in the Project Codes
        Then I typed a new Project Codes tes2
        When I select Add Button in the Project Codes
        Then I typed a new Project Codes tes3
        Then I clicked save button in Project Codes
        # Then I clicked reload button for Project Codes
