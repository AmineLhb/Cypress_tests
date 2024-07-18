/// <reference types="Cypress" />
import TripLogPage from "./TripLogPage.po";
import  loginPage  from '../loginPage/loginPage.po.js';

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const login = new loginPage();

const triplog= new TripLogPage(login);

let originalTableStructure; 

Given ('user navigates to the TripLog page',()=>{
    cy.observer();
    login.pageUrl()
    login.pageUserName().type('m.lechheb@xpl-solutions.com');
    login.pagePassword().type('12345678')
    login.pageSubmitButton().click();
    triplog.pageTripLog().click({ force: true });
    cy.wait(1000)
    cy.url().should('contain', 'trip-log')
})

  
When('the user clicks on the courierlab button', ()=>{
    cy.observer();
    triplog.pageButton().click()
})

Then("the table structure should be updated", () => {
    cy.get("thead.ant-table-thead")
      .find("th")
      .should("have.length", 23)
      .then(($th) => {
        cy.fixture('columnNames.json').then((columnNames) => {
          expect($th).to.have.length(columnNames.columnNames.length);
          $th.each((index, element) => {
            expect(Cypress.$(element)).to.contain(columnNames.columnNames[index]);
          });
          originalTableStructure = columnNames.columnNames;
        });
      });
  });
  
  When('the user clicks on the courierlab button again', () => {
    cy.wait(2000)
    cy.observer();
    triplog.pageButton().click();
  });
  
  Then("the table structure should be reverted", () => {
    cy.get("thead.ant-table-thead")
      .find("th")
      .should("have.length", 20)
      .then(($th) => {
        cy.fixture('originalColumnNames.json').then((originalColumnNames) => {
          expect($th).to.have.length(originalColumnNames.originalColumnNames.length); 
          $th.each((index, element) => {
            expect(Cypress.$(element)).to.contain(originalColumnNames.originalColumnNames[index]);
          });
          originalTableStructure = originalColumnNames.originalColumnNames;
        });
      });
  });
  

  When('the user clicks on the info button', () => {
    cy.get('.anticon.anticon-info').eq(0).click()
  });
  
Then('a modal should appear', () => {
  
      cy.get('div.ant-modal-content').should('be.visible')
      cy.get('button.ant-modal-close').should('be.visible')
      cy.get('div.ant-modal-header').should('be.visible')
      cy.get('div.ant-modal-title').should('have.text', 'Info')
      cy.get('div.ant-modal-body').should('be.visible')
      cy.get('div.ant-tabs-tab').should('have.length', 5)
      cy.get('div.ant-tabs-tab-active').should('have.text', 'Sample Details')
      cy.get('.ant-tabs-content-holder').should('contain', 'Sample Id');
      cy.get('.ant-tabs-content-holder').should('contain', 'Created At');
      cy.get('.ant-tabs-content-holder').should('contain', 'Sample Qualification');
      cy.get('.ant-tabs-content-holder').should('contain', 'AWB No');
      cy.get('.ant-tabs-content-holder').should('contain', 'Status');

      	
      cy.get('div.ant-tabs-tab').eq(1).should('have.text', 'Additional Details')
      .wait(1000).click()
      cy.get('.ant-tabs-content-holder').should('contain', 'Driver Name');
      cy.get('.ant-tabs-content-holder').should('contain', 'Driver Mobile Number');

      cy.get('div.ant-tabs-tab').eq(2).should('have.text', 'Temperature & Humidity')
      .wait(1000).click()
      cy.get('div.ant-tabs-tabpane-active p').contains('Average Temperature : ');
      cy.get('div.ant-tabs-tabpane-active p').contains('Average Humidity : ');

      cy.get('div.ant-table-wrapper table').should('exist');
      cy.get('.ant-tabs-content-holder').should('contain', 'Date');
      cy.get('.ant-tabs-content-holder').should('contain', 'Temperature');
      cy.get('.ant-tabs-content-holder').should('contain', 'Humidity');


      cy.get('div.ant-tabs-tab').eq(3).should('have.text', 'Temperature Chart')
      .wait(1000).click()
      cy.get('#rc-tabs-0-panel-tempChart').should('be.visible')

      cy.get('div.ant-tabs-tab').eq(4).should('have.text', 'Humidity Chart')
      .wait(1000).click()
      cy.get('#rc-tabs-0-panel-humidityChart').should('be.visible')

      cy.get('.ant-modal-footer').should('exist')
      cy.contains('Cancel').should('exist')
      cy.contains('OK').should('exist')
})
  