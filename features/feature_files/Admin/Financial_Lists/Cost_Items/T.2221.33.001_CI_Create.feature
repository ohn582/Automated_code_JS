Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @888 @T.2221.33.001
    Scenario: @T.2221.33.001-testing user data
        When I select Administration and select Cost Items Resource Lists
        When I select Cost Items
        When I select Add Button in the Cost Items
        Then I typed a new Cost Items
        When I select Add Button in the Cost Items
        Then I typed a new Cost Items tes2
        When I select Add Button in the Cost Items
        Then I typed a new Cost Items tes3

        Then I clicked save button in Cost Items
# Then I clicked Reload button in Cost Categories