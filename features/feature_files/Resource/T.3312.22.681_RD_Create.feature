Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Reso" nav and click on "Resource Data"
    @create @668 @T.3312.22.681
    Scenario: @T.3312.22.681-testing user data
        When I select Rescource

        # # Creating Data
        When I select data link
        Then I create a new Data for Rescource Data A
        Then I create a new Data for Rescource Data B
        Then I create a new Data for Rescource Data C

        # When I select Skill Matrix
        # Then Select Save Button for Rescource Skill Matrix
        # When I select Rescource

        # Then Select Save Button for Rescource

        # creating Skill Matrix
        When I select Skill Matrix
        Then I create a new Data for Rescource Skill Matrix A
        Then I create a new Data for Rescource Skill Matrix B
        Then I create a new Data for Rescource Skill Matrix C

        Then Select Save Button for Rescource Skill Matrix

        # creating Capacity
        When I select Capacity
        Then I create a new Data for Capacity A
        Then I create a new Data for Capacity B
        Then I create a new Data for Capacity C

        Then Select Save Button for Rescource Capacity

        When I select Utilization

        Then I verify the Location by re-loging admin account

        # Then Select Save Button for Rescource
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Rescource
        When I select data link
        When I select Skill Matrix
        When I select Capacity