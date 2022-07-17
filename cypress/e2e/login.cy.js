const { equal } = require("assert");

describe("testing login page",()=>{
    it("valid email and valid password test",()=>{
    cy.intercept({pathname:'**/v1/accounts:lookup'}).as('accountApi');
    cy.visit("https://react-gfg.web.app/login")
    cy.get("[name='email']").type("chandrakantgaikwad9797@gmail.com");
    cy.get("[name='password']").type("Chandu@9696")
    cy.get("[type='submit']").click();
    cy.wait('@accountApi')
    cy.url().should('includes','/');
    })})

    describe("testing login page",()=>{
        it("invalid email and valid password test",()=>{
        cy.intercept({pathname:'**/v1/accounts:lookup'}).as('accountApi');
        cy.visit("https://react-gfg.web.app/login")
        cy.get("[name='email']").type("chandrakantgaikwad997@gmail.com");
        cy.get("[name='password']").type("Chandu@9696")
        cy.get("[type='submit']").click();
        cy.wait('@accountApi')
        cy.get("[data-testid='error_message']").should('have.text',"Invalid Email or password")
        cy.url().should('includes','https://react-gfg.web.app/login');
        })})