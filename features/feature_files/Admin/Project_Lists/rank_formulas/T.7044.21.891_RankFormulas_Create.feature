Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.7044.21.891
    Scenario: @T.7044.21.891-testing user data
    #Creating the Data
        When I select Administration and select Rank Form Lists
        When I select Rank Formulas
        When I select Add Button in the Rank Formulas
        Then I typed a new Rank Formulas tes1
        When I select Add Button in the Rank Formulas
        Then I typed a new Rank Formulas tes2
        When I select Add Button in the Rank Formulas
        Then I typed a new Rank Formulas tes3
        Then I clicked save button in Rank Formulas
        # Then I clicked reload button for Rank Formulas