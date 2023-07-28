Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @delete @882 @T.5000.02.003
    Scenario: @T.5000.02.003-testing user data
    #Creating the Data
        When I select Administration and select Countries resource Lists
        When I select Countries
        When I select a data in Countries
        Then I delete the Countries data

        Then I clicked save button in Countries
        Then I verify the Countries by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Resource Lists
        When I select Countries