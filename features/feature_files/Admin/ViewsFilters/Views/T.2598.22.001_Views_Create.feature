Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Edit OBSs"
    @create @668 @T.2550.12.001
    Scenario: @T.2550.12.001-testing user data
        When I select Administration and select Views
        When I select Resource Capacity in the dropdown filter

        Then I create a new Views Data
        Then I create a new Views Data B
        Then I create a new Views Data C

        Then I retype a new name in the Views Details
        Then I save the data
        Then I verify the Feature Types by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Views
        When I select Resource Capacity in the dropdown filter