Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.4500.01.003
    Scenario: @T.4500.01.003-testing user data
    #Creating the Data
        When I select Administration and select List
        When I select Categories
        When I select multiple Categories datas
        Then I delete the Categories data
        Then I clicked save button in Categories
        # Then I clicked Reload button in Categories
