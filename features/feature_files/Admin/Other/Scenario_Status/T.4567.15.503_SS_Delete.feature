Feature: Pdware Admin User Module
    Background:
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Administration" nav and click on "Other"

    @delete @799 @T.4567.15.503
    Scenario: @T.4567.15.503-testing user data
        When I select Scenario Status
        When I select multiple Scenario Status datas
        Then I delete the Scenario Status data

        Then I clicked save button in Scenario Status
        Then I verify the Scenario Status data by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Administration" nav and click on "Other"
        When I select Scenario Status