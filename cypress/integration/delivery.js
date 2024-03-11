/// <reference types="cypress"/>

describe("Delivery", () => {
    it("Should provide delivery information", () => {
        cy.visit("/kontakty");
        cy.get("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll").click()
        cy.get('[style="background-image: url(/i/contacts/dostawa.svg);"]').click()
    })
})