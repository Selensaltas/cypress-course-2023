/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe('Test contact us form via automation test store', () => {
    it('Should be able to submit a successful submission via contact us form', () => {
        cy.visit('https://automationteststore.com')
        cy.get("a[href$='contact']").click().then(function(linkText) { 
            cy.log('Clicked on the link using text:' + linkText.text())})
        //cy.xpath("//a[contains(@href, 'contact')]").click()
        cy.get('#ContactUsFrm_first_name').type('Joe')
        cy.get('#ContactUsFrm_email').type('selen.saltas@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type('How can I learn Cypress?')
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log('Test completed')
    })  
})