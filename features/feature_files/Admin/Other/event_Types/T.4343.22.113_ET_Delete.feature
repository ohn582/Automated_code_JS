Feature: Pdware Admin User Module
    Background:
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Administration" nav and click on "Other"

    @delete @400 @T.4343.22.113
    Scenario: @T.4343.22.113-testing user data
        When I select Event Types
        When I select multiple Event Types datas
        Then I delete the Event Types data

        Then I clicked save button in Event Types
        Then I verify the Event Types data by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Administration" nav and click on "Other"
        When I select Event Types