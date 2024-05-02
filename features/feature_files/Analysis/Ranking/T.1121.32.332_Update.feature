Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "proj" nav and click on "Demand"
    @update @444 @T.1121.32.332
    Scenario: @T.1121.32.332-testing user data
        When I select Analysis and Ranking

        Then I re-type Analysis data A
        Then I re-type Analysis data B
        Then I re-type Analysis data C
        Then I re-type Analysis data D

        Then Select Save Analysis Button