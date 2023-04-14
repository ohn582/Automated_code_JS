Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @update @774 @T.8330.33.502
    Scenario: @T.8330.33.502-testing user data
        When I select Administration and select Resource Lists
        When I select Skills
        When I Re-Typed a new Skills
        Then I Re-Typed a new Skills tes2
        Then I Re-Typed a new Skills tes3
        Then I clicked save button in Skills
