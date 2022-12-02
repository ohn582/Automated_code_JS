Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.7215.13.003
    Scenario: @T.7215.13.003-testing user data
        When I select Administration and select List
        When I select User Defined Lists
        Then I select ULDAssignment
        # When I select Add Button in the ULDAssignment
        Then I select ULDAssignment Field 5

        Then I selected the delete button in the Assignment

        # Then I Re-type Assignment tes1
        Then I select save in the UDLD Assignment
        Then I clicked Reload button in ULD