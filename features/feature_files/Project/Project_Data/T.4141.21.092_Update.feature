Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Proj" nav and click on "Project Data"
    @update @668 @T.4141.21.092
    Scenario: @T.4141.21.092-testing user data
        When I select Project and Project Data
        When I select Project View and select Project Expanded-MR import

        Then I slect multiple project to re-type the name

        Then I select save in the Project Data

        Then I clicked Reload button in Project Data