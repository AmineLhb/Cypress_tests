/// <reference types="Cypress" />
import nonmoh from "./non_moh.po";
import  loginPage  from '../loginPage/loginPage.po.js';

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { should } from "chai";

const login = new loginPage();

const non_moh= new nonmoh(login);

Given ('user navigates to the Non_Moh page',()=>{
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
    non_moh.pageSpecializedLab().click();
    non_moh.pageNonMoh().click();
    non_moh.pagePurchase().click();
    cy.url().should('contain', 'purchase')
})

When('the user clicks on the second tab', ()=>{
    cy.observer();
    non_moh.pageTab().eq(1).click()
})

Then('the second tab is selected', ()=>{
   cy.observer();
   cy.get('.ant-tabs-tab.ant-tabs-tab-active').should('exist')
})


When('the user clicks on the select brand dropdown', ()=>{
   cy.observer();
   non_moh.pageSelectBrand().click()
})

Then('the select brand dropdown is opened', ()=>{
   cy.observer();
   non_moh.pageSelectBrandDropdown().should('exist');
   non_moh.pageSelectBrandDropdown().should('contain', 'Roche');
   non_moh.pageSelectBrandDropdown().should('contain', 'Thermo Fisher');
   non_moh.pageSelectBrandDropdown().should('contain', 'Boineer');
   non_moh.pageSelectBrandDropdown().should('contain', 'Abbott');
   non_moh.pageSelectBrandDropdown().should('contain', 'Perkin Elmer');
   non_moh.pageSelectBrandDropdown().should('contain', 'Altona');
   non_moh.pageSelectBrandDropdown().should('contain', 'Quidel');
   non_moh.pageSelectBrandDropdown().should('contain', 'Co Diagnostics');
   non_moh.pageSelectBrandDropdown().should('contain', 'Kogene');
   non_moh.pageSelectBrandDropdown().should('contain', 'Solgent');
})

 

Then("a table is shown", () => {
   cy.observer();
   // cy.wait(1000);
   cy.get("thead.ant-table-thead th").then(($th) => {
     const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim());
 
     cy.fixture("non_moh_tab.json").then((columnNames) => {
         const expectedColumns = columnNames.columnNames;
         expect(actualColumns).to.include.deep.members(expectedColumns);
         cy.log("Table columns are as expected.");
       
     });
   });
 });
 
When ('the user clicks on inventory',()=>{
   cy.observer();
   non_moh.pageInventory().click();
})

Then('the inventory is opened', ()=>{
   cy.observer();
   cy.url().should('contain', 'inventory')
})


When('the user hovers on the status dropdown', ()=>{
   cy.observer();
   non_moh.pageStatus().eq(0).trigger('mouseover')
})

Then('the status dropdown is opened', ()=>{
   cy.observer();
   non_moh.pageStatusDropdown().should('exist')
   non_moh.pageStatusDropdown().should('contain','OOS')
   non_moh.pageStatusDropdown().should('contain','NOOS')
   non_moh.pageStatusDropdown().should('contain','SS')
   non_moh.pageStatusDropdown().should('contain','OS')
   non_moh.pageStatusDropdown().should('contain','Clear Status')
   cy.wait(2000)
   non_moh.pageStatus().eq(0).trigger('mouseout')
})


When('the user clicks on the edit button', ()=>{
   cy.observer();
   non_moh.pageEdit().eq(0).click({force:true})
})


Then('a modal opens', ()=>{
   cy.observer();
   non_moh.pageModal().should('exist')
   non_moh.pageModal().should('be.visible')
})


Then("a table should exist", () => {
   cy.observer();
   // cy.wait(1000);
   cy.get("thead.ant-table-thead th").then(($th) => {
     const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim());
 
     cy.fixture("non_moh.json").then((columnNames) => {
         const expectedColumns = columnNames.columnNames;
         expect(actualColumns).to.include.deep.members(expectedColumns);
         cy.log("Table columns are as expected.");
       
     });
   });
 });


 Then("a nupco table should exist", () => {
   cy.observer();
   // cy.wait(1000);
   cy.get("thead.ant-table-thead th").then(($th) => {
     const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim());
 
     cy.fixture("non_moh_nupco.json").then((columnNames) => {
         const expectedColumns = columnNames.columnNames;
         expect(actualColumns).to.include.deep.members(expectedColumns);
         cy.log("Table columns are as expected.");
       
     });
   });
 });


 When ('the user clicks on nupco inventory',()=>{
   cy.observer();
   non_moh.pageNupcoInventory().click();
})

Then('the nupco inventory is opened', ()=>{
   cy.observer();
   cy.url().should('contain', 'nupco-inventory')
})



When('the user clicks on lab status', () => {
   cy.observer();
   non_moh.pageLabStatus().click();
});

Then('the lab status page opens', () => {
   cy.observer();
   cy.url().should('contain', 'survey');
});

Then('the Lab Capacity form field should exist', () => {
   cy.observer();
   cy.get('.ant-input-number-input').eq(0).should('exist');
});

Then('the Lab Turn Around Time form field should exist', () => {
   cy.observer();
   cy.get('.ant-input-number-input').eq(1).should('exist');
});

Then('the Manpower form field should exist', () => {
   cy.observer();
   cy.get('.ant-input-number-input').eq(2).should('exist');
});

Then('the Lab Operational Hours form field should exist', () => {
   cy.observer();
   cy.get('.ant-input-number-input').eq(3).should('exist');
});

