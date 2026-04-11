describe('login',()=>{
    it('should login with valid credentials', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('.orangehrm-login-button').click();
        cy.url().should('include','dashboard');
    })
})