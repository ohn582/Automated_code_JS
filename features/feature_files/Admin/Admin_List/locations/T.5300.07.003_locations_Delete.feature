Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.5300.07.003
    Scenario: @T.5300.07.003-testing user data
    #Creating the Data
        When I select Administration and select List
        When I select locations
        When I select locations in data
        Then I delete the locations data
        Then I clicked save button in locations
        Then I clicked Reload button in locations
