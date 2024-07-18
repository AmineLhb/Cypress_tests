/// <reference types="Cypress" />
import icspage from "./Inventory_Control_Survey.po";
import  loginPage  from '../loginPage/loginPage.po.js';

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { should } from "chai";

const login = new loginPage();

const ics= new icspage(login);

Given ('user navigates to the Inventory_Control_Survey page',()=>{
   cy.observer();
    cy.visit('https://www.labprox.com/user/login')
    login.pageUserName().type('v.thadi@xpl-solutions.com');
    login.pagePassword().type('123456789')
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
    ics.pageSpecializedLab().click();
    ics.pageICS().click();
    ics.pageTeams().click();
    cy.url().should('contain', 'teams')
})
 

Then("a table is shown", () => {
   cy.observer();
   // cy.wait(1000);
   cy.get("thead.ant-table-thead th").then(($th) => {
     const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim()); 
     cy.fixture("ics_teams.json").then((columnNames) => {
         const expectedColumns = columnNames.columnNames;
         expect(actualColumns).to.include.deep.members(expectedColumns);
         cy.log("Table columns are as expected.");    
     });
   });
 });
 

When('the user clicks on the english_arabic button', ()=>{
   cy.observer();
   ics.pageSwitch().click()
})

Then('the language changes', ()=>{
  cy.observer();
  cy.get("thead.ant-table-thead th").then(($th) => {
      const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim()); 
      cy.fixture("ics_teams_ar.json").then((columnNames) => {
         const expectedColumns = columnNames.columnNames;
         expect(actualColumns).to.include.deep.members(expectedColumns);
         cy.log("Table columns are as expected.");    
      });
   });
   ics.pageCreateTeam().should('contain','إنشاء فريق')
   ics.pageSwitch().click()
})




When('the user clicks on the assign button', ()=>{
   cy.observer();
   ics.pageAssign().click()
})


Then('a modal opens', ()=>{
   cy.observer();
   ics.pageModal().should('exist')
   ics.pageModal().should('be.visible')
   cy.wait(1000)
   ics.pageClose().click()
})


When('the user clicks on the create team button', ()=>{
   cy.observer();
   ics.pageCreateTeam().click()
})


Then('another modal opens', ()=>{
   cy.observer();
   ics.pageModal().should('exist')
   ics.pageModal().should('be.visible')
   cy.wait(1000)
   ics.pageClose().click()
})


//User Management

When ('the user clicks on user management',()=>{
   cy.observer();
   ics.pageUserManagement().click();
})

Then('the user management page is opened', ()=>{
   cy.observer();
   cy.url().should('contain', 'userManagement')
})


When('the user clicks on the Add User button', ()=>{
   cy.observer();
   ics.pageAddUserButton().click()
})

Then('a form of the user opens', ()=>{
   ics.pageAddUserModal().should('be.visible');
   ics.pageUserModalTitle().should('be.visible')
   ics.pageUserModalTitle().should('contain', 'Add User Modal')
})

When('the user a name and an email', ()=>{
   cy.observer();
   ics.pageEmailModule().type('test12345@test.com');
   ics.pageNameModule().type('test12345');
})

When('the user clicks on add module', ()=>{
   cy.observer();
   ics.pageAddModuleButton().click();
})


Then('a module part is added', ()=>{
   ics.pageModuleAdded().should('be.visible')
})

When('the user chooses a module, location and role', ()=>{
   cy.observer();
   ics.pageModuleName1().click();
   cy.xpath("//div[text()='Inventory Control Survey']").click();
   ics.pageModuleRole1().click();
   cy.xpath("//div[text()='Surveyor']").click();
   cy.get('.ant-radio-input').click();
})

When('the user clicks on the submit button', ()=>{
   cy.observer();
   // cy.intercept(
   //         'POST',
   //         'https://uat.labprox.com/api/1.0/user/profile',
   //         {
   //           statusCode: 200,
   //           body: '{"name":"test12345","email":"test12345@test.com","modules":[{"name":"bgi","role":"manager","locationId":1,"customerSurveyLab":null,"locationName":"NHL","default":true}],"locationName":"NHL","locationId":1,"labType":"bgi","role":"manager"}'
   //         }
   // ).as('PostUser');
   ics.pageSubmitButton().click();
   cy.wait(1000);
})

Given ('a user already exists',()=>{
   // cy.get('.ant-input.ant-input-lg').type('test12345')
   // cy.xpath("//span[@role='img' and @aria-label='search']").click({force:true});
   cy.get('.ant-select-selection-item').click();
   cy.xpath("//div[text()='100 / page']").click();
   // cy.get('.ant-pagination-item.ant-pagination-item-7').click()
   // cy.xpath('//td[@class="ant-table-cell"]').eq(0).should('contain','test12345')
})

