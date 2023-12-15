Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Assing" nav and click on "Labor"
    @delete @302 @T.3343.55.223
    Scenario: @T.3343.55.223-testing user data
        When I select Assignment
        When I select Financial
        
        Then I delete Financial Data A
        Then I delete Financial Data B
        Then I delete Financial Data C
        
        Then Select Save Button for Financial
        Then I verify the Location by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Assignment
        When I select Financial
