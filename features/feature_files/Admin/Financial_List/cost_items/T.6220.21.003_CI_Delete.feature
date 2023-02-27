Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.6220.21.003
    Scenario: @T.6220.21.003-testing user data
        When I select Administration and select List
        When I select Cost Items
        When I select Cost Items in data
        Then I delete the Cost Items data
        Then I clicked save button in Cost Items
        Then I clicked Reload button in Cost Items