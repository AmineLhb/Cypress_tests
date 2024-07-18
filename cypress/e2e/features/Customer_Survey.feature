Feature: Customer Survey Page

    Background:
        Given user navigates to the Customer Survey page
    # @focus
    @US010-01
    Scenario: Navigate to the satisfaction survey
        When the user clicks on satisfaction survey
        Then the satisfaction survey page is opened
        # Then the table should exist
        # When the user clicks on the region bar
        # Then the region dropdown is opened
        # When the user clicks on the hospital bar
        # Then the hospital dropdown is opened
        # When the user clicks on the search bar
        # Then the search dropdown is opened
    

    @focus
    @US010-02
    Scenario: Visit the dashboard page
        When the user clicks on dashboard
        Then the dashboard page opens
        When the user clicks on the locations dropdown
        Then the location dropdown is opened
        When the user clicks on the labtypes dropdown
        Then the labtypes dropdown is opened
        When the user clicks on the date dropdown
        Then a calendar popup opens
        When user clicks on a particular start date
        Then the start date gets selected
        When user clicks on a particular end date
        Then the end date gets selected
        Then the calendar popup closes
    # #     Then the first tab is selected
    # #     When the user clicks on the second tab
    # #     Then the second tab is selected
    # #     Then the tab contains created, approved, pending and completed
    # #     Then a table should exist
    # #     When the user clicks on completed
    # #     Then a table is updated
        

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
        