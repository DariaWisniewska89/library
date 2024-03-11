/// <reference types="cypress"/>

describe("Returns and complaints", () => {
    it("Should provide information on returns and complaints", () => {
        cy.visit("/kontakty");
        cy.get("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll").click()
        cy.get('[style="background-image: url(/i/contacts/platnosc.svg);"]').click()
    })
})