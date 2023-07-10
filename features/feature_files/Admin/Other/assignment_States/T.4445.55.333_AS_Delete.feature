Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @delete @676 @T.4445.55.333
    Scenario: @T.4445.55.333-testing user data
        When I select Administration and Assignment States List
        When I select Assignment States
        When I select multiple Assignment States datas
        Then I delete the Assignment States data

        Then I clicked save button in Assignment States
        Then I verify the Assignment States data by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and Assignment States List
        When I select Assignment States