class Inventory_Control_Survey { 

    pageUrl(){
        return cy.url().contains('https://uat.labprox.com/scoc/pharma/inventory')
    }  

    pageSCOC(){ 
        return cy.xpath("//span[text()='SCOC']")
    }

    pageICS(){ 
        return cy.xpath("//span[text()='Inventory Control Survey']")
    }

    pageTeams(){  
        return cy.get('a[href="/InventoryControlSurvey/teams"]')
    }

    pageSwitch(){ 
        return cy.get('.ant-switch')
    }

    pageSpecializedLab(){ 
        return cy.xpath("//span[text()='Specialized Lab']")
    }

    pageTab(){
        return cy.get('.ant-tabs-tab')
    }

    
    pageAssign(){
        return cy.get('.ant-btn.ant-btn-primary').eq(1)
    }

    pageCreateTeam(){
        return cy.get('.ant-btn.ant-btn-primary').eq(0)
    }

    pageModal(){
        return cy.get('.ant-modal-content')
    }

    pageClose(){
        return cy.get('.anticon.anticon-close.ant-modal-close-icon')
    }
    
    //User Management 

    pageUserManagement(){
        return cy.get('a[href="/InventoryControlSurvey/userManagement"]')
    }

   
    pageAddUserButton(){
        return cy.xpath("//span[text()='Add User']")
    }

    pageAddUserModal(){
        return cy.get('.ant-modal')
    }
    
    pageUserModalTitle(){
        return cy.get('.ant-modal-title')
    }

    pageAddModuleButton(){
        return cy.xpath("//span[text()='Add Module']")
    }

    pageEmailModule(){
        return cy.get('#email')
    }
    pageNameModule(){
        return cy.get('#name')
    }
    
    pageModuleAdded(){
        return cy.get('.formFieldContainer___1ISgJ')
    }
    

    pageModuleName1(){
        return cy.get('#modules_0_name')
    }

    pageModuleRole1(){
        return cy.get('#modules_0_role')
    }

    pageModuleName(){
        return cy.get('#applications_0_name')
    }

    pageModuleRole(){
        return cy.get('#applications_0_role')
    }

    pageModuleLocation(){
        return cy.get('#applications_0_locationId')
    }

    pageSubmitButton(){
        return cy.get('.ant-btn.ant-btn-primary.ant-btn-block')
    }


    //Followup

    pageFollowup(){
        return cy.get('a[href="/InventoryControlSurvey/follow-up"]')
    }

    pageTab(){
        return cy.get('.ant-tabs-tab')
    }

    //Delegate

    pageDelegate(){
        return cy.get('a[href="/InventoryControlSurvey/delegate"]')
    }

    //Survey

    pageSurvey(){
        return cy.get('a[href="/InventoryControlSurvey/surveys"]')
    }

    pageBox(){
        return cy.get('.ant-popover-inner-content')
    }


    //SurveySearch

    pageSurveySearch(){
        return cy.get('a[href="/InventoryControlSurvey/search"]')
    }

    pageSearch(){
        return cy.get('.ant-select-selection-search')
    }
    pageSearchDropdown(){
        return cy.get('.ant-select-dropdown.ant-select-dropdown-empty')
    }

    clickAnywhere() {
        return cy.get('body').click(0, 0);
    }

}
export default Inventory_Control_Survey
