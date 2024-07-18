class SLATicketsPage { 

    pageUrl(){
        return cy.url().contains('https://uat.labprox.com/tms/sla-tickets')
    }  

    pageDownloadButton(){
        return cy.get('.ant-btn.ant-btn-primary.downloadButton___1otJ6')
    }

    pageSLA(){
        return cy.xpath('//a[@href="/tms/sla-tickets"]')
    }
   
}
export default SLATicketsPage
