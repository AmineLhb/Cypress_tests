/// <reference types="Cypress" />
import Vendor from "./Vendor.po";
import  loginPage  from '../loginPage/loginPage.po.js';

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { should } from "chai";

const login = new loginPage();

const vendor= new Vendor(login);

Given ('user navigates to the Vendor page',()=>{
   cy.observer();
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
    vendor.pageSpecializedLab().click();
    vendor.pageVendor().click();
    vendor.pageInventory().click();
    cy.url().should('contain', 'supplier')
})


Then("the table should exist", () => {
   cy.observer();
   cy.get("thead.ant-table-thead th").then(($th) => {
     cy.fixture("vendor.json").then((columnNames) => {
       const expectedColumns = columnNames.columnNames;
       const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim()); 
       expect(actualColumns).to.include.members(expectedColumns);
     });
   });
 });
 

When('the user clicks on the region bar', ()=>{
   cy.observer();
   vendor.pageRegion().eq(0).click()
})

Then('the region dropdown is opened', ()=>{
   cy.observer();
  vendor.pageRegionDropdown().should('exist')
  vendor.pageRegionDropdown().should('be.visible')
})


When('the user clicks on the hospital bar', ()=>{
   cy.observer();
   vendor.pageHospital().click()
})

Then('the hospital dropdown is opened', ()=>{
   cy.observer();
  vendor.pageHospitalDropdown().should('exist')
  vendor.pageHospitalDropdown().should('be.visible')
  cy.wait(1000);
  vendor.pageHospitalDropdownFirst().click()
})



When('the user clicks on the search bar', ()=>{
   cy.observer();
   vendor.pageSearch().click()
})

Then('the search dropdown is opened', ()=>{
   cy.observer();
  vendor.pageSearchDropdown().should('exist')
  vendor.pageSearchDropdown().should('be.visible')
})




When('the user clicks on dashboard', ()=>{
   cy.observer();
   vendor.pageDashboard().click()
})

Then('the dashboard page opens', ()=>{
   cy.observer();
   cy.url().should('contain', 'dashboard')
})
 



// Then("a table is shown", () => {
//    cy.observer();
//    // cy.wait(1000);
//    cy.get("thead.ant-table-thead th").then(($th) => {
//      const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim());
 
//      cy.fixture("scoc_transfer.json").then((columnNames) => {
//        const expectedColumns = columnNames.columnNames;
 
      
//          expect(actualColumns).to.include.deep.members(expectedColumns);
//          cy.log("Table columns are as expected.");
       
//      });
//    });
//  });
 

// When ('the user clicks on inventory of medical supply',()=>{
//    cy.observer();
//    vendor.pagePharma().click();
//    vendor.pageMedicalSupplies().click();
//    vendor.pageInventoryMedicalSupplies().click();

// })

// Then('the inventory is opened', ()=>{
//    cy.observer();
//    cy.url().should('contain', 'inventory')
// })

// Then("a new table is shown", () => {
//    cy.observer();
//    // cy.wait(2000);
//    cy.get('.ant-tabs-nav-list').should('exist')
//    // cy.get('.ant-tabs-nav-list').trigger('mouseover')
//    cy.get(".ant-tabs-nav-list").then(($th) => {
//      const actualColumns = $th.find(".ant-tabs-tab").toArray().map((el) => Cypress.$(el).text().trim());
 
//      cy.fixture("scoc_medical_inventory.json").then((columnNames) => {
//        const expectedColumns = columnNames.columnNames;
 

//          expect(actualColumns).to.include.deep.members(expectedColumns);
//          cy.log("Table columns are as expected.");

//      });
//    });
//  });
 


//  When('the user clicks on transfer of Medical Supply', ()=>{
//    cy.observer();
//    vendor.pageMedicalSupplies().click();
//    vendor.pageTransferMedicalSupplies().click()
// })

// Then('the transfer page of Medical Supply opens', ()=>{
//    cy.observer();
//    cy.url().should('contain', 'inventory_transfer_overview')
// })


// When('the user clicks on transfer of Labs', ()=>{
//    cy.observer();
//    vendor.pagePharma().click();
//    vendor.pageLabs().click();
//    vendor.pageTransferLabs().click()
// })


// When ('the user clicks on inventory of Labs',()=>{
//    cy.observer();
//    vendor.pagePharma().click();
//    vendor.pageLabs().click();
//    vendor.pageInventoryLabs().click();
// })