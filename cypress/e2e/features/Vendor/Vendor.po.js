class Vendor { 

    pageUrl(){
        return cy.url().contains('https://uat.labprox.com/scoc/pharma/inventory')
    }  

    pageSCOC(){ 
        return cy.xpath("//span[text()='SCOC']")
    }

    pageVendor(){ 
        return cy.xpath("//span[text()='Vendor Portal']")
    }

    pageInventory(){  
        return cy.get('a[href="/vendorPortal/supplier"]')
    }


    pageDashboard(){   
        return cy.get('a[href="/vendorPortal/supplier-dashboard"]')
    }


    pageSpecializedLab(){ 
        return cy.xpath("//span[text()='Specialized Lab']")
    }

    pageTab(){
        return cy.get('.ant-tabs-tab')
    }

    // pageStatus(){
    //     return cy.get('.ant-btn.ant-btn-default.ant-dropdown-trigger.filterDropdown___2T4_1')
    // }

    // pageStatusDropdown(){
    //     return cy.get('.ant-dropdown-menu.ant-dropdown-menu-light.ant-dropdown-menu-root.ant-dropdown-menu-vertical').eq(0)
    // }
    

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
export default Vendor
