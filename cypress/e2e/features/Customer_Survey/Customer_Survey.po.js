class CustomerSurvey { 

    pageUrl(){
        return cy.url().contains('https://uat.labprox.com/scoc/pharma/inventory')
    }  

    pageSCOC(){ 
        return cy.xpath("//span[text()='SCOC']")
    }

    pageCustomerSurvey(){ 
        return cy.xpath("//span[text()='Customer Survey']")
    }

    pageSatisfaction(){  
        return cy.get('a[href="/customer-survey/satisfaction"]')
    }


    pageDashboard(){   
        return cy.get('a[href="/customer-survey/dashboard"]')
    }


    pageSpecializedLab(){ 
        return cy.xpath("//span[text()='Specialized Lab']")
    }

    pageTab(){
        return cy.get('.ant-tabs-tab')
    }

    pageLocation(){
        return cy.get(':nth-child(2) > .ant-select > .ant-select-selector')
    }

    pageLabTypes(){
        return cy.get(':nth-child(1) > .ant-select > .ant-select-selector')
    }

    pageLocationDropdown(){
        return cy.get('.ant-select-dropdown.ant-select-dropdown-placement-bottomLeft')
    }
    

    pageRegion(){
        return cy.get('.ant-select-selection-item')
    }

    pageHospital(){
        return cy.get('#rc_select_1')
    }
    pageRegionDropdown(){
        return cy.get('.rc-virtual-list-holder').eq(0)
    }

    
    pageHospitalDropdown(){
        return cy.get(':nth-child(4) > :nth-child(1) > .ant-select-dropdown')
    }

    pageHospitalDropdownFirst(){
        return cy.xpath('//div[text()="Al Hejarah Hospital"]')
    }

    pageSearch(){
        return cy.get('#rc_select_6')
    }
    pageSearchDropdown(){
        return cy.get('.ant-select-dropdown.ant-select-dropdown-empty')
    }


    pageDatePopup(){
        return cy.get('.ant-picker-panel-container')
    }

    pageMonth(){
        return cy.get('.ant-picker-month-btn')
    }

    pageMonthPanel(){
        return cy.get('.ant-picker-month-panel')
    }

    pageYear(){
        return cy.get('.ant-picker-year-btn')
    }

    pageYearPanel(){
        return cy.get('.ant-picker-year-panel')
    }

    pageDate(){
        return cy.get('.ant-picker-cell-in-view')
    }


    pageStartDate(){
        return cy.get('[placeholder="Start date"]')
    }

    pageEndDate(){
        return cy.get('[placeholder="End date"]')
    }


    // pageSegmentDropdown(){
    //     return cy.get('.ant-cascader-menu')
    // }
    
    // pageDetails(){
    //     return cy.get('.ant-btn.ant-btn-primary.ant-btn-circle.ant-btn-icon-only')
    // }

    // pageModal(){
    //     return cy.get('.ant-modal-content')
    // }


    clickAnywhere() {
        return cy.get('body').click(0, 0);
    }

}
export default CustomerSurvey
