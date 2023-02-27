Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.4500.01.002
    Scenario: @T.4500.01.002-testing user data
        When I select Administration and select List
        When I select Categories
        Then I Re-Typed a new Categories tes3
        Then I Re-Typed a new Categories tes2
        Then I clicked save button in Categories
        Then I clicked Reload button in Categories
