Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.7707.07.012
    Scenario: @T.7707.07.012-testing user data
        When I select Administration and select PM Lists
        When I select Phases Milestones
        Then I Re-Typed a new Phases Milestones
        Then I Re-Typed a new Phases Milestones tes2
        Then I Re-Typed a new Phases Milestones tes3
        Then I clicked save button in Phases Milestones
        # Then I clicked reload button for Project Codes
