Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.2330.45.661
    Scenario: @T.2330.45.661-testing user data
        When I select Administration and select Proficiencies Resource Lists
        When I select Proficiencies
        When I select Add Button in the Proficiencies
        Then I typed a new Proficiencies
        When I select Add Button in the Proficiencies
        Then I typed a new Proficiencies tes2
        When I select Add Button in the Proficiencies
        Then I typed a new Proficiencies tes3

        Then I clicked save button in Proficiencies