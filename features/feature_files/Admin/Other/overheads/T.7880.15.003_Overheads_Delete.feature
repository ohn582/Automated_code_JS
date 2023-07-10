Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @delete @555 @T.7880.15.003
    Scenario: @T.7880.15.003-testing user data
        When I select Administration and Overheads List
        When I select Overheads
        When I select multiple Overheads datas
        Then I delete the Overheads data

        Then I clicked save button in Overheads
        Then I verify the Overheads data by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and Overheads List
        When I select Overheads