Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @676 @T.4445.55.331
    Scenario: @T.4445.55.331-testing user data
        When I select Administration and Assignment States List
        When I select Assignment States
        Then I typed a new Assignment States tes1
        Then I typed a new Assignment States tes2
        Then I typed a new Assignment States tes3
        
        Then I clicked save button in Assignment States
        Then I verify the Assignment States data by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and Assignment States List
        When I select Assignment States