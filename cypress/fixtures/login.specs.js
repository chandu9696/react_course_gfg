describe("testing login page",()=>{
    it("valid email and valid password test",()=>{
    cy.intercept({pathname:'**/v1/accounts:lookup'}).as('accountApi');
    cy.visit("https://react-gfg.web.app/")
    })})