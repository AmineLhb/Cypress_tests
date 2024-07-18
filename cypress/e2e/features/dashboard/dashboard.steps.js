/// <reference types="Cypress" />
import dashboardPage from "./dashboard.po";
import  loginPage  from '../loginPage/loginPage.po.js';

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const login = new loginPage();

const dashboard= new dashboardPage(login);

Given ('user navigates to the dashboard page',()=>{
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
    cy.url().should('contain', 'dashboard')
})


////////// Transport Providers Dropdown

When ('the user clicks on transport providers dropdown', ()=>{
    cy.observer();
    dashboard.pageTransportProvidersDropdown().should('contain','All Transport Providers');
    dashboard.pageTransportProvidersDropdown().invoke('show')
    cy.wait(5000)
    dashboard.pageTransportProvidersDropdown().click({ force: true })    
})

Then('list of transport providers opens', ()=>{
    dashboard.pageTransportProvidersOptions().its('length').should('eq',4)
    dashboard.pageTransportProvidersOptions().eq(0).should('contain', 'All Transport Providers')
    dashboard.pageTransportProvidersOptions().eq(1).should('contain', 'SMSA')
    dashboard.pageTransportProvidersOptions().eq(2).should('contain', 'MTC')
    dashboard.pageTransportProvidersOptions().eq(3).should('contain', 'SPL')
})

When("user clicks on 'All Transport Providers'",()=>{
    // cy.intercept(
    //         'GET',
    //         'https://uat.labprox.com/api/1.0/dashboard/v1/load?query=%7B%22timeDimensions%22%3A%5B%7B%22dimension%22%3A%22Tickets.appointmentDate%22%2C%22granularity%22%3A%22day%22%2C%22dateRange%22%3A%5B%222023-05-15%22%2C%222023-05-29%22%5D%7D%5D%2C%22segments%22%3A%5B%22Tickets.typeFiter%22%5D%2C%22measures%22%3A%5B%22Tickets.lowTicket%22%2C%22Tickets.mediumTicket%22%2C%22Tickets.highTicket%22%2C%22Tickets.criticalTicket%22%5D%2C%22order%22%3A%7B%7D%2C%22filters%22%3A%5B%7B%22dimension%22%3A%22Tickets.isHajj%22%2C%22operator%22%3A%22equals%22%2C%22values%22%3A%5B%220%22%5D%7D%2C%7B%22dimension%22%3A%22Tickets.locationType%22%2C%22operator%22%3A%22equals%22%2C%22values%22%3A%5B%22tms%22%5D%7D%5D%7D&queryType=multi',
    //         {
    //           statusCode: 200,
    //           body: '{"queryType":"regularQuery","results":[{"query":{"timeDimensions":[{"dimension":"Tickets.appointmentDate","granularity":"day","dateRange":["2023-05-15T00:00:00.000","2023-05-29T23:59:59.999"]}],"segments":["Tickets.typeFiter"],"measures":["Tickets.lowTicket","Tickets.mediumTicket","Tickets.highTicket","Tickets.criticalTicket"],"order":[],"filters":[{"operator":"equals","values":["0"],"member":"Tickets.isHajj"},{"operator":"equals","values":["tms"],"member":"Tickets.locationType"}],"timezone":"UTC","dimensions":[],"queryType":"regularQuery"},"data":[],"lastRefreshTime":"2023-05-29T10:00:12.473Z","annotation":{"measures":{"Tickets.lowTicket":{"title":"Tickets Low Tickets","shortTitle":"Low Tickets","type":"number","drillMembers":[],"drillMembersGrouped":{"measures":[],"dimensions":[]}},"Tickets.mediumTicket":{"title":"Tickets Medium Tickets","shortTitle":"Medium Tickets","type":"number","drillMembers":[],"drillMembersGrouped":{"measures":[],"dimensions":[]}},"Tickets.highTicket":{"title":"Tickets High Tickets","shortTitle":"High Tickets","type":"number","drillMembers":[],"drillMembersGrouped":{"measures":[],"dimensions":[]}},"Tickets.criticalTicket":{"title":"Tickets Critical Tickets","shortTitle":"Critical Tickets","type":"number","drillMembers":[],"drillMembersGrouped":{"measures":[],"dimensions":[]}}},"dimensions":{},"segments":{"Tickets.typeFiter":{"title":"Tickets Type Fiter","shortTitle":"Type Fiter"}},"timeDimensions":{"Tickets.appointmentDate.day":{"title":"Tickets Appointment Date","shortTitle":"Appointment Date","type":"time"},"Tickets.appointmentDate":{"title":"Tickets Appointment Date","shortTitle":"Appointment Date","type":"time"}}}}],"pivotQuery":{"timeDimensions":[{"dimension":"Tickets.appointmentDate","granularity":"day","dateRange":["2023-05-15T00:00:00.000","2023-05-29T23:59:59.999"]}],"segments":["Tickets.typeFiter"],"measures":["Tickets.lowTicket","Tickets.mediumTicket","Tickets.highTicket","Tickets.criticalTicket"],"order":[],"filters":[{"operator":"equals","values":["0"],"member":"Tickets.isHajj"},{"operator":"equals","values":["tms"],"member":"Tickets.locationType"}],"timezone":"UTC","dimensions":[],"queryType":"regularQuery"}}'
    //         }
    // ).as('GetDashboardTProviders');
    dashboard.pageTransportProvidersOptions().eq(0).should('contain', 'All Transport Providers').click({force: true})  
    cy.wait(3000);
    // cy.wait('@GetDashboardTProviders');
})

