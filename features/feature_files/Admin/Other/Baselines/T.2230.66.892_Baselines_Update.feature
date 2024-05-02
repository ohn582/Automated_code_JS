Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @update @300 @T.2230.66.892
    Scenario: @T.2230.66.892-testing user data
        When I select Administration and Baselines List

        Then I Re-Typed a new Baselines tes1
        Then I Re-Typed a new Baselines tes2
        Then I Re-Typed a new Baselines tes3

        Then I clicked save button in Baselines
        Then I verify the Baseline Types data by re-loging admin account

        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and Baselines List