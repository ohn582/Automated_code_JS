Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.7090.30.001
    Scenario: @T.7090.30.001-testing user data
        When I select Administration and select Feature Types Agile Lists
        When I select Feature Types
        When I select Add Button in the Feature Types
        Then I typed a new Feature Types tes1
        When I select Add Button in the Feature Types
        Then I typed a new Feature Types tes2
        When I select Add Button in the Feature Types
        Then I typed a new Feature Types tes3
        Then I clicked save button in Feature Types
        # Then I clicked Reload button in Feature Types