/// <reference types="Cypress" />
import Survey from "./Customer_Survey.po";
import  loginPage  from '../loginPage/loginPage.po.js';

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { should } from "chai";

const login = new loginPage();

const survey= new Survey(login);

Given ('user navigates to the Customer Survey page',()=>{
   cy.observer();
    login.pageUrl()
    login.pageUserName().type('anish.xpl@gmail.com');
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
    survey.pageSpecializedLab().click();
    survey.pageCustomerSurvey().click();
})

When("the user clicks on satisfaction survey",()=>{
   survey.pageSatisfaction().click();
})

Then("the satisfaction survey page is opened",()=>{
   cy.url().should('contain', 'satisfaction')
})

Then("the table should exist", () => {
   cy.observer();
   cy.get("thead.ant-table-thead th").then(($th) => {
     cy.fixture("survey.json").then((columnNames) => {
       const expectedColumns = columnNames.columnNames;
       const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim()); 
       expect(actualColumns).to.include.members(expectedColumns);
     });
   });
 });
 

When('the user clicks on the region bar', ()=>{
   cy.observer();
   survey.pageRegion().eq(0).click()
})

Then('the region dropdown is opened', ()=>{
   cy.observer();
  survey.pageRegionDropdown().should('exist')
  survey.pageRegionDropdown().should('be.visible')
})


When('the user clicks on the hospital bar', ()=>{
   cy.observer();
   survey.pageHospital().click()
})

Then('the hospital dropdown is opened', ()=>{
   cy.observer();
  survey.pageHospitalDropdown().should('exist')
  survey.pageHospitalDropdown().should('be.visible')
  cy.wait(1000);
  survey.pageHospitalDropdownFirst().click()
})



When('the user clicks on the search bar', ()=>{
   cy.observer();
   survey.pageSearch().click()
})

Then('the search dropdown is opened', ()=>{
   cy.observer();
  survey.pageSearchDropdown().should('exist')
  survey.pageSearchDropdown().should('be.visible')
})




When('the user clicks on dashboard', ()=>{
   cy.observer();
   survey.pageDashboard().click()
})

Then('the dashboard page opens', ()=>{
   cy.observer();
   cy.url().should('contain', 'dashboard')
})
 

When('the user clicks on the locations dropdown', ()=>{
   cy.observer();
   survey.pageLocation().click()
})

Then('the location dropdown is opened', ()=>{
   survey.pageLocationDropdown().should('contain', 'NHL');
   survey.pageLocationDropdown().should('contain', 'MAK');
   survey.pageLocationDropdown().should('contain', 'MAD');
   survey.pageLocationDropdown().should('contain', 'ASR');
   survey.pageLocationDropdown().should('contain', 'DAM');
   survey.pageLocationDropdown().should('contain', 'The regional laboratory in Riyadh');
   survey.pageLocationDropdown().should('contain', 'Regional laboratory in Jeddah');
   survey.pageLocationDropdown().should('contain', 'Regional laboratory in Makkah');
   survey.pageLocationDropdown().should('contain', 'The regional laboratory in Medina');
})


When('the user clicks on the labtypes dropdown', ()=>{
   cy.observer();
   survey.pageLabTypes().click()
})

Then('the labtypes dropdown is opened', ()=>{
  survey.pageLocationDropdown().should('contain', 'BGI');
  survey.pageLocationDropdown().should('contain', 'MOH');
  survey.pageLocationDropdown().should('contain', 'Non-MOH');
  survey.pageLocationDropdown().should('contain', 'Central Bloodbank');
  survey.pageLocationDropdown().should('contain', 'Branch Bloodbank');
  survey.pageLocationDropdown().should('contain', 'Peripheral Bloodbank');
  survey.pageLocationDropdown().should('contain', 'BloodBank Insights');
  survey.pageLocationDropdown().should('contain', 'Poison Control Centres');
})


//// Date DropDown

When("the user clicks on the date dropdown",()=>{
   cy.observer();
   survey.pageStartDate().click()
})

Then("a calendar popup opens",()=>{
   cy.observer();
   cy.wait(2000)
   survey.pageDatePopup().should("be.visible");
})

When("user clicks on a particular start date",()=>{
   cy.observer();
   
   survey.pageMonth().eq(0).click();

   survey.pageMonthPanel()
       .contains('Jun')
       .click();

   survey.pageYear().eq(0)
       .click();

   survey.pageYearPanel()
       .contains('2022')
       .click();

   survey.pageDate()
       .contains('20')
       .click();

   

})

Then("the start date gets selected",()=>{
   survey.pageStartDate().should('have.value', '2022-06-20');
   survey.clickAnywhere()
   cy.wait(1000)
})

When("user clicks on a particular end date",()=>{
   survey.pageEndDate().click()

   survey.pageYear().eq(1)
       .click();

   cy.wait(1000);
   survey.pageYearPanel().contains('2023').click();

   survey.pageMonthPanel()
       .contains('Aug')
       .click();


   survey.pageDate()
       .contains('25')
       .click();

})

Then("the end date gets selected",()=>{
   survey.pageEndDate().should('have.value', '2023-08-25');
})

Then("the calendar popup closes",()=>{
   survey.clickAnywhere()
   cy.wait(1000)
   survey.pageDatePopup().should("be.hidden");
})



When("the user clicks on the upload file button",()=>{
   cy.observer();
   survey.pageUpload().click();

})

Then("the upload file modal is opened",()=>{
   cy.observer();
   survey.pageUploadModal().should('exist')
   survey.pageUploadModal().should('be.visible')
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
//    survey.pagePharma().click();
//    survey.pageMedicalSupplies().click();
//    survey.pageInventoryMedicalSupplies().click();

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
//    survey.pageMedicalSupplies().click();
//    survey.pageTransferMedicalSupplies().click()
// })

// Then('the transfer page of Medical Supply opens', ()=>{
//    cy.observer();
//    cy.url().should('contain', 'inventory_transfer_overview')
// })


// When('the user clicks on transfer of Labs', ()=>{
//    cy.observer();
//    survey.pagePharma().click();
//    survey.pageLabs().click();
//    survey.pageTransferLabs().click()
// })


// When ('the user clicks on inventory of Labs',()=>{
//    cy.observer();
//    survey.pagePharma().click();
//    survey.pageLabs().click();
//    survey.pageInventoryLabs().click();
// })