Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @delete @645 @T.7110.25.003
    Scenario: @T.7110.25.003-testing user data
        When I select Administration and select Agile
        When I select Feature States
        When I select multiple Feature States in datas
        Then I delete the Feature States data

        Then I clicked save button in Feature States
        Then I verify the Feature States by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Agile
        When I select Feature States