Feature: MenuBar

    Background:
        Given user navigates to the dashboard page

    @US002-01
    Scenario: Navigation to each page in the MenuBar TMS
        When user clicks on 'SLA Tickets'
        Then the user navigates to the SLA tickets page
        When user clicks on 'Dashboard'
        Then the user navigates to the dashboard page
        When user clicks on 'Financial Penalties'
        Then the user navigates to the financial penalties page
        When user clicks on 'Performance Overview'
        Then the user navigates to the performance overview page
        When user clicks on 'Vehicle Tracking'
        Then the user navigates to the vehicle tracking page
        When user clicks on 'Trip Log'
        Then the user navigates to the trip log page
        When user clicks on 'Budget Overview'
        Then the user navigates to the budget overview page
        When user clicks on 'AWB Status'
        Then the user navigates to the AWB Status page
        When user clicks on 'AWB Status Dashboard'
        Then the user navigates to the AWB Status Dashboard page
        When user clicks on 'AWB Tickets'
        Then the user navigates to the AWB Tickets page
        When user clicks on 'Trip Comparison'
        Then the user navigates to the Trip Comparison page
        When user clicks on 'Covid Reports'
        Then the user navigates to the Covid Reports page
    
    # @focus
    @US002-02
    Scenario: Navigation to each page in the MenuBar Trip Planner
        When user clicks on 'POC's POD's'
        Then the user navigates to the POC's POD's page
        When user clicks on 'Master data Schedule'
        Then the user navigates to the Master data Schedule page
        When user clicks on 'Scheduled Daily Trips'
        Then the user navigates to the Scheduled Daily Trips page
        When user clicks on 'Trip Management Dashboard'
        Then the user navigates to the Trip Management Dashboard page
        

    # @US002-03
    # Scenario: Navigation to each page in the MenuBar PowerBi
    #     When user clicks on 'POC's POD's'
    #     Then the user navigates to the POC's POD's page
    #     When user clicks on 'Master data Schedule'
    #     Then the user navigates to the Master data Schedule page
    #     When user clicks on 'Scheduled Daily Trips'
    #     Then the user navigates to the Scheduled Daily Trips page
    #     When user clicks on 'Trip Management Dashboard'
    #     Then the user navigates to the Trip Management Dashboard page