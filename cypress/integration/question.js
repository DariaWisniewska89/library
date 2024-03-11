/// <reference types="cypress"/>

const formData = {
    message: "Sample message content",
    phone:"555 555 555",
    mail:"sagemmovuya-1683@yopmail.com",
    orderNumber:"1234567/202"
}

describe("Creating guestion for the shop", () =>{
    it("Should enter the messages", () =>{
        cy.visit("/kontakty");
        cy.get(".tyle_inner.tyle_question_mark").click();
        cy.get(".selectric-wrapper.selectric-filter").click();
        cy.get(".selectric-scroll").find("li").eq(0).click();
        cy.get("#question").type(formData.message).clear()
        // cy.get("#is_order_question").find("input").eq(0).check({force: true})
        cy.get("#is_order_question").should("be.visible").trigger("click")
        cy.get("#is_order_question").should("have.class","active")
        // cy.get("#other_order_id").type(formData.orderNumber).check({force:true})
        cy.get('[name="mailto"]').type(formData.mail).clear()
        const count = 4;
        for (let i = 1; i < count; i++){
        cy.get(".selectric-wrapper.selectric-filter").click();
        cy.get(".selectric-scroll").find("li").eq(i).click();
        cy.get("#question").type(formData.message).clear()
        cy.get("#other_order_id").type(formData.orderNumber).clear()
        cy.get('[name="mailto"]').type(formData.mail).clear()
    }
})
})