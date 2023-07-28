Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @update @467 @T.5300.07.002
    Scenario: @T.5300.07.002-testing user data
        When I select Administration and select Location Resource Lists
        When I select Locations
        Then I Re-Typed a new Locations
        Then I Re-Typed a new Locations tes2
        Then I Re-Typed a new Locations tes3

        Then I clicked save button in Locations
        Then I verify the Location by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Location Resource Lists
        When I select Locations