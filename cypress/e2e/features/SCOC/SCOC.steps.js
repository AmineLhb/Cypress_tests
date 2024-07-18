/// <reference types="Cypress" />
import SCOC from "./SCOC.po";
import  loginPage  from '../loginPage/loginPage.po.js';

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { should } from "chai";

const login = new loginPage();

const scoc= new SCOC(login);

Given ('user navigates to the SCOC page',()=>{
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
    scoc.pageSpecializedLab().click();
    scoc.pageSCOC().click();
    scoc.pagePharma().click();
    scoc.pageInventory().click();
    cy.url().should('contain', 'inventory')
})

When('the user clicks on the first tab', ()=>{
    cy.observer();
    scoc.pageTab().eq(0).click()
})

Then('the first tab is selected', ()=>{
   cy.observer();
   cy.get('.ant-tabs-tab.ant-tabs-tab-active').should('exist')
})

When('the user clicks on the second tab', ()=>{
   cy.observer();
   scoc.pageTab().eq(1).click()
})

Then('the second tab is selected', ()=>{
   cy.observer();
  cy.get('.ant-tabs-tab.ant-tabs-tab-active').should('exist')
})

When('the user hovers on the status dropdown', ()=>{
   cy.observer();
   scoc.pageStatus().eq(0).trigger('mouseover')
})

Then('the status dropdown is opened', ()=>{
   cy.observer();
 scoc.pageStatusDropdown().should('exist')
 scoc.pageStatusDropdown().should('contain','OOS')
 scoc.pageStatusDropdown().should('contain','NOOS')
 scoc.pageStatusDropdown().should('contain','SS')
 scoc.pageStatusDropdown().should('contain','OS')
 scoc.pageStatusDropdown().should('contain','Clear Status')
})

When('the user hovers on the category dropdown', ()=>{
   cy.observer();
   scoc.pageCategory().trigger('mouseover')
})

Then('the category dropdown is opened', ()=>{
   cy.observer();
   scoc.pageCategoryDropdown().should('exist')
   scoc.pageCategoryDropdown().should('contain','A')
   scoc.pageCategoryDropdown().should('contain','B')
   scoc.pageCategoryDropdown().should('contain','C')
   scoc.pageCategoryDropdown().should('contain','Clear Category')
})

When('the user hovers on the er status dropdown', ()=>{
   cy.observer();
   scoc.pageStatus().eq(2).trigger('mouseover')
})

Then('the er status dropdown is opened', ()=>{
   cy.observer();
   scoc.pageErStatusDropdown().should('exist')
   scoc.pageErStatusDropdown().should('contain','Emergency')
   scoc.pageErStatusDropdown().should('contain','Not Emergency')
   scoc.pageErStatusDropdown().should('contain','Clear')
})

When('the user hovers on the isplanned dropdown', ()=>{
   cy.observer();
   scoc.pageStatus().eq(3).trigger('mouseover')
})


Then('the isplanned dropdown is opened', ()=>{
   cy.observer();
   scoc.pageIsPlannedDropdown().should('exist')
   scoc.pageIsPlannedDropdown().should('contain','Yes')
   scoc.pageIsPlannedDropdown().should('contain','No')
   scoc.pageIsPlannedDropdown().should('contain','Clear')
})

Then("the table should exist", () => {
   cy.observer();
   cy.get("thead.ant-table-thead th").then(($th) => {
     cy.fixture("scoc.json").then((columnNames) => {
       const expectedColumns = columnNames.columnNames;
       const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim()); 
       expect(actualColumns).to.include.members(expectedColumns);
     });
   });
 });
 

When('the user clicks on the search bar', ()=>{
   cy.observer();
   scoc.pageSearch().click()
})

Then('the search dropdown is opened', ()=>{
   cy.observer();
  scoc.pageSearchDropdown().should('exist')
  scoc.pageSearchDropdown().should('be.visible')
})

When('the user clicks on the segment bar', ()=>{
   cy.observer();
   scoc.pageSegment().click()
})

Then('the segment dropdown is opened', ()=>{
   cy.observer();
  scoc.pageSegmentDropdown().should('exist')
  scoc.pageSegmentDropdown().should('be.visible')
})

When('the user clicks on the details button', ()=>{
   cy.observer();
   scoc.pageDetails().eq(0).click()
})


Then('a modal opens', ()=>{
   cy.observer();
   scoc.pageModal().should('exist')
   scoc.pageModal().should('be.visible')
})
 

When('the user clicks on dashboard', ()=>{
   cy.observer();
   scoc.pageDashboard().click()
})

Then('the dashboard page opens', ()=>{
   cy.observer();
   cy.url().should('contain', 'dashboard')
})
 

// Then('the tab contains created, approved, pending and completed', ()=>{
//    cy.observer();
//    scoc.pageStatusBar().should('contain', 'Created')
//    scoc.pageStatusBar().should('contain', 'Approved')
//    scoc.pageStatusBar().should('contain', 'Pending')
//    scoc.pageStatusBar().should('contain', 'Completed')
// })

// Then("a table should exist", () => {
//    cy.get("thead.ant-table-thead th").then(($th) => {
//      cy.fixture("specialized_purchase.json").then((columnNames) => {
//        const expectedColumns = columnNames.columnNames;
//        const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim()); 
//        expect(actualColumns).to.include.members(expectedColumns);
//      });
//    });
//  });


// Then('the user clicks on completed', ()=>{
//    cy.observer();
//    scoc.pageCompleted().click()
// })

