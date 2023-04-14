Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Reso" nav and click on "Skill Matrix"
    @create @700 @T.4412.11.121
    Scenario: @T.T.4412.11.121-testing user data
        When I select Rescource and Skill Matrix
        Then I select grid
        Then I select grid B
        Then I select grid C
        Then I select grid D
        Then I select Save button in the Matrix

        When I select Rescource and Skill Matrix
