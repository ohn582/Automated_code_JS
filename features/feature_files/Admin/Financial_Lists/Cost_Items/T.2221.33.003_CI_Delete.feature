Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @delete @888 @T.2221.33.003
    Scenario: @T.2221.33.003-testing user data
        #Creating the Data
        When I select Administration and select Cost Items Resource Lists
        When I select Cost Items
        When I select multiple Cost Items datas
        Then I delete the Cost Items data
        Then I clicked save button in Cost Items
# Then I clicked Reload button in Cost Categories