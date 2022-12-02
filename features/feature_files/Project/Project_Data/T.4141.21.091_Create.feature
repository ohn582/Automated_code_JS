Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Proj" nav and click on "Project Data"
    @create @668 @T.4141.21.091
    Scenario: @T.4141.21.091-testing user data
        When I select Project and Project Data
        When I select Project View and select Project Expanded-MR import

        Then I clicked add to create a new Project Data
        Then I type multiple project name

        Then I select save in the Project Data

        Then I clicked Reload button in Project Data