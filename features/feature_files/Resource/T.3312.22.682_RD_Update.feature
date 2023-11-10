Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Reso" nav and click on "Resource Data"
    @create @668 @T.3312.22.682
    Scenario: @T.3312.22.682-testing user data
        When I select Rescource
        When I select data link
        Then I updated a new Data for Rescource Data A
        Then I updated a new Data for Rescource Data B
        Then I updated a new Data for Rescource Data C

        Then Select Save Button for Rescource
        Then I verify the Resource Data by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Rescource
        When I select Rescource
        When I select data link