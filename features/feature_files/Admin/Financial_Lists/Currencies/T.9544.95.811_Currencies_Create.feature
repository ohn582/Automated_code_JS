Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @444 @T.4559.93.561
    Scenario: @T.4559.93.561-testing user data
        When I select Administration and select Currencies Resource Lists
        When I select Currencies
        Then I typed a new Currencies
        Then I typed a new Currencies tes2
        Then I typed a new Currencies tes3

        Then I clicked save button in Currencies
        Then I verify the Currencies by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Currencies Resource Lists
        When I select Currencies