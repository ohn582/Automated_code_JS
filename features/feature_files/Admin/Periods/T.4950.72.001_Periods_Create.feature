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
        When I select Add button in Periods Details
        Then I type a new Dates in the Periods Details A
        Then I type a new Dates in the Periods Details B
        When I select Add button in Periods Details
        Then I type a new Dates in the Periods Details C
        Then I type a new Dates in the Periods Details D
        When I select Add button in Periods Details
        Then I type a new Dates in the Periods Details E
        Then I type a new Dates in the Periods Details F
        Then I save the data in project data
        # Then I clicked reload Project


        # Then I retype a new name in the Views Details
