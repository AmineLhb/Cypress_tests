Feature: Vendor Page

    Background:
        Given user navigates to the Vendor page
    # @focus
    @US007-01
    Scenario: Navigate to the inventory
        Then the table should exist
        When the user clicks on the region bar
        Then the region dropdown is opened
        When the user clicks on the hospital bar
        Then the hospital dropdown is opened
        When the user clicks on the search bar
        Then the search dropdown is opened
    

    # @focus
    @US007-02
    Scenario: Visit the dashboard page
        When the user clicks on dashboard
        Then the dashboard page opens
    # #     Then the first tab is selected
    # #     When the user clicks on the second tab
    # #     Then the second tab is selected
    # #     Then the tab contains created, approved, pending and completed
    # #     Then a table should exist
    # #     When the user clicks on completed
    # #     Then a table is updated
        
    # # # @focus
    # # @@US006-04
    # # Scenario: Visit the dashboard page
    # #     When the user clicks on dashboard
    # #     Then the dashboard page opens
    # #     When the user clicks on the locations dropdown
    # #     Then the location dropdown is opened
    # #     When the user clicks on the average stock dropdown
    # #     Then the average stock dropdown is opened
    # #     When the user clicks on the expiry of reagents dropdown
    # #     Then the expiry of reagents dropdown is opened
    # #     When the user clicks on the average number of days of stocks dropdown
    # #     Then the average number of days of stocks dropdown is opened


    # # @focus  
    # @US006-05
    # Scenario: Visit the Tickets page
    #     When the user clicks on Tickets
    #     Then the tickets page opens
    
    # # @focus
    # @US006-06
    # Scenario: Visit the Transfer page
    #     When the user clicks on transfer
    #     Then the transfer page opens
    #     When the user clicks on the search bar
    #     Then the search dropdown is opened
    #     Then a table is shown
        

    # # @focus
    # @US006-07
    # Scenario: Visit the Inventory page of Medical Supply
    #     When the user clicks on inventory of medical supply
    #     Then the inventory is opened
    #     When the user hovers on the status dropdown
    #     Then the status dropdown is opened
    #     When the user clicks on the search bar
    #     Then the search dropdown is opened
    #     Then a new table is shown

    # # @focus
    # @US006-08
    # Scenario: Visit the Transfer page of Medical Supply
    #     When the user clicks on transfer of Medical Supply
    #     Then the transfer page of Medical Supply opens
    #     When the user clicks on the search bar
    #     Then the search dropdown is opened
    #     Then a table is shown
        
    
    # # @focus
    # @US006-09
    # Scenario: Visit the Inventory page of Labs
    #     When the user clicks on inventory of Labs
    #     Then the inventory is opened
    #     When the user hovers on the status dropdown
    #     Then the status dropdown is opened
    #     When the user clicks on the search bar
    #     Then the search dropdown is opened
    #     Then a new table is shown

    # # @focus
    # @US006-10
    # Scenario: Visit the Transfer page of Labs
    #     When the user clicks on transfer of Labs
    #     Then the transfer page opens
    #     When the user clicks on the search bar
    #     Then the search dropdown is opened
    #     Then a table is shown
        