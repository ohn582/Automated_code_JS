Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @update @882 @T.5000.02.002
    Scenario: @T.5000.02.002-testing user data
        When I select Administration and select Countries resource Lists
        When I select Countries
        Then I Re-Typed a new Countries
        Then I Re-Typed a new Countries tes2
        Then I Re-Typed a new Countries tes3

        Then I clicked save button in Countries
        Then I verify the Countries by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Resource Lists
        When I select Countries
