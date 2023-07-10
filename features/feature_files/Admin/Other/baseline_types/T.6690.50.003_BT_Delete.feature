Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @delete @443 @T.6220.21.003
    Scenario: @T.6220.21.003-testing user data
        When I select Administration and Baseline Types List
        When I select Baseline Types
        When I select multiple Baseline Types datas
        Then I delete the Baseline Types data

        Then I clicked save button in Baseline Types
        Then I verify the Baseline Types data by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and Baseline Types List
        When I select Baseline Types