Then("'All Transport Providers' is selected from the dropdown",()=>{
    dashboard.pageTransportProvidersDropdown().should('contain','All Transport Providers').and('be.visible')
    dashboard.pageTransportProvidersOptions().eq(1).should('contain', 'SMSA').and('be.hidden')
    dashboard.pageTransportProvidersOptions().eq(2).should('contain', 'MTC').and('be.hidden')
    dashboard.pageTransportProvidersOptions().eq(3).should('contain', 'SPL').and('be.hidden')
})

When("user clicks on 'SMSA'",()=>{
    // cy.intercept(
    //         'GET',
    //         'https://uat.labprox.com/api/1.0/dashboard/v1/load?query=%7B%22measures%22%3A%5B%22TmsTripLog.avgTargetsla%22%2C%22TmsTripLog.avgDeliveryTime%22%5D%2C%22timeDimensions%22%3A%5B%7B%22dimension%22%3A%22TmsTripLog.createdOn%22%2C%22dateRange%22%3A%5B%222023-05-15%22%2C%222023-05-29%22%5D%7D%5D%2C%22dimensions%22%3A%5B%22TmsTripLog.region%22%5D%2C%22filters%22%3A%5B%7B%22dimension%22%3A%22TmsTripLog.isHajj%22%2C%22operator%22%3A%22equals%22%2C%22values%22%3A%5B%220%22%5D%7D%2C%7B%22dimension%22%3A%22TmsTripLog.locationType%22%2C%22operator%22%3A%22equals%22%2C%22values%22%3A%5B%22tms%22%5D%7D%2C%7B%22dimension%22%3A%22TmsTripLog.provider%22%2C%22operator%22%3A%22equals%22%2C%22values%22%3A%5B%22smsa%22%5D%7D%5D%2C%22order%22%3A%7B%7D%7D&queryType=multi',
    //         {
    //           statusCode: 200,
    //           body: '{"queryType":"regularQuery","results":[{"query":{"measures":["TmsTripLog.avgTargetsla","TmsTripLog.avgDeliveryTime"],"timeDimensions":[{"dimension":"TmsTripLog.createdOn","dateRange":["2023-05-15T00:00:00.000","2023-05-29T23:59:59.999"]}],"dimensions":["TmsTripLog.region"],"filters":[{"operator":"equals","values":["0"],"member":"TmsTripLog.isHajj"},{"operator":"equals","values":["tms"],"member":"TmsTripLog.locationType"},{"operator":"equals","values":["smsa"],"member":"TmsTripLog.provider"}],"order":[],"timezone":"UTC","queryType":"regularQuery"},"data":[],"lastRefreshTime":"2023-05-29T06:23:51.848Z","annotation":{"measures":{"TmsTripLog.avgTargetsla":{"title":"Tms Trip Log Avg Targetsla","shortTitle":"Avg Targetsla","type":"number","drillMembers":[],"drillMembersGrouped":{"measures":[],"dimensions":[]}},"TmsTripLog.avgDeliveryTime":{"title":"Tms Trip Log Avg Delivery Time","shortTitle":"Avg Delivery Time","type":"number","drillMembers":[],"drillMembersGrouped":{"measures":[],"dimensions":[]}}},"dimensions":{"TmsTripLog.region":{"title":"Tms Trip Log Region","shortTitle":"Region","type":"string"}},"segments":{},"timeDimensions":{}}}],"pivotQuery":{"measures":["TmsTripLog.avgTargetsla","TmsTripLog.avgDeliveryTime"],"timeDimensions":[{"dimension":"TmsTripLog.createdOn","dateRange":["2023-05-15T00:00:00.000","2023-05-29T23:59:59.999"]}],"dimensions":["TmsTripLog.region"],"filters":[{"operator":"equals","values":["0"],"member":"TmsTripLog.isHajj"},{"operator":"equals","values":["tms"],"member":"TmsTripLog.locationType"},{"operator":"equals","values":["smsa"],"member":"TmsTripLog.provider"}],"order":[],"timezone":"UTC","queryType":"regularQuery"}}'
    //         }
    // ).as('GetDashboardSMSA');
    dashboard.pageTransportProvidersOptions().eq(1).should('contain', 'SMSA').click({force: true})
    cy.wait(3000)
    //cy.wait('@GetDashboardSMSA');
    
})

