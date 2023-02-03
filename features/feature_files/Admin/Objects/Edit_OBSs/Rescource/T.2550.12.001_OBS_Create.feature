Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Edit OBSs"
    @create @668 @T.2550.12.001
    Scenario: @T.2550.12.001-testing user data
        When I select Administration and select Edit OBSs
        When I click the drop down menu
        When I select a name in the data
        When I select Add button in Project OBS
        Then I Select Add Sibling in project OBS



        Then I retype a new name in the new sibling
        Then I save the data
        Then I clicked reload
