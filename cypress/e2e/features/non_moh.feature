Feature: Non_Moh Page

    Background:
        Given user navigates to the Non_Moh page

    # @focus
    @US008-01
    Scenario: Navigate to the purchase
        When the user clicks on the second tab
        Then the second tab is selected
        When the user clicks on the select brand dropdown
        Then the select brand dropdown is opened
        Then a table is shown
        
    
    # @focus
    @US008-02
    Scenario: Navigate to the inventory page
        When the user clicks on inventory
        Then the inventory is opened
        When the user clicks on the second tab
        Then the second tab is selected
        When the user hovers on the status dropdown
        Then the status dropdown is opened
        Then a table should exist
        When the user clicks on the edit button
        Then a modal opens
        
    
    # @focus
    @US008-03
    Scenario: Navigate to the nupco inventory page
        When the user clicks on nupco inventory
        Then the nupco inventory is opened
        Then a nupco table should exist
        When the user clicks on the edit button
        Then a modal opens



    # @focus
    @US006-04
    Scenario: Visit the Lab Status page
        When the user clicks on lab status
        Then the lab status page opens
        Then the Lab Capacity form field should exist
        Then the Lab Turn Around Time form field should exist
        Then the Manpower form field should exist
        Then the Lab Operational Hours form field should exist
        Then the Extraction form field should exist
        Then the PCR form field should exist
        When the user clicks on add field
        Then another field is added 
        

    # @focus
    @US006-05
    Scenario: Visit the dashboard page
        When the user clicks on dashboard
        Then the dashboard page opens
        When the user clicks on the locations dropdown
        Then the location dropdown is opened
        When the user clicks on the expiry of reagents dropdown
        Then the expiry of reagents dropdown is opened
        When the user clicks on the date dropdown
        Then a calendar popup opens
        When user clicks on a particular start date
        Then the start date gets selected
        When user clicks on a particular end date
        Then the end date gets selected
        Then the calendar popup closes
        When the user clicks on the upload file button
        Then the upload file modal is opened


    # @focus  
    @US006-06
    Scenario: Visit the Tickets page
        When the user clicks on Tickets
        Then the tickets page opens
    
   