Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Reso" nav and click on "Skill Matrix"
    @update @646 @T.3552.12.881
    Scenario: @T.T.4412.11.121-testing user data
        When I select Resource and Capacity
        Then I select capacity grid
        Then I select capacity grid B
        Then I select capacity grid C
        Then I select capacity grid D

        Then I select Save button in the Capacity Nav