Then("'SMSA' is selected from the dropdown",()=>{
    dashboard.pageTransportProvidersDropdownSMSA().should('contain','SMSA').and('be.visible')
    dashboard.pageTransportProvidersOptions().eq(0).should('contain', 'All Transport Providers').and('be.hidden')
    dashboard.pageTransportProvidersOptions().eq(2).should('contain', 'MTC').and('be.hidden')
    dashboard.pageTransportProvidersOptions().eq(3).should('contain', 'SPL').and('be.hidden')
})

When("user clicks on 'MTC'",()=>{
    dashboard.pageTransportProvidersOptions().eq(2).should('contain', 'MTC').click({force: true})
    cy.wait(1000)
})

Then("'MTC' is selected from the dropdown",()=>{
    dashboard.pageTransportProvidersDropdownMTC().should('contain','MTC').and('be.visible')
    dashboard.pageTransportProvidersOptions().eq(0).should('contain', 'All Transport Providers').and('be.hidden')
    dashboard.pageTransportProvidersOptions().eq(1).should('contain', 'SMSA').and('be.hidden')
    dashboard.pageTransportProvidersOptions().eq(3).should('contain', 'SPL').and('be.hidden')
})

When("user clicks on 'SPL'",()=>{
    dashboard.pageTransportProvidersOptions().eq(3).should('contain', 'SPL').click({force: true})
    cy.wait(1000)
})

Then("'SPL' is selected from the dropdown",()=>{
    dashboard.pageTransportProvidersDropdownSPL().should('contain','SPL').and('be.visible')
    dashboard.pageTransportProvidersOptions().eq(0).should('contain', 'All Transport Providers').and('be.hidden')
    dashboard.pageTransportProvidersOptions().eq(2).should('contain', 'MTC').and('be.hidden')
    dashboard.pageTransportProvidersOptions().eq(1).should('contain', 'SMSA').and('be.hidden')
})


////////// Categories Dropdown

