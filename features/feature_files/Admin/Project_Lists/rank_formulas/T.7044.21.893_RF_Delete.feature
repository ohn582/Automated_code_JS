Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @delete @067 @T.7044.21.893
    Scenario: @T.7044.21.893-testing user data
    #Creating the Data
        When I select Administration and select Rank Form Lists
        When I select Rank Formulas
        When I select multiple Rank Formulas in data
        Then I delete the Rank Formulas data
        
        Then I clicked save button in Rank Formulas
        Then I verify the Rank Formulas by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Rank Form Lists
        When I select Rank Formulas
