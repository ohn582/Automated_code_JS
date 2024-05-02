Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "proj" nav and click on "Demand"
    @create @444 @T.1121.32.331
    Scenario: @T.1121.32.331-testing user data
        When I select Analysis and Ranking

        Then I type multiple Analysis data A
        Then I type multiple Analysis data B
        Then I type multiple Analysis data C
        Then I type multiple Analysis data D

        Then Select Save Analysis Button