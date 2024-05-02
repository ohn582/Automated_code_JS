Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @989 @T.4500.01.001
    Scenario: @T.4500.01.001-testing user data
        When I select Administration and Categories Project List
        When I select Categories
        Then I typed a new Categories
        Then I typed a new Categories tes2
        Then I typed a new Categories tes3

        Then I clicked save button in Categories
        Then I verify the Categories data by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and Categories Project List