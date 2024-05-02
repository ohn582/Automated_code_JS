Feature: Pdware Admin User Module
    Background:
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Administration" nav and click on "Other"

    @create @443 @T.6690.50.001
    Scenario: @T.6690.50.001-testing user data
        When I select Baseline Types
        Then I typed a new Baseline Types tes1
        Then I typed a new Baseline Types tes2
        Then I typed a new Baseline Types tes3

        Then I clicked save button in Baseline Types
        Then I verify the Baseline Types data by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Administration" nav and click on "Other"
        When I select Baseline Types