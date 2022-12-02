Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Proj" nav and click on "Demand"
    @create @668 @T.2347.11.101
    Scenario: @T.T.2347.11.101-testing user data
        When I select Project and Demand
        When I select Project View and select Project Demand Analysis

        Then I clicked the Demand Grid Value dropdown
        # Then I clicked Project Demand Analysis
