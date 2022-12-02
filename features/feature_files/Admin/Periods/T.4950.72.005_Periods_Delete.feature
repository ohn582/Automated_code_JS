Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Periods"
    @create @668 @T.4950.72.001
    Scenario: @T.4950.72.001-testing user data
        When I select Administration and select Periods
        Then I select a random check boxes A
        Then I select a random check boxes B
        Then I Delete the period data
        Then I save the data in project data
        # Then I clicked reload Project


        # Then I retype a new name in the Views Details
