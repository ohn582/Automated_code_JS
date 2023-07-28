Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @delete @227 @T.4559.93.563
    Scenario: @T.4559.93.563-testing user data
        #Creating the Data
        When I select Administration and select Financial Lists
        When I select Cost Item Categories
        When I select multiple Cost Item Categories datas
        Then I delete the Cost Item Categories data

        Then I clicked save button in Cost Item Categories
        Then I verify the Cost Item Categories by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Financial Lists
        When I select Cost Item Categories