Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Users & Rights"
    @create @238 @T.4204.99.983
    Scenario: @T.4204.99.983-testing user data
        When I select Administration and select Users & Rights and select Users

        Then I Create a new User Data
        Then I Save Users Data

        Then I logout of the account 


        # When I login with the credentials : user "Admin_test_1" and "zhti8d4R_"