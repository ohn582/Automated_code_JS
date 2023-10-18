Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @delete @279 @T.6665.79.323
    Scenario: @T.6665.79.323-testing user data
        When I select Administration
        When I select User Defined Lists

        Then I Delete all User Defined Lists Field 31
        Then I select save in the UDL Data
        # Then I Delete all User Defined Lists Field 144
        # Then I select save in the UDL Data
        # Then I Delete all User Defined Lists Field Cost Notes
        # Then I select save in the UDL Data

        Then I verify the Scenario Status data by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration
        When I select User Defined Lists
        # Then I clicked Reload button in User Defined Lists