Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.6665.79.321
    Scenario: @T.6665.79.321-testing user data
        When I select Administration and select Rank List
        When I select Rank Lists

        Then I create a new Rank List name
        When I selected Field 1

        When I select Add Button in the Rank List
        Then I typed a new Rank List tes1
        When I select Add Button in the Rank List
        Then I typed a new Rank List tes2
        When I select Add Button in the Rank List
        Then I typed a new Rank List tes3
     
        Then I select save in the Rank List Data
        # Then I clicked Reload button in Rank List
