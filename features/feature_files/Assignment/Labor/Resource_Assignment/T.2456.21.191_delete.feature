Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Assing" nav and click on "Labor"
    @delete @302 @T.2356.21.191
    Scenario: @T.2356.21.191-testing user data
        When I select Resource and Labor
        
        Then I Updated my Rescource Assignment Data for labor
        Then I Updated my Rescource Assignment Data for labor B
        Then I Updated my Rescource Assignment Data for labor C

        Then I select Save button under labor
