Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @774 @T.8330.33.501
    Scenario: @T.8330.33.501-testing user data
        When I select Administration and select Skills Resource Lists
        When I select Skills
        Then I typed a new Skills
        Then I typed a new Skills tes2
        Then I typed a new Skills tes3

        Then I clicked save button in Skills
        Then I verify the Skills by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Resource Lists
        When I select Skills