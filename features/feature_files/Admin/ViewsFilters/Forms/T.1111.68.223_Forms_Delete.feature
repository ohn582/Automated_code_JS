Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Periods"
    @delete @668 @T.1111.68.223
    Scenario: @T.1111.68.223-testing user data
        When I select Administration and select Views & Filters and select Forms

        Then I delete names in the Forms Data A
        Then I delete names in the Forms Data B
        Then I delete names in the Forms Data C
        
        Then I save the Forms data
        # Then I clicked reload in the Forms data