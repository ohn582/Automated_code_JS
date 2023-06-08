Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @update @113 @T.4600.01.031
    Scenario: @T.4600.01.031-testing user data
    #Creating the Data
        When I select Administration and select Project States Lists
        When I select Project States
        Then I Re-Typed a Project States tes1
        Then I Re-Typed a Project States tes2
        Then I Re-Typed a Project States tes3
        Then I clicked save button in Project States
        # Then I clicked reload button for Project States
