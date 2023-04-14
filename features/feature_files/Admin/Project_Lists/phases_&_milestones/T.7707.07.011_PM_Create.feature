Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @create @909 @T.7707.07.011
    Scenario: @T.7707.07.011-testing user data
    #Creating the Data
        When I select Administration and select PM Lists
        When I select Phases Milestones
        When I select Add Button in the Phases Milestones
        Then I typed a new Phases Milestones tes1
        When I select Add Button in the Phases Milestones
        Then I typed a new Phases Milestones tes2
        When I select Add Button in the Phases Milestones
        Then I typed a new Phases Milestones tes3
        Then I clicked save button in Phases Milestones
        # Then I clicked reload button for Phases Milestones
