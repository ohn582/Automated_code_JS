Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @update @677 @T.7888.27.562
    Scenario: @T.7888.27.562-testing user data
        When I select Administration and select RF Lists
        When I select Rank Fields
        Then I Re-Typed a Rank Fields tes1
        Then I Re-Typed a Rank Fields tes2
        Then I Re-Typed a Rank Fields tes3

        Then I clicked save button in Rank Fields
        Then I verify the Rank Fields by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select PM Lists
        When I select Rank Fields
