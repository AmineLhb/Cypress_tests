class VehicleTrackingPage { 

    pageUrl(){
        return cy.url().contains('https://uat.labprox.com/tms/vehicle-tracking')
    }  

    pageVehicleTracking(){
        return cy.get('a[href="/tms/vehicle-tracking"]')
    }

   
    pageTrackingButton(){
        return cy.get(':nth-child(3) > .ant-btn > span')
    }

    pageTrackingBanner(){
        return cy.xpath("//div[contains(text(), 'Active Vehicle Count')]")
    }

    clickAnywhere() {
        return cy.get('body').click(0, 0);
    }
}
export default VehicleTrackingPage
