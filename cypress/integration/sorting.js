/// <reference types="cypress"/>

describe("Sorting and filtering", () => {
    it("Should sorting", () => {
        cy.visit("/bestsellery/")
        const count = 9;
        for (let i = 0; i < count; i++) {
            cy.get("#product-sort-and-filter-bar .selectric-filter .selectric").click();
            cy.get("#product-sort-and-filter-bar .selectric-filter .selectric-scroll").then(options => {
            expect(options).to.be.visible})
            cy.get("#product-sort-and-filter-bar .selectric-filter .selectric-scroll").find("li").eq(i).click();
            cy.get("#product-sort-and-filter-bar .selectric-filter .label").invoke("text").then(labelText => {
            cy.log("text")
                })
            }
        })
    })
    it.only("Should filtering", () =>{
        cy.visit("/drogeria/bestsellery/")
        cy.get('[href="https://www.gandalf.com.pl/drogeria/cialo/"]').click();
        cy.get("#marktree7").find("input").then(checkbox=>{
            cy.get(checkbox).eq(1).check({force: true})
            cy.get(checkbox).eq(5).check({force: true})
        cy.get('[name="Filtruj"]').click()
        cy.get(".filter-blocks").then(filter =>{
            expect(filter).to.be.visible
        })
        })
    })