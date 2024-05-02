Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Assing" nav and click on "Labor"
    @delete @808 @T.2356.21.191
    Scenario: @T.T.2356.21.191-testing user data
        When I select Administration and Settings
        When I select Algorithum
        
        Then I delete my Algorithum Data for Assignment Allocation
        Then I delete my Algorithum Data for Assignment Allocation B
        Then I delete my Algorithum Data for Assignment Allocation C

        Then I select Save button
