Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "proj" nav and click on "Demand"
    @create @112 @T.3343.55.221
    Scenario: @T.3343.55.221-testing user data
        When I select Assignment
        When I select Financial

        Then I Create Rescource Assignment Data for Financial A
        Then I Create Rescource Assignment Data for Financial B

        Then Select Save Button for Financial
        Then I verify the Location by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Assignment
        When I select Financial