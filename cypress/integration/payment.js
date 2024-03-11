/// <reference types="cypress"/>

describe("Payment", () => {
    it("Should provide payment information", () => {
        cy.visit("/kontakty");
        cy.get("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll").click()
        cy.get('[style="background-image: url(/i/contacts/platnosc.svg);"]').click()
    })
})