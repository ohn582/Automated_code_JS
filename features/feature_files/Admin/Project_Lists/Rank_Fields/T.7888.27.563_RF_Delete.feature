Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.7888.27.563
    Scenario: @T.7888.27.563-testing user data
    #Creating the Data
        When I select Administration and select RF Lists
        When I select Rank Fields
        When I select multiple Rank Fields in data
        Then I delete the Rank Fields data
        Then I clicked save button in Rank Fields
        # Then I clicked reload button for Rank Fields
