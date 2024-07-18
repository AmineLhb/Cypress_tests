Feature: Vehicle Tracking Page

    Background:
        Given user navigates to the Vehicle Tracking page

    @US004-01
    Scenario: Vehicle Tracking
        When the user clicks on the Tracking on button
        Then a banner of the active vehicles is no longer displayed
        When the user clicks on the Tracking on button again
        Then a banner of the active vehicles is displayed
        