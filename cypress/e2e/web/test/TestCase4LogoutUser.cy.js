describe('Test case 4: Logout User', () => {
    let randomEmail; // Variável para armazenar o email

    beforeEach(() => {
        randomEmail = `user_${Date.now()}@example.com`; // Atribui o valor à variável
        
        cy.visit('https://automationexercise.com')
        cy.title().should('eq', 'Automation Exercise')
        cy.get('a').contains('Signup').click();
        cy.get('input[type="text"]').type('Testador46')
        cy.get('input[data-qa="signup-email"]').type(randomEmail)
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
        cy.get('a[href="/logout"]').click()
    });

    it('Test case', () => {                  
        cy.get('input[data-qa="login-email"]').type(randomEmail)
        cy.get('input[data-qa="login-password"]').type('123456')
        cy.get('button[data-qa="login-button"]').click()
        cy.get('b').contains('Testador46').should('be.visible')
        cy.get('a[href="/logout"]').click()
        cy.get('h2').contains('Login to your account').should('be.visible')
    });
});
