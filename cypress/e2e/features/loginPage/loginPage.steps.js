/// <reference types="Cypress" />
import loginPage from "./loginPage.po";
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

const login = new loginPage();

Given ('user navigates to the login page',()=>{
    login.pageUrl()
})
When ('the user enters correct credentials', ()=>{
    login.pageUserName().type('m.lechheb@xpl-solutions.com');
    login.pagePassword().type('12345678')
})

When ('click the submit button valid', ()=>{
    cy.intercept(
            'POST',
            'https://uat.labprox.com/api/1.0/auth/login',
            {
              statusCode: 200,
              body: '{"token":"0D1bzgiECes6459vAiWv3mrdfH7oMKJ2"}' //The token changes so it should be updated before each test
            }
    ).as('PostLogin');
    cy.intercept(
            'GET',
            'https://uat.labprox.com/api/1.0/user/profile',
            {
              statusCode: 200,
              body: '{"email":"m.lechheb@xpl-solutions.com","accessInventoryDelegation":0,"organisationId":1,"role":"tms","name":"Mohamed","locationId":null,"locationName":"","regionId":null,"region":"","type":"tms","modules":[{"id":1250,"userId":3030,"name":"tms","locationId":null,"locationName":"All Location","customerSurveyLab":null,"regionId":null,"regionName":null,"role":"tms","default":1,"content":null,"createdAt":"2023-02-27T07:08:37.000Z","updatedAt":"2023-02-27T07:08:37.000Z","active":1}]}'
            }
    ).as('GetLogin');
    login.pageSubmitButton().click()
    cy.wait('@GetLogin');
})

When ('click the submit button', ()=>{
    login.pageSubmitButton().click() 
})

Then ('the user should be allowed to login',()=>{
    cy.url().should('contain', 'dashboard')
})


When('the user enters wrong username', ()=>{
    login.pageUserName().type('test@example.com');
    login.pagePassword().type('12345678')
})


When('the user enters wrong password', ()=>{
    login.pageUserName().type('m.lechheb@xpl-solutions.com');
    login.pagePassword().type('password')
})

Then ('the user should not be allowed to login', ()=>{
    cy.url().should('contain', 'login')
})

Then ('a popup invalid username message appears', ()=>{
    login.pageErrorPopup().should('contain', 'No user found with this email.')
})

Then ('a popup invalid password message appears', ()=>{
    login.pageErrorPopup().should('contain', 'Invalid password.')
})

When ('the user lets username field empty', ()=>{
    login.pageUserName().click();
    login.pagePassword().type('12345678')
}
)

When ('the user lets password field empty', ()=>{
    login.pageUserName().type('m.lechheb@xpl-solutions.com');
    login.pagePassword().click()
}
)

Then ('a username gets invalid error', ()=>{
    login.pageUserInvalid()
})

Then ('a password gets invalid error', ()=>{
    login.pagePasswordInvalid()
})


When('the user lets fields empty', ()=>{
    login.pageUserName().click();
    login.pagePassword().click()
})

Then ('an invalid error shows', ()=>{
    login.pageUsernamePasswordInvalid()
})


When('the user clicks forgot password button', ()=>{
    login.pageForgotPasswordButton().click()
})

Then('the user navigates to forgot password page', ()=>{
    login.pageChangeUrl().should('contain', 'forgot-password')
})

When('the user enters wrong email', ()=>{
    login.pageEmail().type('email@example.com')
})


When ('click the forgot password submit button', ()=>{
    login.pageEmailSubmitButton().click();
})

Then('a popup email not registered message appears', ()=>{
    login.pageForgotPasswordPopUp().should('contain','Your email is not registered with us!!')
})

When ('the user leaves the email field empty', ()=>{
    cy.reload();
    login.pageEmail().click()
})

Then('an error message enter an email appears', ()=>{
    login.pageEnterEmailMessage().should('contain','Please enter your Email!')
})


When ('the user clicks logout button', ()=>{
    login.pageProfileButton().click()
    login.pageLogoutButton().click() 
})


When ('the user clicks Yes button', ()=>{
    login.pageYesButton().click() 
})

Then ('the user logs out',()=>{
    cy.intercept(
            'POST',
            'https://uat.labprox.com/api/1.0/auth/logout',
            {
              statusCode: 200,
            }
    ).as('PostLogout');
    cy.url().should('contain', 'login')
})