/// <reference types="cypress"/>

describe("E2E- Search Engine", () =>{
    it("Should search", () => {
        cy.visit("/")
        cy.get(".lb-search-input").click().type("book {enter}")
        cy.get('#lb-search-element').should('be.visible').find('.lb-search__title') .should('be.visible');
        })
    it("Should remove the text", () => {
        cy.visit("/"),
        cy.get(".lb-search-input").click().type("book123!", {delay: 500}).clear()
    })
    it("Should close the search engine", () => {
        cy.visit("/"),
        cy.get(".lb-search-input").click();
        cy.get(".luigi-ac-close").click()
    })
})