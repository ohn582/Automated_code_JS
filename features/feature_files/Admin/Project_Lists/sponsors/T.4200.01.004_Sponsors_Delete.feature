Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @delete @372 @T.4200.01.004
    Scenario: @T.4200.01.004-testing user data
    #Creating the Data
        When I select Administration and select Project List
        When I select Sponsors
        When I select multiple Sponsors datas
        Then I delete the Sponsor data

        Then I clicked save button in Sponsors
        Then I verify the Sponsors by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Project List
        When I select Sponsors