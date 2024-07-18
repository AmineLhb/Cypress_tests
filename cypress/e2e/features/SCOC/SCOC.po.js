class SCOC { 

    pageUrl(){
        return cy.url().contains('https://uat.labprox.com/scoc/pharma/inventory')
    }  

    pageSCOC(){ 
        return cy.xpath("//span[text()='SCOC']")
    }
    pagePharma(){ 
        return cy.xpath("//span[text()='Pharma']")
    }
    
    pageMedicalSupplies(){ 
        return cy.xpath("//span[text()='Medical Supplies']")
    }

    pageLabs(){ 
        return cy.xpath("//span[text()='Labs']")
    }

    pageInventory(){  
        return cy.get('a[href="/scoc/pharma/inventory"]')
    }

    pageInventoryMedicalSupplies(){  
        return cy.get('a[href="/scoc/medical_supplies/inventory"]')
    }
    
    pageInventoryLabs(){  
        return cy.get('a[href="/scoc/labs/inventory"]')
    }

    pageDashboard(){   
        return cy.get('a[href="/scoc/pharma/dashboard"]')
    }

    pageTickets(){   
        return cy.get('a[href="/scoc/pharma/tickets"]')
    }
    

    pageTransfer(){   
        return cy.get('a[href="/scoc/pharma/inventory_transfer_overview"]')
    }

    pageTransferMedicalSupplies(){    
        return cy.get('a[href="/scoc/medical_supplies/inventory_transfer_overview"]')
    }

    pageTransferLabs(){    
        return cy.get('a[href="/scoc/labs/inventory_transfer_overview"]')
    }

    pageSpecializedLab(){ 
        return cy.xpath("//span[text()='Specialized Lab']")
    }
    pageTab(){
        return cy.get('.ant-tabs-tab')
    }

    pageStatus(){
        return cy.get('.ant-btn.ant-btn-default.ant-dropdown-trigger.filterDropdown___2T4_1')
    }

    pageCategory(){
        return cy.get('[style="padding: 12px; flex: 4 4 auto;"] > :nth-child(4) > span')
    }
    
    pageStatusDropdown(){
        return cy.get('.ant-dropdown-menu.ant-dropdown-menu-light.ant-dropdown-menu-root.ant-dropdown-menu-vertical').eq(0)
    }
    
    pageErStatusDropdown(){
        return cy.get('.ant-dropdown-menu.ant-dropdown-menu-light.ant-dropdown-menu-root.ant-dropdown-menu-vertical').eq(2)
    }

    pageCategoryDropdown(){
        return cy.get('.ant-dropdown-menu.ant-dropdown-menu-light.ant-dropdown-menu-root.ant-dropdown-menu-vertical').eq(1)
    }

    pageIsPlannedDropdown(){
        return cy.get('.ant-dropdown-menu.ant-dropdown-menu-light.ant-dropdown-menu-root.ant-dropdown-menu-vertical').eq(3)
    }

    pageSearch(){
        return cy.get('.ant-select-selection-search').eq(0)
    }
    pageSearchDropdown(){
        return cy.get('.ant-select-dropdown.ant-select-dropdown-empty.ant-select-dropdown-placement-bottomLeft')
    }

    pageSegment(){
        return cy.get('.ant-cascader-picker-label')
    }
    pageSegmentDropdown(){
        return cy.get('.ant-cascader-menu')
    }
    
    pageDetails(){
        return cy.get('.ant-btn.ant-btn-primary.ant-btn-circle.ant-btn-icon-only')
    }

    pageModal(){
        return cy.get('.ant-modal-content')
    }
    
    // pagePurchaseOrder(){
    //     return cy.get('a[href="/specialized-lab/purchase"]')
    // }

    // pageStatusBar(){
    //     return cy.get('.toggleContainer___3Lsiv')
    // }

    // pageCompleted(){
    //     return cy.xpath("//span[text()='Completed']")
    // }

    // pageDashboard(){
    //     return cy.get('a[href="/specialized-lab/metrics"]')
    // }

    // pageDashboardDropdown(){
    //     return cy.get('.ant-select-selection-item')
    // }

    // pageLocationDropdown(){
    //     return cy.get('.rc-virtual-list-holder')
    // }



    clickAnywhere() {
        return cy.get('body').click(0, 0);
    }

}
export default SCOC
