Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.5300.07.001
    Scenario: @T.5300.07.001-testing user data
        When I select Administration and select List
        When I select locations
        When I select Add Button in the locations
        Then I typed a new locations tes1
        When I select Add Button in the locations
        Then I typed a new locations tes2
        When I select Add Button in the locations
        Then I typed a new locations tes3
        Then I clicked save button in locations
        Then I clicked Reload button in locations