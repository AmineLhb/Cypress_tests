class MenuBar{
    pageSLA(){
        return cy.xpath('//a[@href="/tms/sla-tickets"]')
    }
    pageTripLog(){
        return cy.get('a[href="/tms/trip-log"]')
    }

    pageDashboard(){
        return cy.get('a[href="/tms/dashboard"]')
    }

    pageFinancialPenalties(){
        return cy.get('a[href="/tms/financial-penalties"]')
    }

    

    pageVehicleTracking(){
        return cy.get('a[href="/tms/vehicle-tracking"]')
    }

    pagePerformanceOverview(){
        return cy.get('a[href="/tms/performance-overview"]')
    }

    pageBudgetOverview(){
        return cy.get('a[href="/tms/budget-overview"]')
    }

    pageAWBStatus(){
        return cy.get('a[href="/tms/awb-status"]')
    }

    pageAWBStatusDashboard(){
        return cy.get('a[href="/tms/awb-status-dashboard"]')
    }

    pageAWBTickets(){
        return cy.get('a[href="/tms/tickets"]')
    }

    pageTripComparison(){
        return cy.get('a[href="/tms/trip-comparison"]')
    }

    pageCovidReports(){
        return cy.get('a[href="/tms/trip-comparison-new"]')
    }

    pagePOCPOD(){
        return cy.get('a[href="/trip-management/poc-pod"]')
    }
    pageMasterDataSchedule(){
        return cy.get('a[href="/trip-management/trips"]')
    }
    pageScheduledDailyTrips(){
        return cy.get('a[href="/trip-management/active-trips"]')
    }
    pageTripManagementDashboard(){
        return cy.get('a[href="/trip-management/dashboard"]')
    }
}

export default MenuBar;