// Then("a table is updated", () => {
//   cy.get("thead.ant-table-thead th").then(($th) => {
//     const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim());

//     cy.fixture("specialized_purchase_updated.json").then((columnNames) => {
//       const expectedColumns = columnNames.columnNames;

//       expect(actualColumns).to.include.deep.members(expectedColumns);
//       cy.log("Table columns are as expected.");
//     });
//   });
// });


// When('the user clicks on dashboard', ()=>{
//    cy.observer();
//    scoc.pageDashboard().click()
// })

// Then('the dashboard page opens', ()=>{
//    cy.url().should('contain', 'metrics')
// })
 

// When('the user clicks on the locations dropdown', ()=>{
//    cy.observer();
//    scoc.pageDashboardDropdown().eq(0).click()
// })

// Then('the location dropdown is opened', ()=>{
//    scoc.pageLocationDropdown().eq(0).should('contain', 'All locations')
//    scoc.pageLocationDropdown().eq(0).should('contain', 'NHL')
//    scoc.pageLocationDropdown().eq(0).should('contain', 'MAK')
//    scoc.pageLocationDropdown().eq(0).should('contain', 'MAD')
//    scoc.pageLocationDropdown().eq(0).should('contain', 'ASR')
//    scoc.pageLocationDropdown().eq(0).should('contain', 'DAM')
// })

// When('the user clicks on the average stock dropdown', ()=>{
//    cy.observer();
//    scoc.pageDashboardDropdown().eq(1).click()
// })

// Then('the average stock dropdown is opened', ()=>{
//    scoc.pageLocationDropdown().eq(1).should('contain', 'By location')
//    scoc.pageLocationDropdown().eq(1).should('contain', 'By Category')
// })


// When('the user clicks on the expiry of reagents dropdown', ()=>{
//    cy.observer();
//    scoc.pageDashboardDropdown().eq(2).click()
// })

// Then('the expiry of reagents dropdown is opened', ()=>{
//    scoc.pageLocationDropdown().eq(2).should('contain', '< 1 month')
//    scoc.pageLocationDropdown().eq(2).should('contain', '1 - 3 months')
//    scoc.pageLocationDropdown().eq(2).should('contain', '3+ months')
// })

// When('the user clicks on the average number of days of stocks dropdown', ()=>{
//    cy.observer();
//    scoc.pageDashboardDropdown().eq(3).click()
// })

// Then('the average number of days of stocks dropdown is opened', ()=>{
//    scoc.pageLocationDropdown().eq(3).should('contain', 'All categories')
//    scoc.pageLocationDropdown().eq(3).should('contain', 'Consumables')
//    scoc.pageLocationDropdown().eq(3).should('contain', 'PPE')
//    scoc.pageLocationDropdown().eq(3).should('contain', 'Reagent')
// })


When('the user clicks on transfer', ()=>{
   cy.observer();
   scoc.pageTransfer().click()
})

Then('the transfer page opens', ()=>{
   cy.observer();
   cy.url().should('contain', 'inventory_transfer_overview')
})
 

When('the user clicks on Tickets', ()=>{
   cy.observer();
   scoc.pageTickets().click()
})

Then('the tickets page opens', ()=>{
   cy.observer();
   cy.url().should('contain', 'tickets')
})
 


Then("a table is shown", () => {
   cy.observer();
   // cy.wait(1000);
   cy.get("thead.ant-table-thead th").then(($th) => {
     const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim());
 
     cy.fixture("scoc_transfer.json").then((columnNames) => {
       const expectedColumns = columnNames.columnNames;
 
      
         expect(actualColumns).to.include.deep.members(expectedColumns);
         cy.log("Table columns are as expected.");
       
     });
   });
 });
 

When ('the user clicks on inventory of medical supply',()=>{
   cy.observer();
   scoc.pagePharma().click();
   scoc.pageMedicalSupplies().click();
   scoc.pageInventoryMedicalSupplies().click();

})

Then('the inventory is opened', ()=>{
   cy.observer();
   cy.url().should('contain', 'inventory')
})

Then("a new table is shown", () => {
   cy.observer();
   // cy.wait(2000);
   cy.get('.ant-tabs-nav-list').should('exist')
   // cy.get('.ant-tabs-nav-list').trigger('mouseover')
   cy.get(".ant-tabs-nav-list").then(($th) => {
     const actualColumns = $th.find(".ant-tabs-tab").toArray().map((el) => Cypress.$(el).text().trim());
 
     cy.fixture("scoc_medical_inventory.json").then((columnNames) => {
       const expectedColumns = columnNames.columnNames;
 

         expect(actualColumns).to.include.deep.members(expectedColumns);
         cy.log("Table columns are as expected.");

     });
   });
 });
 


 When('the user clicks on transfer of Medical Supply', ()=>{
   cy.observer();
   scoc.pageMedicalSupplies().click();
   scoc.pageTransferMedicalSupplies().click()
})

Then('the transfer page of Medical Supply opens', ()=>{
   cy.observer();
   cy.url().should('contain', 'inventory_transfer_overview')
})


When('the user clicks on transfer of Labs', ()=>{
   cy.observer();
   scoc.pagePharma().click();
   scoc.pageLabs().click();
   scoc.pageTransferLabs().click()
})


When ('the user clicks on inventory of Labs',()=>{
   cy.observer();
   scoc.pagePharma().click();
   scoc.pageLabs().click();
   scoc.pageInventoryLabs().click();
})