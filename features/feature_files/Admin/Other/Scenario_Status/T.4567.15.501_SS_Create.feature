Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.4567.15.501
    Scenario: @T.4567.15.501-testing user data
        When I select Administration and Scenario Status List
        When I select Scenario Status
        When I select Add Button in the Scenario Status
        Then I typed a new Scenario Status tes1
        When I select Add Button in the Scenario Status
        Then I typed a new Scenario Status tes2
        When I select Add Button in the Scenario Status
        Then I typed a new Scenario Status tes3
        Then I clicked save button in Scenario Status
        # Then I clicked Reload button in Scenario Status