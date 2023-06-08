Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @update @491 @T.6665.79.322
    Scenario: @T.6665.79.322-testing user data
        When I select Administration and select Rank List
        When I select Rank Lists

        Then I Re-Typed a new Rank List Field 1
        Then I Re-Typed a new Rank List Field 2
        Then I Re-Typed a new Rank List Field 3

        # Then I Re-type Team tes1
        Then I select save in the Rank List from updated Data
        # Then I clicked Reload button in Rank List
