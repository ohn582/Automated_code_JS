Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @create @677 @T.7888.27.561
    Scenario: @T.7888.27.561-testing user data
    #Creating the Data
        When I select Administration and select RF Lists
        When I select Rank Fields
        Then I typed a new Rank Fields tes1
        Then I typed a new Rank Fields tes2
        Then I typed a new Rank Fields tes3

        Then I clicked save button in Rank Fields
        Then I verify the Rank Fields by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and select RF Lists
        When I select Rank Fields
