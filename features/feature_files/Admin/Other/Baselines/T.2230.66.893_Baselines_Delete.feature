Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @delete @300 @T.2230.66.893
    Scenario: @T.2230.66.893-testing user data
        When I select Administration and Baselines List
        When I select Baselines
        When I select Baselines in data
        Then I delete the Baselines data
        Then I clicked save button in Baselines
        Then I clicked Reload button in Baselines