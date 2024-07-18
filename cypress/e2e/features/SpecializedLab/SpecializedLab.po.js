class SpecializedLab { 

    pageUrl(){
        return cy.url().contains('https://uat.labprox.com/specialized-lab/inventory')
    }  

    
    pageTab(){
        return cy.get('.ant-tabs-tab')
    }

    pageType(){
        return cy.get('.ant-btn.ant-btn-default.ant-dropdown-trigger.filterDropdown___6Yoyq').eq(0)
    }

    pageTypeDropdown(){
        return cy.get('.ant-dropdown-menu.ant-dropdown-menu-light.ant-dropdown-menu-root.ant-dropdown-menu-vertical').eq(0)
    }
    pageStatus(){
        return cy.get('.ant-btn.ant-btn-default.ant-dropdown-trigger.filterDropdown___6Yoyq').eq(1)
    }

    pageStatusDropdown(){
        return cy.get('.ant-dropdown-menu.ant-dropdown-menu-light.ant-dropdown-menu-root.ant-dropdown-menu-vertical').eq(1)
    }

    pageFrequency(){
        return cy.get('.ant-btn.ant-btn-default.ant-dropdown-trigger.filterDropdown___6Yoyq').eq(2)
    }

    pageFrequencyDropdown(){
        return cy.get('.ant-dropdown-menu.ant-dropdown-menu-light.ant-dropdown-menu-root.ant-dropdown-menu-vertical').eq(2)
    }

    pageEdit(){
        return cy.get('.ant-btn.ant-btn-primary.ant-btn-circle.ant-btn-icon-only')
    }

    pageModal(){
        return cy.get('.ant-modal-content')
    }
    
    pagePurchaseOrder(){
        return cy.get('a[href="/specialized-lab/purchase"]')
    }

    pageStatusBar(){
        return cy.get('.toggleContainer___3Lsiv')
    }

    pageCompleted(){
        return cy.xpath("//span[text()='Completed']")
    }

    pageDashboard(){
        return cy.get('a[href="/specialized-lab/metrics"]')
    }

    pageDashboardDropdown(){
        return cy.get('.ant-select-selection-item')
    }

    pageLocationDropdown(){
        return cy.get('.rc-virtual-list-holder')
    }

    pageSurvey(){
        return cy.get(':nth-child(4) > a')
    }

    pageTickets(){
        return cy.get(':nth-child(5) > a')
    }


    clickAnywhere() {
        return cy.get('body').click(0, 0);
    }

}
export default SpecializedLab
