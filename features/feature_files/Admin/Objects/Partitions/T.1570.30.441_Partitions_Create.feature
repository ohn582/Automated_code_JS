Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Assing" nav and click on "Object"
    @create @111 @T.1570.30.441
    Scenario: @T.1570.30.441-testing user data
        When I select Administration and select Objects
        When I select Object Partitions
        
        Then I create a new data for partition A
        Then I create a new data for partition B
        Then I create a new data for partition C

        Then I select save button
        Then I verify the partition data by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Objects
        When I select Object Partitions