When ('the user clicks on categories dropdown', ()=>{
    cy.observer();
    dashboard.pageCategoriesDropdown().should('contain','All Categories');
    dashboard.pageCategoriesDropdown().invoke('show')
    cy.wait(5000)
    dashboard.pageCategoriesDropdown().click({ force: true })    
})

Then('list of categories opens', ()=>{
    dashboard.pageCategoriesOptions().its('length').should('eq',4)
    dashboard.pageCategoriesOptions().eq(0).should('contain', 'All Categories')
    dashboard.pageCategoriesOptions().eq(1).should('contain', 'Non-Moh')
    dashboard.pageCategoriesOptions().eq(2).should('contain', 'Moh')
    dashboard.pageCategoriesOptions().eq(3).should('contain', 'Private')
})

When("user clicks on 'All Categories'",()=>{
    dashboard.pageCategoriesOptions().eq(0).should('contain', 'All Categories').click({force: true})
    cy.wait(1000)
})

Then("'All Categories' is selected from the dropdown",()=>{
    dashboard.pageCategoriesDropdown().should('contain','All Categories').and('be.visible')
    dashboard.pageCategoriesOptions().eq(1).should('contain', 'Non-Moh').and('be.hidden')
    dashboard.pageCategoriesOptions().eq(2).should('contain', 'Moh').and('be.hidden')
    dashboard.pageCategoriesOptions().eq(3).should('contain', 'Private').and('be.hidden')
})

When("user clicks on 'Non-Moh'",()=>{
    dashboard.pageCategoriesOptions().eq(1).should('contain', 'Non-Moh').click({force: true})
    cy.wait(1000)
})

Then("'Non-Moh' is selected from the dropdown",()=>{
    dashboard.pageCategoriesDropdownNonMoh().should('contain','Non-Moh').and('be.visible')
    dashboard.pageCategoriesOptions().eq(0).should('contain', 'All Categories').and('be.hidden')
    dashboard.pageCategoriesOptions().eq(2).should('contain', 'Moh').and('be.hidden')
    dashboard.pageCategoriesOptions().eq(3).should('contain', 'Private').and('be.hidden')
})

When("user clicks on 'Moh'",()=>{
    dashboard.pageCategoriesOptions().eq(2).should('contain', 'Moh').click({force: true})
    cy.wait(1000)
})

Then("'Moh' is selected from the dropdown",()=>{
    dashboard.pageCategoriesDropdownMoh().should('contain','Moh').and('be.visible')
    dashboard.pageCategoriesOptions().eq(0).should('contain', 'All Categories').and('be.hidden')
    dashboard.pageCategoriesOptions().eq(1).should('contain', 'Non-Moh').and('be.hidden')
    dashboard.pageCategoriesOptions().eq(3).should('contain', 'Private').and('be.hidden')
})

When("user clicks on 'Private'",()=>{
    dashboard.pageCategoriesOptions().eq(3).should('contain', 'Private').click({force: true})
    cy.wait(1000)
})

Then("'Private' is selected from the dropdown",()=>{
    dashboard.pageCategoriesDropdownPrivate().should('contain','Private').and('be.visible')
    dashboard.pageCategoriesOptions().eq(0).should('contain', 'All Categories').and('be.hidden')
    dashboard.pageCategoriesOptions().eq(2).should('contain', 'Moh').and('be.hidden')
    dashboard.pageCategoriesOptions().eq(1).should('contain', 'Non-Moh').and('be.hidden')
})


////////// SLA Dropdown


When ('the user clicks on SLA dropdown', ()=>{
    cy.observer();
    dashboard.pageSLADropdown().should('contain','All SLA');
    dashboard.pageSLADropdown().invoke('show')
    cy.wait(5000)
    dashboard.pageSLADropdown().click({ force: true })    
})

