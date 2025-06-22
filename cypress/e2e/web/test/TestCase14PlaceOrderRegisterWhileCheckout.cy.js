

import { faker } from '@faker-js/faker';
faker.locale = 'pt_BR';

const nome = faker.person.fullName();
const email = faker.internet.email();
const senha = faker.internet.password();
const lastName = faker.person.lastName();

// ...restante do código...

describe('TestCase14PlaceOrderRegisterWhileCheckout', () => {
    it('Registre-se durante o checkout', () => {
        cy .visit('/');
        cy.title().should('eq', 'Automation Exercise');
        cy.get('a[href="/product_details/1"]').scrollIntoView()
            .click();
        cy.get('.btn.btn-default.cart').click()  
        cy.get('.text-center').should('have.text', 'Your product has been added to cart.View Cart')
        cy.get('.btn-success').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a')
        cy.get('li.active')
            .should('have.text', 'Write Your Review'); 
        cy.get('#button-review').click(); 
        cy.get('a[href="/login"]').click();
        cy.get('[data-qa="signup-name"]').type(nome);
        cy.get('[data-qa="signup-email"]').type(email);
        cy.get('[data-qa="signup-button"]').click();
        cy.get('[data-qa=password]').type(senha)
        cy.get('[data-qa="days"]').select('30');
        cy.get('[data-qa="months"]').select('May');
        cy.get('[data-qa="years"]').select('1990');
        cy.get('#newsletter').click();
        cy.get('#optin').click();
         cy.get('[data-qa="first_name"]').type(nome);
        cy.get('[data-qa="last_name"]').type(lastName);
        cy.get('[data-qa="company"]').type('Automation Exercise');
        cy.get('[data-qa="address"]').type('Automation Exercise');
        cy.get('[data-qa="country"]').select('United States');
        cy.get('[data-qa="state"]').type('New York');
        cy.get('[data-qa="city"]').type('New York');
        cy.get('[data-qa="zipcode"]').type('123456');
        cy.get('[data-qa="mobile_number"]').type('1234567890');
        cy.get('[data-qa="create-account"]').click();
        cy.contains('Account Created!').should('be.visible');
        cy.get('li a[href="/view_cart"]').click()
        cy.get('.btn.btn-default.check_out').scrollIntoView()
        cy.contains('.btn-default', 'Proceed To Checkout').click()
        cy.get('.form-control').type('Teste');
        cy.get('.btn.check_out').click()
        cy.get('[data-qa="name-on-card"]').type('John Doe');
        cy.get('[data-qa="card-number"]').type('4242424242424242');
        cy.get('[data-qa="cvc"]').type('123');
        cy.get('[data-qa="expiry-month"]').type('12');
        cy.get('[data-qa="expiry-year"]').type('2025');
        cy.get('[data-qa="pay-button"]').click();
        cy.get('.col-sm-9 > p').should('have.text', 'Congratulations! Your order has been confirmed!');
        cy.get(':nth-child(5) > a').click();
        cy.get('b').should('have.text', 'Account Deleted!');
        
        
    });
    
});