Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @delete @557 @T.5700.10.003
    Scenario: @T.5700.10.003-testing user data
    #Creating the Data
        When I select Administration and select Resource Lists
        When I select Cost Categories
        
        When I select multiple Cost Categories datas
        Then I delete the Cost Categories data

        Then I clicked save button in Cost Categories
        Then I verify the Cost Categories by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Resource Lists
        When I select Cost Categories