Then('list of SLA opens', ()=>{
    dashboard.pageSLAOptions().its('length').should('eq',5)
    dashboard.pageSLAOptions().eq(0).should('contain', 'All SLA')
    dashboard.pageSLAOptions().eq(1).should('contain', 'SLA - 2 hr')
    dashboard.pageSLAOptions().eq(2).should('contain', 'SLA - 6 hr')
    dashboard.pageSLAOptions().eq(3).should('contain', 'SLA - 10 hr')
    dashboard.pageSLAOptions().eq(4).should('contain', 'SLA - 14 hr')
})

When("user clicks on 'All SLA'",()=>{
    dashboard.pageSLAOptions().eq(0).should('contain', 'All SLA').click({force: true})
    cy.wait(1000)
})

Then("'All SLA' is selected from the dropdown",()=>{
    dashboard.pageSLADropdown().should('contain','All SLA').and('be.visible')
    dashboard.pageSLAOptions().eq(1).should('contain', 'SLA - 2 hr').and('be.hidden')
    dashboard.pageSLAOptions().eq(2).should('contain', 'SLA - 6 hr').and('be.hidden')
    dashboard.pageSLAOptions().eq(3).should('contain', 'SLA - 10 hr').and('be.hidden')
    dashboard.pageSLAOptions().eq(4).should('contain', 'SLA - 14 hr').and('be.hidden')
})

When("user clicks on 'SLA - 2 hr'",()=>{
    dashboard.pageSLAOptions().eq(1).should('contain', 'SLA - 2 hr').click({force: true})
    cy.wait(1000)
})

Then("'SLA - 2 hr' is selected from the dropdown",()=>{
    dashboard.pageSLADropdown2().should('contain','SLA - 2 hr').and('be.visible')
    dashboard.pageSLAOptions().eq(0).should('contain', 'All SLA').and('be.hidden')
    dashboard.pageSLAOptions().eq(2).should('contain', 'SLA - 6 hr').and('be.hidden')
    dashboard.pageSLAOptions().eq(3).should('contain', 'SLA - 10 hr').and('be.hidden')
    dashboard.pageSLAOptions().eq(4).should('contain', 'SLA - 14 hr').and('be.hidden')
})

When("user clicks on 'SLA - 6 hr'",()=>{
    dashboard.pageSLAOptions().eq(2).should('contain', 'SLA - 6 hr').click({force: true})
    cy.wait(1000)
})

Then("'SLA - 6 hr' is selected from the dropdown",()=>{
    dashboard.pageSLADropdown6().should('contain','SLA - 6 hr').and('be.visible')
    dashboard.pageSLAOptions().eq(0).should('contain', 'All SLA').and('be.hidden')
    dashboard.pageSLAOptions().eq(1).should('contain', 'SLA - 2 hr').and('be.hidden')
    dashboard.pageSLAOptions().eq(3).should('contain', 'SLA - 10 hr').and('be.hidden')
    dashboard.pageSLAOptions().eq(4).should('contain', 'SLA - 14 hr').and('be.hidden')
})

When("user clicks on 'SLA - 10 hr'",()=>{
    dashboard.pageSLAOptions().eq(3).should('contain', 'SLA - 10 hr').click({force: true})
    cy.wait(1000)
})

Then("'SLA - 10 hr' is selected from the dropdown",()=>{
    dashboard.pageSLADropdown10().should('contain','SLA - 10 hr').and('be.visible')
    dashboard.pageSLAOptions().eq(0).should('contain', 'All SLA').and('be.hidden')
    dashboard.pageSLAOptions().eq(1).should('contain', 'SLA - 2 hr').and('be.hidden')
    dashboard.pageSLAOptions().eq(2).should('contain', 'SLA - 6 hr').and('be.hidden')
    dashboard.pageSLAOptions().eq(4).should('contain', 'SLA - 14 hr').and('be.hidden')
})

When("user clicks on 'SLA - 14 hr'",()=>{
    dashboard.pageSLAOptions().eq(4).should('contain', 'SLA - 14 hr').click({force: true})
    cy.wait(1000)
})

