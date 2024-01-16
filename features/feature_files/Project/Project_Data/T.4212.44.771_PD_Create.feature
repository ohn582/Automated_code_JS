Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "proj" nav and click on "Demand"
    @create @112 @T.4212.44.771
    Scenario: @T.4212.44.771-testing user data
        When I select Project and Project Data
        When I select Project Grid Mode

        Then I create a Project Data
        Then I create a Date

        # When I Select Project Demand
        # Then I create a Project Demand Data

        When I select Project Data
        Then I create a Project Data B
        Then I create a Date B
        
        # When I Select Project Demand
        # Then I create a Project Demand Data B

        Then Select Save Button for Project Data
        Then I verify the Project Data by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Project and Project Data
        When I select Project and Project Data

