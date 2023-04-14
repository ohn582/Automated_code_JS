Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @delete @279 @T.6665.79.323
    Scenario: @T.6665.79.323-testing user data
        When I select Administration and User Defined Lists
        When I select User Defined Lists
        When I select ULD Team from a drpodown nav
        When I selected Field 3

        # When I select Add Button in the ULD Team
        When I select multiple ULD Team datas

        Then I delete the User Defined Lists data

        # Then I Re-type Team tes1
        Then I select save in the UDLD Team
        # Then I clicked Reload button in User Defined Lists