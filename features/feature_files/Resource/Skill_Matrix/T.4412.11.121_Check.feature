Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Reso" nav and click on "Skill Matrix"
    @create @668 @T.4412.11.121
    Scenario: @T.T.4412.11.121-testing user data
        When I select Rescource and Skill Matrix
        # Then I select multiple grid
        Then I select multiple grid B
        Then I select multiple grid C
        Then I select multiple grid D
        # Then I select Save button in the Matrix