Then("'SLA - 14 hr' is selected from the dropdown",()=>{
    dashboard.pageSLADropdown14().should('contain','SLA - 14 hr').and('be.visible')
    dashboard.pageSLAOptions().eq(0).should('contain', 'All SLA').and('be.hidden')
    dashboard.pageSLAOptions().eq(1).should('contain', 'SLA - 2 hr').and('be.hidden')
    dashboard.pageSLAOptions().eq(2).should('contain', 'SLA - 6 hr').and('be.hidden')
    dashboard.pageSLAOptions().eq(3).should('contain', 'SLA - 10 hr').and('be.hidden')
})



////////// Regions Dropdown


When ('the user clicks on regions dropdown', ()=>{
    cy.observer();
    dashboard.pageRegionsDropdown().should('contain','All Regions');
    dashboard.pageRegionsDropdown().invoke('show')
    cy.wait(5000)
    dashboard.pageRegionsDropdown().click({ force: true })  
  
})

Then('list of regions opens', ()=>{
    dashboard.pageRegionsOptions().realMouseDown({ position: "top" }); 
    cy.wait(2000);
    dashboard.pageRegionsOptions().its('length').should('eq',9)
    dashboard.pageRegionsOptions().eq(0).should('contain', 'All Regions')
    dashboard.pageRegionsOptions().eq(1).should('contain', 'Abha')
    dashboard.pageRegionsOptions().eq(2).should('contain', 'Al Baha')
    dashboard.pageRegionsOptions().eq(3).should('contain', 'Al Jouf')
    dashboard.pageRegionsOptions().eq(4).should('contain', 'AlQuwayiyah')
    dashboard.pageRegionsOptions().eq(5).should('contain', 'Arar')
    dashboard.pageRegionsOptions().eq(6).should('contain', 'Bishah')
    dashboard.pageRegionsOptions().eq(7).should('contain', 'Dammam')
    dashboard.pageRegionsOptions().eq(8).should('contain', 'Hafar Al Baten')
})

When("user clicks on 'All Regions'",()=>{
    dashboard.pageRegionsOptions().eq(0).should('contain', 'All Regions').click({force: true})
    cy.wait(1000)
})

Then("'All Regions' is selected from the dropdown",()=>{
    dashboard.pageRegionsDropdown().should('contain','All Regions').and('be.visible')
    dashboard.pageRegionsOptions().eq(1).should('contain', 'Abha').and('be.hidden')
    dashboard.pageRegionsOptions().eq(2).should('contain', 'Al Baha').and('be.hidden')
    dashboard.pageRegionsOptions().eq(3).should('contain', 'Al Jouf').and('be.hidden')
    dashboard.pageRegionsOptions().eq(4).should('contain', 'AlQuwayiyah').and('be.hidden')
    dashboard.pageRegionsOptions().eq(5).should('contain', 'Arar').and('be.hidden')
    dashboard.pageRegionsOptions().eq(6).should('contain', 'Bishah').and('be.hidden')
    dashboard.pageRegionsOptions().eq(7).should('contain', 'Dammam').and('be.hidden')
    dashboard.pageRegionsOptions().eq(8).should('contain', 'Hafar Al Baten').and('be.hidden')
})

When("user clicks on 'Abha'",()=>{
    dashboard.pageRegionsOptions().eq(1).should('contain', 'Abha').click({force: true})
    cy.wait(1000)
})

Then("'Abha' is selected from the dropdown",()=>{
    dashboard.pageRegionsDropdown1().should('contain','Abha').and('be.visible')
    dashboard.pageRegionsOptions().eq(0).should('contain', 'All Regions').and('be.hidden')
    dashboard.pageRegionsOptions().eq(2).should('contain', 'Al Baha').and('be.hidden')
    dashboard.pageRegionsOptions().eq(3).should('contain', 'Al Jouf').and('be.hidden')
    dashboard.pageRegionsOptions().eq(4).should('contain', 'AlQuwayiyah').and('be.hidden')
    dashboard.pageRegionsOptions().eq(5).should('contain', 'Arar').and('be.hidden')
    dashboard.pageRegionsOptions().eq(6).should('contain', 'Bishah').and('be.hidden')
    dashboard.pageRegionsOptions().eq(7).should('contain', 'Dammam').and('be.hidden')
    dashboard.pageRegionsOptions().eq(8).should('contain', 'Hafar Al Baten').and('be.hidden')
})


