Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.3100.01.019
    Scenario: @T.3100.01.019-testing user data
    #Creating the Data
        When I select Administration and select List
        When I select Partitions
        When I select Add Button in the Partitions
        Then I typed a new partition tes1
        When I select Add Button in the Partitions
        Then I typed a new partition tes2
        When I select Add Button in the Partitions
        Then I typed a new partition tes3
        Then I clicked save button in partition
        Then I clicked reload button for Partition
