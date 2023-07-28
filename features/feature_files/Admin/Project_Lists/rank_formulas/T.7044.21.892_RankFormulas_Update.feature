Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @update @067 @T.7044.21.892
    Scenario: @T.7044.21.892-testing user data
        When I select Administration and select Rank Form Lists
        When I select Rank Formulas
        Then I Re-Typed a new Rank Formulas tes1
        Then I Re-Typed a new Rank Formulas tes2
        Then I Re-Typed a new Rank Formulas tes3

        Then I clicked save button in Rank Formulas
        Then I verify the Rank Formulas by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Rank Form Lists
        When I select Rank Formulas

