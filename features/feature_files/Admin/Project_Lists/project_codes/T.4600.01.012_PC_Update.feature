Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @update @223 @T.4100.01.012
    Scenario: @T.4100.01.012-testing user data
        When I select Administration and select PC project Lists
        When I select Project Codes
        Then I Re-Typed a new Project Codes
        Then I Re-Typed a new Project Codes tes2
        Then I Re-Typed a new Project Codes tes3

        Then I clicked save button in Project Codes
        Then I verify the Project Codes by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select PC project Lists
        When I select Project Codes
