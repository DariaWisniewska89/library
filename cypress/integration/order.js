/// <reference types="cypress"/>
/**
 * 
 */
const formData = {
    mail:"sagemmovuya-1683@yopmail.com",
    orderNumber:"1234567/202"
}


describe("Order status", () => {
    it("Should check order status", () => {
        cy.visit("/kontakty");
        cy.get("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll").click()
        cy.get("#ord-stat-link").click();
        cy.get("#popup-contact-paczka").find("input").eq(0).type(formData.
        orderNumber)
        cy.get("#order_email").type(formData.mail);
        cy.get("#bl.btn.btn-b-green.margin.last.btn-label.btn-login.btn-next-path").click({force: true})
    })
})