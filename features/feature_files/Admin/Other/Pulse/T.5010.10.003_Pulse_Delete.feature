Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Pulse"
    @create @668 @T.5010.10.003
    Scenario: @T.5010.10.003-testing user data
        When I select Administration and select Pulse

        When I select a Pulse Data A
        Then I delete Pulse Data
        # When I select a Pulse Data B
        # Then I delete Pulse Data
        # When I select a Pulse Data C
        # Then I delete Pulse Data

        Then I verify the Pulse data by re-loging admin account

        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Pulse

