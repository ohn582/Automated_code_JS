Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.4567.15.502
    Scenario: @T.4567.15.502-testing user data
        When I select Administration and Scenario Status List
        When I select Scenario Status
        Then I Re-Typed a new Scenario Status tes1
        Then I Re-Typed a new Scenario Status tes2
        Then I Re-Typed a new Scenario Status tes3
        Then I clicked save button in Scenario Status
        # Then I clicked Reload button in Scenario Status