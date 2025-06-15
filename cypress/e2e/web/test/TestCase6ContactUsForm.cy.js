describe('Test Case 6: Contact Us Form', () => {    
    it('Test case 6: Contact Us Form', () => {
        cy.visit('/');
        cy.title().should('eq', 'Automation Exercise');
        cy.get('a[href="/contact_us"]').click()
        cy.get('h2').contains('Contact Us').should('be.visible')
        cy.get('[data-qa=name]').type('John Doe')
        cy.get('[data-qa=email]').type('example@test.com')
        cy.get('[data-qa=subject]').type('Test Subject')
        cy.get('[data-qa=message]').type('This is a test message')
        cy.get('input[type=file]').selectFile('cypress/fixtures/download (3).png')
        cy.get('[data-qa="submit-button"]').click()
        
        cy.on('window:confirm', (text) => {
      expect(text).to.equal('Press OK to proceed!')
      return true; // Clica em "OK"
        });
        cy.get('.status.alert.alert-success')
        .should('have.text', 'Success! Your details have been submitted successfully.')
        cy.get('a.btn.btn-success').click()
        cy.title().should('eq', 'Automation Exercise');

})
    
});