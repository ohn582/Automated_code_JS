Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Assing" nav and click on "Labor"
    @delete @111 @T.1570.30.443
    Scenario: @T.1570.30.443-testing user data
        When I select Administration and select Objects and select Periods 
        
        When I select multiple datas for partition
        Then I delete the Periods data

        Then I save the Periods data
        Then I verify the Periods data by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Objects and select Periods 

        # Then I select Save button
