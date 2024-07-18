Feature: User Management Page

    Background:
        Given user navigates to the User Management page
    # @focus
    @US004-01
    Scenario: Add User
        When the user clicks on the Add User button
        Then a form of the user opens
        When the user a name and an email
        When the user clicks on add module
        Then a module part is added
        When the user chooses a module, location and role
        When the user clicks on the submit button
        # Then a user should be added
    
    @US004-02
    Scenario: Update User
        Given a user already exists
        When the user clicks on the update button
        When the user updates a user's location and role
        # Then the user should be updated

    @US004-03
    Scenario: Delete User
        Given a user already exists
        When the user clicks on the delete button
        # Then the user should be deleted