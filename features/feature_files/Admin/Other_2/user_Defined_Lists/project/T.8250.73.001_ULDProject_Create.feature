Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.8250.73.001
    Scenario: @T.8250.73.001-testing user data
        When I select Administration and select List
        When I select User Defined Lists
        Then I select ULDProject

        When I select Add Button in the ULDProject
        Then I typed a new ULDProject Field 101
        When I clicked add button in Defined List Details
        Then I Re-type Project tes1
        Then I select save in the UDLD Project

        Then I clicked Reload button in ULD