Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @delete @491 @T.6665.79.323
    Scenario: @T.6665.79.323-testing user data
        When I select Administration and Rank List
        When I select Rank Lists
        When I selected Field 1

        # When I select Add Button in the Rank List
        When I select multiple Rank List datas

        Then I delete the Rank List data

        # Then I Re-type Team tes1
        Then I select save in the Rank List Data
        # Then I clicked Reload button in Rank List