/// Info Icons

When("the user hovers on the first info icon",()=>{
    cy.observer();
    cy.wait(2000)
    dashboard.pageInfoIcon().eq(0).trigger('mouseover')
})

Then("the first banner of information appears",()=>{
    cy.observer();
    cy.wait(2000)
    dashboard.pageInfoBanner().should('contain', 'Average SLA compliance across all POCs in the network')
})

When("the user hovers on the second info icon",()=>{
    cy.observer();
    cy.wait(2000)
    dashboard.pageInfoIcon().eq(1).trigger('mouseover')
})

Then("the second banner of information appears",()=>{
    cy.observer();
    cy.wait(2000)
    dashboard.pageInfoBanner().should('contain', 'Total time taken from the time of sample picked up from POC to the time when sample is processed and entered in the system.')
})

/// Full Screen

When("the user hovers on the full screen icon",()=>{
    cy.observer();
    cy.wait(2000)
    dashboard.pageFullscreen().trigger('mouseover')
})

Then("the banner of full screen appears",()=>{
    cy.observer();
    cy.wait(2000)
    dashboard.pageFullscreenBanner().should('contain', 'Full Screen')
})

When("the user clicks on the full screen icon",()=>{
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;Cypress.on('uncaught:exception', (err) => {
        if (resizeObserverLoopErrRe.test(err.message)) {return false;}
     });
    cy.wait(2000)
    dashboard.pageFullscreen().click()
})

Then("the dashboard page becomes wide",()=>{
    cy.observer();
    cy.wait(2000)
    cy.get(".panelFullscreen___2-vJa").should("exist").and("have.css","z-index", "100")
    cy.get(".contentFullscreen___35TrW").should("exist").and("have.css","margin", "16px")
})


When("the user clicks on the full screen icon again",()=>{
    cy.observer();
    cy.wait(2000)
    dashboard.pageFullscreen().click()
})

Then("the dashboard page becomes tight again",()=>{
    cy.observer();
    cy.wait(2000)
    cy.get(".panelFullscreen___2-vJa").should("not.exist");

    cy.get(".contentFullscreen___35TrW").should("not.exist");
})


//// Date DropDown

When("the user clicks on the date dropdown",()=>{
    cy.observer();
    dashboard.pageStartDate().click()
})

Then("a calendar popup opens",()=>{
    cy.observer();
    cy.wait(2000)
    dashboard.pageDatePopup().should("be.visible");
})

When("user clicks on a particular start date",()=>{
    cy.observer();
    
    dashboard.pageMonth().eq(0).click();

    dashboard.pageMonthPanel()
        .contains('Jun')
        .click();

    dashboard.pageYear().eq(0)
        .click();

    dashboard.pageYearPanel()
        .contains('2022')
        .click();

    dashboard.pageDate()
        .contains('20')
        .click();

    

})

Then("the start date gets selected",()=>{
    dashboard.pageStartDate().should('have.value', '2022-06-20');
    dashboard.clickAnywhere()
    cy.wait(1000)
})

When("user clicks on a particular end date",()=>{
    dashboard.pageEndDate().click()

    dashboard.pageYear().eq(1)
        .click();

    cy.wait(1000);
    dashboard.pageYearPanel().contains('2023').click();

    dashboard.pageMonthPanel()
        .contains('Jun')
        .click();


    dashboard.pageDate()
        .contains('25')
        .click();

})

Then("the end date gets selected",()=>{
    dashboard.pageEndDate().should('have.value', '2023-06-25');
})

Then("the calendar popup closes",()=>{
    dashboard.clickAnywhere()
    cy.wait(1000)
    dashboard.pageDatePopup().should("be.hidden");
})
