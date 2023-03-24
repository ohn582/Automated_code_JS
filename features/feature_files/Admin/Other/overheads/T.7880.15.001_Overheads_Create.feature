Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.7880.15.001
    Scenario: @T.7880.15.001-testing user data
        When I select Administration and Overheads List
        When I select Overheads
        When I select Add Button in the Overheads
        Then I typed a new Overheads tes1
        When I select Add Button in the Overheads
        Then I typed a new Overheads tes2
        When I select Add Button in the Overheads
        Then I typed a new Overheads tes3
        Then I clicked save button in Overheads
        Then I clicked Reload button in Overheads