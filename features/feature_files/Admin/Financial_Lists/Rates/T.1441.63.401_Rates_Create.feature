Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @343 @T.4559.93.561
    Scenario: @T.4559.93.561-testing user data
        When I select Administration and select Rates Resource Lists
        When I select Rates
        When I select Add Button in the Rates
        Then I typed a new Rates
        When I select Add Button in the Rates
        Then I typed a new Rates tes2
        When I select Add Button in the Rates
        Then I typed a new Rates tes3

        Then I clicked save button in Rates
        Then I clicked Reload button in Rates