Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @delete @444 @T.4559.93.563
    Scenario: @T.4559.93.563-testing user data
        #Creating the Data
        When I select Administration and select Currencies Resource Lists
        When I select Currencies
        When I select multiple Currencies datas
        Then I delete the Currencies data

        Then I clicked save button in Currencies
        Then I verify the Currencies by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Currencies Resource Lists
        When I select Administration and select Currencies Resource Lists
        When I select Currencies