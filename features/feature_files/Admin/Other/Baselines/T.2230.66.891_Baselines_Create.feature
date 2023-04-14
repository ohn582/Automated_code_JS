Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @300 @T.2230.66.891
    Scenario: @T.2230.66.891-testing user data
        When I select Administration and Baselines List
        When I select Baselines
        When I select Add Button in the Baselines
        Then I typed a new Baselines tes1
        When I select Add Button in the Baselines
        Then I typed a new Baselines tes2
        When I select Add Button in the Baselines
        Then I typed a new Baselines tes3
        Then I clicked save button in Baselines
        Then I clicked Reload button in Baselines