Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Edit OBSs"
    @update @456 @T.2490.10.002
    Scenario: @T.2490.10.002-testing user data
        When I select Administration and select Objects and select Edit OBSs
        When I select dropdown from Secure node under projects OBS
        # When I select Add button in Project OBS
        Then I Select a created Sibling in project OBS & re-write 

        Then I retype a new name under Secure node under extention

        Then I save the OBSdata
        Then I verify the Edit OBSs data by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Objects and select Edit OBSs