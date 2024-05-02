Feature: Pdware Admin User Module
    Background:
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Administration" nav and click on "Other"

    @create @400 @T.4343.22.111
    Scenario: @T.4343.22.111-testing user data
        When I select Event Types
        Then I typed a new Event Types tes1
        Then I typed a new Event Types tes2
        Then I typed a new Event Types tes3

        Then I clicked save button in Event Types
        Then I verify the Event Types data by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Administration" nav and click on "Other"
        When I select Event Types