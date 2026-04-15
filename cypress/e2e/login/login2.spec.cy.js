describe('login', ()=>{
    it('should login', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123')
        cy.get("[type='submit']").click();
        cy.get('.oxd-brand-banner');
        cy.contains('button', 'Add').click();
        cy.get('.oxd-select-text-input').eq[0];
    })
})