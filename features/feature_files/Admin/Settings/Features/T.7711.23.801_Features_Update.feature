Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @272 @T.7711.23.801
    Scenario: @T.7711.23.801-testing user data
        When I select Administration and Features List
        When I select Features

        Then I selected a diffrent color
        Then I change the Session Timeout

        Then I clicked Save button in Features