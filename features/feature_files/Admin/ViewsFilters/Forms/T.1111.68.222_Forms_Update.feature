Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Periods"
    @update @668 @T.1111.68.222
    Scenario: @T.1111.68.222-testing user data
        When I select Administration and select Views & Filters and select Forms

        Then I re-type names in the Forms Data A
        Then I re-type names in the Forms Data B
        Then I re-type names in the Forms Data C
        
        Then I save the Forms data from Updates
        # Then I clicked reload in the Forms data