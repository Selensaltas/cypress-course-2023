/// <reference types="Cypress" />

describe('Test contact us form via webdriveruni', () => {
    it('Should be able to submit a successful submission via contact us form', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        //cy.get('#contact-us > .thumbnail > .section-title').click()
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        cy.get('[name="first_name"]').type('Joe')
        cy.get('[name="last_name"]').type('Blogs')
        cy.get('[name="email"]').type('selen.saltas@gmail.com')
        cy.get('textarea.feedback-input').type('How can I learn Cypress?')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })  

    it('Should not be able to submit a sucessful submission via contact us form', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Joe')
        cy.get('[name="last_name"]').type('Blogs')
        cy.get('textarea.feedback-input').type('How can I learn Cypress?')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')

    })
})