When('the user clicks on the update button', ()=>{
   cy.observer();
   cy.contains('td', 'test12345')
  .parent()
  .within((row) => {
    cy.xpath(".//span[@aria-label='edit']", { root: row }).should('be.visible').click();
  });

})

When("the user updates a user's location and role", ()=>{
   cy.observer();
   cy.get('.ant-select-selection-item').eq(2).click();
   cy.xpath("//div[text()='General Manager']").click();
   cy.get('.ant-select-selection-item').eq(3).click();
   cy.xpath("//div[text()='All Locations']").click();
   // cy.intercept(
   //         'PUT',
   //         'https://uat.labprox.com/api/1.0/user/3056',
   //         {
   //           statusCode: 200,
   //           body: '{"defaultModuleId":1267,"updateModules":[{"id":1267,"locationName":"MAD","locationId":3,"regionName":null,"regionId":null,"role":"superManager","name":"bgi","customerSurveyLab":null}]}'
   //         }
   // ).as('PutUser');
   ics.pageAddModuleButton().click();
   ics.pageModuleName().click();
   cy.xpath("//div[text()='ICS User_Management']").click();
   ics.pageModuleRole().click();
   cy.xpath("//div[text()='Super Admin']").click();
   ics.pageModuleLocation().click();
   cy.xpath("//div[text()='All Locations']").eq(1).click();
   ics.pageSubmitButton().click();
})

When('the user clicks on the delete button', ()=>{
   cy.observer();
   cy.wait(1000);
   cy.contains('td', 'test12345')
  .parent()
  .within((row) => {
    cy.xpath(".//span[@aria-label='delete']", { root: row }).should('be.visible').click();
  });
   cy.get('.ant-btn.ant-btn-primary.ant-btn-sm').click({force:true})
   
})

//Followup

When ('the user clicks on Followup',()=>{
   cy.observer();
   ics.pageFollowup().click();
})

Then('the Followup page is opened', ()=>{
   cy.observer();
   cy.url().should('contain', 'follow-up')
})


When('the user clicks on the second tab', ()=>{
   cy.observer();
   ics.pageTab().eq(1).click()
})

Then('the second tab is selected', ()=>{
  cy.observer();
  cy.get('.ant-tabs-tab.ant-tabs-tab-active').should('exist')
})


Then("a table should exist", () => {
   cy.observer();
   cy.get("thead.ant-table-thead th").then(($th) => {
     const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim());
 
     cy.fixture("followup.json").then((columnNames) => {
         const expectedColumns = columnNames.columnNames;
         expect(actualColumns).to.include.deep.members(expectedColumns);
         cy.log("Table columns are as expected.");
       
     });
   });
 });

 Then("the table changes", () => {
   cy.observer();
   // cy.wait(1000);
   cy.get("thead.ant-table-thead th").then(($th) => {
     const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim());
 
     cy.fixture("followup1.json").then((columnNames) => {
         const expectedColumns = columnNames.columnNames;
         expect(actualColumns).to.include.deep.members(expectedColumns);
         cy.log("Table columns are as expected.");
       
     });
   });
 });

 Then('the language changes to arabic', ()=>{
   cy.observer();
   cy.get("thead.ant-table-thead th").then(($th) => {
       const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim()); 
       cy.fixture("followup_ar.json").then((columnNames) => {
          const expectedColumns = columnNames.columnNames;
          expect(actualColumns).to.include.deep.members(expectedColumns);
          cy.log("Table columns are as expected.");    
       });
    });
    cy.get('.ant-layout-content.ant-pro-basicLayout-content').should('contain','استطلاعات المتابعة')
    ics.pageSwitch().click()
 })


 //Delegate

When ('the user clicks on Delegate',()=>{
   cy.observer();
   ics.pageDelegate().click();
})

Then('the Delegate page is opened', ()=>{
   cy.observer();
   cy.url().should('contain', 'delegate')
})


// When('the user clicks on the second tab', ()=>{
//    cy.observer();
//    ics.pageTab().eq(1).click()
// })

// Then('the second tab is selected', ()=>{
//   cy.observer();
//   cy.get('.ant-tabs-tab.ant-tabs-tab-active').should('exist')
// })


