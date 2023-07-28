Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @delete @676 @T.2330.45.663
    Scenario: @T.2330.45.663-testing user data
        #Creating the Data
        When I select Administration and select Proficiencies Resource Lists
        When I select Proficiencies
        When I select multiple Proficiencies datas
        Then I delete the Proficiencies data
        Then I clicked save button in Proficiencies

        Then I clicked save button in Proficiencies
        Then I verify the Proficiencies by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select Proficiencies Resource Lists
        When I select Proficiencies