Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.5300.07.002
    Scenario: @T.5300.07.002-testing user data
        When I select Administration and select List
        When I select locations
        Then I Re-Typed a new locations tes3
        Then I Re-Typed a new locations tes1
        Then I clicked save button in locations
        Then I clicked Reload button in locations