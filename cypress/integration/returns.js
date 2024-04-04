/// <reference types="cypress"/>

describe("Returns and complaints", () => {
    it("Should provide information on returns and complaints", () => {
        cy.visit("/kontakty");
        cy.get("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll").click()
        cy.get('[style="background-image: url(/i/contacts/zwroty.svg);"]').click()
    })
    it.only("Should download documents", () => {
        cy.visit("/kontakty");
        cy.get("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll").click()
        cy.get('[style="background-image: url(/i/contacts/zwroty.svg);"]').click()
        cy.get("#i0qmvv").click()
        cy.visit("https://www.gandalf.com.pl/pomoc/reklamacje/")
        cy.get("#ixmvrn").click()
        cy.visit("https://www.gandalf.com.pl/pomoc/reklamacje/")
        cy.get("#ind6xa").click()

    })
})