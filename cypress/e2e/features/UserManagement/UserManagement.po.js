class UserManagementPage { 

    pageUrl(){
        return cy.url().contains('https://uat.labprox.com/specialized-lab/inventory')
    }  

    pageUserManagement(){
        return cy.get('a[href="/user-management"]')
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
        return cy.get('.formFieldContainer___6Ly_1')
    }
    

    pageModuleName(){
        return cy.get('#modules_0_name')
    }

    pageModuleRole(){
        return cy.get('#modules_0_role')
    }

    pageModuleLocation(){
        return cy.get('#modules_0_locationId')
    }

    pageSubmitButton(){
        return cy.get('.ant-btn.ant-btn-primary.ant-btn-block')
    }

    clickAnywhere() {
        return cy.get('body').click(0, 0);
    }
}
export default UserManagementPage
