Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @441 @T.4100.01.010
    Scenario: @T.4100.01.010-testing user data
        When I select Administration and select Project Lists
        When I select Domains
        Then I typed a new Domains tes1
        Then I typed a new Domains tes2
        Then I typed a new Domains tes3

        Then I clicked save button in Domains
        Then I verify the Domains data by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Project Lists
        When I select Domains