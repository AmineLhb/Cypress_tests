/// <reference types="Cypress" />
import VehicleTracking from "./VehicleTracking.po";
import  loginPage  from '../loginPage/loginPage.po.js';

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const login = new loginPage();

const vehicle= new VehicleTracking(login);

Given ('user navigates to the Vehicle Tracking page',()=>{
    login.pageUrl()
    login.pageUserName().type('m.lechheb@xpl-solutions.com');
    login.pagePassword().type('12345678')
    cy.intercept(
            'GET',
            'https://uat.labprox.com/api/1.0/user/profile',
            {
              statusCode: 200,
              body: '{"email":"m.lechheb@xpl-solutions.com","accessInventoryDelegation":0,"organisationId":1,"role":"tms","name":"Mohamed","locationId":null,"locationName":"","regionId":null,"region":"","type":"tms","modules":[{"id":1250,"userId":3030,"name":"tms","locationId":null,"locationName":"All Location","customerSurveyLab":null,"regionId":null,"regionName":null,"role":"tms","default":1,"content":null,"createdAt":"2023-02-27T07:08:37.000Z","updatedAt":"2023-02-27T07:08:37.000Z","active":1}]}'
            }
    ).as('GetLogin');
    login.pageSubmitButton().click({ force: true })
    cy.wait('@GetLogin');
    vehicle.pageVehicleTracking().click();
    cy.url().should('contain', 'vehicle-tracking')
    cy.wait(3000)
})

When('the user clicks on the Tracking on button', ()=>{
    cy.observer();
    vehicle.pageTrackingButton().click({ force: true })
})

Then('a banner of the active vehicles is no longer displayed', ()=>{
    vehicle.pageTrackingBanner().should('not.exist')
    cy.wait(1500)
})

When('the user clicks on the Tracking on button again', ()=>{
    cy.observer();
    vehicle.pageTrackingButton().click({ force: true })
})

Then('a banner of the active vehicles is displayed', ()=>{
    vehicle.pageTrackingBanner().should('exist')
})
