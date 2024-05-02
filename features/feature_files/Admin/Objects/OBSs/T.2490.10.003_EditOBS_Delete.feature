Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Edit OBSs"
    @delete @456 @T.2490.10.003
    Scenario: @T.2490.10.003-testing user data
        When I select Administration and select Edit OBSs
        When I select a name in the data

        Then I select delete in the OBS data

        Then I save the OBSdata
        Then I verify the Edit OBSs data by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Objects and select Edit OBSs
