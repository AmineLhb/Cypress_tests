class loginPage {
    
    pageTitle(){
        return cy.get('.title___3ww2k')
    }

    pageUrl(){
        return cy.visit('https://uat.labprox.com/user/login')
    }

    pageUserName(){
        return cy.get('#username')
    }

    pagePassword(){
        return cy.get('#password')
    }

    pageSubmitButton(){
        return cy.get('.ant-btn.ant-btn-primary.ant-btn-lg.submit___Q43EO')
    }

    pageErrorPopup(){
        return cy.get('.ant-notification.ant-notification-topRight');
    }

    pageUserInvalid(){
        return cy.get('.ant-row.ant-form-item.ant-form-item-with-help.ant-form-item-has-error .ant-form-item-explain div[role="alert"]').
        should('contain', 'Invalid!');
    }
    pagePasswordInvalid(){
        return cy.get('.ant-row.ant-form-item.ant-form-item-with-help.ant-form-item-has-error div[role="alert"]').
        should('contain','Invalid！');
    }

    pageUsernamePasswordInvalid(){
        return cy.get('.ant-row.ant-form-item.ant-form-item-with-help.ant-form-item-has-error div[role="alert"]').
        should('contain','Invalid！') &
        cy.get('.ant-row.ant-form-item.ant-form-item-with-help.ant-form-item-has-error .ant-form-item-explain div[role="alert"]').
        should('contain', 'Invalid!');
    }

    pageEmail(){
        return cy.get('#Email')
    }

    pageEmailSubmitButton(){
        return cy.get("[type='submit']")
    }

    pageForgotPasswordButton(){
        return cy.xpath("//a[text()='Forgot Password?']")
        // return cy.get('a').contains('Forgot Password?')
    }
    
    
    pageChangeUrl(){
        return cy.url()
    }

    pageForgotPasswordPopUp(){
        return cy.get('.ant-message-notice');
    }

    pageEnterEmailMessage(){
        return cy.xpath("//div[text()='Please enter your Email!']")
        // return cy.get('.ant-form-item-explain')
    }

    pageProfileButton(){
        return cy.get('.undefined.anticon.lineHeight___WvM2V')
    }

    pageLogoutButton(){
        return cy.get('.ant-dropdown-menu-item.logout___RmIZ9')
    }

    pageYesButton(){
        return cy.xpath("//span[text()='Yes']")
    }
    
}

export default loginPage