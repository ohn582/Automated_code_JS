Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @279 @T.6665.79.321
    Scenario: @T.6665.79.321-testing user data
        When I select Administration and User Defined Lists
        When I select User Defined Lists

        Then I create a new ULD name

        Then I typed a new User Defined Lists tes1
        Then I typed a new User Defined Lists tes2
        Then I typed a new User Defined Lists tes3
     
        Then I select save in the UDLD Team
        Then I verify the Scenario Status data by re-loging admin account

        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I select Administration and Scenario Status List
        When I select Scenario Status