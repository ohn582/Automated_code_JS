Feature: Pdware Admin User Module
    Background:
        # Given I visit the pdware r1test landing page
        Given I visit the pdware r1test landing page 'https://r1test.pdware.com/'
        When I login with the credentials : user "admin" and "zhti8d4R_"
        When I click over the "Admin" nav and click on "Lists"
    @create @668 @T.3100.01.020
    Scenario: @T.3100.01.020-testing user data
    #Creating the Data
        When I select Administration and select List
        When I select Partitions
        Then I Re-Typed a new partition tes2
        Then I Re-Typed a new partition tes1
        Then I clicked save button in partition
        Then I clicked reload button for Partition
