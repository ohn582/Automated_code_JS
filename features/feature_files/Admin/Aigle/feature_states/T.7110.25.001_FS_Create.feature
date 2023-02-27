Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.7110.25.001
    Scenario: @T.7110.25.001-testing user data
        When I select Administration and select List
        When I select Feature States
        When I select Add Button in the Feature States
        Then I typed a new Feature States tes1
        When I select Add Button in the Feature States
        Then I typed a new Feature States tes2
        When I select Add Button in the Feature States
        Then I typed a new Feature States tes3
        Then I clicked save button in Feature States
        Then I clicked Reload button in Feature States