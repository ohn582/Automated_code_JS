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
        Then I create a new Data for Rescource Data
        When I clicked add to create a new Rescource Assignments

        # Then I clicked add to create a new Rescource Assignments
