Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @delete @909 @T.7707.07.013
    Scenario: @T.7707.07.013-testing user data
    #Creating the Data
        When I select Administration and select PM Lists
        When I select Phases Milestones
        
        When I select multiple Phases Milestones in data
        Then I delete the Phases Milestones data

        Then I clicked save button in Phases Milestones
        Then I verify the Phases Milestones by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select PM Lists
        When I select Phases Milestones
