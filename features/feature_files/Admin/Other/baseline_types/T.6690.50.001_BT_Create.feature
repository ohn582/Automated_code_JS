Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.6690.50.001
    Scenario: @T.6690.50.001-testing user data
        When I select Administration and Baseline Types List
        When I select Baseline Types
        When I select Add Button in the Baseline Types
        Then I typed a new Baseline Types tes1
        When I select Add Button in the Baseline Types
        Then I typed a new Baseline Types tes2
        When I select Add Button in the Baseline Types
        Then I typed a new Baseline Types tes3
        Then I clicked save button in Baseline Types
        # Then I clicked Reload button in Baseline Types