Then("table should exist", () => {
   cy.observer();
   cy.get("thead.ant-table-thead th").then(($th) => {
     const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim());
 
     cy.fixture("delegate.json").then((columnNames) => {
         const expectedColumns = columnNames.columnNames;
         expect(actualColumns).to.include.deep.members(expectedColumns);
         cy.log("Table columns are as expected.");
       
     });
   });
 });

 Then('the language changes from english to arabic', ()=>{
   cy.observer();
   cy.get("thead.ant-table-thead th").then(($th) => {
       const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim()); 
       cy.fixture("delegate_ar.json").then((columnNames) => {
          const expectedColumns = columnNames.columnNames;
          expect(actualColumns).to.include.deep.members(expectedColumns);
          cy.log("Table columns are as expected.");    
       });
    });
    ics.pageCreateTeam().should('contain','طلب مندوب')
    ics.pageSwitch().click()
 })

 When('the user clicks on the request delegate button', ()=>{
   cy.observer();
   ics.pageCreateTeam().click()
})


Then('another modal opens', ()=>{
   cy.observer();
   ics.pageModal().should('exist')
   ics.pageModal().should('be.visible')
   cy.wait(1000)
   ics.pageClose().click()
})


//Survey Page

When ('the user clicks on Survey',()=>{
   cy.observer();
   ics.pageSurvey().click();
})

Then('the Survey page is opened', ()=>{
   cy.observer();
   cy.url().should('contain', 'surveys')
})


Then("a new table should exist", () => {
   cy.observer();
   cy.get("thead.ant-table-thead th").should('exist')
   cy.get("thead.ant-table-thead th").then(($th) => {
      const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim());
   
      cy.fixture("ics_survey.json").then((columnNames) => {
          const expectedColumns = columnNames.columnNames;
          expect(actualColumns).to.include.deep.members(expectedColumns);
          cy.log("Table columns are as expected.");
        
      });
    });
 });



When('the user clicks on the remind button', ()=>{
   cy.observer();
   ics.pageCreateTeam().eq(0).click()
})


Then('a box opens', ()=>{
   cy.observer();
   ics.pageBox().should('exist')
   ics.pageBox().should('be.visible')
   ics.pageBox().should('contain','Remind Team Supervisor!')
   cy.wait(1000)
   cy.get('.ant-btn.ant-btn-sm').eq(0).click()
})


 Then('the language switches from english to arabic', ()=>{
   cy.observer();
   cy.get("thead.ant-table-thead th").then(($th) => {
       const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim()); 
       cy.fixture("ics_survey_ar.json").then((columnNames) => {
          const expectedColumns = columnNames.columnNames;
          expect(actualColumns).to.include.deep.members(expectedColumns);
          cy.log("Table columns are as expected.");    
       });
    });
    ics.pageSwitch().click()
 })

 When('the user clicks on the second tab of the survey page', ()=>{
   cy.observer();
   ics.pageTab().eq(1).click()
})

Then('the second tab of the survey page is selected', ()=>{
  cy.observer();
  cy.get('.ant-tabs-tab.ant-tabs-tab-active').should('exist')
  cy.get("thead.ant-table-thead th").then(($th) => {
   const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim());

   cy.fixture("ics_survey1.json").then((columnNames) => {
       const expectedColumns = columnNames.columnNames;
       expect(actualColumns).to.include.deep.members(expectedColumns);
       cy.log("Table columns are as expected.");
     
   });
 });
})

When('the user clicks on the third tab of the survey page', ()=>{
   cy.observer();
   ics.pageTab().eq(2).click()
})

Then('the third tab of the survey page is selected', ()=>{
  cy.observer();
  cy.get('.ant-tabs-tab.ant-tabs-tab-active').should('exist')
  cy.get("thead.ant-table-thead th").then(($th) => {
   const actualColumns = $th.toArray().map((el) => Cypress.$(el).text().trim());

   cy.fixture("ics_survey2.json").then((columnNames) => {
       const expectedColumns = columnNames.columnNames;
       expect(actualColumns).to.include.deep.members(expectedColumns);
       cy.log("Table columns are as expected.");
     
   });
 });
})



//Survey Search Page

When ('the user clicks on Survey Search',()=>{
   cy.observer();
   ics.pageSurveySearch().click();
})

Then('the Survey Search page is opened', ()=>{
   cy.observer();
   cy.url().should('contain', 'search')
})

When('the user clicks on the search bar', ()=>{
   cy.observer();
   ics.pageSearch().click()
})

Then('the search dropdown is opened', ()=>{
   cy.observer();
  ics.pageSearchDropdown().should('exist')
  ics.pageSearchDropdown().should('be.visible')
})


Then('the language switches', ()=>{
   cy.observer();
    cy.get('.ant-select-selection-placeholder').should('contain','أدخل النص للبحث')
    ics.pageSearch().click()
    cy.get('.ant-select-item-empty').should('contain','لاتوجد بيانات')
    ics.pageSwitch().click()
 })