class TripLogPage {

    pageUrl(){
        return cy.visit('https://uat.labprox.com/user/trip-log')
    }

    pageButton(){
        return cy.get('button.ant-switch');
      }

      
    pageTripLog(){
        return cy.get('a[href="/tms/trip-log"]')
    }
}

export default TripLogPage