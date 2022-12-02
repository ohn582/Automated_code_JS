Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Proj" nav and click on "Project Data"
    @create @668 @T.5077.11.101
    Scenario: @T.T.5077.11.101-testing user data
        When I select Project and Assignments
        When I select Filter Button in project Assignments
        When I select Project View and select Forecast Simple

        #Data 1
        Then I clicked add to create a new Project Resource Assignments
        Then I clicked add to create a new Project Resource Assignments B
        Then I clicked add to create a new Project Required Skill C
        Then I clicked add to create a new Project Search Field D
        Then I clicked add to create a new Project Resource Name Select E
        Then Save Project Rescource Assignment


        # #Data 2
        # Then I clicked add to create a new Project Resource Assignments
        # Then I clicked add to create a new Project Resource Assignments F
        # Then I clicked add to create a new Project Required Skill G
        # Then I clicked add to create a new Project Search Field H
        # Then I clicked add to create a new Project Resource Name Select I
        # Then Save Project Rescource Assignment