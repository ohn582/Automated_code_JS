Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Assing" nav and click on "Labor"
    @create @302 @T.1444.44.490
    Scenario: @T.1444.44.490-testing user data
        When I select Resource and Labor
        
        Then I Create Rescource Assignment Data for labor A
        Then I Create Rescource Assignment Data for labor B
        
        Then I select Save button for Labor Data
        Then I verify the Labor data by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Resource and Labor
        When I select Resource and Labor
