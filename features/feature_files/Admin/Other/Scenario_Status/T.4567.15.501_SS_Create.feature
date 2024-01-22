Feature: Pdware Admin User Module
    Background:
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Administration" nav and click on "Other"

    @create @799 @T.4567.15.501
    Scenario: @T.4567.15.501-testing user data
        When I select Scenario Status
        Then I typed a new Scenario Status tes1
        Then I typed a new Scenario Status tes2
        Then I typed a new Scenario Status tes3

        Then I clicked save button in Scenario Status
        Then I verify the Scenario Status data by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Administration" nav and click on "Other"
        When I select Scenario Status