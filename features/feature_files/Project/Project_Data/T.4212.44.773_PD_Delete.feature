Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Proj" nav and click on "Demand"
    @delete @668 @T.4212.44.773
    Scenario: @T.4212.44.773-testing user data
        When I select Project and Project Data

        When I select Project Check Box UPDATE B
        Then I select Project Delete Button

        When I select Project Check Box UPDATE C
        Then I select Project Delete Button

        Then Select Save Button
        Then I select refreshed button

