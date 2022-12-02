Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.4200.01.004
    Scenario: @T.4200.01.004-testing user data
    #Creating the Data
        When I select Administration and select List
        When I select Sponsors
        When I select NewB in the Sponsors in data
        Then I delete the Sponsor data
        Then I clicked save button in Sponsors
        Then I clicked reload button for Sponsors