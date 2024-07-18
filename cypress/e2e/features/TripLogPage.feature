Feature: TripLog Page

    Background:
        Given user navigates to the TripLog page

    @US003-01
    Scenario: Courier/Lab button
        When the user clicks on the courierlab button
        Then the table structure should be updated
        When the user clicks on the courierlab button again
        Then the table structure should be reverted
        When the user clicks on the info button
        Then a modal should appear
