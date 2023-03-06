Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.4600.01.032
    Scenario: @T.4600.01.032-testing user data
        When I select Administration and select PS project Lists
        When I select Project States
        When I select Project States in data
        Then I delete the Project States data
        Then I clicked save button in Project States
        # Then I clicked reload button for Project States