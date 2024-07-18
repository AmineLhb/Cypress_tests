class dashboardPage { 

    pageUrl(){
        return cy.url().contains('https://uat.labprox.com/tms/dashboard')
    }  

    /// Transport Providers

    pageTransportProvidersDropdown(){
        // return cy.xpath('//div[@class="ant-select ant-select-single ant-select-show-arrow"]//span[@class="ant-select-selection-item" and text()="All Transport Providers"]').click({ force: true })
        return cy.get('[title="All Transport Providers"]')
        // return cy.xpath('//div[@class="ant-select ant-select-single ant-select-show-arrow"]//span[@class="ant-select-selection-item" and text()="All Transport Providers"]').invoke('select')
    }

    pageTransportProvidersDropdownSMSA(){
        return cy.get('[title="SMSA"]')
    }
    pageTransportProvidersDropdownMTC(){
        return cy.get('[title="MTC"]')
    }
    pageTransportProvidersDropdownSPL(){
        return cy.get('[title="SPL"]')
    }

    pageTransportProvidersOptions(){
        return cy.get('.ant-select-item.ant-select-item-option')
    }

    /// Categories

    pageCategoriesDropdown(){
        return cy.get('[title="All Categories"]')
    }

    pageCategoriesDropdownNonMoh(){
        return cy.get('[title="Non-Moh"]')
    }
    
    pageCategoriesDropdownMoh(){
        return cy.get('[title="Moh"]')
    }

    pageCategoriesDropdownPrivate(){
        return cy.get('[title="Private"]')
    }

    pageCategoriesOptions(){
        return cy.get('.ant-select-item.ant-select-item-option')
    }


    /// SLA

    pageSLADropdown(){
        return cy.get('[title="All SLA"]')
    }

    pageSLADropdown2(){
        return cy.get('[title="SLA - 2 hr"]')
    }
    
    pageSLADropdown6(){
        return cy.get('[title="SLA - 6 hr"]')
    }

    pageSLADropdown10(){
        return cy.get('[title="SLA - 10 hr"]')
    }

    pageSLADropdown14(){
        return cy.get('[title="SLA - 14 hr"]')
    }

    pageSLAOptions(){
        return cy.get('.ant-select-item.ant-select-item-option')
    }


    

    /// Regions

    pageRegionsDropdown(){
        return cy.get('[title="All Regions"]')
    }

    pageRegionsDropdown1(){
        return cy.get('[title="Abha"]')
    }
    

    pageRegionsOptions(){
        return cy.get('.ant-select-item.ant-select-item-option')
    }

    pageInfoIcon(){
        return cy.get('.anticon.anticon-info-circle')
    }

    pageInfoBanner(){
        return cy.get('.ant-tooltip-inner')
    }

    pageFullscreen(){
        return cy.get('.ant-btn.ant-btn-ghost')
    }

    pageFullscreenBanner(){
        return cy.get('.ant-tooltip-inner')
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


    clickAnywhere() {
        return cy.get('body').click(0, 0);
    }
}
export default dashboardPage
