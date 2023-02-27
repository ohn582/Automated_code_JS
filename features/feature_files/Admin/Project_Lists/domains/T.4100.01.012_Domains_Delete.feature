Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.4100.01.012
    Scenario: @T.4100.01.012-testing user data
    #Creating the Data
        When I select Administration and select List
        When I select Domains
        When I select tes1 in the Domains in data
        Then I delete the Domain data
        Then I clicked save button in Domains
        Then I clicked reload button for Domains
