/// <reference types="Cypress" />
import SLATicketsPage from "./SLATickets.po";
import  loginPage  from '../loginPage/loginPage.po.js';

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const login = new loginPage();

const SLATickets= new SLATicketsPage(login);


Given ('user navigates to the SLATickets page',()=>{
    cy.observer();
    login.pageUrl()
    login.pageUserName().type('m.lechheb@xpl-solutions.com');
    login.pagePassword().type('12345678')
    login.pageSubmitButton().click();
    

    // cy.intercept(
    //         'GET',
    //         'https://uat.labprox.com/api/1.0/transport/tickets/sla-ticket?fromAppointmentDate=2023-05-14T23:00:00Z&toAppointmentDate=2023-05-29T22:59:59Z&labType=tms',
    //         {
    //           statusCode: 200,
    //     //       body: '{"queryType":"regularQuery","results":[{"query":{"timeDimensions":[{"dimension":"Tickets.appointmentDate","granularity":"day","dateRange":["2023-05-15T00:00:00.000","2023-05-29T23:59:59.999"]}],"segments":["Tickets.typeFiter"],"measures":["Tickets.lowTicket","Tickets.mediumTicket","Tickets.highTicket","Tickets.criticalTicket"],"order":[],"filters":[{"operator":"equals","values":["0"],"member":"Tickets.isHajj"},{"operator":"equals","values":["tms"],"member":"Tickets.locationType"}],"timezone":"UTC","dimensions":[],"queryType":"regularQuery"},"data":[],"lastRefreshTime":"2023-05-29T07:10:21.823Z","annotation":{"measures":{"Tickets.lowTicket":{"title":"Tickets Low Tickets","shortTitle":"Low Tickets","type":"number","drillMembers":[],"drillMembersGrouped":{"measures":[],"dimensions":[]}},"Tickets.mediumTicket":{"title":"Tickets Medium Tickets","shortTitle":"Medium Tickets","type":"number","drillMembers":[],"drillMembersGrouped":{"measures":[],"dimensions":[]}},"Tickets.highTicket":{"title":"Tickets High Tickets","shortTitle":"High Tickets","type":"number","drillMembers":[],"drillMembersGrouped":{"measures":[],"dimensions":[]}},"Tickets.criticalTicket":{"title":"Tickets Critical Tickets","shortTitle":"Critical Tickets","type":"number","drillMembers":[],"drillMembersGrouped":{"measures":[],"dimensions":[]}}},"dimensions":{},"segments":{"Tickets.typeFiter":{"title":"Tickets Type Fiter","shortTitle":"Type Fiter"}},"timeDimensions":{"Tickets.appointmentDate.day":{"title":"Tickets Appointment Date","shortTitle":"Appointment Date","type":"time"},"Tickets.appointmentDate":{"title":"Tickets Appointment Date","shortTitle":"Appointment Date","type":"time"}}}}],"pivotQuery":{"timeDimensions":[{"dimension":"Tickets.appointmentDate","granularity":"day","dateRange":["2023-05-15T00:00:00.000","2023-05-29T23:59:59.999"]}],"segments":["Tickets.typeFiter"],"measures":["Tickets.lowTicket","Tickets.mediumTicket","Tickets.highTicket","Tickets.criticalTicket"],"order":[],"filters":[{"operator":"equals","values":["0"],"member":"Tickets.isHajj"},{"operator":"equals","values":["tms"],"member":"Tickets.locationType"}],"timezone":"UTC","dimensions":[],"queryType":"regularQuery"}}'
    //         }
    // ).as('GetSLA');
    SLATickets.pageSLA().click({ force: true });    cy.wait(3000);
    // cy.wait('@GetSLA');
    cy.wait(1000)
    cy.url().should('contain', 'sla-tickets')
})


When ('the user clicks on the Download button', ()=>{
    cy.observer();
    SLATickets.pageDownloadButton().click({ force: true })   
    // cy.wait(1000)
})


Then('an excel file is downloaded', ()=>{
    const path = require('path');
    const today = new Date().toISOString().split('T')[0];
    const fileName = `SLA_Tickets_${today}.xlsx`;
    const filePath = path.join(Cypress.config('downloadsFolder'), fileName).replace(/\//g, '\\');
    cy.wait(1000);
    cy.readFile(filePath).should('exist');
    // alert('Filename:\n'+fileName +'\nPath:\n'+filePath);
})

// When('the user clicks on the Download button', () => {
//     cy.observer();
//     const today = new Date().toISOString().split('T')[0];
//     const fileName = `SLA_Tickets_${today}.xlsx`;
//     const filePath = `downloads/${fileName}`;
//     cy.pageSLA().find('.download-button').click({ force: true });
//     cy.downloadFile(cy.pageSLA(), filePath);
//   });
  
// Then('an excel file is downloaded', () => {
//    const today = new Date().toISOString().split('T')[0];
//    const fileName = `SLA_Tickets_${today}.xlsx`;
//    const filePath = `downloads/${fileName}`;
//    cy.readFile(filePath).should('exist');
// });
  
