Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Proj" nav and click on "Demand"
    @create @668 @T.4212.44.771
    Scenario: @T.4212.44.771-testing user data
        When I select Project and Project Data

        When I select Project Add Button
        Then I create a Project Data
        Then I Click Apply
        Then I type the Project Name A
        Then I select Add & Close
        Then I type multiple datas in Project Name A

        When I select Project Add Button
        Then I create a Project Data B
        Then I Click Apply
        Then I type the Project Name B
        Then I select Add & Close
        Then I type multiple datas in Project Name B

        When I select Project Add Button
        Then I create a Project Data C
        Then I Click Apply
        Then I type the Project Name C
        Then I select Add & Close
        Then I type multiple datas in Project Name C

        Then Select Save Button
        Then Select Reload Button for project data

