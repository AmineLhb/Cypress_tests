/// <reference types="Cypress" />
import specializedLab from "./SpecializedLab.po";
import  loginPage  from '../loginPage/loginPage.po.js';

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { should } from "chai";

const login = new loginPage();

const specialized= new specializedLab(login);

Given ('user navigates to the SpecializedLab page',()=>{
    login.pageUrl()
    login.pageUserName().type('anish.ormae@gmail.com');
    login.pagePassword().type('12345678')
    // cy.intercept(
    //         'GET',
    //         'https://uat.labprox.com/api/1.0/user/profile',
    //         {
    //           statusCode: 200,
    //           body: '{"email":"m.lechheb@xpl-solutions.com","accessInventoryDelegation":0,"organisationId":1,"role":"tms","name":"Mohamed","locationId":null,"locationName":"","regionId":null,"region":"","type":"tms","modules":[{"id":1250,"userId":3030,"name":"tms","locationId":null,"locationName":"All Location","customerSurveyLab":null,"regionId":null,"regionName":null,"role":"tms","default":1,"content":null,"createdAt":"2023-02-27T07:08:37.000Z","updatedAt":"2023-02-27T07:08:37.000Z","active":1}]}'
    //         }
    // ).as('GetLogin');
    login.pageSubmitButton().click({ force: true })
    // cy.wait('@GetLogin');
    cy.url().should('contain', 'inventory')
})

When('the user clicks on the first tab', ()=>{
    cy.observer();
    specialized.pageTab().eq(0).click()
})

Then('the first tab is selected', ()=>{
   cy.get('.ant-tabs-tab.ant-tabs-tab-active').should('exist')
})

When('the user clicks on the second tab', ()=>{
   cy.observer();
   specialized.pageTab().eq(1).click()
})

Then('the second tab is selected', ()=>{
  cy.get('.ant-tabs-tab.ant-tabs-tab-active').should('exist')
})

When('the user hovers on the type dropdown', ()=>{
   cy.observer();
   specialized.pageType().trigger('mouseover')
})

Then('the type dropdown is opened', ()=>{
 specialized.pageTypeDropdown().should('exist')
 specialized.pageTypeDropdown().should('contain','Consumables')
 specialized.pageTypeDropdown().should('contain','PPE')
 specialized.pageTypeDropdown().should('contain','Reagent')
 specialized.pageTypeDropdown().should('contain','Equipment')
 specialized.pageTypeDropdown().should('contain','Clear Type')
})

When('the user hovers on the status dropdown', ()=>{
   cy.observer();
   specialized.pageStatus().trigger('mouseover')
})

Then('the status dropdown is opened', ()=>{
   specialized.pageStatusDropdown().should('exist')
   specialized.pageStatusDropdown().should('contain','OOS')
   specialized.pageStatusDropdown().should('contain','NOOS')
   specialized.pageStatusDropdown().should('contain','SS')
   specialized.pageStatusDropdown().should('contain','OS')
   specialized.pageStatusDropdown().should('contain','Clear Status')
})

When('the user hovers on the update frequency dropdown', ()=>{
   cy.observer();
   specialized.pageFrequency().trigger('mouseover')
})

Then('the update frequency dropdown is opened', ()=>{
   specialized.pageFrequencyDropdown().should('exist')
   specialized.pageFrequencyDropdown().should('contain','Once')
   specialized.pageFrequencyDropdown().should('contain','Every Day')
   specialized.pageFrequencyDropdown().should('contain','Every Month')
   specialized.pageFrequencyDropdown().should('contain','Every Week')
   specialized.pageFrequencyDropdown().should('contain','Clear Frequecy')
})


Then("the table should exist", () => {
   cy.get("thead.ant-table-thead th").then(($th) => {
     cy.fixture("specialized.json").then((columnNames) => {
       const expectedColumns = columnNames.columnNames;
       const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim()); 
       expect(actualColumns).to.include.members(expectedColumns);
     });
   });
 });
 
When('the user clicks on the edit button', ()=>{
   cy.observer();
   specialized.pageEdit().eq(0).click()
})


