describe('login',()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })
    it('should login with valid credentials', ()=>{
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('.orangehrm-login-button').click();
        cy.url().should('include','dashboard');
    })
    it('should not login without valid credentials', ()=>{
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin1234');
        cy.get('.orangehrm-login-button').click();
        cy.contains('Invalid credentials').should('be.visible');
    })
    it('should show required message when username is given but password is empty', ()=>{
        cy.get('.orangehrm-login-button').click();
        cy.contains('Required').should('be.visible');
    })
    it('should show required message when no field is filled up', ()=>{
        // cy.get('[name="username"]').type('Admin');
        // cy.get('[name="password"]').type('admin1234');
        cy.get('.orangehrm-login-button').click();
        cy.get('.oxd-input-field-error-message').eq(0).should('contain','Required');
        cy.get('.oxd-input-field-error-message').eq(1).should('contain','Required');

    })
})