import { faker } from '@faker-js/faker';
describe('PIM testing', ()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('.orangehrm-login-button').click();
    })
    it('Admin should be able to create a new employee with only information', ()=>{
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        cy.contains('PIM').click();
        cy.get('.oxd-button-icon').click();
        cy.get('.oxd-file-input').selectFile('cypress/fixtures/image_1.png',{force: true});
        cy.get('[name="firstName"]').type(firstName);
        cy.get('[name="lastName"]').type(lastName);
        cy.contains('Save').click();
        cy.contains('Personal Details').should('be.visible');

    })
})