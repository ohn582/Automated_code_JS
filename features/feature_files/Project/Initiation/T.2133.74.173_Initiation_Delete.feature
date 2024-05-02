Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Proj" nav and click on "Demand"
    @delete @112 @T.2133.74.173
    Scenario: @T.2133.74.173-testing user data
        When I select Project and Initiation

        Then I Delete Initiation Data A
        Then I Delete Initiation Data B

        Then I verify the Project Initiation by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Project and Initiation

