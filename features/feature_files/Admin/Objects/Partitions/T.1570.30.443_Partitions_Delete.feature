Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Assing" nav and click on "Labor"
    @update @668 @T.1570.30.442
    Scenario: @T.1570.30.442-testing user data
        When I select Administration and select Objects
        When I select Object Partitions
        
        When I select multiple datas for partition
        Then I delete the Partitions data

        Then I select save button
        Then I select reload button

        # Then I select Save button
