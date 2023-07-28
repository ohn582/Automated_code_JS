Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @delete @567 @T.7090.30.003
    Scenario: @T.7090.30.003-testing user data
        When I select Administration and select Agile link
        When I select Feature Types
        When I select Feature Types in the checkbox data
        Then I delete the Feature Types data

        Then I clicked save button in Feature Types
        Then I verify the Feature Types by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Agile link
        When I select Feature Types