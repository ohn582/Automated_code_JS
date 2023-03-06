Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.2330.45.662
    Scenario: @T.2330.45.662-testing user data
        When I select Administration and select Proficiencies Resource Lists
        When I select Proficiencies
        When I Re-Typed a new Proficiencies
        Then I Re-Typed a new Proficiencies tes2
        Then I Re-Typed a new Proficiencies tes3
        Then I clicked save button in Proficiencies
