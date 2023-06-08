Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @update @372 @T.4200.01.003
    Scenario: @T.4200.01.003-testing user data
        When I select Administration and select Project List
        When I select Sponsors
        Then I Re-Typed a new Sponsor
        Then I Re-Typed a new Sponsor tes2
        Then I Re-Typed a new Sponsor tes3
        Then I clicked save button in Sponsors
        # Then I clicked reload button for Sponsors
