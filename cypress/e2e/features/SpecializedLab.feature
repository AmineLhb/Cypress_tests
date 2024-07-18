Feature: SpecializedLab Page

    Background:
        Given user navigates to the SpecializedLab page
    # @focus
    @US005-01
    Scenario: Navigate in the tabs
        When the user clicks on the first tab
        Then the first tab is selected
        When the user clicks on the second tab
        Then the second tab is selected
        When the user hovers on the type dropdown
        Then the type dropdown is opened
        When the user hovers on the status dropdown
        Then the status dropdown is opened
        When the user hovers on the update frequency dropdown
        Then the update frequency dropdown is opened
        Then the table should exist
    
    # @focus
    @@US005-02
    Scenario: Clicks on edit button
        When the user clicks on the edit button
        Then a modal opens
    
    # @focus
    @@US005-03
    Scenario: Visit the purchase order page
        When the user clicks on purchase order
        Then the purchase order page opens
        Then the first tab is selected
        When the user clicks on the second tab
        Then the second tab is selected
        Then the tab contains created, approved, pending and completed
        Then a table should exist
        When the user clicks on completed
        Then a table is updated
        
    # @focus
    @@US005-04
    Scenario: Visit the dashboard page
        When the user clicks on dashboard
        Then the dashboard page opens
        When the user clicks on the locations dropdown
        Then the location dropdown is opened
        When the user clicks on the average stock dropdown
        Then the average stock dropdown is opened
        When the user clicks on the expiry of reagents dropdown
        Then the expiry of reagents dropdown is opened
        When the user clicks on the average number of days of stocks dropdown
        Then the average number of days of stocks dropdown is opened
        
    # @focus
    @@US005-05
    Scenario: Visit the Survey page
        When the user clicks on survey
        Then the survey page opens


    # @focus  
    @@US005-06
    Scenario: Visit the Tickets page
        When the user clicks on Tickets
        Then the tickets page opens