Then('a modal opens', ()=>{
   specialized.pageModal().should('exist')
   specialized.pageModal().should('be.visible')
})
 

When('the user clicks on purchase order', ()=>{
   cy.observer();
   specialized.pagePurchaseOrder().click()
})

Then('the purchase order page opens', ()=>{
   cy.url().should('contain', 'purchase')
})
 

Then('the tab contains created, approved, pending and completed', ()=>{
   cy.observer();
   specialized.pageStatusBar().should('contain', 'Created')
   specialized.pageStatusBar().should('contain', 'Approved')
   specialized.pageStatusBar().should('contain', 'Pending')
   specialized.pageStatusBar().should('contain', 'Completed')
})

Then("a table should exist", () => {
   cy.get("thead.ant-table-thead th").then(($th) => {
     cy.fixture("specialized_purchase.json").then((columnNames) => {
       const expectedColumns = columnNames.columnNames;
       const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim()); 
       expect(actualColumns).to.include.members(expectedColumns);
     });
   });
 });


Then('the user clicks on completed', ()=>{
   cy.observer();
   specialized.pageCompleted().click()
})

Then("a table is updated", () => {
  cy.get("thead.ant-table-thead th").then(($th) => {
    const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim());

    cy.fixture("specialized_purchase_updated.json").then((columnNames) => {
      const expectedColumns = columnNames.columnNames;

      expect(actualColumns).to.include.deep.members(expectedColumns);
      cy.log("Table columns are as expected.");
    });
  });
});


When('the user clicks on dashboard', ()=>{
   cy.observer();
   specialized.pageDashboard().click()
})

Then('the dashboard page opens', ()=>{
   cy.url().should('contain', 'metrics')
})
 

When('the user clicks on the locations dropdown', ()=>{
   cy.observer();
   specialized.pageDashboardDropdown().eq(0).click()
})

Then('the location dropdown is opened', ()=>{
   specialized.pageLocationDropdown().eq(0).should('contain', 'All locations')
   specialized.pageLocationDropdown().eq(0).should('contain', 'NHL')
   specialized.pageLocationDropdown().eq(0).should('contain', 'MAK')
   specialized.pageLocationDropdown().eq(0).should('contain', 'MAD')
   specialized.pageLocationDropdown().eq(0).should('contain', 'ASR')
   specialized.pageLocationDropdown().eq(0).should('contain', 'DAM')
})

When('the user clicks on the average stock dropdown', ()=>{
   cy.observer();
   specialized.pageDashboardDropdown().eq(1).click()
})

Then('the average stock dropdown is opened', ()=>{
   specialized.pageLocationDropdown().eq(1).should('contain', 'By location')
   specialized.pageLocationDropdown().eq(1).should('contain', 'By Category')
})


When('the user clicks on the expiry of reagents dropdown', ()=>{
   cy.observer();
   specialized.pageDashboardDropdown().eq(2).click()
})

Then('the expiry of reagents dropdown is opened', ()=>{
   specialized.pageLocationDropdown().eq(2).should('contain', '< 1 month')
   specialized.pageLocationDropdown().eq(2).should('contain', '1 - 3 months')
   specialized.pageLocationDropdown().eq(2).should('contain', '3+ months')
})

When('the user clicks on the average number of days of stocks dropdown', ()=>{
   cy.observer();
   specialized.pageDashboardDropdown().eq(3).click()
})

Then('the average number of days of stocks dropdown is opened', ()=>{
   specialized.pageLocationDropdown().eq(3).should('contain', 'All categories')
   specialized.pageLocationDropdown().eq(3).should('contain', 'Consumables')
   specialized.pageLocationDropdown().eq(3).should('contain', 'PPE')
   specialized.pageLocationDropdown().eq(3).should('contain', 'Reagent')
})


When('the user clicks on survey', ()=>{
   cy.observer();
   specialized.pageSurvey().click()
})

Then('the survey page opens', ()=>{
   cy.url().should('contain', 'survey')
})
 

When('the user clicks on Tickets', ()=>{
   cy.observer();
   specialized.pageTickets().click()
})

Then('the tickets page opens', ()=>{
   cy.url().should('contain', 'tickets')
})
 