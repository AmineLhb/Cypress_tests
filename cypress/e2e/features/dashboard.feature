Feature: Dashboard Page

    Background:
        Given user navigates to the dashboard page

    @US002-01
    Scenario: Transport Providers Dropdown
        When the user clicks on transport providers dropdown
        Then list of transport providers opens
        When user clicks on 'All Transport Providers'
        Then 'All Transport Providers' is selected from the dropdown
        When user clicks on 'SMSA'
        Then 'SMSA' is selected from the dropdown
        When user clicks on 'MTC'
        Then 'MTC' is selected from the dropdown
        When user clicks on 'SPL'
        Then 'SPL' is selected from the dropdown

    # @focus
    @US002-02
    Scenario: Categories Dropdown
        When the user clicks on categories dropdown
        Then list of categories opens
        When user clicks on 'All Categories'
        Then 'All Categories' is selected from the dropdown
        When user clicks on 'Non-Moh'
        Then 'Non-Moh' is selected from the dropdown
        When user clicks on 'Moh'
        Then 'Moh' is selected from the dropdown
        When user clicks on 'Private'
        Then 'Private' is selected from the dropdown

    # @focus
    @US002-03
    Scenario: SLA Dropdown
        When the user clicks on SLA dropdown
        Then list of SLA opens
        When user clicks on 'All SLA'
        Then 'All SLA' is selected from the dropdown
        When user clicks on 'SLA - 2 hr'
        Then 'SLA - 2 hr' is selected from the dropdown
        When user clicks on 'SLA - 6 hr'
        Then 'SLA - 6 hr' is selected from the dropdown
        When user clicks on 'SLA - 10 hr'
        Then 'SLA - 10 hr' is selected from the dropdown
        When user clicks on 'SLA - 14 hr'
        Then 'SLA - 14 hr' is selected from the dropdown
    
    # @focus
    @US002-04
    Scenario: Regions Dropdown
        When the user clicks on regions dropdown
        Then list of regions opens
        When user clicks on 'All Regions'
        Then 'All Regions' is selected from the dropdown
        When user clicks on 'Abha'
        Then 'Abha' is selected from the dropdown
   

    # @focus
    @US002-05
    Scenario: Info Icons
        When the user hovers on the first info icon
        Then the first banner of information appears
        When the user hovers on the second info icon
        Then the second banner of information appears

    # @focus
    @US002-05
    Scenario: Full Screen
        When the user hovers on the full screen icon
        Then the banner of full screen appears
        When the user clicks on the full screen icon
        Then the dashboard page becomes wide
        When the user clicks on the full screen icon again
        Then the dashboard page becomes tight again

    # @focus
    @US002-06
    Scenario: Date Dropdown 
        When the user clicks on the date dropdown
        Then a calendar popup opens
        When user clicks on a particular start date
        Then the start date gets selected
        When user clicks on a particular end date
        Then the end date gets selected
        Then the calendar popup closes

