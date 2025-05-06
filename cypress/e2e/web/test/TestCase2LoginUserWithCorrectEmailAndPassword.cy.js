describe('Test Case 2: Login User with correct email and password', () => {


    it.only('Test Case 2', () => {
        cy.visit('https://automationexercise.com')
        cy.title().should('eq', 'Automation Exercise')
        cy.get('a').contains('Signup').click();
        cy.get('input[type="text"]').type('Testador46')
        cy.get('input[data-qa="signup-email"]').type('testador21@qa.com')
        cy.get('button[type="submit"]').contains('Signup').click();
        cy.get('[data-qa="password"]').type('123456')
        cy.get('[data-qa="days"]').select('10')
        cy.get('[data-qa="months"]').select('January')
        cy.get('[data-qa="years"]').select('1990')
        cy.get('#newsletter').click()
        cy.get('[data-qa="first_name"]').type('Testador')
        cy.get('[data-qa="last_name"]').type('Testador')
        cy.get('[data-qa="company"]').type('Testador')
        cy.get('[data-qa="address"]').type('Testador')
        cy.get('[data-qa="address2"]').type('Testador')
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type('California')
        cy.get('[data-qa="city"]').type('San Francisco')
        cy.get('[data-qa="zipcode"]').type('12345')
        cy.get('[data-qa="mobile_number"]').type('1234567890')
        cy.get('button[type="submit"]').contains('Create Account').click();
        cy.get('a').contains('Continue').click();
        cy.get('b').contains('Testador46').should('be.visible')
        cy.get('a').contains('Delete Account').click();
        cy.get('b').contains('Account Deleted!').should('be.visible')
        cy.get('a').contains('Continue').click();
          
        
        
    });
    
});