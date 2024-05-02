Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Pulse"
    @create @668 @T.5010.10.002
    Scenario: @T.5010.10.002-testing user data
        When I select Administration and select Pulse

        Then I Re-Type new Data A
        # Then I Re-Type new Data B
        # Then I Re-Type new Data C

        Then I verify the Pulse data by re-loging admin account

        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Pulse

