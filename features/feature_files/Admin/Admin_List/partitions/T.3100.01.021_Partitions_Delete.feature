Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.3100.01.021
    Scenario: @T.3100.01.021-testing user data
    #Creating the Data
        When I select Administration and select List
        When I select Partitions
        When I select tes3 in the Partitions in data
        Then I delete the Partitions data
        Then I clicked save button in partition
        Then I clicked reload button for Partition
