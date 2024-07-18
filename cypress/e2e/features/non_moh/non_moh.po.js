class non_moh { 

    pageUrl(){
        return cy.url().contains('https://uat.labprox.com/scoc/pharma/inventory')
    }  

    pageSCOC(){ 
        return cy.xpath("//span[text()='SCOC']")
    }

    pageNonMoh(){ 
        return cy.xpath("//span[text()='Non-MoH (covid-19)']")
    }

    pagePurchase(){  
        return cy.get('a[href="/non-moh/purchase"]')
    }

    pageInventory(){   
        return cy.get('a[href="/non-moh/inventory"]')
    }

    pageLabStatus(){   
        return cy.get('a[href="/non-moh/survey"]')
    }

    pageTickets(){   
        return cy.get('a[href="/non-moh/tickets"]')
    }
    
    pageDashboard(){   
        return cy.get('a[href="/non-moh/dashboard"]')
    }

    pageNupcoInventory(){   
        return cy.get('a[href="/non-moh/nupco-inventory"]')
    }

    pageSpecializedLab(){ 
        return cy.xpath("//span[text()='Specialized Lab']")
    }

    pageTab(){
        return cy.get('.ant-tabs-tab')
    }

    pageSelectBrand(){
        return cy.get('.ant-select-selection-search-input')
    }

    pageSelectBrandDropdown(){
        return cy.get('.rc-virtual-list-holder')
    }
    
    pageEdit(){
        return cy.get('.ant-btn.ant-btn-primary.ant-btn-circle.ant-btn-icon-only')
    }

    pageModal(){
        return cy.get('.ant-modal-content')
    }

    pageStatus(){
        return cy.get('.ant-btn.ant-btn-default.ant-dropdown-trigger')
    }

    pageStatusDropdown(){
        return cy.get('.ant-dropdown-menu.ant-dropdown-menu-light.ant-dropdown-menu-root.ant-dropdown-menu-vertical').eq(0)
    }


    pageDashboardDropdown(){
        return cy.get('.ant-select-selection-item')
    }

    pageLocationDropdown(){
        return cy.get('.rc-virtual-list-holder')
    }

    pageReagentDropdown(){
        return cy.get('.ant-select-selector')
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

    pageUpload(){
        return cy.get('.ant-btn.ant-btn-primary')
    }

    pageUploadModal(){
        return cy.get('.ant-modal-content')
    }
    
    clickAnywhere() {
        return cy.get('body').click(0, 0);
    }

}
export default non_moh
