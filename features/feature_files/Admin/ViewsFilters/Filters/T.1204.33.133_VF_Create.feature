Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Periods"
    @create @668 @T.1204.33.133
    Scenario: @T.1204.33.133-testing user data
        When I select Administration and select Views & Filters and select Filters
        When I select Financial from the dropdown menu

        Then I create multiple names in the Filters Data
        Then I create multiple names in the Filters Data B
        Then I create multiple names in the Filters Data C
        
        Then I save the Filter data
        Then I clicked reload in the Filter data
