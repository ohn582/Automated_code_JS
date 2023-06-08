Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @update @567 @T.7090.30.002
    Scenario: @T.7090.30.002-testing user data
        When I select Administration and select Agile link
        When I select Feature Types
        Then I Re-Typed a new Feature Types
        Then I Re-Typed a new Feature Types tes2
        Then I Re-Typed a new Feature Types tes3
        Then I clicked save button in Feature Types
        # Then I clicked Reload button in Feature Types