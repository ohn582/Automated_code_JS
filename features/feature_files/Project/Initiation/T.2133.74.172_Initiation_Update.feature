Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Proj" nav and click on "Demand"
    @update @112 @T.4212.44.772
    Scenario: @T.4212.44.772-testing user data
        When I select Project and Initiation

        Then I Re-Type Diffrent Initiation Name A
        Then I Re-Type Diffrent Initiation Name B
        Then I Re-Type Diffrent Initiation Name C

        Then I verify the Project Initiation by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Project and Initiation

