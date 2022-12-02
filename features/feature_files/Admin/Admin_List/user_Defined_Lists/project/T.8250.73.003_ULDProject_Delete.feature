Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.8250.73.002
    Scenario: @T.8250.73.001-testing user data
        When I select Administration and select List
        When I select User Defined Lists
        When I select New List Project tes1 from Field 101 data

        Then I Delete the UDLD Project Data
        Then I select save in the UDLD Project

        Then I clicked Reload button in ULD