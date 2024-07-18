Feature: SLATickets Page

    Background:
        Given user navigates to the SLATickets page

    @US003-01
    Scenario: Download Button
        When the user clicks on the Download button
        Then an excel file is downloaded