Then('the Extraction form field should exist', () => {
   cy.observer();
   cy.get('.ant-select-selector').eq(0).should('exist');
   cy.get('.ant-select-selector').eq(0).click()
   cy.get('.ant-select-item.ant-select-item-option').eq(0).click()
   cy.get('.ant-input-number-input').eq(4).should('exist')
   cy.get('.ant-input-number-input').eq(5).should('exist')
   cy.get('.ant-btn.ant-btn-dashed').eq(0).should('exist')
   
});

Then('the PCR form field should exist', () => {
   cy.observer();
   cy.get('.ant-select-selector').eq(1).should('exist');
   cy.get('.ant-select-selector').eq(1).click()
   cy.get('.ant-select-item.ant-select-item-option').eq(12).click()
   cy.get('.ant-input-number-input').eq(6).should('exist')
   cy.get('.ant-input-number-input').eq(7).should('exist')
   cy.get('.ant-btn.ant-btn-dashed').eq(1).should('exist')

});

When('the user clicks on add field', () => {
   cy.observer();
   cy.get('.ant-btn.ant-btn-dashed').eq(0).click()
   cy.get('.ant-btn.ant-btn-dashed').eq(1).click()
})

Then('another field is added', () => {
   cy.observer();
   cy.get('.ant-select-selector').eq(1).should('exist');
   cy.get('.ant-select-selector').eq(3).should('exist');
});


When('the user clicks on Tickets', ()=>{
   cy.observer();
   non_moh.pageTickets().click()
})

Then('the tickets page opens', ()=>{
   cy.observer();
   cy.url().should('contain', 'tickets')
})
 

When('the user clicks on dashboard', ()=>{
   cy.observer();
   non_moh.pageDashboard().click()
})

Then('the dashboard page opens', ()=>{
   cy.url().should('contain', 'dashboard')
})
 

When('the user clicks on the locations dropdown', ()=>{
   cy.observer();
   non_moh.pageDashboardDropdown().eq(0).click()
})

Then('the location dropdown is opened', ()=>{
   non_moh.pageLocationDropdown().eq(0).should('contain', 'All locations');
   non_moh.pageLocationDropdown().eq(0).should('contain', 'King Salman Military Hospital, Tabuk');
   non_moh.pageLocationDropdown().eq(0).should('contain', 'The Military Hospital in Riyadh');
   non_moh.pageLocationDropdown().eq(0).should('contain', 'King Fahd Military Medical Complex in Dhahran');
   non_moh.pageLocationDropdown().eq(0).should('contain', 'King Faisal Specialist Hospital in Riyadh');
   non_moh.pageLocationDropdown().eq(0).should('contain', 'King Faisal Specialist Hospital in Jeddah');
   non_moh.pageLocationDropdown().eq(0).should('contain', 'King Fahd Center for Research in Jeddah');
   non_moh.pageLocationDropdown().eq(0).should('contain', 'Guard Hospital in Jeddah');
   non_moh.pageLocationDropdown().eq(0).should('contain', 'King Abdulaziz City in the National Guard in Riyadh');
})


When('the user clicks on the expiry of reagents dropdown', ()=>{
   cy.observer();
   non_moh.pageDashboardDropdown().eq(1).click()
})

Then('the expiry of reagents dropdown is opened', ()=>{
   non_moh.pageLocationDropdown().eq(1).should('contain', '< 1 month')
   non_moh.pageLocationDropdown().eq(1).should('contain', '1 - 3 months')
   non_moh.pageLocationDropdown().eq(1).should('contain', '3+ months')
})


//// Date DropDown

When("the user clicks on the date dropdown",()=>{
   cy.observer();
   non_moh.pageStartDate().click()
})

Then("a calendar popup opens",()=>{
   cy.observer();
   cy.wait(2000)
   non_moh.pageDatePopup().should("be.visible");
})

When("user clicks on a particular start date",()=>{
   cy.observer();
   
   non_moh.pageMonth().eq(0).click();

   non_moh.pageMonthPanel()
       .contains('Jun')
       .click();

   non_moh.pageYear().eq(0)
       .click();

   non_moh.pageYearPanel()
       .contains('2022')
       .click();

   non_moh.pageDate()
       .contains('20')
       .click();

   

})

Then("the start date gets selected",()=>{
   non_moh.pageStartDate().should('have.value', '2022-06-20');
   non_moh.clickAnywhere()
   cy.wait(1000)
})

When("user clicks on a particular end date",()=>{
   non_moh.pageEndDate().click()

   non_moh.pageYear().eq(1)
       .click();

   cy.wait(1000);
   non_moh.pageYearPanel().contains('2023').click();

   non_moh.pageMonthPanel()
       .contains('Aug')
       .click();


   non_moh.pageDate()
       .contains('25')
       .click();

})

Then("the end date gets selected",()=>{
   non_moh.pageEndDate().should('have.value', '2023-08-25');
})

Then("the calendar popup closes",()=>{
   non_moh.clickAnywhere()
   cy.wait(1000)
   non_moh.pageDatePopup().should("be.hidden");
})



When("the user clicks on the upload file button",()=>{
   cy.observer();
   non_moh.pageUpload().click();

})

Then("the upload file modal is opened",()=>{
   cy.observer();
   non_moh.pageUploadModal().should('exist')
   non_moh.pageUploadModal().should('be.visible')
})