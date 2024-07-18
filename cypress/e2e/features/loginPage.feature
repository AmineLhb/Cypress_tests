Feature: Login Page

    Background:
        Given user navigates to the login page

    # @focus
    @US001-01
    Scenario: Login Page-Valid
        When the user enters correct credentials
        When click the submit button valid
        Then the user should be allowed to login

    @US001-02
    Scenario: Login Page-Invalid-Username
        When the user enters wrong username
        When click the submit button
        Then the user should not be allowed to login
        Then a popup invalid username message appears
    
    @US001-03
    Scenario: Login Page-Invalid-Password
        When the user enters wrong password
        When click the submit button
        Then the user should not be allowed to login
        Then a popup invalid password message appears
   
    @US001-04
    Scenario: Login Page-Empty-Username
        When the user lets username field empty
        When click the submit button
        Then the user should not be allowed to login
        Then a username gets invalid error

    @US001-05
    Scenario: Login Page-Empty-Password
        When the user lets password field empty
        When click the submit button
        Then the user should not be allowed to login
        Then a password gets invalid error
    
    @US001-06
    Scenario: Login Page-Empty-Fields
        When the user lets fields empty
        When click the submit button
        Then the user should not be allowed to login
        Then an invalid error shows

    @US001-07 
    # @focus
    Scenario: Login Page-Forgot-Password
        When the user clicks forgot password button
        Then the user navigates to forgot password page
        When the user enters wrong email
        Then click the forgot password submit button
        Then a popup email not registered message appears
        When the user leaves the email field empty
        Then click the forgot password submit button
        Then an error message enter an email appears

    @US001-08 
    # @focus
    Scenario: Logout
        When the user enters correct credentials
        When click the submit button valid
        When the user clicks logout button
        When the user clicks Yes button
        Then the user logs out