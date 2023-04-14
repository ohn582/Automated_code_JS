Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @create @113 @T.4600.01.030
    Scenario: @T.4600.01.030-testing user data
    #Creating the Data
        When I select Administration and select PS project Lists
        When I select Project States
        When I select Add Button in the Project States
        Then I typed a new Project States tes1
        When I select Add Button in the Project States
        Then I typed a new Project States tes2
        When I select Add Button in the Project States
        Then I typed a new Project States tes3
        Then I clicked save button in Project States
        # Then I clicked reload button for Project States
