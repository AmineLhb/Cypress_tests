Feature: Inventory_Control_Survey Page

    Background:
        Given user navigates to the Inventory_Control_Survey page

    # @focus
    @US009-01
    Scenario: Navigate to the teams
        Then a table is shown
        When the user clicks on the english_arabic button
        Then the language changes 
        When the user clicks on the assign button
        Then a modal opens
        When the user clicks on the create team button
        Then another modal opens
        
        
    
    # @focus
    @US009-02
    Scenario: User navigates to the User Management page
        When the user clicks on user management
        Then the user management page is opened
        # @focus
        Scenario: Add User
            When the user clicks on user management
            When the user clicks on the Add User button
            Then a form of the user opens
            When the user a name and an email
            When the user clicks on add module
            Then a module part is added
            When the user chooses a module, location and role
            When the user clicks on the submit button
        # @focus
        Scenario: Update User
            When the user clicks on user management
            Given a user already exists
            When the user clicks on the update button
            When the user updates a user's location and role
        # @focus
        Scenario: Delete User
            When the user clicks on user management
            Given a user already exists
            When the user clicks on the delete button

    # @focus
    @US009-03
    Scenario: User navigates to the Followup page
        When the user clicks on Followup
        Then the Followup page is opened
        Then a table should exist
        When the user clicks on the english_arabic button
        Then the language changes to arabic
        When the user clicks on the second tab
        Then the second tab is selected
        Then the table changes

    # @focus
    @US009-04
    Scenario: User navigates to the Delegate page
        When the user clicks on Delegate
        Then the Delegate page is opened
        Then table should exist
        When the user clicks on the english_arabic button
        Then the language changes from english to arabic
        When the user clicks on the second tab
        Then the second tab is selected
        When the user clicks on the request delegate button
        Then a modal opens


    # @focus
    @US009-05
    Scenario: User navigates to the Survey page
        When the user clicks on Survey
        Then the Survey page is opened
        When the user clicks on the remind button
        Then a box opens
        Then a new table should exist
        When the user clicks on the english_arabic button
        Then the language switches from english to arabic
        When the user clicks on the second tab of the survey page
        Then the second tab of the survey page is selected
        When the user clicks on the third tab of the survey page
        Then the third tab of the survey page is selected
        
    @focus
    @US009-06
    Scenario: User navigates to the Survey Search page
        When the user clicks on Survey Search
        Then the Survey Search page is opened
        When the user clicks on the search bar
        Then the search dropdown is opened
        When the user clicks on the english_arabic button
        Then the language switches