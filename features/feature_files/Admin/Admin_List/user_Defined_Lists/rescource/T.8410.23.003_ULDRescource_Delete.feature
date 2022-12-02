Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        # Then I should be able to successfully login and validate user "Richman, Mike"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.8410.23.003
    Scenario: @T.8410.23.003-testing user data
        When I select Administration and select List
        When I select User Defined Lists
        Then I select ULDRescource

        When I Select the new ULDRescource Field 33



        Then Clicked Rescource A on the check box List


        Then I select the delete button in rescource data


        Then I select save in the UDLD Rescource

        Then I clicked Reload button in ULD Rescource