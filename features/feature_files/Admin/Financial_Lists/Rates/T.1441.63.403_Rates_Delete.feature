Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.4559.93.563
    Scenario: @T.4559.93.563-testing user data
        #Creating the Data
        When I select Administration and select Rates Resource Lists
        When I select Rates
        When I select Load Rates from reload button
        When I select multiple Rates datas
        Then I delete the Rates data
        Then I clicked save button in Rates
# Then I clicked Reload button in Cost Categories