Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @delete @799 @T.4567.15.503
    Scenario: @T.4567.15.503-testing user data
        When I select Administration and Scenario Status List
        When I select Scenario Status
        When I select multiple Scenario Status datas
        Then I delete the Scenario Status data
        Then I clicked save button in Scenario Status
        # Then I clicked Reload button in Scenario Status