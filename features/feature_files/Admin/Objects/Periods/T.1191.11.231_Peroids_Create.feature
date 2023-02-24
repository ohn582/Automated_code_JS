Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Periods"
    @create @668 @T.1191.11.231
    Scenario: @T.1191.11.231-testing user data
        When I select Administration and select Objects and select Periods 

        Then I type a new name in the Periods Data
        
        Then I save the data
        Then I clicked reload Project OBS
