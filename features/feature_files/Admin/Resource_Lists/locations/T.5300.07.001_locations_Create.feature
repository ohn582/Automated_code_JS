Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @467 @T.5300.07.001
    Scenario: @T.5300.07.001-testing user data
        When I select Administration and select Location Resource Lists
        When I select Locations
        Then I typed a new Locations tes1
        Then I typed a new Locations tes2
        Then I typed a new Locations tes3
        Then I clicked save button in Locations
        # Then I clicked Reload button in Locations